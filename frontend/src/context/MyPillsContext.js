import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import uuid from "react-uuid";


export const MyPillsContext = createContext();

const MyPillsContextProvider = (props) => {

  const [myPills, setMyPills] = useState([]);
  const [allPills, setAllPills] = useState([]);

  const getPills = () => {
    axios
      .get("/drugs/mypills")
      .then((response) => response.data)
      .then((pillsList) => {
      });
  };

  useEffect(()=> {
      getPills()
  }, [])
  

    return (
        <div>
          <MyPillsContext.Provider value={{  }}>
            {props.children}
          </MyPillsContext.Provider>
        </div>
      );
}

export default MyPillsContextProvider;