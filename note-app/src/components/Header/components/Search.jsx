import cross from '@/assets/cross.svg'
import styles from '../Header.module.css'
import React from 'react'

function Search({ setQuery, query }) {
  const inputText = React.useRef()


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

export default Search
