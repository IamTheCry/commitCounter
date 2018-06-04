import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <p className="App-intro">
          Click the button below to count your commits since Monday, June 4th
        </p>
        <button>Count'em</button>
      </div>
    );
  }
}

export default App;
