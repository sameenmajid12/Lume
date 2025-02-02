import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
function HeaderDropDown({ setVisibility }) {
  const { user, logOutUser } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div className="header-drop-down-container">
      <div className="header-drop-down-header">
        <div className="header-drop-down-header-body">
          <img src="/assets/Logo.png"></img>
          <div>
            <h3>{user.username}</h3>
            <p>{user.email}</p>
          </div>
        </div>
        <div className="header-drop-down-brains">
          <p>{user.brains}</p>
          <img src="/assets/brain.webp"></img>
        </div>
      </div>
      <div onClick={()=>navigate('/dashboard')} className="header-drop-down-div">
        <div>
          <i className="fa-solid fa-clipboard-user"></i>
        </div>
        <p>Dashboard</p>
      </div>
      <div className="header-drop-down-div">
        <div>
          <i className="fa-solid fa-gears"></i>
        </div>
        <p>Settings</p>
      </div>
      <div onClick={()=>navigate('/create')} className="header-drop-down-div">
        <div>
        <i class="fa-solid fa-square-plus"></i>
        </div>
        <p>Create</p>
      </div>
      <div onClick={logOutUser} className="header-drop-down-div">
        <div>
        <i class="fa-solid fa-right-from-bracket"></i>
        </div>
        <p>Logout</p>
      </div>
    </div>
  );
}

export default HeaderDropDown;
