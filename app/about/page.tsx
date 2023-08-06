'use client'
import Image from 'next/image'
import Portal from '../src/images/rick-and-morty.png'
import styles from './about.module.css'

const About = () => {
  return (
    <div className={styles.about_container}>
      <Image className={styles.about_image} src={Portal} alt="portal" />
      <h1>Rick and Morty</h1>
    </div>
  )
}

export default About