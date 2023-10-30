import { useEffect , useState } from "react"; 
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Auth/index.css";
 
 function ForgetPassword() {
    const [newPassword, setNewPassword] = useState("");
    const [newPassword_confirmation, setnewPassword_confirmation] = useState("");
    const [passwordReset, setPasswordReset] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [token, setToken] = useState(null);
    const handleResetPassword = async () => {
      if (newPassword !== newPassword_confirmation) {
        setError("Passwords do not match.");
        return;
      }
      try {
        await axios.post(`http://localhost:3000/auth/reset-password?token=${token}`, { newPassword, newPassword_confirmation });
        setPasswordReset(true);

        setError(null); 
        navigate("/");
      } catch (error) {
        console.error("Error resetting password:", error);
        setError("Error resetting password. Please try again.");
      }
    };
        useEffect(() => {
          let urlToken = new URLSearchParams(location.search).get("token");
          setToken(urlToken);
          const container = document.getElementById("container");
          if (container) {
            setTimeout(() => {
              container.classList.add("sign-in");
            }, 200);
          }
        }, []);

    return(
        <div>
             <div id="container" className="container">
		<div className="row">
			<div className="col align-items-center flex-col sign-up">
			</div>
			<div className="col align-items-center flex-col sign-in">
				<div className="form-wrapper align-items-center">
					<div className="form sign-in">
						<div className="input-group">
							<i className='bx bxs-user'></i>
							<input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
						</div>
						<div className="input-group">
							<i className='bx bxs-lock-alt'></i>
							<input type="password" placeholder="Confirmer Password" value={newPassword_confirmation} onChange={(e) => setnewPassword_confirmation(e.target.value)} />
						</div>
						<button onClick={handleResetPassword} > confirmer </button>
					
					</div>
				</div>
				<div className="form-wrapper">
                {passwordReset && (
                <div className="success-message">
                  Password reset successful. You can now log in with your new password.
                </div>
              )}

              {error && (
                <div className="error-message">
                  {error}
                </div>
              )}
				</div>
			</div>
		</div>
		<div className="row content-row">		
                <div className="col align-items-center flex-col">
				<div className="text sign-in">
					<h2>
						forget password
					</h2>
	
				</div>
				<div className="img sign-in">
		
				</div>
			</div>
		</div>
		
	</div>
        </div>
    )
}

 export default ForgetPassword;