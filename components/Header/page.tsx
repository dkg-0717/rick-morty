'use client';
import ActiveLink from '../ActiveLink/page'
import styles from './header.module.css'

const Header = () => {

  const urlImage = 'https://hbomax-images.warnermediacdn.com/2022-08/tt.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com'

  return (
    <header className={styles.header}>
      <div className={styles.home_characters}>
        <ActiveLink text="Home" path="/" />
        <ActiveLink text="Characters" path="/characters" />
      </div>
      <div className={styles.image_container}>
        <img className={styles.image_title} src={urlImage} alt="" />
      </div>
      <div className={styles.about_container}>
        <ActiveLink text="About" path="/about" />
      </div>
    </header>
  )
}

export default Header