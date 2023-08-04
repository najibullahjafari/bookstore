import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { apiEdit } from '../redux/books/booksSlice';

function EditForm({ book, onClose }) {
  const dispatch = useDispatch();
  const [newTitle, setNewTitle] = useState(book.title);
  const [newAuthor, setNewAuthor] = useState(book.author);

  const handleEditBook = () => {
    if (newTitle && newAuthor) {
      dispatch(apiEdit({
        item_id: book.item_id,
        title: newTitle,
        author: newAuthor,
      }));
      onClose();
    }
  };

  return (
    <div className="edit-form">
      <h2>Edit Book</h2>
      <input
        type="text"
        placeholder="New Title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="New Author"
        value={newAuthor}
        onChange={(e) => setNewAuthor(e.target.value)}
      />
      <button type="button" onClick={handleEditBook}>Save</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </div>
  );
}

EditForm.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EditForm;
