import React, { Component } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./index.css"


class Auth extends Component {
    state = {
        registrationSuccess: false,
        registrationError: null, // To store the error message
      };
    //   handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const navigate = useNavigate()
    //     try {
    //         await axios({
    //             method: 'post',
    //             url: '/api/auth/register',
    //             data: this.state
    //             });
    //             console.log('success');
    //             this.setState({registrationSuccess: true});
    //             setTimeout(()=>{navigate('/')}, 2000);
    //             } catch (err) {
    //                 if(err && err.response){
    //                     let errors = Object.values(err.response.data).map((value)=>{return value[0]})
    //                     this.setState({registrationError: errors})
    //                     }else{
    //                         throw err;
    //                         }
    //                    }
    //                 }
    componentDidMount() {
      const container = document.getElementById("container");
  
      if (container) {
        setTimeout(() => {
          container.classList.add("sign-in");
        }, 200);
      }
    }
  
    toggle = () => {
      const container = document.getElementById("container");
  
      if (container) {
        container.classList.toggle("sign-in");
        container.classList.toggle("sign-up");
      }
    } 
    register = () => {
        const username = document.querySelector(".sign-up input[type='text']").value;
        const email = document.querySelector(".sign-up input[type='email']").value;
        const password = document.querySelector(".sign-up input[type='password']").value;
      
        const newUser = {
          username: username,
          email: email,
          password: password,
        };
        axios
        .post('http://localhost:3000/auth/register', newUser)
        .then((response) => {
            console.log(response);
          console.log("Registration successful");
          const history = useNavigate();
          history.push('/login'); 
        })
        .catch((error) => {
          console.error("Registration failed:", error);
          // Handle registration errors, e.g., display an error message to the user.
        });
    }
    
    render() {

    return (


        <div>
            <div id="container" className="container">
                <div className="row">
                    <div className="col align-items-center flex-col sign-up">
                        <div className="form-wrapper align-items-center">
                            <div className="form sign-up">
                                <div className="input-group">
                                    <i className='bx bxs-user'></i>
                                    <input type="text" placeholder="Username"/>
                                </div>
                                <div className="input-group">
                                    <i className='bx bx-mail-send'></i>
                                    <input type="email" placeholder="Email"/>
                                </div>
                                <div className="input-group">
                                    <i className='bx bxs-lock-alt'></i>
                                    <input type="password" placeholder="Password"/>
                                </div>
                                <div className="input-group">
                                    <i className='bx bxs-lock-alt'></i>
                                    <input type="password" placeholder="Confirm password"/>
                                </div>
                                <button onClick={this.register}>
                                    Sign up
                                </button>
                                <p>
                                    <span>
                                        Already have an account?
                                    </span>
                                    <b onClick={this.toggle} className="pointer">
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
                                    <i className='bx bxs-user'></i>
                                    <input type="text" placeholder="Username"/>
                                </div>
                                <div className="input-group">
                                    <i className='bx bxs-lock-alt'></i>
                                    <input type="password" placeholder="Password"/>
                                </div>
                                <button>
                                    Sign in
                                </button>
                                <p>
                                    <b>
                                        Forgot password?
                                    </b>
                                </p>
                                <p>
                                    <span>
                                        Dont have an account?
                                    </span>
                                    <b onClick={this.toggle} className="pointer">
                                        Sign up here
                                    </b>
                                </p>
                            </div>
                        </div>
                        <div className="form-wrapper">

                        </div>
                    </div>
                </div>
                <div className="row content-row">
                    <div className="col align-items-center flex-col">
                        <div className="text sign-in">
                            <h2>
                                Welcome
                            </h2>

                        </div>
                        <div className="img sign-in">

                        </div>
                    </div>
                    <div className="col align-items-center flex-col">
                        <div className="img sign-up">

                        </div>
                        <div className="text sign-up">
                            <h2>
                                Join with us
                            </h2>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
  }
}
export default Auth;