import React, { Component } from 'react';
import '../stylesheets/components/aboutus.css';

class AboutUs extends Component {
  render(){
    return (
      <div id="aboutUs">
        <h1>About Us</h1>
        <p>ColorEyes is a non-profit company founded by a group of Web Developers in San Francisco, California.</p>
        <p>Our goal is to connect the color-blind community around the Bay Area and provide simple and efficient color perception tests. Driven by empathy, ColorEyes aims to move beyond color vision testing but also provide a community forumn online where people can have like-minded conversations and share resources. ColorEyes is the first ever application that combines two world class color vision tests, the Ishihara and Munsell test.</p>
      </div>
    );
  }
}

export default AboutUs;
