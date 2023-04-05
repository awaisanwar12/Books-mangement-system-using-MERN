import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";
import Signin from "./Signin";
import Books from './Books';
import Page2 from './Page2';
import Page3 from './Page3';
import PageNotFound from './PageNotfound';

import Auth from "./Auth";

function App() {
  
  return (
    <div>

    
    <Router>
    <Routes>
        <Route path="/" element={ <Auth/> } >
        
          <Route path="/books" element ={<Books/>}/>
          <Route path ="/page2" element={<Page2/>}/>
          <Route path ="/page3" element={<Page3/>}/> 
          <Route index element={<Home/>}/>

        </Route>
        <Route path="/signup" element={ <Signup/> } />
        <Route path="/signin" element={ <Signin/> } />
        
        <Route path="*" element={<PageNotFound/>} />
        
        </Routes>
      </Router>
    </div>
  );
  }
 
  
  export default App;
  
  
  
  
  
  
  


