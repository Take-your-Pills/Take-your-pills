import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DrugsContext = createContext();

const DrugsContextProvider = (props) => {
  const [drugs, setDrugs] = useState([]);
  const [tempDrugs, setTempDrugs] = useState([]);


  useEffect(() => {
    getDrugs();
  }, []);

  const addTempDrugs = (newDrugObj) => {
    setTempDrugs([...tempDrugs, newDrugObj]);
  };

  const getDrugs = (id) => {

    console.log(id)
    axios
      .get(`/drugs/${id}`)
      .then((response) => response.data)
      .then((drugsList) => {
         console.log(drugsList);
        setDrugs(...drugs, drugsList);
     });
  };

  const getSuccess = () => {
      console.log(drugs)
      const drugSuccess = drugs.map(drug => {
          const daysPassed = drug.duration - drug.days_left;
          const dosesThatShoudveBeenTaken = daysPassed * drug.times_a_day;
          const successRate = (drug.doses_taken / dosesThatShoudveBeenTaken) * 100
          drug.success = successRate

          return drug
      })
      console.log(drugSuccess)
      setDrugs(drugSuccess)
      
  }

return (
    <div>
    <DrugsContext.Provider
        value={{ drugs, getDrugs, getSuccess, tempDrugs, addTempDrugs }}
    >
        {props.children}
      </DrugsContext.Provider>
    </div>
  );
};

export default DrugsContextProvider;
