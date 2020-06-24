import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from '../context/UserContext';


export const PrescriptionContext = createContext();

const PrescriptionContextProvider = (props) => {

const [prescriptions, setPrescriptions] = useState([]);


  const getPrescriptions = (id) => {
    axios
      .get(`/prescriptions/${id}`)
      .then((response) => response.data)
      .then((prescriptionsList) => {
          console.log(prescriptionsList)
        setPrescriptions(prescriptionsList)
      });
  }

return (
    <div>
    <PrescriptionContext.Provider
        value={{ prescriptions, getPrescriptions }}
    >
        {props.children}
    </PrescriptionContext.Provider>
    </div>
);   
}

export default PrescriptionContextProvider;
