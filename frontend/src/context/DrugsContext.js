import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const DrugsContext = createContext();

const DrugsContextProvider = (props) => {

const [drugs, setDrugs] = useState([]);

  const getDrugs = (id) => {
    axios
      .get(`/drugs/${id}`)
      .then((response) => response.data)
      .then((drugsList) => {
        setDrugs(...drugs, drugsList)
      });
  }

  const getSuccess = () => {
      const drugSuccess = drugs.map(drug => {
          const daysPassed = drug.duration - drug.days_left;
          const dosesThatShoudveBeenTaken = daysPassed * drug.times_a_day;
          const successRate = (drug.doses_taken / dosesThatShoudveBeenTaken) * 100
          drug.success = successRate

          return drug
      })
      setDrugs(drugSuccess)
      
  }

return (
    <div>
    <DrugsContext.Provider
        value={{ drugs, getDrugs, getSuccess }}
    >
        {props.children}
    </DrugsContext.Provider>
    </div>
);   
}

export default DrugsContextProvider;