import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.js';
import '../stylesheets/components/home.css';

class Home extends Component {
  render(){
    return (

      <div id="home">
        <div className="logo"><Logo /></div>
        <div id="tests">
            <p id="intro">Approximately 8.0% of males and 0.5% of females are color blind- that's about 4.5% of the human population.  One common misconception is that color blindness can only be inherited; color blindness can also be acquired later in life as a result of disease, aging, or certain medications.</p>
          <div id="ishihara-test">
            <p>The most widely used method for detecting and measuring color vision deficiencies is the red-green blindness test. Find out now if you are red or green colorblind, and learn what you can do to avoid colorblindness later in life.</p>
            <Link to="/instructions"><button>RED-GREEN BLINDNESS TEST</button></Link>
          </div>
          <div id="hue-test">
            <p>Test your ability to discriminate similar colors with the widely used color hue test.</p>
            <Link to="/hue-test"><button>COLOR HUE TEST</button></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
