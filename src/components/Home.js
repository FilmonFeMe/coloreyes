import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render(){
    return (
      <div>
      <img src="/images/homepage-image.jpg" style = {{width: "860px" }} /> 
        <p>Welcome to our color blindness test!!!</p>
        <Link to="/instructions"><button>Take the Test</button></Link>
      </div>
    );
  }
}

export default Home;