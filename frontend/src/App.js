import React from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Router File Imports
import MyPrescription from "./components/MyPrescription";
import PresciptionInfo from "./components/PrescriptionInfo";
import NewPrescription from "./components/NewPrescription";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import MyPills from "./components/MyPills";

import PrescriptionContextProvider from "../src/context/PrescriptionContext";
import UserContextProvider from "../src/context/UserContext";
import DrugsContextProvider from "../src/context/DrugsContext";
import HourContextProvider from "../src/context/HourContext";
import MyPillsContextProvider from "../src/context/MyPillsContext";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <MyPillsContextProvider>
        <HourContextProvider>
          <PrescriptionContextProvider>
            <UserContextProvider>
              <DrugsContextProvider>
                <Switch>
                  <Route exact path="/" component={MyPrescription} />
                  <Route path="/login" component={Login} />
                  <Route path="/create-account" component={CreateAccount} />
                  <Route
                    path="/prescription-info"
                    component={PresciptionInfo}
                  />
                  <Route path="/new-prescription" component={NewPrescription} />
                  <Route path="/my-pills" component={MyPills} />
                </Switch>
              </DrugsContextProvider>
            </UserContextProvider>
          </PrescriptionContextProvider>
        </HourContextProvider>
        </MyPillsContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
