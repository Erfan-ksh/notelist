import SaveButton from './SaveButton.jsx'
import back from '@/assets/back.svg'
import trashcan from '@/assets/trashcan.svg'
import styles from '../Header.module.css'
import React from 'react'

function Editor({ noteId, handleRemovingNote, handleSavingNote, handleBackButton }) {
  return (
    <section className={styles.bar}>
      <div><button className={styles.iconContainer} onClick={() => {
        handleBackButton()
      }}><img src={back} alt="back" /></button></div>
      <div className={styles.container}>
        {noteId ? <div><button onClick={() => {
          handleRemovingNote()
        }} className={`${styles.iconContainer} ${styles.iconSpace}`}><img className={styles.trashcan} src={trashcan} alt="trashcan" /></button></div> : ''}
        <div>
          <SaveButton handleSavingNote={handleSavingNote} />
        </div>
      </div>
    </section>
  )
}

export default Editor
