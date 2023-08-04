import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { apiPost } from '../redux/books/booksSlice';

function Form() {
  const dispatch = useDispatch();
  const category = 'Action';

  // State variables for title and author inputs
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  return (
    <>
      <form className="form">
        <h1 id="name">ADD NEW BOOK</h1>
        <div className="content">
          <input
            type="text"
            id="title"
            placeholder="Book Title"
            required
            value={title} // Use the state variable as the value
            onChange={(e) => setTitle(e.target.value)} // Update the state variable on change
          />
          <input
            type="text"
            id="author"
            placeholder="Author"
            required
            value={author} // Use the state variable as the value
            onChange={(e) => setAuthor(e.target.value)} // Update the state variable on change
          />
          <button
            type="button"
            onClick={() => {
              // Dispatch the action with the state variables
              dispatch(apiPost(
                {
                  item_id: Date.now().toString(),
                  title,
                  author,
                  category,
                },
              ));
              // Reset the state variables to clear the input fields
              setTitle('');
              setAuthor('');
            }}
          >
            ADD BOOK
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
