import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import '../../styles/header.css'
import { useContext, useEffect, useState } from "react";
function Header(){
  const {user} = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState();
  useEffect(()=>{
    setActive(location.pathname.split('/')[1])
  },[location])
  return(
    <div className="header-container">
      <div className="header-left"> 
        <img className="header-logo" src="/assets/Logo.png"></img>
        <p onClick={()=>navigate('/')} className={active===""?'header-active':'header-text'}>Home</p>
        <p onClick={()=>navigate('/explore')} className={active==="explore"?'header-active':'header-text'}>Courses</p>
        <p onClick={()=>navigate('/create')} className={active==="create"?'header-active':'header-text'}>Create</p>
        <p onClick={()=>navigate('/dashboard')} className={active==="dashboard"?'header-active':'header-text'}>Dashboard</p>
      </div>
      <div className="header-right">
      <i className="fa-solid fa-magnifying-glass magnifying-glass"></i> 
      {user?<i className="fa-solid fa-circle-user header-profile"></i>:<><button onClick={()=>navigate('/register')} className="header-signup">Sign Up</button><button onClick={()=>navigate('/login')} className="header-login">Login</button></>}       
      </div>
    </div>
  )
}

export default Header;