import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.js';

class Home extends Component {
  render(){
    return (
      <div>
      <div className="logo">
        <Logo />
      </div>
        <p>Approximately 8.0% of males and 0.5% of females are colorblind: that's about 4.5% of the human population.  One common misconception is that colorblindness can only be inherited; color vision deficiencies can also be acquired later in life as a result of disease, aging, or certain medications.</p>

        <p>The most widely used method for detecting and measuring color vision deficiencies is though the Ishihara color test.  Find out now if you are colorblind, and learn what you can do to avoid colorblindness later in life.</p>

        <Link to="/instructions"><button>Take the Test</button></Link>
      </div>
    );
  }
}

export default Home;
