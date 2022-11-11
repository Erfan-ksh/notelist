import Main from '@/components/Main/Main'
import Header from '@/components/Header/Header'
import React from 'react'
import './App.css'



function App() {
  function reducer(state, action) {
    if (action.type === 'addnote') {
      return 
    }
  
    if (action.type === 'updatenote') {
  
    }
  
    if (action.type === 'removenote') {
  
    }
  
    throw new Error('wrong type of action')
  }
  const [title, setTitle] = React.useState()
  const [content, setContent] = React.useState()

  const [notes, dispatchNotes] = React.useReducer(reducer, JSON.parse(localStorage.getItem('localnotes')));
  

  const [query, setQuery] = React.useState('')

  const [tab, setTab] = React.useState('readnote')
  const [bodyTab, setBodyTab] = React.useState('readnote')

  return (
    <div className="App">
      <Header dispatchNotes={dispatchNotes} notes={notes} query={query} setQuery={setQuery} tab={tab} setTab={setTab} setBodyTab={setBodyTab} />
      <Main notes={notes} bodyTab={bodyTab} setBodyTab={setBodyTab} setTab={setTab} setTitle={setTitle} setContent={setContent} />
    </div>
  )
}

export default App
