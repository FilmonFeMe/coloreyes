import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import NavbarLogo from './NavbarLogo.js';
import '../stylesheets/components/navbar.css';

class NavComponent extends Component{

	render() {
		return (

			<nav className="navbar navbar-default">
			<div className="container">
				<div className="navbar-header">
					{/* <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>                        
					</button> */}
					<a className="navbar-brand" href="#">LOGO</a>
				</div>
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
		);
	}
}

export default NavComponent;
