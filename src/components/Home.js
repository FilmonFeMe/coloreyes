import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render(){
    return (
      <div>
        <p>Welcome to our color blindness test!!!</p>
        <Link to="/instructions"><button>Take the Test</button></Link>
      </div>
    );
  }
}

export default Home;