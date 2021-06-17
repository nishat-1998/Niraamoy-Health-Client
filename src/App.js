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
import Header from './Components/Header/Header';
import CheckOut from './Components/CheckOut/CheckOut';
function App() {



  return (
    <div className="container">
     <Router>
       <Header/>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/checkOut/:productId">
              <CheckOut/>
            </Route>
          <Route exact path="/">
              <Home />
            </Route>
        </Switch>
      
    </Router>
      
    </div>
  );
}

export default App;
