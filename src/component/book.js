import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ActionButtons from './btns';
import '../app.css';

const BookItem = ({ book }) => {
  const [progress, setProgress] = useState(Math.floor(Math.random() * 100) + 1);

  const handleAddBook = () => {
    setProgress(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <div key={book.item_id} className="book-container">
      <div className="book-info">
        <p className="book-category">{book.category}</p>
        <h2 className="book-title">{book.title}</h2>
        <p className="book-author">{book.author}</p>
        <div>
          <ActionButtons book={book} />
        </div>
      </div>
      <div className="progress-bar">
        <div className="progress-circle" style={{ clip: `rect(0, ${progress}px, 100px, 0)` }}>
        </div>
        <div className="progress-percentage">
          {progress}%
        </div>
        <div>completed</div>
      </div>
      <div className="book-progress">
        <div>
          <p className="current-chapter">CURRENT CHAPTER</p>
          <p>Chapter 12</p>
          <button type="button" onClick={handleAddBook}>
            Update progress
          </button>
        </div>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;
