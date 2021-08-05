import React from "react";
import './App.css';

import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import login from "./components/login";
import NavbarHere from "./components/NavbarHere";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <div className="App">
      <ToastContainer/>
      <NavbarHere/>
      <Switch>
        <Route exact path='/' component={login}/>
        <Route exact path='/signUp' component={SignUp}/>
      </Switch>
    </div>
  );
}

export default App;
