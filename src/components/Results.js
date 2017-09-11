import React, { Component } from 'react';

class Result extends Component {
  render() {
    return(
      <div htmlClass="results">
        <div>Quiz completed.</div>
        <div>Correct answers: {this.props.numCorrect}/{this.props.numberOfQuestions}</div>
      </div>
      );
  }
}

export default Result;
