import React from 'react';

const Project = (category) => {

return(
<div
            src={require(`../../assets/projects/${category}/${i}.jpg`)}
            alt={project.name}
            className="img-thumbnail mx-1"
            key={project.name}
          >
          <h4>{project.name}</h4>
          </div>
)
}


export default Project;