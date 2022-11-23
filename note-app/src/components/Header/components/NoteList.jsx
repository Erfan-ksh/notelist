import info from '@/assets/info.svg'
import search from '@/assets/search.svg'
import styles from '../Header.module.css'
import React from 'react'

function NoteList({setTab}) {
    return (
        <section className={styles.bar}>
            <h1 className={styles.title}>Notes</h1>
            <div className={styles.container}>
                <div><button onClick={() => {
                    setTab('search')
                }} className={`${styles.iconContainer} ${styles.iconSpace}`}><img src={search} alt="search" /></button></div>
                <div><button className={styles.iconContainer}><img src={info} alt="info" /></button></div>
            </div>
        </section>
    )
}

export default NoteList