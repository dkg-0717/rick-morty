'use client';
import { useEffect, useState } from "react"
import styles from './characters.module.css'

interface RMC {
  name: string;
  image: string;
  species: string;
}

const Characters = () => {

  const [totalPages, setTotalPages] = useState(0)
  const [characters, setCharacters] = useState([])
  const [charactersCopy, setCharactersCopy] = useState([])

  const getCharacters = async () => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character/?page=1')
      const data = await response.json()
      console.log(data)
      const { results } = data
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

  useEffect(() => {
    getCharacters()
  }, [])

  return (
    <section className={styles.characters_container}>
      <div className={styles.characters_details}>
        <h1 className={styles.rick_characters}>Characters</h1>
        <div className={styles.search_container}>
          <input onChange={(event) => handlerCharacter(event)} className={styles.search_input} type="text" placeholder="Search by name or species" />
        </div>
        {characters.length > 0 && <div className={styles.characters_list}>
          {characters.map((character: RMC, idx) => {
            return (
              <div className={styles.character_item} key={idx} style={{ backgroundImage: `url(${character?.image})` }}>
                <div className={styles.character_info}>
                  <p>{character.name}</p>
                  <p>{character.species}</p>
                </div>
              </div>
            )
          })}
        </div>}
      </div>
      <div className={styles.characters_paginator}>
        <div className={styles.paginator_item}>

        </div>
      </div>
    </section>
  )
}

export default Characters