import React from "react";
import { useForm } from "react-hook-form";

const CreateAccount = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="name"
          type="text"
          placeholder="Enter your name"
          ref={register({ required: "Your name is required" })}
        />
        <input
          name="birthdate"
          type="date"
          placeholder="Enter your Birthday"
          ref={register({ required: "Your Birthday is required" })}
        />
        <select
          name="gender"
          ref={register({ required: "Your gender is required" })}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </form>
    </div>
  );
};

export default CreateAccount;
