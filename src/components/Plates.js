import React, { Component } from 'react';
import loadPlate from './ishihara';

class Plates extends Component {
  constructor(args) {
    super(args);
    this.state = {
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

  render(){
    return (
        <canvas className = "plates" ref="canvas" id="canvas">Your browser does not support canvas.</canvas>
    );
  }
}

export default Plates;
