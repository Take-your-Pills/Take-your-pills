import React, { useContext } from "react";
import { useForm } from "react-hook-form";

const DrugForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const newDrugObj = {
      name: data.name,
      duration: data.duration,
      time_a_day: data.time_a_day,
      quantity: data.quantity,
      notes: data.notes,
    };
    const NewHourObj = {
      hour: data.hour,
    };
    console.log(newDrugObj);
    console.log(NewHourObj);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="name"
          placeholder="Drug Name"
          ref={register({ required: "The name is Required" })}
        />
        <input
          type="number"
          name="duration"
          placeholder="Duration - How many days you need to take that drug : Ex: 5"
          ref={register({ required: "The duration is required" })}
        />
        <input
          type="number"
          name="time_a_day"
          placeholder="How often - How many times you need to take that drug per day Ex: 3"
          ref={register({
            required:
              "You need to enter how many times you have to take the drug per day",
          })}
        />
        <input
          type="text"
          name="quantity"
          placeholder="Quantity Ex: 2 pills or 300miligrams"
          ref={register({ required: "The quantity is required" })}
        />
        <input
          type="time"
          name="hour"
          placeholder="hour"
          ref={register({
            required: "The time when you need to take the drug is required",
          })}
        />
        <input
          type="text"
          name="notes"
          placeholder="Specifications Ex: Take this 15min before lunch"
          ref={register}
        />
        <button type="submit">Add Drug</button>
      </form>
    </div>
  );
};

export default DrugForm;
