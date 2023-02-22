import React from "react";

import { Link } from "react-router-dom";
function Dashboard(){

    return(
        <div className="body">
<h1  >
    Dashboard 
<div>
    <Link to="/Signup"> Signup</Link>
    </div>
    <div>
    <Link to ="/Signin"> Signin</Link>
    </div>
</h1>
</div>
    )

}
export default Dashboard;

