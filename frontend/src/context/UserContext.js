import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

const UserContextProvider = (props) => {

const [user, setUser] = useState([]);

  const getUser = () => {
    axios
      .get("/users/1")
      .then((response) => response.data)
      .then((userInfo) => {
        console.log(userInfo)
        setUser(userInfo)
      });
  }

return (
    <div>
    <UserContext.Provider
        value={{ user, getUser }}
    >
        {props.children}
    </UserContext.Provider>
    </div>
);   
}

export default UserContextProvider;