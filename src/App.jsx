import React from "react"
import "./components/Auth/index"
import Auth from "./components/Auth/index"
import { BrowserRouter,Route, Routes } from "react-router-dom"
import Dashboard from "./components/dashbord/Dashboard"
import ForgetPassword from "./components/foregetPassword/forgetPassword"
function App() {

  return (
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/forget_password" element={<ForgetPassword/>} />
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
  )
}

export default App
