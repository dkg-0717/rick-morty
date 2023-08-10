import { useState } from 'react'
import styles from './customselector.module.css'

const CustomSelector = ({ totalPages, setCurrentPage }) => {

  const [pageSelected, setPageSelected] = useState(1)

  const handlerChange = (e) => {
    setCurrentPage(e.target.value)
  }


  return (
    <select value={pageSelected} className={styles.custom_selector} onChange={(e) => handlerChange(e)}>
      {Array.from(Array(totalPages), (e, i) => {
        return (
          <option value={i + 1}>{i + 1}</option>
        )
      })}
    </select>
  )
}

export default CustomSelector