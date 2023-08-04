import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { apiData } from '../redux/books/booksSlice';
import BookItem from './book';

function List() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apiData());
  }, []);

  const books = useSelector((store) => store.books);

  if (books.status === 'loading...') {
    return <div>Loading...</div>;
  }

  if (books.error) {
    return (
      <div>
        Error:
        {books.error}
      </div>
    );
  }

  if (books.books.length === 0) {
    return <div>No books found.</div>;
  }

  return (
    <>
      {books.books.map((book) => (
        <BookItem key={book.item_id} book={book} />
      ))}
    </>
  );
}

export default List;
