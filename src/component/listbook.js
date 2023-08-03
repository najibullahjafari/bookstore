import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/books/bookstoreApi';

const ListBooks = () => {
  const dispatch = useDispatch();
  const appId = 'Uc20cAFSnSyU82tMWhQ6'; // Replace with the actual appId

  const { books, isLoading, error } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks(appId));
  }, [dispatch, appId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div>
      <h2>List of Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.item_id}>
            <span>{book.title}</span>
            {' '}
            -
            <span>{book.category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListBooks;
