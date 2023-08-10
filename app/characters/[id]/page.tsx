'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'
import { Character } from '@/utils/CharacterTypes'
import { getCharacterByID } from '@/services/rickmorty'
import styles from './character.module.css'

const CharacterDetail = () => {

  const { id } = useParams()
  const [character, setCharacter] = useState<Character>(null)

  const species: any = {
    Human: {
      color: '#ffdbc4'
    },
    Alien: {
      color: '#7ffa67'
    }
  }

  const getData = async () => {
    const character = await getCharacterByID(id)
    setCharacter(character)
  }

  const getTxtColor = (specie) => {
    return species[specie]['color']
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={styles.character_container}>
      {/* <h1 className={styles.character_title}>Character</h1> */}
      {character !== null &&
        <div className={styles.character_info_container}>
          <div className={styles.character_image}>
            <Image className={styles.character_image} src={character.image} alt='character' width={300} height={300} loading="lazy" />
          </div>
          <div className={styles.character_info}>
            <h1 className={styles.character_name} style={{ color: getTxtColor(character.species) }}>
              {character.name}
            </h1>
            <p><span>Status: </span>{character.status}</p>
            <p><span>Gender: </span>{character.gender}</p>
            <p><span>Origin: </span>{character.origin.name}</p>
            <p><span>Location: </span>{character.location.name}</p>
            <p><span>Episodes: </span>{character.episode.length}</p>
          </div>
        </div>}
    </div>
  )
}

export default CharacterDetail