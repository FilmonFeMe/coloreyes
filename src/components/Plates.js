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
        loadPlate(this.refs.canvas, 1, this.props.questionId);
    }


    // loadPlate(this.props.questionId);
  render(){
    console.log('question id', this.props.questionId)
    return (
      <div>
        <canvas ref="canvas" id="canvas">Your browser does not support canvas.</canvas>
      </div>
    );
  }
}

export default Plates;
