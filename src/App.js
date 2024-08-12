
import NotesList from './components/Notes/NotesList';

function App() {

  const notes = [
    {id:1, title: 'First Note', description: 'First description'},
    {id:2, title: 'Second Note', description: 'Second description'}
  ]

  return (
    <div className="App">
      <h1>Notebook</h1>
      <NotesList notes={notes} />
    </div>
  );
}

export default App;
