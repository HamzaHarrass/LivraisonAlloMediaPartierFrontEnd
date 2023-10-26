import React from "react"
import "./components/Auth/index"
import Auth from "./components/Auth/index"
import { BrowserRouter } from "react-router-dom"
function App() {

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Auth />
      </BrowserRouter>
  </React.StrictMode>
  )
}

export default App
