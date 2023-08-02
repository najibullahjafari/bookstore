import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleRemoveBook = (itemId) => {
    dispatch(removeBook(itemId));
  };

  // Placeholder functions for "Comment" and "Edit" buttons
  const handleCommentBook = (itemId) => {
    console.log(`Comment button clicked for book with ID: ${itemId}`);
  };

  const handleEditBook = (itemId) => {
    console.log(`Edit button clicked for book with ID: ${itemId}`);
  };

  return (
    <ul>
      {books.map((book) => (
        <li key={book.item_id}>
          <strong>{book.title}</strong>
          {' '}
          by
          {book.author}
          {' '}
          -
          {book.category}
          <button type="button" onClick={() => handleRemoveBook(book.item_id)}>Remove</button>
          <button type="button" onClick={() => handleCommentBook(book.item_id)}>Comment</button>
          <button type="button" onClick={() => handleEditBook(book.item_id)}>Edit</button>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
