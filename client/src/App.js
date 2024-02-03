import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({content:'', tag:''});

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try{
      const response = await axios.get('/notes');
      setNotes(response.data);
    }catch(error){
      console.error('Error fetching notes:', error);
    }
  };

  const createNote = async () => {
    try{
      const response = await axios.post('/note', {
        content: newNote.content,
        tag: newNote.tag,
      });
      setNotes((prevNotes) => [response.data, ...prevNotes]);
      setNewNote({content: '', tag: ''});
    }catch(error){
      console.error('Error creating note: ', error)
    }
  }

  return (
    <div className="container">
      <div className="left-panel">
        <h2>Create New Note</h2>
        <input
        type='text'
        placeholder='Tag'
        value={newNote.tag}
        onChange={(e) => setNewNote((prevNote) => ({ ...prevNote, tag: e.target.value }))}
        />
        <textarea
          placeholder='Content'
          value={newNote.content}
          onChange={(e) => setNewNote((prevNote) => ({...prevNote, content: e.target.value}))}
        />
        <button onClick={createNote}>Create Note</button>
      </div>
      <div className="right-panel">
        <h1>My Notes</h1>
        <ul>
          {notes.map((note) => (
            <li key={note._id}>
            <strong>Tag:</strong> {note.tag}, Content: {note.note}
        </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
