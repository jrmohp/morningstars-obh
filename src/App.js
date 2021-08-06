import React from "react";
import './App.css';

import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import login from "./components/login";
import NavbarHere from "./components/NavbarHere";
import SignUp from "./components/SignUp";
import Landing from "./components/Landing";
import ProviderList from "./components/ProviderList";
import Appointment from "./components/Appointment";

const App = () => {
  return (
    <div className="App">
      <ToastContainer/>
      <NavbarHere/>
      <Switch>
        <Route exact path='/' component={login}/>
        <Route exact path='/signUp' component={SignUp}/>
        <Route exact path='/home' component={Landing}/>
        <Route exact path='/provList' component={ProviderList}/>
        <Route exact path='/appointment' component= {Appointment}/>
      </Switch>
    </div>
  );
}

export default App;
