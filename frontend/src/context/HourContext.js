import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const HourContext = createContext();

const HourContextProvider = (props) => {
  const [hours, setHours] = useState([]);

  useEffect(() => {
    getHours();
  }, []);

  const addHour = (newHourObj) => {
    setHours([...hours, newHourObj]);
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
      <HourContext.Provider value={{ hours, addHour }}>
        {props.children}
      </HourContext.Provider>
    </div>
  );
};

export default HourContextProvider;
