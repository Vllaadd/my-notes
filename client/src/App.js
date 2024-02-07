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

  function extractTags(text) {
    console.log('Input text:', text);
    const tagRegex = /#(\w+)/g;
    const tags = [];
    const content = text.replace(tagRegex, (_, tag) => {
      console.log('Extracted tag:', tag);
      tags.push(tag);
      return '';
    }).trim();
    console.log('Extracted tags:', tags);
    console.log('Extracted content:', content);
    return { tags, content };
  }
  
const createNote = async () => {
  try {
    console.log('newNote:', newNote); // Check the value of newNote
    // Check if newNote.content is defined and not empty
    if (!newNote.content || !newNote.content.trim()) {
      console.error('Error creating note: Content is empty');
      return;
    }

    const { tags, content } = extractTags(newNote.content);
    console.log('content:', content);
    console.log('tags:', tags);

    // Ensure 'content' is not empty after tag extraction
    if (!content.trim()) {
      console.error('Error creating note: Content is empty after tag extraction');
      return;
    }

    const response = await axios.post('/note', { note: content, tags });
    setNotes(prevNotes => [response.data, ...prevNotes]);
    setNewNote({ content: '', tags: [] });
  } catch (error) {
    console.error('Error creating note: ', error);
  }
};


  return (
    <div className="container">
      <div className="left-panel">
        <h2>Create New Note</h2>
        <textarea
          placeholder='Type Tag and Note'
          // value={newNote}
          onChange={(e) => setNewNote((prevNote) => ({...prevNote, content: e.target.value}))}
        />
        <button onClick={createNote}>Create Note</button>
      </div>
      <div className="right-panel">
        <h1>My Notes</h1>
        <ul>
          {notes.map((note) => (
            <li key={note._id}>Content: {note.note}, Tags: {note.tags ? note.tags.join(', '): ''}
        </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
