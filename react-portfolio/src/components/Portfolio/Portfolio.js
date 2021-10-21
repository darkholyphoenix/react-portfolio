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
      image: freeMaps,
      description: 'Find free items on the go! Check out the free-maps, someone elses trash may be the item you need!. Free-map is a non-profit website, allowing users to search for charities and donate to a personal cause of their choosing. The application incorporates the full "MERN" stack, featuring a Mongo Database that saves user information.',
      deployedLink: 'https://tranquil-garden-66594.herokuapp.com'

    },
    { 
      name: 'Photo-Port',
      category: 'project',
      link: 'https://github.com/darkholyphoenix/photo-port',
      image: photoPort,
      description: 'This project was a basic use of the React.js with the useEffect and useState to showoff a photographers work',
      deployedLink: 'Clink the image to be taken to my Github!'
      

    },
    {
      name: 'Drink-Recipe game',
      category: 'project',
      link: 'https://janekv20.github.io/drink-recipe-game/',
      image: recipeGame,
      description: 'This application enables users to play a game to randomly receive drink recipes and collect total scores for each drink category they receive. If users want to search for breweries in their city, they can type their city name and receive 5 results of local places and their address.',
      deployedLink: 'https://janekv20.github.io/drink-recipe-game'

    },
    {
      name: 'Pizza Hunt',
      category: 'project',
      link: 'https://github.com/darkholyphoenix/pizza-hunt',
      image: pizzaHunt,
      description: 'This code was a project that used Model-View-Controller in order to order a pizza',
      deployedLink: "Visit my github to clone the code"
    },
    {
      name: 'Team Profile Generator',
      category: 'project',
      link: 'https://github.com/darkholyphoenix/team-profile-generator',
      image: teamProfile,
      description: 'This code uses Node.js, and Object-Oriented Programming (OOP) to help create a team profile Generator that keeps and inventory of your teammates. Be them a manager, engineer, or intern. Keep track of their Id numbers, emails, github profiles for engineers, and what school your interns went to.',
      deployedLink: 'Clink the image to be taken to my Github!'
    },
    {
      name: 'Professional README Generator',
      category: 'project',
      link: 'https://github.com/darkholyphoenix/professional-readme-generator',
      image: readMe,
      description: 'This professional README Generator was developed using Node.js and Inquirer. Asking for the users input to help generate a README file for the user to use.',
      deployedLink: 'Clink the image to be taken to my Github!'
    },
    {
      name: 'E-commerce back-end',
      category: 'project',
      link: 'https://github.com/darkholyphoenix/e-commerce-back-end',
      image: eCommerce,
      description: 'This code uses Node.js, Sql, mySql2, Express, and Doteny to help faciliate a database of products, categories, and Product Tags to be used to itemized and keep track of prices and the stock of how many items are available.',
      deployedLink: 'Clink the image to be taken to my Github!'
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
