import React from 'react';
import {  Outlet } from 'react-router-dom';


import { useNavigate,} from 'react-router-dom';

import "./Sidebar.css";
function Sidebar() {
  
 const navigate =useNavigate();

  return (
    <div  >
    <Outlet/>
    <div className='sidebar'>
<ul className='ul' > 
  <li >
    <button className='btn' onClick={()=>navigate("./books")} >
      Books
    </button>
  </li>

          <li>
          <button className='btn' onClick={()=>navigate("./page2")} >
      page2
    </button>
          </li>
       
          <li>
          <button className='btn' onClick={()=>navigate("./page3")} >
      page3
    </button>
          </li>
          </ul>
          
        
        </div>
        </div>
  );
}

export default Sidebar;