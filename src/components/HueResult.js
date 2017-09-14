import React, {Component} from 'react';
import Chart from './Chart'

class HueResult extends Component {
    constructor(props) {
      super(props);
    }
  
    render(){
      return (
        <div className="hue-results">
          <h1>Results</h1>
          <Chart {...this.props}/>
          <div id="hue-interpretation">
            <h2>Results interpretation:</h2>
            Bla bla bla, blu blu blu, bli bli bli...
          </div>
          <div id="hue-about">
            <h2>About this test:</h2>
            This test measures your ability to make color discrimination (color aptitude), rather than detecting color blindness.
            Color discrimination is a trainable skill that is also affected be external effects such as neurological conditions or aging.
          </div>
        </div>
      );
    }
  }
  
  export default HueResult;