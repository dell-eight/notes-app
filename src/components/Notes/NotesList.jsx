import React from 'react';
import Notes from './Notes';
import AddNotes from './AddNotes';

const NotesList = ({ notes, deleteNote, addNewNote }) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 py-5">
      {notes.map(note => (
        <Notes
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          deleteNote={deleteNote}
        />
      ))}
      <AddNotes addNewNote={addNewNote} />
    </div>
  );
};

export default NotesList;
