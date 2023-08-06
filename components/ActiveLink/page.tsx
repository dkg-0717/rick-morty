'use client';
import Link from "next/link"
import styles from '../Header/header.module.css'
import { usePathname } from "next/navigation"

const style = {
  color: '#191D26',
  background: '#7ffa67',
  fontWeight: 'bold'
}

const ActiveLink = ({ path, text }) => {

  const pathName = usePathname()

  return (
    <Link className={styles.custom_link} href={path} style={path === pathName ? style : null}> {text}</Link >
  )
}

export default ActiveLink