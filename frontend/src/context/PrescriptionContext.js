import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { useHistory } from "react-router-dom";

export const PrescriptionContext = createContext();

const PrescriptionContextProvider = (props) => {
  let history = useHistory();
  const [prescriptions, setPrescriptions] = useState([]);

  const getPrescriptions = (id) => {
    axios
      .get(`/prescriptions/${id}`)
      .then((response) => response.data)
      .then((prescriptionsList) => {
        console.log(prescriptionsList);
        setPrescriptions(prescriptionsList);
      });
  };

  const addPrescription = (PrescriptionObject, drugsObject) => {
    const prescriptionDrug = [PrescriptionObject, ...drugsObject];
    axios
      .post("/prescriptions", prescriptionDrug)
      .then((response) => console.log("please redirect"))
      .then((response) => history.push("/"));
  };

  const getPrescriptionsSuccess = (drugsList) => {
    const successArr = drugsList.map((drug) => {
      return drug.success;
    });

    const sum = successArr.reduce((a, b) => {
      return a + b;
    });

    const average = sum / drugsList.length;

    const prescriptionsSuccess = prescriptions.map((prescription) => {
      if (prescription.id === drugsList[0].id) {
        prescription.success = average;
      }
      return prescription;
    });
    setPrescriptions(prescriptionsSuccess);
  };

  return (
    <div>
      <PrescriptionContext.Provider
        value={{
          prescriptions,
          getPrescriptions,
          getPrescriptionsSuccess,
          addPrescription,
        }}
      >
        {props.children}
      </PrescriptionContext.Provider>
    </div>
  );
};

export default PrescriptionContextProvider;
