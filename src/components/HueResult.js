import React, {Component} from 'react';
import Chart from './Chart'

class HueResult extends Component {
    constructor(props) {
      super(props);
    }
  
    render(){
        console.log(this.props);
      return (
        <div>
            <h1>Results</h1>
            <Chart {...this.props}/>
       </div>
      );
    }
  }
  
  export default HueResult;