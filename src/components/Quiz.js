import React, { Component } from 'react';
import Plates from './Plates.js'
import Answers from './Answers.js'
import Results from './Results.js'
import Bar from './Bar.js'
import MobileBar from './MobileBar.js'
import '../stylesheets/components/quiz.css';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};

function generateTestTypes(numOfQuestions) {
  let testTypes = [];
  let occuranceOfEachType = Math.ceil((numOfQuestions - 1) / 6) // 7 possible types, but one is exclusive to the first question
  for (let i = 0; i < occuranceOfEachType; i++) {
    testTypes.push(6);
    testTypes.push(0);
    testTypes.push(3);
    testTypes.push(2);
    testTypes.push(4);
    testTypes.push(1);
    // We're not pushing 5, since that's reserved for the first questions.
  }
  return testTypes;
};

class Quiz extends Component {
  constructor(props) {
    super(props);

    // here we're generating all the test types and numbers that will
    // be part of the test.
    this.questions = [];
    const testTypesSet = generateTestTypes(props.numberOfQuestions);

    for (let i = 0; i < props.numberOfQuestions; ++i) {
      if(i === 0){
        this.questions.push(
          {testType: 5, number: getRandomInt(1, 10)});
      }else{
        this.questions.push(
          {testType: testTypesSet.pop(), number: getRandomInt(1, 10)});
      }
    }

    this.state = {
      answers: [],
      progressPerAnswer: 1 / props.numberOfQuestions,
      progress: 0
    };
    this.onAnswerClicked = this.onAnswerClicked.bind(this);
  }

  onAnswerClicked(answer) {
    this.state.answers.push(answer);
    this.setState({ answers: this.state.answers,  progress: this.state.progress + this.state.progressPerAnswer });
  }

  computeResults() {
    let numCorrect = 0;
    this.questions.forEach((question, i) => {
      numCorrect += question.number == this.state.answers[i] ? 1 : 0;
    });
    return numCorrect;
  }

  render() {
    let currentQuestion = this.state.answers.length;
    if(currentQuestion == 1 && this.computeResults() == 0){
      currentQuestion = this.props.numberOfQuestions;
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
          <Plates testType={question.testType} number={question.number} />
        </div>
        <div id="section2">
          <div class="progress-container">
            <div id="progress">
              <Bar className="bar-class" progress={this.state.progress}/>
            </div>
            <div id="progressLine">
              <MobileBar progress={this.state.progress}/>
            </div>
            <div id="numpad">
              <Answers onAnswerClicked = { this.onAnswerClicked } />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Quiz;
