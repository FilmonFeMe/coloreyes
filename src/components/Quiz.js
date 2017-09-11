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

var shuffleArray = function(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

class Quiz extends Component {
  constructor(props) {
    super(props);

    // here we're generating all the styles and numbers that will
    // be part of the test.
    // TODO(aazevedo): make sure we cover all the styles at least once
    this.questions = [];
    for (let i = 0; i < props.numberOfQuestions; ++i) {
      if(i === 0){
        this.questions.push(
          {testType: 5, number: getRandomInt(1, 9)});
      }else{
        this.questions.push(
          {testType: getRandomInt(0, 7), number: getRandomInt(1, 9)});
      }
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

  computeResults() {
    let numCorrect = 0;
    this.questions.forEach((question, i) => {
      numCorrect += question.number == this.state.answers[i] ? 1 : 0;
    });
    return numCorrect;
  }

  render() {
    const currentQuestion = this.state.answers.length;
    if (currentQuestion >= this.questions.length) {
      return(
        <Results numCorrect={this.computeResults()} numberOfQuestions={this.questions.length}/>
        );
    }
    const question = this.questions[currentQuestion];
    return (
      <div>
       <Instruction />
       <div> Plate {currentQuestion + 1} of {this.questions.length} </div>
       <Plates testType={question.testType} number={question.number} />
       <Answers onAnswerClicked = { this.onAnswerClicked } />
       <Results />
      </div>
      );
  }
}

export default Quiz;