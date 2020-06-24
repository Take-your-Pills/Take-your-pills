import React, { useContext } from "react";
import DrugForm from "./DrugForm";
import { DrugsContext } from "../context/DrugsContext";
import TempDrug from "./TempDrug";

const NewPrescription = () => {
  const { tempDrugs } = useContext(DrugsContext);
  const now_year = Number(new Date().getFullYear());
  const now_month = Number(new Date().getMonth() + 1);
  const now_day = Number(new Date().getDate());
  const date = `${now_day}/${now_month}/${now_year}`;

  const toggleDate = () => {
    console.log(date);
    return date;
  };

  return (
    <div>
      <h1>New Prescriptions</h1>
      <div>
        <label for="start_date">Start date</label>
        <input type="checkbox" id="start_date" defaultChecked={date} />
      </div>
      <div>
        {tempDrugs.map((tempDrug) => {
          return <TempDrug tempDrug={tempDrug} key={tempDrug.name} />;
        })}
      </div>
      <DrugForm />
      <button onClick={toggleDate}>Create Prescriptions</button>
    </div>
  );
};

export default NewPrescription;
