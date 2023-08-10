'use client';

import { useEffect, useState } from "react"
import styles from './characters.module.css'
import Paginator from '../components/paginator'
import CharacterPage from "../components/character";
import { Character } from '@/utils/CharacterTypes';
import { getAllCharacters } from '@/services/rickmorty'

import CharacterModal from '../components/characterModal'


export default function Characters() {

  const [character, setCharacter] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [characters, setCharacters] = useState([])
  const [charactersCopy, setCharactersCopy] = useState([])

  const getCharacters = async (page?: number) => {
    try {
      page = page ?? currentPage
      const { results, info } = await getAllCharacters(page)
      setTotalPages(info.pages)
      setCharactersCopy(results)
      setCharacters(results)
    } catch {

    }
  }

  const searchCharacter = (key: string) => {
    key = key.toLowerCase()
    const findCharacters = characters.filter((character: Character) => character.name.toLowerCase().includes(key) || character.species.toLowerCase().includes(key))
    if (findCharacters.length > 0) {
      setCharacters(findCharacters)
    }
  }

  const handlerCharacter = (event: any) => {
    const { target } = event
    if (target.value !== '') {
      searchCharacter(target.value)
    }
    if (target.value == '') {
      setCharacters(charactersCopy)
    }
  }

  const getNewPage = (page: number) => {
    setCurrentPage(page)
  }

  useEffect(() => {
    if (currentPage !== 1) {
      getCharacters(currentPage)
    } else {
      getCharacters()
    }
  }, [currentPage])


  return (
    <>
      <section className={styles.characters_container}>
        <div className={styles.characters_container_overflow}>
          <div className={styles.characters_details}>
            <h1 className={styles.rick_characters}>Characters</h1>
            <div className={styles.search_container}>
              <p className={styles.currentpage}>Current page: {currentPage}</p>
              <input onChange={(event) => handlerCharacter(event)} className={styles.search_input} type="text" placeholder="Search by name or species" />
            </div>
            {(characters.length > 0) && <CharacterPage characters={characters} setShowModal={setShowModal} setCharacter={setCharacter} />}
          </div>
          <div className={styles.characters_paginator}>
            <Paginator currentPage={currentPage} totalPages={totalPages} getNewPage={getNewPage} />
          </div>
        </div>
      </section>
      {showModal && <CharacterModal character={character} closeModal={setShowModal} />}
    </>
  )
}
