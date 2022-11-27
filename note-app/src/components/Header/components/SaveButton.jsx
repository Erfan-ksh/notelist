import save from '@/assets/save.svg'
import styles from '../Header.module.css'
import React from 'react'

function SaveButton({ handleSavingNote }) {

  return (
    <div>
      <button onClick={(e) => {
        handleSavingNote(e)
      }} className={styles.iconContainer}><img src={save} alt="save" /></button>
    </div>
  )
}

export default SaveButton
