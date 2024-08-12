import React, { useState } from 'react';

import AddNote from './components/AddNotes/AddNote';
import NotesList from './components/Notes/NotesList';
import NewInput from './components/UI/NewInput';

function App() {

  const notes = [
    { id: 1, title: 'First Note', description: 'First description' },
    { id: 2, title: 'Second Note', description: 'Second description' }
  ]

  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(0)
  const [addNewNote, setAddNewNote] = useState()

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
      <AddNote addNoteFunction={setAddNewNote} />
      <NotesList notes={notes} />
    </div>
  );
}

export default App;
