import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { apiErase } from '../redux/books/booksSlice';

function ActionButtons({ book }) {
  const dispatch = useDispatch();
  const [showEditForm, setShowEditForm] = useState(false);

  const handleRemoveBook = () => {
    dispatch(apiErase(book.item_id));
  };

  const handleEditBook = () => {
    setShowEditForm(true);
  };

  const handleCloseEditForm = () => {
    setShowEditForm(false);
  };

  return (
    <div className="action-buttons">
      <button type="button" className="comments-btn">Comments</button>
      |
      <button type="button" className="remove-button" onClick={handleRemoveBook}>Remove</button>
      |
      <button type="button" className="edit-button" onClick={handleEditBook}>Edit</button>
      {showEditForm && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Book</h2>
            <input type="text" placeholder="New Title" />
            <input type="text" placeholder="New Author" />
            <button type="button" onClick={handleCloseEditForm}>Cancel</button>
            <button type="button">Save</button>
          </div>
        </div>
      )}
    </div>
  );
}

ActionButtons.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default ActionButtons;
