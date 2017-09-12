import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Navbar from './components/Navbar.js';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Instruction from './components/Instruction.js';
import AboutUs from './components/AboutUs.js';
import ContactForm from './components/ContactForm.js';
import ColorBlindnessView from './components/ColorBlindnessView.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SortableComponent from './components/SortableItem.js'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'

const root = document.getElementById('root');
const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <Navbar></Navbar>
        <hr/>
        <Header></Header>
        <Route exact path="/" component={Home}/>
        {/*<Route exact path="/" component={OtherComponent}/>*/}

        <Route path="/instructions" component={Instruction}/>
        <Route path="/quiz" component={App}/>
        <Route path="/about-us" component={AboutUs}/>
        <Route path="/contact-us" component={ContactForm}/>
        <Route path="/color-view" component={ColorBlindnessView}/>
        <Route path="/sortable-item" component={SortableComponent}/>
      </div>
    </Router>
  </Provider>,
 root);
registerServiceWorker();
