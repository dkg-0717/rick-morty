'use client';
import Image from "next/image";
import styles from '../../app/characters/characters.module.css'
import Portal from '../../app/src/images/portal.png'

export default function Paginator(props) {

  const { totalPages, getNewPage, currentPage } = props

  return (
    <>
      {Array.from(Array(totalPages), (e, i) => {
        return (
          <div className={`${styles.paginator_item} ${currentPage == (i + 1) ? styles.paginator_item_active : ''}`} key={i + 1} onClick={() => getNewPage(i + 1)}>
            <Image className={styles.image_portal} src={Portal} alt="portal" width={50} height={50} />
            <div className={styles.portal_txt_container}>
              <p className={styles.image_portal_txt}>{i + 1}</p>
            </div>
          </div>
        )
      })}
    </>
  )

}
