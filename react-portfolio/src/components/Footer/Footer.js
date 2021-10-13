import React from 'react'
import Wood from '../../assets/cover/wood.jpg'
import { DiGithubBadge } from 'react-icons/di';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import '../../index.css'
import './index.css'

function Footer() {

  return (
    <section className="mx-3 footer" style={{ backgroundImage: `url(${Wood})`}} >
      <div id="middle_heading" className ="icon-bar">  
        <a className="link-icon"  target = "_blank" href="https://github.com/darkholyphoenix">
        <DiGithubBadge className="link-icon" icon={DiGithubBadge} size="5em" width="5%"  />      
        </a>
        <a target = "_blank" href="https://www.linkedin.com/in/james-bowen-061b7520b" >
        <FaLinkedin className="link-icon" icon={FaLinkedin} size="5em" width="5%" />      
        </a> 
        <a target = "_blank" href="https://twitter.com/JDBowen_1821" >
        <FaTwitter className="link-icon" icon={FaTwitter} size="5em" width="5%" />      
        </a>    
</div>
    </section>
  )
}

export default Footer