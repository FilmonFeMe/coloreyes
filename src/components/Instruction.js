import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/components/instruction.css';

class Instruction extends Component {
  render(){
    return (
      <div id="instruction">
        <h1>Instructions</h1>
        <p>In a moment, you will be shown a large circle made of many smaller circles, which vary in color.  This is what is known as an “Ishihara plate”.  Used as the standard in color vision testing over the past century, this method of color vision testing remains the most widely-used and accepted today.</p>
          <p>Due to the differences in color between the smaller circles, some plates may appear to contain one large number, while other plates contain nothing.  If you can see a number on the plate, choose it on the number pad.  If you do not see a number, choose “Pass”.  Once you’ve complete the test, an analysis of your results will be provided to you.
        </p>
        <Link to="/quiz"><button>START</button></Link>
      </div>
    );
  }
}

export default Instruction;

// Need start test button
