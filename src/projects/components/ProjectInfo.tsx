import React from "react";
import {Project} from "../api/projectsAPI.types";
import {Link} from "react-router-dom";
import {Routes} from "../../routing/routes";

interface Props {
  project: Project;
}

export const ProjectInfo: React.FC<Props> = ({project}) => {
  return (
    <div>
      <Link to={Routes.ISSUES.replace(":projectId", project.id.toString())}>{project.id} {project.name}</Link>
    </div>
  );
}