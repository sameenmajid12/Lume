import { useContext, useState } from "react";
import "../../styles/authentication.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

function Login() {
  const {setUser} = useContext(UserContext);
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [emailUsername, setEmailUsername] = useState("");
  const handlePasswordChange =(e)=>{
    setPassword(e.target.value);
  }
  const handleEmailUsernameChange = (e)=>{
    setEmailUsername(e.target.value);
  }
  const login=async()=>{
    try{
      const user = {
        username:emailUsername,
        password:password
      }
      const response = await fetch('http://localhost:3002/auth/login',{
        method:"POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(user)
      });
      if(response.ok){
        const data = await response.json()
        setUser(data);
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/');
      }
    }
    catch(error){
      console.error(error);
    }
  }
  return (
    <div className="auth-page-body">
      <div className="auth-container">
        <div className="auth-image"></div>
        <div className="auth-main">
          <div className="auth-header">
            <img className="auth-logo" src="/assets/Logo.png"></img>
            <h1>Welcome!</h1>
            <p>Login to continue</p>
          </div>
          <div className="auth-body">
            <div className="auth-input">
              <p>Username</p>
              <input onChange={handleEmailUsernameChange} value={emailUsername} type="text" placeholder="Enter username"></input>
            </div>
            <div className="auth-input">
              <p>Password</p>
              <input onChange={handlePasswordChange} value={password} type="password" placeholder="Enter password"></input>
              <p></p>
            </div>
            <div>
              <button onClick={login} className="auth-button">Sign in</button>
              <p className="auth-bottom-text">Need an account? <span onClick={()=>navigate('/register')} className="auth-link">Register</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
