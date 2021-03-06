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
import NoMatch from './Components/NoMatch/NoMatch';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
            <Route path="*">
              <NoMatch/>
            </Route>
          </Switch>
    </Router>
   </UserContext.Provider>
  );
}

export default App;
