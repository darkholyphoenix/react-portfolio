import React from 'react'
import ID from "../../assets/cover/ID.jpg"
import Slate from '../../assets/cover/slate.jpg'
import './index.css'

function About() {

  return (
    <section className="my-5 " href="About" className="body" style={{ backgroundImage: `url(${Slate})` }} height="75vh">
      <h1 id="about" className="about-title" style={{color:'white'}}>About Me:</h1>
      <img src={ID} className="my-2 profilePic" style={{ width: "15%" }} alt="Personal Image" />
      <div className="my-2">
        <p className ="about-text"style={{color:'white'}}>
        Hello! My name is James Bowen. I am a Full-Stack Web Developer. I am a juris doctorate graduate student of St. Mary's University at San Antonio, TX. I have a Bachelor of Arts degree from the University of Texas at San Antonio. I live in San Antonio, TX. I'm a full stack web developer studied in HTML, CSS, and Javascript.
After many years in the legal world, I learned that there are a ton of problems in the world. However, unlike law there is not much creativity in the law. It was then that I decided to turn to Web development. All problems can be solved, and sometimes not in the most obvious way possible. I approach my projects with a very methodical way, in that every day is a learning experience.
      </p>
      </div>
    </section>
  )
}

export default About