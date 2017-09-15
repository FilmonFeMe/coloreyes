import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import NavbarLogo from './NavbarLogo.js';
import '../stylesheets/components/navbar.css';

class NavComponent extends Component{

	resetHueTest(){
        this.setState({
            results:false
          });
      }

	render() {
		return (

			<nav>
				<Link to="/">HOME</Link>
				<Link to="/instructions">CB TEST</Link>
        <Link to="/hue-test" onClick={this.resetHueTest}>HUE TEST</Link><span> | </span>
				<Link to="/color-view">CB SIMULATOR</Link>
	      <Link to="/about-us">ABOUT US</Link>
	      <Link to="/contact-us">CONTACT US</Link>
			</nav>
		);
	}
}

export default NavComponent;
