import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

class NavComponent extends Component{
	render() {
		return (
			<nav>
	      <ul>
	        <li><Link to="/">Home</Link></li>
	        <li><Link to="/about-us">About Us</Link></li>
	        <li><Link to="/contact-us">Contact Us</Link></li>
	        <li><Link to="/cb-view">Color blindness view</Link></li>
	      </ul>
			</nav>
		);
	}
}

export default NavComponent;

