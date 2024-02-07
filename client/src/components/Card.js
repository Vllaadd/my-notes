import React from 'react';
import './Card.css'; 

const Card = ({ note }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h6 className="card-subtitle mb-2 text-muted">Tags:</h6>
        <p className="card-tags">{note.tags ? note.tags.map(tag => <span className="tag">{`#${tag}`}</span>) : ''}</p>
        <h5 className="card-title">Content:</h5>
        <p className="card-text">{note.note}</p>
      </div>
    </div>
  );
};

export default Card;
