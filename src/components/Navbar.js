import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.js';
import '../stylesheets/components/navbar.css';

class NavComponent extends Component{

	render() {
		return (
			<div>
			<nav id="nb" className="navbar">
			<div className="container">
				<div className="collapse navbar-collapse" id="myNavbar">
					<ul className="nav navbar-nav navbar-right">
					<li><Link to="/">HOME</Link></li>
					<li><Link to="/about-us">ABOUT US</Link></li>
					<li><Link to="/color-view">SIMULATOR</Link></li>
					<li><Link to="/contact-us">CONTACT US</Link></li>
					</ul>
				</div>
			</div>
		</nav>
		<div id="eye-logo"><Logo/><h1 id="lh1">ColorEyes</h1></div>
		</div>
		);
	}
}

export default NavComponent;
