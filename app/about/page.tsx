'use client'
import gsap from 'gsap'
import Image from 'next/image'
import Portal from '../src/images/rick-and-morty.png'
import styles from './about.module.css'
import { useEffect } from 'react'

const About = () => {

  const tl = gsap.timeline()

  const animation = () => {
    const portal = document.querySelector('.portal')
    const title = document.querySelector('.title')
    const description = document.querySelector('.description')
    tl.from(portal, {
      duration: 1,
      scale: 1.5,
      autoAlpha: 0
    })
      .from(title, {
        y: 100,
        autoAlpha: 0,
        duration: 1
      })
      .from(description, {
        y: 100,
        autoAlpha: 0,
        duration: 1
      })
  }

  useEffect(() => {
    animation()
  }, [])

  return (
    <div className={styles.about_container}>
      <Image className={`${styles.about_image} portal`} src={Portal} alt="portal" />
      <h1 className={`${styles.title} title`}>Rick and Morty</h1>
      <p className={`${styles.txt_info} description`}>Comedia animada que narra las aventuras de un científico loco Rick Sánchez, que regresa después de 20 años para vivir con su hija, su marido y sus hijos Morty y Summer.</p>
    </div>
  )
}

export default About