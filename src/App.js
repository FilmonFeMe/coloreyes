import React, { Component } from 'react';
import './App.css';
import Quiz from './components/Quiz.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
    };
    this.onAnswerClicked = this.onAnswerClicked.bind(this);
  }

  onAnswerClicked(answer) {
    this.state.answers.push(answer);
    this.setState({ answers: this.state.answers });
  }

  render() {
    return (
      <div className="App">
       <h1>ColorEyes</h1>
       <Quiz questionId={this.state.answers.length} onAnswerClicked={this.onAnswerClicked}/>

      </div>
    );
  }
}

export default App;

