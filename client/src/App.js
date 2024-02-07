import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ content: '' });
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get('/notes');
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const extractTags = (text) => {
    const tagRegex = /#(\w+)/g;
    const tags = [];
    const content = text.replace(tagRegex, (_, tag) => {
      tags.push(tag);
      return `#${tag}`;
    }).trim();
    return { tags, content };
  };

  const createNote = async () => {
    try {
      if (!newNote.content || !newNote.content.trim()) {
        console.error('Error creating note: Content is empty');
        return;
      }

      const { tags, content } = extractTags(newNote.content);
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

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredNotes = searchQuery === '' ? notes : notes.filter(note => note.tags.includes(searchQuery));

  return (
    <div className="container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by tag..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="left-panel">
        <h2>Create New Note</h2>
        <textarea
          placeholder='Type Tag and Note'
          onChange={(e) => setNewNote((prevNote) => ({ ...prevNote, content: e.target.value }))}
        />
        <button onClick={createNote}>Create Note</button>
      </div>
      <div className="right-panel">
        <h1>My Notes</h1>
        {filteredNotes.map((note) => (
          <Card key={note._id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default App;