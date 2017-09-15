import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.js';
import '../stylesheets/components/navbar.css';

class NavComponent extends Component{

	render() {
		return (

			<nav>
				<Link to="/"> <Logo /> </Link>
				<Link to="/instructions">CB TEST</Link>
        <Link to="/hue-test" onClick={this.resetHueTest}>HUE TEST</Link>
				<Link to="/color-view">CB SIMULATOR</Link>
	      <Link to="/about-us">ABOUT US</Link>
	      <Link to="/contact-us">CONTACT US</Link>
			</nav>
		);
	}
}

export default NavComponent;
