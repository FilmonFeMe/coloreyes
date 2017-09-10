import React, { Component } from 'react';
import Instruction from './Instruction.js'
import Plates from './Plates.js'
import Answers from './Answers.js'
import Results from './Results.js'

class Quiz extends Component {
  render(){
    return (
      <div>
       <Instruction />
       <Plates />
       <Answers />
       <Results />
      </div>
      );
  }
}

export default Quiz;