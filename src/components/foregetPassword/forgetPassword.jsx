import { useEffect } from "react"; 
import "../Auth/index.css";
 
 function ForgetPassword() {
    
        useEffect(() => {
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
							<input type="text" placeholder="Username" />
						</div>
						<div className="input-group">
							<i className='bx bxs-lock-alt'></i>
							<input type="password" placeholder="Password" />
						</div>
						<button>
							confirmer
						</button>
					
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