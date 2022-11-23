import React from 'react'
import styles from '../Main.module.css'

function ReadNoteBody({title, content}) {
    return (
        <form id='editor' className={styles.editor}>
            <textarea value={title} readOnly={true} className={styles.title} placeholder='Title...' type="text" name="title" id="title" required></textarea>
            <textarea value={content} readOnly={true} className={styles.content} id="content" name="content" placeholder='Type something...'>
            </textarea>
        </form>
    )
}

export default ReadNoteBody