import React from "react";
import {ProjectInfo} from "./ProjectInfo";
import {Project} from "../api/projectsAPI.types";

interface Props {
  projects: Project[]
}

export const ProjectsList: React.FC<Props> = ({projects}) => {
  return (
    <div>
      <h3>projects</h3>
      {projects.map(project => <ProjectInfo key={project.id} project={project}/>)}
    </div>
  );
}