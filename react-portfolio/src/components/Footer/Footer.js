import React from 'react'
import Wood from '../../assets/cover/wood.jpg'
import { DiGithubBadge } from 'react-icons/di';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

function Footer() {

  return (
    <section className="mx-3" style={{ backgroundImage: `url(${Wood})`}} >
      <div id="middle_heading">  
        <a href="https://github.com/darkholyphoenix">
        <DiGithubBadge icon={DiGithubBadge} size="5em" width="5%" />      
        </a>
        <a href="www.linkedin.com/in/james-bowen-061b7520b">
        <FaLinkedin icon={FaLinkedin} size="5em" width="5%"/>      
        </a> 
        <a href="https://twitter.com/JDBowen_1821">
        <FaTwitter icon={FaTwitter} size="5em" width="5%"/>      
        </a>    
</div>
    </section>
  )
}

export default Footer