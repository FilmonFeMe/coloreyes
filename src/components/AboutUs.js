import React, { Component } from 'react';
import '../stylesheets/components/aboutus.css';

class AboutUs extends Component {
  render(){
    return (
      <div id="aboutUs">
        <h1>About Us</h1>
        <p>ColorEyes is a non-profit company founded by a group of Web Developers in San Francisco, California.</p>
        <p>Our goal is to connect the color-blind community around the Bay Area and provide simple and efficient color perception tests.</p>
      </div>
    );
  }
}

export default AboutUs;
