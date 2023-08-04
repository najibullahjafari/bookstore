import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { apiPost } from '../redux/books/booksSlice';

function BookForm() {
  const dispatch = useDispatch();
  const category = 'Action';

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAddBook = () => {
    dispatch(apiPost(
      {
        item_id: Date.now().toString(),
        title,
        author,
        category,
      },
    ));
    setTitle('');
    setAuthor('');
  };

  return (
    <form className="book-form">
      <h4 className="form-heading">ADD NEW BOOK</h4>
      <div className="form-content">
        <input
          type="text"
          id="title"
          placeholder="Book Title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          id="author"
          placeholder="Author"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button
          type="button"
          onClick={handleAddBook}
        >
          ADD BOOK
        </button>
      </div>
    </form>
  );
}

export default BookForm;
