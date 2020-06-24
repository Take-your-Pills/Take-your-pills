import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const DrugsContext = createContext();

const DrugsContextProvider = (props) => {

const [drugs, setDrugs] = useState([]);

  useEffect(() => {
    getDrugs();
  }, []);

  const getDrugs = () => {
    axios
      .get("/drugs")
      .then((response) => response.data)
      .then((drugsList) => {
        console.log(drugsList)
        setDrugs(drugsList)
      });
  }

return (
    <div>
    <DrugsContext.Provider
        value={{ drugs }}
    >
        {props.children}
    </DrugsContext.Provider>
    </div>
);   
}

export default DrugsContextProvider;