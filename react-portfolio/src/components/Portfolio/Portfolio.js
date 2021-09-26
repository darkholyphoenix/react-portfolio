import React, { useState } from 'react';
import Project from './Project/Project'


const Portfolio = ({ category }) => {
  const [currentPortfolio] = useState();

  const [projects] = useState([
    { 
      name: 'Photo-Port',
      category: 'project',
      link: 'https://github.com/darkholyphoenix/photo-port',

    },
    {
      name: 'Drink-Recipe game',
      category: 'project',
      link: 'https://janekv20.github.io/drink-recipe-game/'
    },
    {
      name: 'Pizza Hunt',
      category: 'project',
      link: 'https://github.com/darkholyphoenix/pizza-hunt',
    },
    {
      name: 'Team Profile Generator',
      category: 'project',
      link: 'https://github.com/darkholyphoenix/team-profile-generator'
    },
    {
      name: 'Professional README Generator',
      category: 'project',
      link: 'https://github.com/darkholyphoenix/professional-readme-generator'
    },
    {
      name: 'E-commerce back-end',
      category: 'project',
      link: 'https://github.com/darkholyphoenix/e-commerce-back-end'
    }
  ]);

  const currentPortfolio = projects.filter((project) => project.category === category);

  return (
    <div>
      <div className="flex-row">
        {currentPortfolio.map((project, i) => (
          <Project
          project={project}
          key={"Project #" + 1}
          />
        ))}
      </div>
    </div>
  );
};

//

export default Portfolio;
