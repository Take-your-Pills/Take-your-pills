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

  const getDrugs = () => {
    axios
      .get("/drugs")
      .then((response) => response.data)
      .then((drugsList) => {
        console.log(drugsList);
        setDrugs(drugsList);
      });
  };

  return (
    <div>
      <DrugsContext.Provider value={{ drugs, tempDrugs, addTempDrugs }}>
        {props.children}
      </DrugsContext.Provider>
    </div>
  );
};

export default DrugsContextProvider;
