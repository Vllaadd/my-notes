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
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">

      </nav>

      {/* Main content */}
      <div className="row" style={{ marginTop: '70px' }}>
        {/* Left panel for create note form */}
        <div className="col-lg-3">
          <div className="left-panel">
            <h3>Create New Note</h3>
            <div className="mb-3">
              <textarea className="form-control" rows={8} placeholder="Type Tag and Note" onChange={(e) => setNewNote((prevNote) => ({ ...prevNote, content: e.target.value }))}></textarea>
              <button className="btn btn-primary" onClick={createNote}>Create Note</button>
            </div>
          </div>

        </div>

        {/* Right panel for existing notes */}
        <div className="col-lg-9">
          <div className="right-panel" style={{ maxHeight: 'calc(100vh - 70px)', overflowY: 'auto' }}>
            <h3>My Notes</h3>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search by tag" aria-label="Search" value={searchQuery} onChange={handleSearchChange} />
              <button className="btn btn-light" type="submit">Search</button>
            </form>

            {filteredNotes.map((note) => (
              <Card key={note._id} note={note} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default App;