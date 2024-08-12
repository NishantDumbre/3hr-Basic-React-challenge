import React, { useState, useEffect } from 'react';

import AddNote from './components/AddNotes/AddNote';
import Header from './components/Header';
import NotesList from './components/Notes/NotesList';

function App() {

  const [formNotes, setFormNotes] = useState([])
  const [count, setCount] = useState(formNotes.length)
  const [filteredResults, setFilteredResults] = useState(formNotes)
  const [isFiltered, setIsFiltered] = useState(false)
  

  return (
    <div className="App">
      <Header 
      count={count} 
      setCount={setCount}
      formNotes={formNotes} 
      filteredResults={filteredResults} 
      onSetFilteredResults={setFilteredResults} 
      setIsFiltered={setIsFiltered} />
      <AddNote
        onSetFormNotes={setFormNotes}
      />
      <NotesList notes={formNotes} filteredResults={filteredResults} isFiltered={isFiltered} />
    </div>
  );
}

export default App;
