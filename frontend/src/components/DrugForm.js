import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { DrugsContext } from "../context/DrugsContext";
import { HourContext } from "../context/HourContext";

const DrugForm = () => {
  const { register, handleSubmit } = useForm();
  const { addTempDrugs } = useContext(DrugsContext);
  const { addHour } = useContext(HourContext);

  const onSubmit = (data) => {
    console.log(data);
    const newDrugObj = {
      name: data.name,
      duration: data.duration,
      time_a_day: data.time_a_day,
      dose: data.dose,
      notes: data.notes,
      hour: data.hour,
    };
    const newHourObj = { hour: data.hour };
    addTempDrugs(newDrugObj);
    console.log(newHourObj);
    addHour(newHourObj);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label for="name">Drug Name : </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Ex: Aspirin"
          ref={register({ required: "The name is Required" })}
        />
        <br />
        <label for="duration">Duration : </label>
        <input
          id="duration"
          type="number"
          name="duration"
          placeholder="Ex: 5"
          ref={register({ required: "The duration is required" })}
        />
        <br />
        <label for="time_a_day">How many time per day : </label>
        <input
          id="time_a_day"
          type="number"
          name="time_a_day"
          placeholder="Ex: 3"
          ref={register({
            required:
              "You need to enter how many times you have to take the drug per day",
          })}
        />
        <br />
        <label for="dose">Doses for each takes : </label>
        <input
          id="dose"
          type="text"
          name="dose"
          placeholder="Ex: 2 pills or 300 miligrams"
          ref={register({ required: "The quantity is required" })}
        />
        <br />
        <label for="hour">Hour when it should taked : </label>
        <input
          id="hour"
          type="time"
          name="hour"
          placeholder="hour"
          ref={register({
            required: "The time when you need to take the drug is required",
          })}
        />
        <br />
        <label for="notes">Notes : </label>
        <textarea
          row="5"
          cols="50"
          id="notes"
          name="notes"
          placeholder="Ex: Take it 15min before Lunch"
          ref={register}
        ></textarea>
        <br />
        <button type="submit">Add Drug</button>
      </form>
    </div>
  );
};

export default DrugForm;
