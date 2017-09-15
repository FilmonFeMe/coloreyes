import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/components/instruction.css';

class Instruction extends Component {
  render(){
    return (
      <div id="instruction">
        <h1>Instructions</h1>
        <p>Try to identify the number that the bubbles form and select it on the keypad.</p>
        <p>If no number was formed, select “pass”.
        There’s no time limit.</p>
        <Link to="/quiz"><button>START</button></Link>
      </div>
    );
  }
}

export default Instruction;

// Need start test button
