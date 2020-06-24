import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

const UserContextProvider = (props) => {

const [user, setUser] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios
      .get("/prescriptions")
      .then((response) => response.data)
      .then((userInfo) => {
        console.log(userInfo)
        setUser(userInfo)
      });
  }

return (
    <div>
    <UserContext.Provider
        value={{ user }}
    >
        {props.children}
    </UserContext.Provider>
    </div>
);   
}

export default UserContextProvider;