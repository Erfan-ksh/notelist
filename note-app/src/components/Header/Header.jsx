import search from '@/assets/search.svg'
import info from '@/assets/info.svg'
import cross from '@/assets/cross.svg'
import save from '@/assets/save.svg'
import visible from '@/assets/visible.svg'
import back from '@/assets/back.svg'
import styles from './Header.module.css'
import React from 'react'

function Header({tab, setTab,setBodyTab, query, setQuery }) {
    const inputText = React.useRef()

    if (tab === 'search') {
        return (
            <header>
                <section className={styles.bar}>
                    <div className={styles.searchBar}>
                        <input placeholder="Search..." autoFocus ref={inputText} type="text" className={styles.noteSearch} onChange={(e) => {
                            setQuery(e.target.value)
                        }} value={query} />
                        <button className={styles.cross} onClick={() => {
                            setQuery('')
                            inputText.current.focus()
                        }}><img src={cross} alt="cross" /></button>
                    </div>
                </section>
            </header>
        )
    }

    if (tab === 'editor') {
        return (
            <header>
                <section className={styles.bar}>
                <div><button className={styles.iconContainer} onClick={()=> {
                    setBodyTab('notelist')
                    setTab('notelist')
                }}><img src={back} alt="back" /></button></div>
                <div className={styles.container}>
                        <div><button className={`${styles.iconContainer} ${styles.searchIcon}`}><img src={visible} alt="eye" /></button></div>
                        <div><button onClick={(e) => {
                            e.preventDefault()
                            
                        }} type='submit' form='editor' className={styles.iconContainer}><img src={save} alt="save" /></button></div>
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
                        }} className={`${styles.iconContainer} ${styles.searchIcon}`}><img src={search} alt="search" /></button></div>
                        <div><button className={styles.iconContainer}><img src={info} alt="info" /></button></div>
                    </div>
                </section>
            </header>
        );
    }

}

export default Header;