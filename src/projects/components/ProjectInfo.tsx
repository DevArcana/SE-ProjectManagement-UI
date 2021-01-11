import React from "react";
import {Project} from "../api/projectsAPI.types";

interface Props {
  project: Project;
}

export const ProjectInfo: React.FC<Props> = ({project}) => {
  return (
    <div>{project.id} {project.name}</div>
  );
}