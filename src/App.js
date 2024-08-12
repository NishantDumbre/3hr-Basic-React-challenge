import React, { useState, useEffect } from 'react';

import AddNote from './components/AddNotes/AddNote';
import NotesList from './components/Notes/NotesList';
import NewInput from './components/UI/NewInput';

function App() {
  const [newId, setNewId] = useState(1)

  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(0)

  const notes = [
    { id: 1, title: 'First Note', description: 'First description' },
    { id: 2, title: 'Second Note', description: 'Second description' }
  ]

  const [allNotes, setAllNotes] = useState(notes)

  useEffect(() =>{
    setTotal(allNotes.length)
  }, [allNotes])

  const addNewNoteToList = (note) =>{
    console.log(allNotes)
    setAllNotes(...allNotes, note)
  }

  return (
    <div className="App">
      <h1>Notebook</h1>
      <p></p>
      <p>Total: {total}</p>
      <p>Showing: {count}</p>
      <NewInput
        input='text'
        type='text'
        title='Search Notes' />
      <AddNote 
        addNoteFunction={addNewNoteToList} 
        newId={newId}
        setNewId={setNewId} />
      <NotesList notes={allNotes} />
    </div>
  );
}

export default App;
