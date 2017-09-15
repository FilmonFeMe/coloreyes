import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.js';
import '../stylesheets/components/home.css';

class Home extends Component {
  render(){
    return (

      <div id="home">
        <div className="logo"><Logo /></div>
        <h2>Introduction</h2>
        <p>Approximately 8.0% of males and 0.5% of females are color blind- that's about 4.5% of the human population.  One common misconception is that color blindness is only inherited; color blindness can also be acquired later in life as a result of disease, aging, or certain medications.</p>
        <p>Using the tests below, find out today if you have any color vision deficiencies and determine your ability to distinguish between a spectrum of hues.</p>
        <div>

<h2>Ishihara Test</h2>
<p>The Ishihara test is a color perception test to determine red-green color vision deficiences. Named after it's creator, Dr. Shinobu Ishihara, the test presents you with randomized plates in which unique patterns of colored dots will reveal certain restraints for those red-green color deficiences.  Used as the standard in color vision testing over the past century, this method of color vision testing remains the most widely-used and accepted today. </p>
        <Link to="/instructions"><button>ISHIHARA TEST</button></Link>


<h2>Munsell Hue Test</h2>
        <p>The Munsell Hue Test is a test of the human visual system often used to test for colorblindness. In testing the ability to isolate and identify slight variations of color, you will learn your level of color acuity.</p>
          <Link to="/hue-test"><button>MUNSEL HUE TEST</button></Link>
        </div>
      </div>
    );
  }
}

export default Home;
