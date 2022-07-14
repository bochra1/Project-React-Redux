import React from "react";
const ProjectSummary  = ({project}) => {
    return (
        <div className="card z-depth-0 project-summary">
                <span className="card-title">{project.title}</span>
                <p>Posted By Bochra</p>
                <p className="grey-text">13 july, 2022</p>
            </div>
      );
}
 
export default ProjectSummary;