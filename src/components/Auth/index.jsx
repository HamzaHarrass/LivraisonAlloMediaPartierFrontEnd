import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./index.css";

function Auth() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "client",
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registrationError, setRegistrationError] = useState(null);
  const [loginData, setLoginData] = useState({
    loginEmail: "",
    loginPassword: "",
  });
  const [loginError, setLoginError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const container = document.getElementById("container");
    if (container) {
      setTimeout(() => {
        container.classList.add("sign-in");
      }, 200);
    }
  }, []);

  const toggle = () => {
    const container = document.getElementById("container");
    if (container) {
      container.classList.toggle("sign-in");
      container.classList.toggle("sign-up");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const register = () => {
    const { username, email, password, role ,confirmPassword } = formData;

    if (!username || !email || !password || !confirmPassword) {
        setRegistrationError("Veuillez remplir tous les champs.");
        return;
      }
  
      if (password !== confirmPassword) {
        setRegistrationError("Passwords do not match.");
        return;
      }
  
      setRegistrationError(null);

    const newUser = {
      username,
      email,
      password,
      role,
    };

    axios
      .post("http://localhost:3000/auth/register", newUser)
      .then((response) => {
        console.log(response);
        console.log("Registration successful");
        setRegistrationSuccess(true);
        setRegistrationError(false)
        navigate("/");
      })
      .catch((error) => {
        console.error("Registration failed:", error);
        setRegistrationSuccess(false)
        setRegistrationError("Registration failed. "+ error.response?.data?.message);
      });
  };

  
    const login = () => {
        const { loginEmail, loginPassword } = loginData;

        // Basic login validation
        if (!loginEmail || !loginPassword) {
        setLoginError("Please fill in both email and password.");
        return;
        }

        // If validation passes, proceed with login
        setLoginError(null);

        const user = {
        email: loginEmail,
        password: loginPassword,
        };

        axios
        .post("http://localhost:3000/auth/login", user)
        .then((response) => {
            console.log(response);
            console.log("Login successful");
            localStorage.setItem("user", JSON.stringify(response.data.user))
            navigate("/dashboard");
        })
        .catch((error) => {
            console.error("Login failed:", error);
            setLoginError("Login failed. Please check your credentials.");
        });
    };

  return (
    <div>
      <div id="container" className="container">
        <div className="row">
          <div className="col align-items-center flex-col sign-up">
            {registrationError && (
              <div className="error-message">{registrationError}</div>
            )}
             {registrationSuccess && (
              <div className="info-message">
                User registered successfully. Check your email for configuration.
              </div>
            )}
            <div className="form-wrapper align-items-center">
              <div className="form sign-up">
                <div className="input-group">
                  <i className="bx bxs-user"></i>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group">
                  <i className="bx bx-mail-send"></i>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt"></i>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt"></i>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt"></i>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                  >
                    <option value="client">Client</option>
                    <option value="livreur">Livreur</option>
                  </select>
                </div>
                <button onClick={register}>Sign up</button>
                <p>
                  <span>Already have an account?</span>
                  <b onClick={toggle} className="pointer">
                    Sign in here
                  </b>
                </p>
              </div>
            </div>
          </div>
          <div className="col align-items-center flex-col sign-in">
          {loginError && <div className="error-message">{loginError}</div>}
            <div className="form-wrapper align-items-center">
              <div className="form sign-in">
                <div className="input-group">
                  <i className="bx bxs-user"></i>
                  <input
                    type="email"
                    name="loginEmail"
                    placeholder="Email"
                    value={loginData.loginEmail}
                    onChange={handleLoginChange}
                  />                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt"></i>
                 <input
                    type="password"
                    name="loginPassword"
                    placeholder="Password"
                    value={loginData.loginPassword}
                    onChange={handleLoginChange}
                  />
                </div>
                <button onClick={login}>Sign in</button>
                <p>
                  <b>Forgot password?</b>
                </p>
                <p>
                  <span>Dont have an account?</span>
                  <b onClick={toggle} className="pointer">
                    Sign up here
                  </b>
                </p>
              </div>
            </div>
            <div className="form-wrapper"></div>
          </div>
        </div>
        <div className="row content-row">
          <div className="col align-items-center flex-col">
          <div className="text sign-in">
            <h2>Welcome</h2>
            <p>Thank you for visiting our website. Please sign in to access your account.</p>
            
            <p>
            <li>Access exclusive features.</li>
            <li>Manage your profile.</li>
            <li>Track your orders.</li>
            </p> 
            <p>If you dont have an account, you can <b onClick={toggle} className="pointer">sign up here</b>.</p>
        </div>
  <div className="img sign-in"></div>
          </div>
          <div className="col align-items-center flex-col">
            <div className="img sign-up"></div>
            <div className="text sign-up">
            <h2>Join with us</h2>
            <p>Ready to get started? Sign up today and enjoy the following benefits:</p>
            
            <p>
            <li>Access exclusive offers.</li>
            <li>Customize your profile.</li>
            <li>Place orders with ease.</li>
            </p>
            
            <p>If you already have an account, you can <b onClick={toggle} className="pointer">sign in here</b>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
