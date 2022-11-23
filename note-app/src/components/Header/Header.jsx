import search from '@/assets/search.svg'
import info from '@/assets/info.svg'
import cross from '@/assets/cross.svg'
import save from '@/assets/save.svg'
import back from '@/assets/back.svg'
import trashcan from '@/assets/trashcan.svg'
import pencil from '@/assets/pencil.svg'
import styles from './Header.module.css'
import React from 'react'

function Header({ setNoteId, title, content, tab, setTab, setBodyTab, query, setQuery, setNotes, noteId }) {
    const inputText = React.useRef()

    if (tab === 'search') {
        return (
                <section className={styles.bar}>
                    <div className={styles.searchBar}>
                        <input placeholder="Search..." autoFocus ref={inputText} type="text" className={styles.noteSearch} onChange={(e) => {
                            setQuery(e.target.value)
                        }} value={query} />
                        <button className={styles.cross} onClick={() => {
                            inputText.current.focus()
                            setQuery('')
                        }}><img src={cross} alt="cross" /></button>
                    </div>
                </section>
        )
    }

    if (tab === 'editor') {
        return (
            <header>
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
            </header >
        )
    }


    if (tab === 'notelist') {
        return (
            <header>
                <section className={styles.bar}>
                    <h1 className={styles.title}>Notes</h1>
                    <div className={styles.container}>
                        <div><button onClick={() => {
                            setTab('search')
                        }} className={`${styles.iconContainer} ${styles.iconSpace}`}><img src={search} alt="search" /></button></div>
                        <div><button className={styles.iconContainer}><img src={info} alt="info" /></button></div>
                    </div>
                </section>
            </header>
        );
    }
    if (tab === 'readnote') {
        return (
            <header>
                <section className={styles.bar}>
                    <div><button className={styles.iconContainer} onClick={() => {
                        setBodyTab('notelist')
                        setTab('notelist')
                        setNoteId('')
                    }}><img src={back} alt="back" /></button></div>
                    <div><button className={styles.iconContainer} onClick={(e) => {
                        e.preventDefault()
                        setTab('editor')
                        setBodyTab('editor')
                    }}><img src={pencil} alt="pencil" /></button></div>
                </section>
            </header>
        );
    }

}

export default Header;
