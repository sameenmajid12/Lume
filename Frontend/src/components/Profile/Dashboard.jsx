import { useContext } from "react";
import {UserContext} from '../../context/UserContext';
import '../../styles/dashboard.css'
function Dashboard() {
  const {user} = useContext(UserContext);
  return (
    <div className="dashboard-page-container">
      <div className="dashboard-banner">
        <div className="dashboard-banner-left">
          <img src="/assets/dashboard.png"></img>
          <div>
            <h3>Hello, {user.username}</h3>
            <p>Welcome to Your Dashboard! Here, you can track your progress, manage your courses, and earn Brains by creating or contributing to content.</p>
          </div>
        </div>

        <img src="/assets/brain.webp"></img>
      </div>
      <div className="dashboard-body">
        
      </div>
    </div>
  );
}
export default Dashboard;
