import React from "react"
import "./components/Auth/index"
import Auth from "./components/Auth/index"
import { BrowserRouter,Route, Routes } from "react-router-dom"
import Dashboard from "./components/dashbord/Dashboard"
import ForgetPassword from "./components/foregetPassword/forgetPassword"
import SendEmail from "./components/sendEmail/SendEmail"
import Status from "./components/changeStatus/Status"
import MiddelAuth from "./components/middlewares/MiddelAuth"
function App() {
  // const [user, setUser] = useState(null);
  // useEffect(()=>{
  //   let userData=JSON.parse(localStorage.getItem("user"));
  //   setUser(userData);
  // console.log(userData);
  // },[])


  return (
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth/>} />
        <Route
            path="/dashboard"
            element={
              <MiddelAuth>
                <Dashboard />
              </MiddelAuth>
          }
          />
        <Route path="/reset-password" element={<ForgetPassword/>} />
        <Route path="/send_Email" element={<SendEmail/>} />
        <Route path="/changestatus" element={<Status />} />
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
  )
}

export default App
