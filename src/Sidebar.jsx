import { Link, Outlet } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from "./Page2";
import Page3 from './Page3';
import { useNavigate,} from 'react-router-dom';
import "./Sidebar.css";
function Sidebar() {
  
 const navigate =useNavigate();

  return (
    <div >
    <Outlet/>
    <div className='body'>
<ul className='ul' > 
  <li>
    <button onClick={()=>navigate("./page1")} >
      page1
    </button>
  </li>

          <li>
          <button onClick={()=>navigate("./page2")} >
      page2
    </button>
          </li>
       
          <li>
          <button onClick={()=>navigate("./page3")} >
      page3
    </button>
          </li>
          </ul>
          
        
        </div>
       </div>
  );
}

export default Sidebar;