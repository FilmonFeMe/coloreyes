import React, { Component } from 'react';

class Instruction extends Component {
  render(){
    return (
      <div><p>You are about to take a color blind test. Look at the following images and input the number you think is presented.</p>
     	 <Next/>
      </div>
      );
  }
}

export default Instruction;

// Need start test button