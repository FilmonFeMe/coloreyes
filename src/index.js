import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import AboutUs from './components/AboutUs.js';
import ContactForm from './components/ContactForm.js';
import ColorBlindnessView from './components/ColorBlindnessView.js';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const OtherComponent = () => (
 <div>Other component is rendered as well</div>
)

const root = document.getElementById('root');

ReactDOM.render(
<Router>
    <div>
      <Navbar></Navbar>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route exact path="/" component={OtherComponent}/>
      <Route path="/about-us" component={AboutUs}/>
      <Route path="/contact-us" component={ContactForm}/>
      <Route path="/color-view" component={ColorBlindnessView}/>
    </div>
  </Router>,
 root);
registerServiceWorker();
