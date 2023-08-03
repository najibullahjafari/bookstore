import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookstoreApi';

const RemoveBookButton = () => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    const bookIdToRemove = 'item1';
    dispatch(removeBook(bookIdToRemove));
  };

  return (
    <button type="button" onClick={handleRemoveBook}>
      Remove Book
    </button>
  );
};

export default RemoveBookButton;
