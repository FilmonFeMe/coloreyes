import React, { Component } from 'react';
import './App.css';
import Quiz from './components/Quiz.js';
import NavComponent from './components/Navbar.js';
import ReactForm from './components/ContactForm.js';

class App extends Component {

  render() {
    return (
      <div className="App">
	      <div><NavComponent/></div>
	       <h1>ColorEyes</h1>
	       <Quiz numberOfQuestions={3}/>
	       <ReactForm/>
      </div>
    );
  }
}

export default App;

