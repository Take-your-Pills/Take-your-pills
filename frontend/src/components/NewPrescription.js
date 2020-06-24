import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import DrugForm from "./DrugForm";

const NewPrescription = () => {
  return (
    <div>
      <TempDrug />
      <DrugForm />
    </div>
  );
};

export default NewPrescription;
