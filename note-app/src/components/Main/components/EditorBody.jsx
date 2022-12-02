import React, { useRef } from 'react'
import styles from '../Main.module.css'

function EditorBody({ title, setTitle, content, setContent }) {
  const editorTitle = useRef()
  return (
    <form id='editor' className={styles.editor}>
      <textarea value={title} ref={editorTitle} readOnly={false} onChange={(e) => {
        setTitle(e.target.value)
      }} className={styles.title} placeholder='Title...' type="text" name="title" id="title" required></textarea>
      <textarea value={content} onFocus={() => console.log(editorTitle.current.style.display = 'none')} readOnly={false} onChange={(e) => {
        setContent(e.target.value)
      }} className={styles.content} id="content" name="content" placeholder='Type something...'>
      </textarea>
    </form >
  )
}

export default EditorBody
