'use client';
import { useEffect, useState } from "react"
import styles from './characters.module.css'

interface RMC {
  name: string;
  image: string;
  species: string;
}

const Characters = () => {

  const [characters, setCharacters] = useState([])

  const getCharacters = async () => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character/?page=1')
      const { results } = await response.json()
      console.log(results)
      setCharacters(results)
    } catch {

    }
  }

  useEffect(() => {
    getCharacters()
  }, [])

  return (
    <section className={styles.characters_container}>
      <h1 className={styles.rick_characters}>Characters</h1>
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
    </section>
  )
}

export default Characters