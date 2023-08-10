'use client';
import gsap from 'gsap'
import styles from './mainsection.module.css'
import Rick from '../src/images/rick_morty.png'
import Image from 'next/image'
import { useEffect } from 'react'

const MainSection = () => {

  useEffect(() => {
    const tl = gsap.timeline()
    const texts = document.querySelectorAll('.main-texts > *')
    const image = document.querySelector('header img')
    const mainImage = document.querySelector('.main-image')
    const p1 = document.querySelectorAll('.p1')
    const p2 = document.querySelectorAll('.p2')

    tl.from(image, {
      scale: 0,
      autoAlpha: 0,
      duration: 1,
      ease: 'Bounce.easeOut'
    })
      .from(p1, {
        x: -50,
        autoAlpha: 0,
        duration: 0.75,
        stagger: {
          amount: 0.75
        }
      })
      .from(p2, {
        x: 50,
        autoAlpha: 0,
        duration: 0.75,
        stagger: {
          amount: 0.75
        }
      }, '-=1.50')
      .from(texts, {
        y: 100,
        autoAlpha: 0,
        duration: 0.5,
        stagger: {
          amount: 0.5
        }
      })
      .from(mainImage, {
        autoAlpha: 0,
        scale: 1.5,
        duration: 1
      })


  }, [])

  return (
    <section className={styles.main_section}>
      <div className={`${styles.rick_title} main-texts`}>
        <h1 className={styles.rick_txt}>Rick and</h1>
        <h1 className={styles.rick_txt}>Morty Api</h1>
        <p className={styles.find_txt}>Find your favorites rick and morty characters</p>
      </div>
      <div className={styles.rick_image}>
        <Image className={`${styles.rick_morty_img} main-image`} src={Rick} alt='rick and morty' priority={true} />
      </div>
    </section>
  )
}

export default MainSection