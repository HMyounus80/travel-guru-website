import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Sajek from './Components/Booking/Sajek';
import Sreemongol from './Components/Booking/Sreemongol';
import Sundorbon from './Components/Booking/Sundorbon';
import Login from './Components/Login/Login';
import Booking from './Components/Booking/Booking';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [LoginUser, setLoginUser] = useState({})
  return (
    <UserContext.Provider value={[LoginUser, setLoginUser]}>
    <Router>
        <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/sajek">
              <Sajek/>
            </Route>
            <Route path="/sreemongol">
              <Sreemongol/>
            </Route>
            <Route path="/sundorbon">
              <Sundorbon/>
            </Route>
            <PrivateRoute path="/booking">
                <Booking/>
            </PrivateRoute>
            <Route path="/login">
                <Login/>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
    </Router>
   </UserContext.Provider>
  );
}

export default App;
