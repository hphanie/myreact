import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({Children})=>{
    const Token = localStorage.getItem('token')
    if(!Token){
        return(<Navigate to='./'/>);
    }
    return Children
}

export default PrivateRoute;