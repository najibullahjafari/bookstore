import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h2>Home Page</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
      </nav>
    </div>
  );
}

export default HomePage;
