import React, { Component } from 'react';
import './App.css';
import Quiz from './components/Quiz.js';

// numberOfQuestions should be 19.

class App extends Component {
  render() {
    return (
      <div className="App">
	       <Quiz numberOfQuestions={19}/>
      </div>
    );
  }
}

export default App;

