import React, {Component} from 'react';
import Chart from './Chart'
import '../stylesheets/components/hueresults.css';

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
            <p>The chart above represents your general visual acuity for distinguishing between shades of Red, Blue, Green and Yellow.
            A completely filled chart means a perfect score.</p>
          </div>
          <div id="hue-about">
            <h2>About this test:</h2>
            <p>This test measures your ability to make color discrimination (color aptitude), rather than detecting color blindness.</p>
            <p>Color discrimination is a trainable skill that is also affected be external effects such as neurological conditions or aging.</p>
          </div>
        </div>
      );
    }
  }

  export default HueResult;
