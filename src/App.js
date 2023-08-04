import React from 'react';
import Navigation from './component/navigation';

const App = () => (
  <div>
    <nav>
      <ul>
        <li>BookStore CMs</li>
        <li>Book</li>
        <li>Categories</li>
      </ul>
    </nav>

    <div>
      <div>
        <Navigation />
      </div>
    </div>
  </div>
);

export default App;
