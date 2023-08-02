import React from 'react';
import BookList from './listbook';
import AddBookButton from './AddBookButton';

const HomePage = () => (
  <div>
    <h1>My Book Collection</h1>
    <BookList />
    <AddBookButton />
  </div>
);

export default HomePage;
