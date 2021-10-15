import React, { useState } from 'react';
import Project from '../Project/Project';
import photoPort from '../../assets/projects/01.png';
import pizzaHunt from '../../assets/projects/03.png';
import recipeGame from '../../assets/projects/02.png';
import teamProfile from '../../assets/projects/04.png';
import readMe from '../../assets/projects/05.png';
import eCommerce from '../../assets/projects/06.png'
import freeMaps from '../../assets/projects/07.jpg'
import Slate from '../../assets/cover/slate.jpg'
import './index.css'





const Portfolio = ({ category }) => {

  const [projects] = useState([
    { 
      name: 'Free-maps',
      category: 'project',
      link: 'https://github.com/bleakney/free-maps',
      image: freeMaps

    },
    { 
      name: 'Photo-Port',
      category: 'project',
      link: 'https://github.com/darkholyphoenix/photo-port',
      image: photoPort

    },
    {
      name: 'Drink-Recipe game',
      category: 'project',
      link: 'https://janekv20.github.io/drink-recipe-game/',
      image: recipeGame

    },
    {
      name: 'Pizza Hunt',
      category: 'project',
      link: 'https://github.com/darkholyphoenix/pizza-hunt',
      image: pizzaHunt
    },
    {
      name: 'Team Profile Generator',
      category: 'project',
      link: 'https://github.com/darkholyphoenix/team-profile-generator',
      image: teamProfile
    },
    {
      name: 'Professional README Generator',
      category: 'project',
      link: 'https://github.com/darkholyphoenix/professional-readme-generator',
      image: readMe
    },
    {
      name: 'E-commerce back-end',
      category: 'project',
      link: 'https://github.com/darkholyphoenix/e-commerce-back-end',
      image: eCommerce
    }
  ]);

  // const currentProjects = projects.filter((project) => project.category === category);

  return (
    <div  href="#Portfolio " className ="portfolio container body" style={{ backgroundImage: `url(${Slate})` }} >
      <div className="row portfolio">
        <div className="col-6">
        {console.log('these are my projects', projects)}
        {projects.map((project, i) => (
          <Project
           project={project}
          key={"Project #" + i}
          />
        ))}
        </div>
      </div>
    </div>
  );
};

//

export default Portfolio;