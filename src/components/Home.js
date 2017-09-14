import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.js';

class Home extends Component {
  render(){
    return (

      <div>

      <div className="logo"> <Logo /> </div>
        <Link to="/instructions"><button>Take the Test</button></Link>

        <p>Approximately 8.0% of males and 0.5% of females are color blind- that's about 4.5% of the human population.  One common misconception is that color blindness can only be inherited; color blindness can also be acquired later in life as a result of disease, aging, or certain medications.</p>

        <p>The most widely used method for detecting and measuring color vision deficiencies is the Ishihara color test.  Find out now if you are colorblind, and learn what you can do to avoid colorblindness later in life.</p>
      
        <div>
        <p>Copy goes here</p>
          <Link to="/hue-test"><button>Color Hue Test</button></Link>
        </div>

      </div>
    );
  }
}

export default Home;
