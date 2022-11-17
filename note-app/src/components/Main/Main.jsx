import notebook from '@/assets/notebook.svg'
import plus from '@/assets/plus.svg'
import styles from './Main.module.css'
import React from 'react'
// import data from '@/assets/fakedata.js'



function Main({title, content, query, setTitle, setContent, notes, bodyTab, setTab, setBodyTab, setNoteId }) {



    if (bodyTab === 'notelist') {
        return (
            <main className={styles.mainContainer}>
                { notes.length > 0 ?
                    (
                        <section>
                            <ul onClick={(e) => {
                                if (e.target.id === 'note') {
                                    const theNote = notes.find(note => note.title === e.target.innerHTML)
                                    setNoteId(theNote.id)
                                    setTitle(theNote.title)
                                    setContent(theNote.content)
                                    setTab('readnote')
                                    setBodyTab('readnote')
                                }
                            }} className={styles.notesList}>
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
                    <button onClick={() => {
                        setContent('')
                        setTitle('')
                        setBodyTab('editor')
                        setTab('editor')
                    }} className={styles.widgetButton}><img className={styles.plus} src={plus} alt="plus" /></button>
                </div>
            </main>
        );
    }
    if (bodyTab === 'editor') {
        return (
            <main className={styles.mainContainer}>
                <form id='editor' className={styles.editor}>
                    <textarea value={title} readOnly={false} onChange={(e) => {
                        setTitle(e.target.value)
                    }} className={styles.title} placeholder='Title...' type="text" name="title" id="title" required></textarea>
                    <textarea value={content} readOnly={false} onChange={(e) => {
                        setContent(e.target.value)
                    }} className={styles.content} id="content" name="content" placeholder='Type something...'>
                    </textarea>
                </form>
            </main>
        )
    }
    if (bodyTab === 'readnote') {
        return (
            <main className={styles.mainContainer}>
                <form id='editor' className={styles.editor}>
                    <textarea value={title} readOnly={true} className={styles.title} placeholder='Title...' type="text" name="title" id="title" required></textarea>
                    <textarea value={content} readOnly={true} className={styles.content} id="content" name="content" placeholder='Type something...'>
                    </textarea>
                </form>
            </main>
        )
    }
}

export default Main;