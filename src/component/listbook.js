import React from 'react';
import PropTypes from 'prop-types';

function ListBook({ books, onDelete }) {
  // Check if books is undefined or empty before rendering
  if (!books || books.length === 0) {
    return <div>No books available.</div>;
  }

  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <span>{book.title}</span>
          <button type="button" onClick={() => onDelete(book.id)}>Delete</button>
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
    }),
  ),
  onDelete: PropTypes.func.isRequired,
};

// Add defaultProps to avoid the error
ListBook.defaultProps = {
  books: [], // You can provide a default empty array here if needed
};

export default ListBook;
