import React, { useContext, useState } from "react";
import { useForm , Controller} from "react-hook-form";
import Select from "react-select";

const DrugForm = () => {
  const { register, handleSubmit, control } = useForm();
  const [hoursNum, setHourNum] = useState([1])

  console.log(hoursNum)

  const handleChange = (event) => {

    const value = event.target.value
    
    switch(value){
      case '1':
        setHourNum([1]) 
        break;
      case '2':
        setHourNum([1, 2]) 
        break;
      case '3':
        setHourNum([1, 2, 3]) 
          break;
      case '4':
        setHourNum([1, 2, 3, 4]) 
          break;
      case '5':
        setHourNum([1, 2, 3, 4, 5]) 
          break;
    }
  }
  var startDate = new Date(2020, 5, 25);
  console.log(someDate)
  var numberOfDaysToAdd = 6;
  startDate.setDate(startDate.getDate() + numberOfDaysToAdd); 

  var dd = someDate.getDate();
  var mm = someDate.getMonth() + 1;
  var y = someDate.getFullYear();

  var someFormattedDate = `${dd}-${mm}-${y}`;

  console.log(someFormattedDate)

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
          onChange={handleChange}
        />
        {/*<Controller 
        as={<select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">2</option>
        </select>}
        control={control}
        rules={{ required: true }}
        onChange={([selected]) => {
          handleChange()
        }}
        name="reactSelect"
        defaultValue={{ value: "chocolate" }}
      >*/}
        
       {/* <Controller
        as={<select options={options} />}
        control={control}
        rules={{ required: true }}
        onChange={([selected]) => {
          handleChange()
        }}
        name="reactSelect"
        defaultValue={{ value: "chocolate" }}
      />*/}
        <input
          type="text"
          name="quantity"
          placeholder="Quantity Ex: 2 pills or 300miligrams"
          ref={register({ required: "The quantity is required" })}
        />
        {hoursNum.map(hour => {
          return <input
                    type="time"
                    name={`hour${hour}`}
                    placeholder="hour"
                    ref={register({
                    required: "The time when you need to take the drug is required",
          })}
        />
        })}
        
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
