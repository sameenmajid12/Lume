import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Register(){
  const navigate = useNavigate();
 const [password, setPassword] = useState("");
   const [email, setEmail] = useState("");
   const[username, setUsername] = useState('');
   const handlePasswordChange =(e)=>{
     setPassword(e.target.value);
   }
   const handleEmailChange = (e)=>{
     setEmail(e.target.value);
   }
   const handleUsernameChange=(e)=>{
    setUsername(e.target.value);
   }
   const register=()=>{

   }
  return(
    <div className="auth-page-body">
      <div className="auth-container">
        <div className="auth-image"></div>
        <div className="auth-main register-main">
          <div className="auth-header">
            <img className="auth-logo register-logo" src="/assets/Logo.png"></img>
            <h1>Sign up now</h1>
            <p>Create a free account today!</p>
          </div>
          <div className="auth-body">
            <div className="auth-input register-input">
              <p>Username</p>
              <input onChange={handleUsernameChange} value={username} type="text" placeholder="Enter username"></input>
            </div>
            <div className="auth-input register-input">
              <p>Email</p>
              <input onChange={handleEmailChange} value={email} type="text" placeholder="Enter email"></input>
              <p></p>
            </div>
            <div className="auth-input register-input">
              <p>Password</p>
              <input onChange={handlePasswordChange} value={password} type="password" placeholder="Enter password"></input>
              <p></p>
            </div>
            <div>
              <button onClick={register} className="auth-button">Sign in</button>
              <p className="auth-bottom-text">Already have an account? <span onClick={()=>navigate('/login')} className="auth-link">Login</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Register;
