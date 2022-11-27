import notebook from '@/assets/notebook.svg'
import plus from '@/assets/plus.svg'
import React from 'react'
import styles from '../Main.module.css'


function NoteListBody({ query, notes, handleNoteClick, handleAddingNote }) {
  return (<>
    {notes.length > 0 ?
      (
        <section>
          <ul onClick={(e) => handleNoteClick(e)} className={styles.notesList}>
            {notes.filter((note) => {
              return note.title.toLowerCase().includes(query)
            }).map(note => {
              return (<li id='note' className={styles.note} key={note.id}>{note.title}</li>)
            })}
          </ul>
        </section>
      )
      : (
        <section className={styles.container}>
          <div className={styles.imageContainer}>
            <img className={styles.notebookImage} src={notebook} alt='notebook'></img>
            <p>Create your first note !</p>
          </div>
        </section>
      )
    }
    <div className={styles.widget}>
      <button onClick={() => handleAddingNote()} className={styles.widgetButton}><img className={styles.plus} src={plus} alt="plus" /></button>
    </div>
  </>
  )
}

export default NoteListBody
