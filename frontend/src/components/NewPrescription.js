import React, { useContext, useState } from "react";
import DrugForm from "./DrugForm";
import { DrugsContext } from "../context/DrugsContext";
import TempDrug from "./TempDrug";
import { useForm } from "react-hook-form";
import { PrescriptionContext } from "../context/PrescriptionContext";
import { HourContext } from "../context/HourContext";

const NewPrescription = () => {
  const { tempDrugs } = useContext(DrugsContext);
  const { register, handleSubmit } = useForm();
  const { addPrescription } = useContext(PrescriptionContext);
  const { hours, addHours } = useContext(HourContext);

  const now_year = Number(new Date().getFullYear());
  const now_month = Number(new Date().getMonth() + 1);
  const now_day = Number(new Date().getDate());
  const nowDate = `${now_year}-${now_month}-${now_day}`;

  const [checkboxCheck, setCheckboxCheck] = useState(true);

  const toggleDate = () => {
    setCheckboxCheck(!checkboxCheck);
  };

  const onSubmit = (data) => {
    const startDate = data.date === "true" ? nowDate : data.date;
    console.log(startDate);

    const durationArr = tempDrugs.map((drug) => {
      return Number(drug.duration)
    });
    const prescriptionDuration = Math.max(...durationArr);
    const dateArr = startDate.split("-");
    const year = dateArr[0]
    const month = dateArr[1]
    const day = dateArr[2]
    const startingDate = new Date(year, month, day)
    startingDate.setDate(startingDate.getDate() + prescriptionDuration)
    const dd = startingDate.getDate();
    const mm = startingDate.getMonth();
    const yy = startingDate.getFullYear();
    const endDate = `${yy}-${mm}-${dd}`
    console.log(endDate)
    const newPrescriptionObject = {
      user_id:1,
      title: data.title,
      start_date: startDate,
      end_date: endDate,
      duration: prescriptionDuration,
      days_left: prescriptionDuration
    };

    console.log(newPrescriptionObject)

    console.log(tempDrugs)

    const drugsObject = tempDrugs.map(drug => {
      return ({
        id: drug.id,
        name: drug.name,
        duration: drug.duration,
        times_a_day: drug.times_a_day,
        dose: drug.dose,
        notes: drug.notes,
        doses_taken: drug.doses_taken,
        days_left: drug.days_left,
        doses_supposed: drug.doses_supposed
      }
    )}
    )
      
    console.log(drugsObject)
    addPrescription(newPrescriptionObject, drugsObject);
    addHours(hours)
  };

  return (
    <div>
      <h1>New Prescriptions</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label for="title">Prescription Title</label>
          <input type="text" id="title" name="title" ref={register} />
          <label for="start_date">Start date</label>
          <input
            type="checkbox"
            id="start_date"
            name="date"
            defaultChecked={checkboxCheck}
            value={checkboxCheck}
            onChange={toggleDate}
            ref={register}
          />
          {!checkboxCheck && <input type="date" name="date" ref={register} />}
        </div>
        <div>
          {tempDrugs.map((tempDrug) => {
            return <TempDrug tempDrug={tempDrug} key={tempDrug.name} />;
          })}
        </div>
        <DrugForm />
        <button type="submit">Create Prescriptions</button>
      </form>
    </div>
  );
};

export default NewPrescription;
