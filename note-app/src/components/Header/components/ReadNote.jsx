import back from '@/assets/back.svg'
import pencil from '@/assets/pencil.svg'
import styles from '../Header.module.css'
import React from 'react'

function ReadNote({setBodyTab,setTab, setNoteId}) {
    return (
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
    )
}

export default ReadNote