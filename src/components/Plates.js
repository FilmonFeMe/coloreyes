import React, { Component } from 'react';
import loadPlate from './ishihara';

class Plates extends Component {
  constructor(args) {
    super(args);
    this.state = {
      //plateImageSrc: "/images/5.png"
    }
  }

  componentDidMount() {
    this.updateCanvas();
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  updateCanvas() {
    loadPlate(this.refs.canvas, this.props.testType, this.props.number);
  }

  // loadPlate(this.props.questionId);
  render(){
    return (
      <div>
        <canvas className = "plates" ref="canvas" id="canvas">Your browser does not support canvas.</canvas>
      </div>
    );
  }
}

export default Plates;
