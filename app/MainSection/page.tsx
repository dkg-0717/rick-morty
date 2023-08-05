import styles from './mainsection.module.css'
import Rick from '../src/images/rick_morty.png'
import Image from 'next/image'

const MainSection = () => {
  return (
    <section className={styles.main_section}>
      <div className={styles.rick_title}>
        <h1 className={styles.rick_txt}>Rick and</h1>
        <h1 className={styles.rick_txt}>Morty Api</h1>
        <p className={styles.find_txt}>Find your favorites rick and morty characters</p>
      </div>
      <div className={styles.rick_image}>
        <Image className={styles.rick_morty_img} src={Rick} alt='rick and morty' priority={true} />
      </div>
    </section>
  )
}

export default MainSection