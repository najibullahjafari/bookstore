import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, removeBook } from '../redux/books/bookstoreApi';
import BookForm from './bookform';

const HomePage = () => {
  const dispatch = useDispatch();
  const { books, isLoading, error } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

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

  const handleRemoveBook = (bookId) => {
    dispatch(removeBook(bookId));
  };

  return (
    <div>
      <h2>Books</h2>
      {Array.isArray(books) ? (
        books.map((book) => (
          <div key={book.id}>
            <span>{book.title}</span>
            <span>{book.author}</span>
            <span>{book.category}</span>
            <button type="button" onClick={() => handleRemoveBook(book.id)}>Remove</button>
            {/* Add the Comment and Edit buttons here */}
          </div>
        ))
      ) : (
        <div>No books found.</div>
      )}
      <BookForm />
    </div>
  );
};

export default HomePage;
