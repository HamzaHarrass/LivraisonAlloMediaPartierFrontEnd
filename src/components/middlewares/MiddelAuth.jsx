// import React from 'react'
import { Navigate } from 'react-router-dom';

const MiddelAuth = ({children}) => {
    const userData= !! JSON.parse(localStorage.getItem("user"));
    console.log(userData);
    if (userData) {return children}
    else{
        return <Navigate to= "/"/>
    }

}

export default MiddelAuth