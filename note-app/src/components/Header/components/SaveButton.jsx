import React from 'react'

function SaveButton() {

  return (
    <div>
      <button onClick={(e) => {
        e.preventDefault()
        if (title === '') return alert("cant be empty")
        if (noteId) {
          return setNotes((s) => {
            const newNotes = s.map((note) => {
              if (note.id === noteId) {
                return { id: note.id, title, content }
              }
              return note
            })
            console.log(newNotes)
            setTab('readnote')
            setBodyTab('readnote')
            return newNotes
          })
        }
        setNotes((s) => {
          return [...s, { id: "id" + Math.random().toString(16).slice(2), title, content }]
        })
        setTab('readnote')
        setBodyTab('readnote')
      }} className={styles.iconContainer}><img src={save} alt="save" /></button>
    </div>

  )
}

export default SaveButton
