import React, { Component } from 'react';

class Plates extends Component {
  constructor(args) {
    super(args);
    this.state = {
      plateImageSrc: "/images/5.png"
    }
  }

  componentWillMount() {
        const kdTree = document.createElement("script");
        const jspolygon = document.createElement("script");
        const ishihara = document.createElement("script");

        kdTree.src = "kdTree.js"
        jspolygon.src = "jspolygon.js"
        ishihara.src = "ishihara.js"
        
        kdTree.async = true;
        jspolygon.async = true;
        ishihara.async = true;

        document.body.appendChild(kdTree);
        document.body.appendChild(jspolygon);
        document.body.appendChild(ishihara);
    },

  render(){
    return (
      <div>
      <p>Questions Component</p>
      <img src={this.state.plateImageSrc} />
      <canvas id="canvas">Your browser does not support canvas.</canvas>
      </div>
      );
  }
}

export default Plates;