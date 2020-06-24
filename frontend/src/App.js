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

function App() {
  // Example Connection to the Express Server
  React.useEffect(() => {
    axios.get("/api").then((res) => console.log(res.data));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MyPrescription} />
          <Route path="/login" component={Login} />
          <Route path="/create-account" component={CreateAccount} />
          <Route path="/prescription-info" component={PresciptionInfo} />
          <Route path="/new-prescription" component={NewPrescription} />
          <Route path="/my-pills" component={MyPills} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
