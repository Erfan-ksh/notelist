import React from 'react'
import './App.css'
import Editor from './components/Header/components/Editor.jsx'
import ReadNote from './components/Header/components/ReadNote.jsx'
import NoteList from './components/Header/components/NoteList.jsx'
import EditorBody from './components/Main/components/EditorBody.jsx'
import ReadNoteBody from './components/Main/components/ReadNoteBody.jsx'
import NoteListBody from './components/Main/components/NoteListBody.jsx'


const Search = React.lazy(() => import(/* webpackPrefetch: true */ './components/Header/components/Search.jsx'))

function App() {
  // 
  const [title, setTitle] = React.useState()
  const [content, setContent] = React.useState()
  const [noteId, setNoteId] = React.useState('')

  const [notes, setNotes] = React.useState([]);
  const [query, setQuery] = React.useState('')

  const [tab, setTab] = React.useState('notelist')
  const [bodyTab, setBodyTab] = React.useState('notelist')

  const handleRmovingNote = () => {
    if (noteId) {
      setNotes((s) => {
        const newNotes = s.filter((note) => {
          return note.id !== noteId
        })
        return newNotes
      })
    }
    setNoteId('')
    setTab('notelist')
    setBodyTab('notelist')
  }

  const handleSavingNote = (e) => {
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
  }

  const handleNoteClick = (e) => {
    if (e.target.id === 'note') {
      const theNote = notes.find(note => note.title === e.target.innerHTML)
      setNoteId(theNote.id)
      setTitle(theNote.title)
      setContent(theNote.content)
      setTab('readnote')
      setBodyTab('readnote')
    }
  }

  const handleAddingNote = () => {
    setContent('')
    setTitle('')
    setBodyTab('editor')
    setTab('editor')
  }

  const handleBackButton = () => {
    setTab('notelist')
    setBodyTab('notelist')
    setNoteId('')
  }

  React.useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('note-app-notes')
    );

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, [])

  React.useEffect(() => {
    window.localStorage.setItem("note-app-notes", JSON.stringify(notes));
  }, [notes])


  return (
    <div className="App">
      <header style={{ height: '89px' }}>
        {
          tab === 'search' ? <Search setQuery={setQuery} query={query} /> :
            tab === 'editor' ? <Editor noteId={noteId} handleBackButton={handleBackButton} handleSavingNote={handleSavingNote} handleRemovingNote={handleRmovingNote} /> :
              tab === 'notelist' ? <NoteList setTab={setTab} /> :
                tab === 'readnote' ? <ReadNote setBodyTab={setBodyTab} setTab={setTab} handleBackButton={handleBackButton} /> :
                  <h1>Not Possible</h1>
        }
      </header>
      <main style={{
        overflow: 'auto',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {
          bodyTab === 'editor' ? <EditorBody title={title} setTitle={setTitle} setContent={setContent} content={content} /> :
            bodyTab === 'notelist' ? <NoteListBody notes={notes} query={query} handleAddingNote={handleAddingNote} handleNoteClick={handleNoteClick} /> :
              bodyTab === 'readnote' ? <ReadNoteBody title={title} content={content} /> :
                <h1>Not Possible</h1>
        }
      </main>
    </div>
  )
}

export default App
