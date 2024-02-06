import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({content:''});

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

  const parseTagsAndContent = (input) => {
    const tagRegex = /#[^\s#]+/g;
    const tag = input.match(tagRegex) || [];
    const content = input.replace(tagRegex, '').trim();
    return {tag, content};
  };

  const createNote = async () => {
    try{
      const {tags, content} = parseTagsAndContent(newNote);
      const response = await axios.post('/note', {note: content, tags});
      setNotes((prevNotes) => [response.data, ...prevNotes]);
      setNewNote({content: ''});
    }catch(error){
      console.error('Error creating note: ', error)
    }
  };

  return (
    <div className="container">
      <div className="left-panel">
        <h2>Create New Note</h2>
        <textarea
          placeholder='Type Tag and Note'
          value={newNote}
          onChange={(e) => setNewNote((prevNote) => ({...prevNote, content: e.target.value}))}
        />
        <button onClick={createNote}>Create Note</button>
      </div>
      <div className="right-panel">
        <h1>My Notes</h1>
        <ul>
          {notes.map((note) => (
            <li key={note._id}>Content: {note.note}, Tags: {note.tags.join(', ')}
        </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
