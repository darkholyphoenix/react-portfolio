import React from "react";



const Project = ({project}, i) => {
  return (
    <div className = "projectCard">
      {console.log(project.image)}
      <a target = "_blank" href = {project.link}>
        <img
        src={project.image} 
        alt={project.name}
        className="col-10 img-thumbnail mx-1 project"
        style={{width: '50%'}}
        key={i}
        />
      {console.log(project.name)}
      </a>
      <h3 className ="projectName" >{project.name}</h3>
      
    </div>
  );
};

export default Project;
