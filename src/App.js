import React from "react";
import './App.css';

import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./components/Login";
import NavbarHere from "./components/NavbarHere";
import SignUp from "./components/SignUp";
import Landing1 from "./components/Landing1";
import ProviderList1 from "./components/ProviderList1";
import Appointment1 from "./components/Appointment1";
import logout from "./components/logout";

const App = () => {

  return (
    <div className="App">
      <ToastContainer/>
      <NavbarHere/>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/signUp' component={SignUp}/>
        <Route exact path='/home' component={Landing1}/>
        <Route exact path='/provList' component={ProviderList1}/>
        <Route exact path='/Appointment' component= {Appointment1}/>
        <Route exact path='/logout' component= {logout}/>
      </Switch>
    </div>
  );
}

export default App;
