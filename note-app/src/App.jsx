import Main from '@/components/Main/Main'
import Header from '@/components/Header/Header'
import React from 'react'
import './App.css'



function App() {
  // 
  const [title, setTitle] = React.useState()
  const [content, setContent] = React.useState()
  const [noteId, setNoteId] = React.useState('')

  const [notes, setNotes] = React.useState([]);

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
      <Header noteId={noteId} setNoteId={setNoteId} title={title} content={content} query={query} setNotes={setNotes} notes={notes} setQuery={setQuery} tab={tab} setTab={setTab} setBodyTab={setBodyTab} />
      <Main setNoteId={setNoteId} noteId={noteId} title={title} content={content} query={query} notes={notes} bodyTab={bodyTab} setBodyTab={setBodyTab} setTab={setTab} setTitle={setTitle} setContent={setContent} />
    </div>
  )
}

export default App