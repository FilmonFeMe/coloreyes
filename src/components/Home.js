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

        <img className="homepage-image" src="/images/homepage-image.jpg" alt="Home"/>
        <div>
          <p>Welcome to our color blindness and hue test!!!</p>
          <Link to="/instructions"><button>Color Blind Test</button></Link>
        </div>

        <div>
          <p>Copy goes here</p>
          <Link to="/hue-test"><button>Color Hue Test</button></Link>
        </div>

      </div>
    );
  }
}

export default Home;
