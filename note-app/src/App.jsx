import Main from '@/components/Main/Main'
import React from 'react'
import './App.css'
import Search from './components/Header/components/Search.jsx'
import Editor from './components/Header/components/Editor.jsx'
import ReadNote from './components/Header/components/ReadNote.jsx'
import NoteList from './components/Header/components/NoteList.jsx'
import EditorBody from './components/Main/components/EditorBody.jsx'
import ReadNoteBody from './components/Main/components/ReadNoteBody.jsx'
import NoteListBody from './components/Main/components/NoteListBody.jsx'


function App() {
  // 
  const [title, setTitle] = React.useState()
  const [content, setContent] = React.useState()
  const [noteId, setNoteId] = React.useState('')

  const [notes, setNotes] = React.useState([]);
  console.log(typeof notes, 'in app')
  const [query, setQuery] = React.useState('')

  const [tab, setTab] = React.useState('notelist')
  const [bodyTab, setBodyTab] = React.useState('notelist')


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
            tab === 'editor' ? <Editor noteId={noteId} setBodyTab={setBodyTab} setTab={setTab} setNoteId={setNoteId} setNotes={setNotes} /> :
              tab === 'notelist' ? <NoteList setTab={setTab} /> :
                tab === 'readnote' ? <ReadNote setBodyTab={setBodyTab} setTab={setTab} setNoteId={setNoteId} /> :
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
          bodyTab === 'editor' ? <EditorBody title={title} setTitle={setTitle} setContent={setContent} content={content}  /> :
            bodyTab === 'notelist' ? <NoteListBody query={query}  setNoteId={setNoteId} setBodyTab={setBodyTab} setTab={setTab} setTitle={setTitle} setContent={setContent} /> :
              bodyTab === 'readnote' ? <ReadNoteBody title={title} content={content} /> :
                <h1>Not Possible</h1>
        }
      </main>
    </div>
  )
}

export default App