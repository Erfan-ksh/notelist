import React from 'react'
import styles from '../Main.module.css'

function EditorBody({title, setTitle, content, setContent}) {
    return (
        <form id='editor' className={styles.editor}>
            <textarea value={title} readOnly={false} onChange={(e) => {
                setTitle(e.target.value)
            }} className={styles.title} placeholder='Title...' type="text" name="title" id="title" required></textarea>
            <textarea value={content} readOnly={false} onChange={(e) => {
                setContent(e.target.value)
            }} className={styles.content} id="content" name="content" placeholder='Type something...'>
            </textarea>
        </form>
    )
}

export default EditorBody