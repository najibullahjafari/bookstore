import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { apiErase } from '../redux/books/booksSlice';
import '../app.css';

function ActionButtons({ book }) {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
    setTitle(book.title);
    setAuthor(book.author);
  };

  const handleUpdate = () => {
    setEditing(false);
  };

  return (
    <div className="button-con">
      <a className='btn-con' href="#">Comments</a>
      {'    |    '}
      <a href="#" className="btn-con" onClick={() => dispatch(apiErase(book.item_id))}>
        Remove
      </a>
      {'    |    '}
      {editing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author"
          />
          <button type="button" onClick={handleUpdate}>
            Update
          </button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </>
      ) : (
        <a href="#" className="btn-con" onClick={handleEdit}>
          Edit
        </a>
      )}
    </div>
  );
}

ActionButtons.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default ActionButtons;
