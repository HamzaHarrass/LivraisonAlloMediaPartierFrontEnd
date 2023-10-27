// import React from "react";

// import "./index.css";
// function Dashboard(){

    
//     const user = JSON.parse(localStorage.getItem("user"))
//     console.log(user);

    
//     return(
//     <div>
//         <header className="site-header">
//             <div className="site-identity">
//                 <h1><a href="#">ALLO <span style={{ color: '#ff0000' }}>MEDIA</span></a></h1>
//             </div>  
//             <nav className="site-navigation">
//                 <ul className="nav">
//                 <li><a href="#">About</a></li> 
//                 <li><a href="#">News</a></li> 
//                 <li><a href="#">Contact</a></li> 
//                 <li>
//                 <div className="user-profile">
//                 <img src={"https://i.pinimg.com/236x/fe/fc/8b/fefc8b333ca9d2466159cf8378e97da7.jpg"} alt={""} className="user-image"/>
//                  </div>
//                 </li>
//                 </ul>
//             </nav>
//         </header>
//                 <div className="user-info">
//                      <p className="welcome-message">Welcome, {user.username}!</p>
//                 </div>
//     </div>
//     )

// }

// export default Dashboard;

import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./index.css";

function Dashboard() {

    const user = JSON.parse(localStorage.getItem("user"))
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate(); // Use useNavigate to navigate to other routes

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const logout = () => {

    localStorage.removeItem("authToken");

    navigate("/");
  };

  return (
    <div>
      <header className="site-header">
            <div className="site-identity">
                <h1><a href="#">ALLO <span style={{ color: '#ff0000' }}>MEDIA</span></a></h1>
            </div>  
            <nav className="site-navigation">
                <ul className="nav">
                <li><a href="#">About</a></li> 
                <li><a href="#">News</a></li> 
                <li><a href="#">Contact</a></li> 
                <li>
                <div className="user-profile">
                <img src={"https://i.pinimg.com/236x/fe/fc/8b/fefc8b333ca9d2466159cf8378e97da7.jpg"} alt={""} className="user-image" onClick={toggleDropdown}/>
                {dropdownVisible && (
            <div className="dropdown-menu">
              <ul>
                <li>
                  <a href="/profile">Profile</a>
                </li>
                <li onClick={logout}>Logout</li>
              </ul>
            </div>
          )}
                 </div>
                </li>
                </ul>
            </nav>
      </header>
        <p className="welcome-message">Welcome, {user.username}!</p>
        </div>
  );
}

export default Dashboard;
