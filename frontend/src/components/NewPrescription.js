import React, { useContext, useState } from "react";
import DrugForm from "./DrugForm";
import { DrugsContext } from "../context/DrugsContext";
import TempDrug from "./TempDrug";
import { useForm } from "react-hook-form";
import { PrescriptionContext } from "../context/PrescriptionContext";

const NewPrescription = () => {
  const { tempDrugs } = useContext(DrugsContext);
  const { register, handleSubmit } = useForm();
  const { addPrescription } = useContext(PrescriptionContext);

  const now_year = Number(new Date().getFullYear());
  const now_month = Number(new Date().getMonth() + 1);
  const now_day = Number(new Date().getDate());
  const nowDate = `${now_year}, ${now_month}, ${now_day}`;

  const [checkboxCheck, setCheckboxCheck] = useState(true);

  const toggleDate = () => {
    setCheckboxCheck(!checkboxCheck);
  };

  const onSubmit = (data) => {
    console.log(data);
    const startDate = data.date === true ? nowDate : data.date;
    const dateArr = tempDrugs.map((drug) => {
      return drug.duration;
    });
    const duration = Math.max(dateArr);
    const year = Number(new Date(startDate).getFullYear());
    const month = Number(new Date(startDate).getMonth());
    const day = Number(new Date(startDate).getDate());
    console.log(year, month, day);
    const newPrescriptionObject = {
      title: data.title,
      start_date: startDate,
    };
    addPrescription(newPrescriptionObject);
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
