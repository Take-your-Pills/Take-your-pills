import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";

export const PrescriptionContext = createContext();

const PrescriptionContextProvider = (props) => {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    getPrescriptions();
  }, []);

  const getPrescriptions = () => {
    axios
      .get("/prescriptions")
      .then((response) => response.data)
      .then((prescriptionsList) => {
        console.log(prescriptionsList);
        setPrescriptions(prescriptionsList);
      });
  };

  const addPrescription = (newPrescriptionObj) => {
    setPrescriptions([...prescriptions, newPrescriptionObj]);
  };

  return (
    <div>
      <PrescriptionContext.Provider value={{ prescriptions, addPrescription }}>
        {props.children}
      </PrescriptionContext.Provider>
    </div>
  );
};

export default PrescriptionContextProvider;
