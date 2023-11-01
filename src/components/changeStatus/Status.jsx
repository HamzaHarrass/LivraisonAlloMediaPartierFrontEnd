import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import "../../../src/index.css"

const Status = () => {
    
    let [token , setToken] = useState('');
    useEffect(() => {
        setToken(new URLSearchParams(location.search).get("token"));
      }, [location.search]);
      
      useEffect(() => {
        if(token){
            axios
                .post(`http://localhost:3000/auth/changestatus/${token}`,)
                console.log(token);
                console.log("hello"); 
            }
    }, [token]);

    const navigator = useNavigate();
    const getlogin = () =>{
        navigator("/")
    }
  return (
    <div>
         <header className="site-header">
            <div className="site-identity">
                <h1><a href="#">ALLO <span style={{ color: '#ff0000' }}>MEDIA</span></a></h1>
            </div>  
      </header>

<body className="flex h-screen justify-center items-center bg-gray-200">
    <div>
    <div className="text-center font-bold">your compte is verfied go to login</div>
        <button onClick={getlogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        login
        </button>
    </div>
</body>
    </div>
  )
}

export default Status