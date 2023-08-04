import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { apiPost } from '../redux/books/booksSlice';

function BookForm() {
  const dispatch = useDispatch();
  const category = 'Action';

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState('');

  const handleAddBook = () => {
    // Check if title and author fields are not empty
    if (!title || !author) {
      setError('Please enter both title and author');
      return;
    }

    dispatch(
      apiPost({
        item_id: Date.now().toString(),
        title,
        author,
        category,
      }),
    );
    // Reset the form fields and error state
    setTitle('');
    setAuthor('');
    setError('');
  };

  return (
    <form className="book-form">
      <h4 className="form-heading">ADD BOOK</h4>
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
        {error && <p className="error">{error}</p>}
        <button type="button" onClick={handleAddBook}>
          ADD BOOK
        </button>
      </div>
    </form>
  );
}

export default BookForm;
