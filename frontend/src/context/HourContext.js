import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const HourContext = createContext();

const HourContextProvider = (props) => {
  const [hours, setHours] = useState([]);

  const addHours = (hoursObject) => {
    axios
      .post('/hours', hoursObject)
      .then((response) => console.log(response))
};

  const getHours = () => {
    axios
      .get("/hours")
      .then((response) => response.data)
      .then((hourList) => {
        console.log(hourList);
        setHours(hourList);
      });
  };

  return (
    <div>
      <HourContext.Provider value={{ hours, setHours, addHours }}>
        {props.children}
      </HourContext.Provider>
    </div>
  );
};

export default HourContextProvider;
