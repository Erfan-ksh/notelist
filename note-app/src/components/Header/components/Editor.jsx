import back from '@/assets/back.svg'
import save from '@/assets/save.svg'
import styles from '../Header.module.css'
import React from 'react'

function Editor({setBodyTab, setTab, setNoteId, setNotes, noteId}) {
    return (
        <section className={styles.bar}>
            <div><button className={styles.iconContainer} onClick={() => {
                setBodyTab('notelist')
                setTab('notelist')
                setNoteId('')
            }}><img src={back} alt="back" /></button></div>
            <div className={styles.container}>
                {noteId ? <div><button onClick={() => {
                    if (noteId) {
                        setNotes((s) => {
                            const newNotes = s.filter((note) => {
                                return note.id !== noteId
                            })
                            return newNotes
                        })
                        setNoteId('')
                        setTab('notelist')
                        setBodyTab('notelist')
                    }
                }} className={`${styles.iconContainer} ${styles.iconSpace}`}><img className={styles.trashcan} src={trashcan} alt="trashcan" /></button></div> : ''}
                <div>
                    <button onClick={(e) => {
                        e.preventDefault()
                        if (title === '') return alert("cant be empty")
                        if (noteId) {
                            console.log('it ran')
                            return setNotes((s) => {
                                const newNotes = s.map((note) => {
                                    if (note.id === noteId) {
                                        return { id: note.id, title, content }
                                    }
                                    return note
                                })
                                return newNotes
                            })
                        }
                        setNotes((s) => {
                            console.log(s)
                            return [...s, { id: "id" + Math.random().toString(16).slice(2), title, content }]
                        })
                        setTab('readnote')
                        setBodyTab('readnote')
                    }} className={styles.iconContainer}><img src={save} alt="save" /></button>
                </div>
            </div>
        </section>
    )
}

export default Editor