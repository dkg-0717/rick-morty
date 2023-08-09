'use client';
import styles from './modal.module.css'

interface Props {
  character: Character;
  closeModal(value: boolean): void;
}
interface Character {
  name: string;
  gender: string;
  species: string;
  status: string;
  origin: Origin;
  image?: string;
}

interface Origin {
  name: string;
}

export default function CharacterModal({ character, closeModal }: any) {

  const species: any = {
    Human: {
      color: '#191D26',
      rgba: 'rgba(255, 219, 196, 0.7)',
      style: styles.human_txt
    },
    Alien: {
      color: '#7ffa67',
      rgba: 'rgba(127, 250, 103, 0.7)',
      style: styles.alien_txt
    },
    Robot: {
      color: '#191D26',
      rgba: 'rgba(192,192,192, 1)',
      style: styles.robot_txt
    }
  }

  const bgColor = species[character.species].rgba || 'rgba(255,255,255,1)';
  const txtColor = species[character.species].style

  return (
    <div className={styles.character_detail_container}>
      <div className={styles.character_modal} style={{ boxShadow: `0px 0px 40px 2px ${bgColor}`, backgroundColor: bgColor }}>
        <div className={styles.character_image} style={{ backgroundImage: `url(${character.image})` }}></div>
        <div className={styles.character_info}>
          <p><span className={txtColor}>Name:&nbsp;</span>{character?.name}</p>
          <p><span className={txtColor}>Gender:&nbsp;</span>{character?.gender}</p>
          <p><span className={txtColor}>Specie:&nbsp;</span>{character?.species}</p>
          <p><span className={txtColor}>Status:&nbsp;</span>{character?.status}</p>
          <p><span className={txtColor}>Origin:&nbsp;</span>{character?.origin?.name}</p>
          <button onClick={() => closeModal(false)} className={styles.close_modal}>Cerrar</button>
        </div>
      </div>
    </div>
  )

}