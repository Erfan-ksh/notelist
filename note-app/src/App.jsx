import Main from '@/components/Main/Main'
import Header from '@/components/Header/Header'
import React from 'react'
import './App.css'


function reducer(state, action) {
  if (action.type === 'addnote') {
    state.push(action.new)
  }

  if (action.type === 'updatenote') {

  }

  if (action.type === 'removenote') {

  }

  throw new Error('wrong type of action')
}

function App() {
  const [title, setTitle] = React.useState()
  const [content, setContent] = React.useState()
  const [notes, dispatchNotes] = React.useReducer(reducer, localStorage.getItem('localnotes'));

  const [query, setQuery] = React.useState('')
  const [tab, setTab] = React.useState('notelist')

  const [bodyTab, setBodyTab] = React.useState('notelist')

  return (
    <div className="App">
      <Header notes={notes} query={query} setQuery={setQuery} tab={tab} setTab={setTab} setBodyTab={setBodyTab} />
      <Main notes={notes} bodyTab={bodyTab} setBodyTab={setBodyTab} setTab={setTab} setTitle={setTitle} setContent={setContent} />
    </div>
  )
}

export default App
