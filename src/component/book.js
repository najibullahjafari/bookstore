import React from 'react';
import PropTypes from 'prop-types';

function Book({ book, onDelete }) {
  return (
    <div>
      <span>{book.title}</span>
      <span>{book.author}</span>
      <button type="button" onClick={() => onDelete(book.id)}>Delete</button>
    </div>
  );
}

// Add prop type validation
Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
