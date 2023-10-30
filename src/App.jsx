import React, { useEffect, useState } from "react"
import "./components/Auth/index"
import Auth from "./components/Auth/index"
import { BrowserRouter,Navigate,Route, Routes } from "react-router-dom"
import Dashboard from "./components/dashbord/Dashboard"
import ForgetPassword from "./components/foregetPassword/forgetPassword"
import SendEmail from "./components/sendEmail/SendEmail"
function App() {
  const [user, setUser] = useState(null);
  useEffect(()=>{
    let userData=JSON.parse(localStorage.getItem("user"));
    setUser(userData);
  },[])
  return (
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth/>} />
        <Route path="/dashboard" element={user ? <Dashboard/> : <Navigate to={'/'}/>} />
        <Route path="/reset-password" element={<ForgetPassword/>} />
        <Route path="/send_Email" element={<SendEmail/>} />
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
  )
}

export default App
