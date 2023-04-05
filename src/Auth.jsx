import React, { useEffect } from "react";
import { useNavigate } from "react-router";

import Sidebar from "./Sidebar";
function Auth(){

    const navigate = useNavigate();
    useEffect(()=>{
if(sessionStorage.length===0){
    navigate("/signin")
}

    },[])
    return(
        <Sidebar/>
    )
}
export default Auth;