import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { apiErase } from '../redux/books/booksSlice';

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
    <div className="buttonCont">
      <button type="button">Comments</button>
      |
      <button type="button" className="btnAcc" onClick={() => dispatch(apiErase(book.item_id))}>
        Remove
      </button>
      |
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
        <button type="button" className="btnAcc" onClick={handleEdit}>
          Edit
        </button>
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
