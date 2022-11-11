import notebook from '@/assets/notebook.svg'
import plus from '@/assets/plus.svg'
import styles from './Main.module.css'
import React from 'react'
// import data from '@/assets/fakedata.js'



function Main({ setTitle, setContent, notes, bodyTab, setTab, setBodyTab }) {



    if (bodyTab === 'notelist') {
        return (
            <main className={styles.mainContainer}>
                {notes.length > 0 ?
                    (
                        <section>
                            <ul className={styles.notesList}>
                                {notes.map(note => {
                                    return (<li className={styles.note} key={note.id}>{note.title}</li>)
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
                    <textarea readOnly={false} onChange={(e) => {
                        setTitle(e.target.value)
                    }} className={styles.title} placeholder='Title...' type="text" name="title" id="title" required></textarea>
                    <textarea readOnly={false} onChange={(e) => {
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
                    <textarea readOnly={true} onChange={(e) => {
                        setTitle(e.target.value)
                    }} className={styles.title} placeholder='Title...' type="text" name="title" id="title" required></textarea>
                    <textarea readOnly={true} onChange={(e) => {
                        setContent(e.target.value)
                    }} className={styles.content} id="content" name="content" placeholder='Type something...'>
                    </textarea>
                </form>
            </main>
        )
    }
}

export default Main;