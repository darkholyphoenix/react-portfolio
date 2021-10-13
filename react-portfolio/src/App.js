import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About/About';
import NavBar from './components/Nav/NavBar';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';
import ContactForm from './components/Contact/Contact';
import Resume from './components/Resume/Resume'
import Home from './components/Home/Home'
import {useState} from 'react';
import './index.css'




function App() {

  return (

      <Router>
        <NavBar  />
        <Switch>
		<Route exact path="/">
      	<Home />
    	</Route>
          <Route path='/about' component={About} />
          <Route path='/contact' component={ContactForm} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/resume' component={Resume} />
        </Switch>
        <Footer/>
      </Router>
    );
  }

export default App;