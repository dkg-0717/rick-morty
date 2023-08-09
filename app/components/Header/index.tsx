'use client';
import ActiveLink from '../ActiveLink'
import styles from './header.module.css'
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { renderModal } from "../../redux/slices/modal";

const Header = () => {

  const { canRenderModal } = useAppSelector((state) => state.modalReducer);
  const dispatch = useAppDispatch();

  const urlImage = 'https://hbomax-images.warnermediacdn.com/2022-08/tt.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com'

  return (
    <header className={styles.header}>
      <div className={styles.home_characters}>
        <ActiveLink text="Home" path="/" />
      </div>
      <div className={styles.characters}>
        <ActiveLink text="Characters" path="/characters" />
      </div>
      <div className={styles.image_container}>
        <img className={styles.image_title} src={urlImage} alt="" />
      </div>
      <div className={styles.switch_input}>
        <p>Modal</p>
        <label className={styles.switch}>
          <input type="checkbox" checked={canRenderModal} readOnly
            onChange={() => dispatch(renderModal())} />
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
      </div>
      <div className={styles.about_container}>
        <ActiveLink text="About" path="/about" />
      </div>
    </header>
  )
}

export default Header