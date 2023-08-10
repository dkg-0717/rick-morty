import { useRouter } from 'next/navigation'

import { Character } from '@/utils/CharacterTypes';
import { useAppSelector } from "@/app/redux/hooks";

import styles from '../../characters/characters.module.css'

const CharacterPage = ({ characters, setShowModal, setCharacter }) => {

  const router = useRouter()

  const { canRenderModal } = useAppSelector((state) => state.modalReducer);

  const species: any = {
    Human: {
      color: '#ffdbc4'
    },
    Alien: {
      color: '#7ffa67'
    }
  }

  const getSpecieClass = (specie: string) => {
    return species[specie]
  }

  const handlerShow = (character: Character) => {
    if (!canRenderModal) {
      router.push(`/characters/${character.id}`)
    } else {
      setShowModal((showModal) => !showModal)
      setCharacter(character)
    }
  }

  return (
    <div className={styles.characters_list}>
      {characters.map((character: Character, idx) => {
        return (
          <div className={`${styles.character_item} character-item`} key={idx} style={{ backgroundImage: `url(${character?.image})` }} onClick={() => handlerShow(character)}>
            <div className={styles.character_info}>
              <p className={styles.character_name}>{character.name}</p>
              <p className={styles.character_specie} style={getSpecieClass(character.species)}>{character.species}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CharacterPage