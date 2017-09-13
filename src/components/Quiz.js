import React, { Component } from 'react';
import Plates from './Plates.js'
import Answers from './Answers.js'
import Results from './Results.js'
import Bar from './Bar.js'

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
      progress: 0
    };
    this.onAnswerClicked = this.onAnswerClicked.bind(this);
  }

  onAnswerClicked(answer) {
    this.state.answers.push(answer);
    this.setState({ answers: this.state.answers, progress: this.state.progress + 0.059 }); //=100%/17
  }

  computeResults() {
    let numCorrect = 0;
    this.questions.forEach((question, i) => {
      numCorrect += question.number == this.state.answers[i] ? 1 : 0;
    });
    return numCorrect;
  }

  render() {
    // console.log(currentQuestion + " " + this.state.answers)
    let currentQuestion = this.state.answers.length;
    if(currentQuestion == 1 && this.computeResults() == 0){
      currentQuestion = 17;
    }
    if(currentQuestion >= this.questions.length){
      return(
        <Results numCorrect={this.computeResults()} numberOfQuestions={this.questions.length}/>
        );
    }
    const question = this.questions[currentQuestion];
    return (
      <div id="quiz-layout">
        <div id="plate">
          {/*<p> Plate {currentQuestion + 1} of {this.questions.length} </p>*/}
          <Plates testType={question.testType} number={question.number} />
        </div>
        <div id="section2">
          <div id="progress">
            <Bar progress={this.state.progress}/>
          </div>
          <div id="numpad">
            <Answers onAnswerClicked = { this.onAnswerClicked } />
          </div>
        </div>
      </div>
    );
  }
}

export default Quiz;
