import React, { useState } from 'react';

const Book = ({ book, onDelete }) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    onDelete(book.id);
    setIsDeleted(true);
  };

  if (isDeleted) {
    return null;
  }

  return (
    <div>
      <h3>{book.title}</h3>
      <p>
        Author:
        {book.author}
      </p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Book;
