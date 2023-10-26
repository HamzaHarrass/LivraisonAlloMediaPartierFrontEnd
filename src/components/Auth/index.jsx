import React, { useState, useEffect } from "react";
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

  const register = () => {
    const { username, email, password, role } = formData;
    const newUser = {
      username,
      email,
      password,
      role,
    };

    console.log(newUser);
    axios
      .post("http://localhost:3000/auth/register", newUser)
      .then((response) => {
        console.log(response);
        console.log("Registration successful");
        setRegistrationSuccess(true);
        navigate("/login");
      })
      .catch((error) => {
        console.error("Registration failed:", error);
        setRegistrationError("Registration failed. Please try again.");
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
                  <input type="password" placeholder="Confirm password" />
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
            <div className="form-wrapper align-items-center">
              <div className="form sign-in">
                <div className="input-group">
                  <i className="bx bxs-user"></i>
                  <input type="text" placeholder="Username" />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt"></i>
                  <input type="password" placeholder="Password" />
                </div>
                <button>Sign in</button>
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
            </div>
            <div className="img sign-in"></div>
          </div>
          <div className="col align-items-center flex-col">
            <div className="img sign-up"></div>
            <div className="text sign-up">
              <h2>Join with us</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
