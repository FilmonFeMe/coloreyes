import React, { Component } from 'react';
import Instruction from './Instruction.js'
import Plates from './Plates.js'
import Answers from './Answers.js'
import Results from './Results.js'

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};

class Quiz extends Component {
  constructor(props) {
    super(props);

    // here we're generating all the styles and numbers that will
    // be part of the test.
    // TODO(aazevedo): make sure we cover all the styles at least once
    this.questions = [];
    for (var i = 0; i < props.numberOfQuestions; ++i) {
      this.questions.push(
        {testType: getRandomInt(0, 7), number: getRandomInt(1, 9)});
    }

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
    const question = this.questions[this.state.answers.length];

    return (
      <div>
       <Instruction />
       <Plates testType={question.testType} number={question.number} />
       <Answers onAnswerClicked = { this.onAnswerClicked } />
       <Results />
      </div>
      );
  }
}

export default Quiz;