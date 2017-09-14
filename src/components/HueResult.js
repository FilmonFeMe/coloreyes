import React, {Component} from 'react';

class HueResult extends Component {
    constructor(props) {
      super(props);
    }
  
    render(){
        console.log(this.props);
      return (
        <div>
            <h1>Results</h1>
            <canvas id="myChart" width="400" height="400"></canvas>
       </div>
      );
    }
  }
  
  export default HueResult;