import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Home from './Components/Home/Home';
//import Header from './Components/Header/Header';
import CheckOut from './Components/CheckOut/CheckOut';
//import Headers from './Components/Headers/Headers';
//import Sidebar from './Components/SharedComponent/Sidebar/SideBar';
function App() {



  return (
    
    <Router>
    
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/checkOut/:productId">
            
            </Route>
          <Route exact path="/">
            <Home />
          </Route>
      </Switch>
    
  </Router>
      
    
  );
}

export default App;