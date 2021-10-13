import React from "react";
import './index.css'



const Project = ({project}, i) => {
  return (
    <div className = "projectCard row-2">
      {console.log(project.image)}
      <a target = "_blank" href = {project.link} className="">
        <img
        src={project.image} 
        alt={project.name}
        className="col-10 img-thumbnail mx-1 project project_img"
        style={{width: '50%'}}
        key={i}
        />
      {console.log(project.name)}
      </a>
      <h3 className ="project-name" >{project.name}</h3>
      
    </div>
  );
};

export default Project;
