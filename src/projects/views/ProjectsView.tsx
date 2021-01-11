import React, {useEffect, useState} from "react";
import {ProjectsList} from "../components/ProjectsList";
import {ProjectCreationForm, ProjectCreationFormData} from "../components/ProjectCreationForm";
import {useProjects} from "../hooks/useProjects";

export const ProjectsView: React.FC = () => {
  const { projects, isFetching, fetchProjects, createProject } = useProjects();

  useEffect(() => {
    fetchProjects();
  }, []);

  const [error, setError] = useState<string | null>(null);

  const onProjectCreate = async (data: ProjectCreationFormData) => {
    const result = await createProject(data.name);

    if (!result) {
      setError("Something went wrong while creating the project.");
    } else {
      setError(null);
    }
  };

  return (
    <div>
      {error !== null && <div>{error}</div>}
      {isFetching ? <div>Fetching...</div> : <ProjectsList projects={projects} />}
      <ProjectCreationForm onSubmit={onProjectCreate} />
    </div>
  );
}