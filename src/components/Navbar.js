import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import './nav.scss';

class NavComponent extends Component{
	render() {
		return (
			<nav>
				<div className="nav-bar">
					<a href="#">About Us</a> |
					<a href="#">Contact Us</a> |
					<a href="#">Color blindness View</a>
				</div>
			</nav>
		);
	}
}

export default NavComponent;

