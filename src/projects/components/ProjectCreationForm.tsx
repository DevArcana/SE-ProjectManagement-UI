import React from "react";
import {useForm} from "react-hook-form";

export interface ProjectCreationFormData {
  name: string;
}

interface Props {
  onSubmit: (data: ProjectCreationFormData) => void;
}

export const ProjectCreationForm: React.FC<Props> = ({onSubmit}) => {
  const { register, handleSubmit, errors } = useForm<ProjectCreationFormData>();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name={"name"} defaultValue={"New Project"} ref={register({required: true})} />
        {errors.name && <span>Project's name is required!</span>}

        <input type={"submit"}/>
      </form>
    </div>
  );
}