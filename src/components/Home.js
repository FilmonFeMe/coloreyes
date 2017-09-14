import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render(){
    return (
      <div>
<<<<<<< HEAD
        <div className="logo">
        </div>
      <img src="/images/homepage-image.jpg" style = {{width: "860px" }} />
=======
      <img className="homepage-image" src="/images/homepage-image.jpg" alt="Home"/>
>>>>>>> development
        <p>Welcome to our color blindness test!!!</p>
        <Link to="/instructions"><button>Take the Test</button></Link>
      </div>
    );
  }
}

export default Home;
