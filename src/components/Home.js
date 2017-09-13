import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render(){
    return (
      <div>
      <img className="homepage-image" src="/images/homepage-image.jpg" alt="Home"/>
        <p>Welcome to our color blindness test!!!</p>
        <Link to="/instructions"><button>Take the Test</button></Link>
      </div>
    );
  }
}

export default Home;
