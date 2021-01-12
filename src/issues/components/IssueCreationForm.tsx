import React from "react";
import {useForm} from "react-hook-form";

export interface IssueCreationFormData {
  name: string;
  description: string | null;
}

interface Props {
  onSubmit: (data: IssueCreationFormData) => void;
}

export const IssueCreationForm: React.FC<Props> = ({onSubmit}) => {
  const { register, handleSubmit, errors } = useForm<IssueCreationFormData>();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name={"name"} defaultValue={"New issue"} ref={register({required: true})} />
        {errors.name && <span>Project's name is required!</span>}

        <input name={"description"} defaultValue={"Describe your issue"} ref={register} />

        <input type={"submit"}/>
      </form>
    </div>
  );
}