import React from 'react'
import Slate from '../../assets/cover/slate.jpg'
import './index.css'
import Particles from "react-particles-js";

function Home() {

  return (


    <section className="my-5 body " href="Home" style={{ backgroundImage: `url(${Slate})` }} height="75vh">

<h1 id="home" className="welcome-title"style={{color:'white'}}>Welcome!</h1>

      <Particles
      className="particles-board"
      params={{
        "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 5,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0.75,
	                "opacity": 1
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
      }}></Particles>
      
      
      <div className="my-2 ">
      
        <p className="welcome-text" style={{color:'white'}}>
        I am J.D. and welcome to my portfolio! I am still a developing web developer so I am constantly learning. This site will be updated as my skills grow in an effort to showcase my abilities and skills. I hope you all enjoy your visit!
      </p>
      </div>
    </section>
  )
}

export default Home