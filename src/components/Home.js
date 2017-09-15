import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.js';
import '../stylesheets/components/home.css';
// import { Button } from 'react-bootstrap';

class Home extends Component {
  render(){
    return (

<div>
<img src="images/eyes.jpg" class="img-responsive img-circle home-img" alt="Bird" width="100%" />

      <div className="container-fluid bg-1 padding">
       <div className="row">
         <div className="col-sm-4">
          <img src="images/home-plate.png" class="img-responsive img-circle img-plate" style={{width:400}}/>
         </div>
         <div className="col-sm-8">
           <h2>ISHIHARA</h2><br/>
           <p>The Ishihara Color Test is a color perception test which determines red-green color vision deficiences. Named after its creator, Dr. Shinobu Ishihara, the test presents you with randomized plates in which unique patterns of colored dots will reveal certain restraints for those red-green color deficiences.  Used as the standard in color vision testing over the past century, this method of color vision testing remains the most widely-used and accepted today.</p><br/>
         </div>
         <Link to="/instructions"><button className="info">RED-GREEN BLINDNESS TEST</button></Link>
       </div>
     </div>

     <div className="container-fluid bg-3 text-center padding">
     <img src="images/12people.png" class="img-responsive img-circle" height="400px"/>
      <h3>1 out of 12 men</h3>
      <h3>Has color vision deficiency</h3>
     </div>

     <div className="container-fluid bg-1 padding padding-block-3">
     <div className="row">
         <div className="col-sm-6">
           <h2>COLOR HUE TEST</h2><br/>
           <p>The Munsell Hue Test is a test of the human visual system often used to test for colorblindness. In testing the ability to isolate and identify slight variations of color, you will learn your level of color acuity.</p>
           <Link to="/hue-test"><button className="primary">COLOR HUE TEST</button></Link>
         </div>

         <div className="col-sm-6 padding padding-block-3">
          <img src="images/hue3.jpg" class="img-responsive img-circle img-hue" style={{width:400}}/>
         </div>
     </div>
</div>
</div>
      
    );
  }
}

export default Home;

{/* 
<div>
            <h3> Test</h3>
        <div id="tests">
            <p id="intro">Approximately 8.0% of males and 0.5% of females are color blind- that's about 4.5% of the human population.  One common misconception is that color blindness can only be inherited; color blindness can also be acquired later in life as a result of disease, aging, or certain medications.</p>
          <div id="ishihara-test">
            <p>The most widely used method for detecting and measuring color vision deficiencies is the red-green blindness test. Find out now if you are red or green colorblind, and learn what you can do to avoid colorblindness later in life.</p>
            <Link to="/instructions"><Button className="primary">RED-GREEN BLINDNESS TEST</Button></Link>
          </div>
          <div id="hue-test">
            <p>Test your ability to discriminate similar colors with the widely used color hue test.</p>
            <Link to="/hue-test"><Button className="primary">COLOR HUE TEST</Button></Link>
          </div>
        </div>
      </div> */}