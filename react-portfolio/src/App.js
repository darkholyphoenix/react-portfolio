import React from 'react';
import About from './components/About/About';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';
import ContactForm from './components/Contact/Contact';
import {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import './index.css'


function App() {
  const [categories] = useState([
    {
      name: 'projects',
      description: 'A different showcase of my work'
    },

  ])

  const [currentCategory] =useState(categories[0]);

  //const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav/>
      <main className= "mainImage">
        <Route path="/about" component= {About}/>
        <Route path="/Portfolio" component= {Portfolio}/>
        <Route path="/contact" component= {ContactForm}/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;