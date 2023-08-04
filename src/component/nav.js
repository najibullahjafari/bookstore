import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/books" className="nav-item">Books</Link>
      </div>
    </nav>
  );
}

export default Navbar;
