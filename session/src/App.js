import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  click() {
    axios.put('/api/session_name')
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.click}>click me</button>
      </div>
    );
  }
}

export default App;
