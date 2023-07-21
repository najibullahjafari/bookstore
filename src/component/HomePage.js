import React from 'react';
import Navigation from './navigation';
import ListBook from './listbook';
import BookForm from './bookform';
import '../index.css';

function HomePage() {
  // Sample data for books
  const books = [
    { id: 1, title: 'Book 1' },
    { id: 2, title: 'Book 2' },
    { id: 3, title: 'Book 3' },
  ];

  const handleDeleteBook = (id) => {
    // Implement book deletion logic here (e.g., remove the book from the state or server)
    console.log(`Deleting book with ID: ${id}`);
  };

  return (
    <div className="home-con">
      <h2>Home Page</h2>
      <Navigation />
      <ListBook books={books} onDelete={handleDeleteBook} />
      <BookForm />
    </div>
  );
}

export default HomePage;
