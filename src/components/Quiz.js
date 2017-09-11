import React, { Component } from 'react';
import Instruction from './Instruction.js'
import Plates from './Plates.js'
import Answers from './Answers.js'
import Results from './Results.js'

class Quiz extends Component {

  render(){
    console.log(this.props.questionId);
    return (
      <div>
       <Instruction />
       <Plates questionId={this.props.questionId}/>
       <Answers onAnswerClicked = { this.props.onAnswerClicked } />
       <Results />
      </div>
      );
  }
}

export default Quiz;