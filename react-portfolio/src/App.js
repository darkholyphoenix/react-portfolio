import React from 'react';
import About from './components/About/About';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
      <Nav/>
      <main>
        <About/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;