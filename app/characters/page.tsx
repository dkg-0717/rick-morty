'use client';
import { useEffect, useState } from "react"
import styles from './characters.module.css'
import Paginator from './paginator/page'

interface RMC {
  name: string;
  image: string;
  species: string;
}

const Characters = () => {

  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [characters, setCharacters] = useState([])
  const [charactersCopy, setCharactersCopy] = useState([])

  const species = {
    Human: {
      color: '#ffdbc4'
    },
    Alien: {
      color: '#7ffa67'
    }
  }

  const getCharacters = async (page?: number) => {
    try {
      page = page ?? currentPage
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      const { results, info } = await response.json()
      setTotalPages(info.pages)
      setCharactersCopy(results)
      setCharacters(results)
    } catch {

    }
  }

  const searchCharacter = (key: string) => {
    key = key.toLowerCase()
    const findCharacters = characters.filter((character: RMC) => character.name.toLowerCase().includes(key) || character.species.toLowerCase().includes(key))
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

  const getSpecieClass = (specie: string) => {
    console.log(specie)
    return species[specie]
  }

  useEffect(() => {
    if (currentPage !== 1) {
      getCharacters(currentPage)
    } else {
      getCharacters()
    }
  }, [currentPage])


  return (
    <section className={styles.characters_container}>
      <div className={styles.characters_container_overflow}>
        <div className={styles.characters_details}>
          <h1 className={styles.rick_characters}>Characters</h1>
          <div className={styles.search_container}>
            <p className={styles.currentpage}>Current page: {currentPage}</p>
            <input onChange={(event) => handlerCharacter(event)} className={styles.search_input} type="text" placeholder="Search by name or species" />
          </div>
          {characters.length > 0 && <div className={styles.characters_list}>
            {characters.map((character: RMC, idx) => {
              return (
                <div className={styles.character_item} key={idx} style={{ backgroundImage: `url(${character?.image})` }}>
                  <div className={styles.character_info}>
                    <p className={styles.character_name}>{character.name}</p>
                    <p className={styles.character_specie} style={getSpecieClass(character.species)}>{character.species}</p>
                  </div>
                </div>
              )
            })}
          </div>}
        </div>
        <div className={styles.characters_paginator}>
          <Paginator totalPages={totalPages} getNewPage={getNewPage} />
        </div>
      </div>
    </section>
  )
}

export default Characters