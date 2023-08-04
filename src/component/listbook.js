import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { apiData } from '../redux/books/booksSlice';
import BookItem from './book';

function List() {
  const dispatch = useDispatch();
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    if (!dataFetched) {
      dispatch(apiData());
      setDataFetched(true);
    }
  }, [dataFetched, dispatch]);

  const books = useSelector((store) => store.books);

  if (!dataFetched) {
    return <div>Loading...</div>;
  }

  if (books.length === 0) {
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
