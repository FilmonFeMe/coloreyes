import React, { Component } from 'react';
import './App.css';
import Quiz from './components/Quiz.js'

class App extends Component {

  render() {
    return (
      <div className="App">
       <h1>ColorEyes</h1>
       <Quiz/>

      </div>
    );
  }
}

export default App;

