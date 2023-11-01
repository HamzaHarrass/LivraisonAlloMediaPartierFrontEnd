import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
import "./index.css";
import "../../../src/index.css"

function Dashboard() {

  const [user,setUser] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate(); 

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const logout = () => {

    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    localStorage.removeItem("token")
    navigate("/");
  };

  const sendVerificationEmail = () => {
    if (user) {
      console.log(user.email);
      axios.post("http://localhost:3000/auth/send-verification-email2", { email: user.email })
        .then(() => {
          console.log("Verification email sent successfully");
        })
        .catch((error) => {
          console.error("Error sending verification email:", error);
        });
    }
  };



  
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    axios.get(`http://localhost:3000/auth/check-verification-status/${localStorage.getItem('token')}`)
      .then((response) => {
        setIsVerified(response.data.isVerified);
      })
      .catch((error) => {
        console.error("Error checking verification status:", error);
      });
  }, []);

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
      {isVerified ? (
      <div>
        <p className="welcome-message">Welcome, {user.username}!</p>
      </div>
    ) : (
      <div>
        
        <div className="flex h-screen justify-center items-center bg-gray-200">
          
    <div>
    <p className="verification-message font-bold">
          Your account is not verified. Please check your email for a verification link.
          
        </p>
        <button  onClick={sendVerificationEmail} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Send Verification Email</button>
    </div>
</div>
      </div>
    )}
  </div>
  );
}

export default Dashboard;
