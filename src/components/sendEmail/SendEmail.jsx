import  { useEffect, useState } from "react";
import axios from "axios";
import "../Auth/index.css";

function SendEmail() {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState(null);

  const handleSendEmail = async () => {
    try {
      await axios.post('http://localhost:3000/auth/forgot-password', { email });
      setEmailSent(true);
      setError(null);
    } catch (error) {
      console.error("Error sending email:", error);
      setError("Error sending email. Please try again.");
    }
  };

  useEffect(() => {
    const container = document.getElementById("container");

    if (container) {
      setTimeout(() => {
        container.classList.add("sign-in");
      }, 200);
    }
  }, []);

  return (
    <div>
      <div id="container" className="container">
        <div className="row">
          <div className="col align-items-center flex-col sign-up">
          </div>
          <div className="col align-items-center flex-col sign-in">
            <div className="form-wrapper align-items-center">
              <div className="form sign-in">
                <div className="input-group">
                  <i className="bx bxs-user"></i>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button onClick={handleSendEmail}>Send</button>
              </div>
            </div>
            <div className="form-wrapper">
              {emailSent && (
                <div className="success-message">
                  Email sent successfully. Please check your inbox for further instructions.
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
              <h2>Send Email</h2>
            </div>
            <div className="img sign-in"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendEmail;
