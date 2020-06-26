import React, { useContext, useState } from "react";

import { useForm } from "react-hook-form";
import { DrugsContext } from "../context/DrugsContext";
import { HourContext } from "../context/HourContext";
import uuid from "react-uuid";


const DrugForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const { addTempDrugs } = useContext(DrugsContext);
  const { addHour, setHours } = useContext(HourContext);

  const[hoursNum, setHoursNum] = useState([0])

  const onSubmit = (data) => {
    console.log(data);
    const newDrugObj = {
      id: uuid(),
      name: data.name,
      duration: Number(data.duration),
      times_a_day: Number(data.times_a_day),
      dose: data.dose,
      notes: data.notes,
      doses_taken: 0,
      days_left: Number(data.duration),
      doses_supposed:0
    };
    const hoursValues = []
    for(let i = 0; i < Number(data.times_a_day) ; i++){
      console.log(data)
      const hour = `hour${i}`
      console.log(data[hour])
      hoursValues.push(data[hour])
    }
    console.log(hoursValues)
    const hoursObject = hoursValues.map( time => {
      return {hour: `${time}:00`, drug_id: newDrugObj.id}
    })

    reset({
      name: "",
      duration: "",
      dose: "",
      times_a_day: 1,
      hour:"",
      notes:""
  });

  setHoursNum([0])

    console.log(newDrugObj)
    console.log(hoursObject)
    addTempDrugs(newDrugObj);
    setHours(hoursObject);
  };

  const handleChange = (event) => {
    const value = event.target.value

    const hoursArr = []

    for(let i = 0 ; i < value; i++){
        hoursArr.push(i)
    }

    setHoursNum(hoursArr)

  }
  return (
    <div>
      <form className="drug-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="label-input">
        <label for="name">Drug Name : </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Ex: Aspirin"
          ref={register({ required: "The name is Required" })}
        />
        </div>
        <div className="label-input">
        <label for="duration">Duration : </label>
        <input
          id="duration"
          type="number"
          name="duration"
          placeholder="Ex: 5"
          ref={register({ required: "The duration is required" })}
        />
        </div>
        <div className="label-input">
        <label for="times_a_day">How many time per day : </label>
        <select id="times_a_day"
        name="times_a_day"
        ref={register({
          required:
            "You need to enter how many times you have to take the drug per day",
        })}
        onChange={handleChange}
        >
          <option value="1">1 time a day</option>
          <option value="2">2 times a day</option>
          <option value="3">3 times a day</option>
          <option value="4">4 times a day</option>
          <option value="5">5 times a day</option>
        </select>
        </div>
        
        <div className="hours">
        {hoursNum.map(hour => {
          return (
          <div className="label-input">
            <label for={`hour${hour}`}>hour {hour + 1} </label>
            <input
              id={`hour${hour}`}
              type="time"
              name={`hour${hour}`}
              ref={register({
                required: "The time when you need to take the drug is required",
              })}
            />  
          </div>)
          
        })}
        </div>
        <div className="label-input">
        <label for="dose">Doses: </label>
        <input
          id="dose"
          type="text"
          name="dose"
          placeholder="Ex: 2 pills or 300 miligrams"
          ref={register({ required: "The quantity is required" })}
        />
        </div>
        
        <div className="label-input">
        <label for="notes">Notes : </label>
        <textarea
          row="5"
          cols="50"
          id="notes"
          name="notes"
          placeholder="Ex: Take it 15min before Lunch"
          ref={register}
        ></textarea>
        </div>
        <button type="submit">Add Drug</button>
      </form>
    </div>
  );
};

export default DrugForm;
