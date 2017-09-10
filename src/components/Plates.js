import React, { Component } from 'react';

class Plates extends Component {
  constructor(args) {
    super(args);
    this.state = {
      //plateImageSrc: "/images/5.png"
    }
  }

  render(){
    return (
      <div>
      <p>Questions Component</p>
      <canvas id="canvas">Your browser does not support canvas.</canvas>
      </div>
    );
  }
}

export default Plates;
