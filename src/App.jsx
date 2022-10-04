import React, { useState, useEffect } from 'react';
import './App.css';
import { nanoid } from 'nanoid';
import { Header, NotesList, SearchBar } from './components';

function App() {
  const [savedNotes] = useState(localStorage.getItem('notes-app-data'))
  const [notes, setNotes] = useState(savedNotes ? JSON.parse(savedNotes):[]);

  useEffect(() => {
    localStorage.setItem('notes-app-data', JSON.stringify(notes));
  }, [notes]);

  const [searchText, setSearchText] = useState('');
  const [darkMode, isDarkMode] = useState(false);


  //change the background color in body
  useEffect(() => {
    if (darkMode) {
      document.body.classList = 'dark-bg';
    } else document.body.classList = '';
  }), [];

  const addNewNote = text => {
    const newNote = {
      id: nanoid(),
      text: text,
      date: new Date().toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = id => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="sm:px-5 xl:px-20" >
        <Header toggleDarkMode={isDarkMode} />
        <SearchBar setSearchText={setSearchText} />
        <NotesList
          notes={notes.filter(note =>
            note.text.toLowerCase().includes(searchText)
          )}
          addNewNote={addNewNote}
          deleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
