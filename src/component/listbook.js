import React from 'react';
import PropTypes from 'prop-types';

function ListBook({ books, onDelete }) {
  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <span>{book.title}</span>
          <button onClick={() => onDelete(book.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

// Add prop type validation
ListBook.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ListBook;
