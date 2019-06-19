import React from 'react';
import Image from './components/image';
import './App.css';

function App() {
  return (
    <React.Fragment>
    <div className="hero is-fullheight is-bold is-info">
      <div className="hero-body">
        <div className="container">
          <div className="header content">
            <h2 className="subtitle is-6">Code Challenge #16</h2>
            <h1 className="title is-1">
              Infinite Scroll Unsplash Code Challenge
            </h1>
          </div>
          <Image />
        </div>
      </div>
    </div>
  </React.Fragment>
  );
}

export default App;
