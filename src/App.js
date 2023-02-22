import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";
import Signin from "./Signin";
import Dashboard from './Dashboard';
function App() {


  return (
    
    <Router>
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/signup" element={ <Signup/> } />
        <Route path="/signin" element={ <Signin/> } />
        <Route path ="/dashboard" element= { <Dashboard/>}/>
        </Routes>
      </Router>
    
  )
  };

export default App;
