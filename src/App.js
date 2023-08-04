import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Navigation from './component/navigation';
import './app.css';

const App = () => (
  <div>
    <nav>
      <div className="navbar-container">
        <div className="navbar-left">
          <h2>BookStore CMs</h2>
          <li className="book-item">Book</li>
          <li className="category-item">Categories</li>
        </div>
        <div className="navbar-right">
          <div className="user-icon">
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
      </div>
    </nav>
    <div>
      <Navigation />
    </div>
  </div>
);

export default App;
