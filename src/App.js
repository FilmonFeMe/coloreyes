import React, { Component } from 'react';
import './App.css';
import Quiz from './components/Quiz.js';

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

