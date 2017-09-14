import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.js';

class NavComponent extends Component{
	render() {
		return (
			<nav>
	      <Link to="/">
				<div className="logo"></div>
				</Link><span> | </span>
	      <Link to="/about-us">About Us</Link><span> | </span>
	      <Link to="/contact-us">Contact Us</Link><span> | </span>
	      <Link to="/color-view">Color blindness view</Link>
			</nav>
		);
	}
}

export default NavComponent;
