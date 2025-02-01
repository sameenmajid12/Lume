import Featured from "./Featured";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const nav = (route) => {
    navigate(`/${route}`);
  };
  const cards = [
    {
      icon: "fa-solid fa-universal-access",
      text: `If you haven’t signed up yet,<span className='getting-started-bold'>register now for free</span> and <span className='getting-started-bold'>unlock access to a world of learning.</span> It only takes a few seconds!`,
      stepNum: 1,
      button: {
        text: "Create a new account now",
        onClick: ()=>nav("register"),
      },
    },
    {
      icon: "fa-solid fa-brain",
      text: "Once you sign up, you’ll receive 100 Brains, your starting currency on Lume! Use them to explore our free courses or unlock up to two premium courses and begin your learning journey today.",
      stepNum: 2,
      button: {
        text: "Browse courses",
        onClick: ()=>nav("explore"),
      },
    },
    {
      icon: "fa-solid fa-square-plus",
      text: "Ready to share your knowledge? Use Lume’s easy-to-use course creator to design and publish your own course. Help others learn, earn more Brains, and unlock access to even more courses!",
      stepNum: 3,
      button: {
        text: "Create your own course",
        onClick: ()=>nav("create"),
      },
    },
    {
      icon: "fa-solid fa-bars-progress",
      text: "Track your progress! Head to your dashboard to see how far you've come, monitor your enrolled courses, and stay motivated on your learning journey.",
      stepNum: 4,
      button: {
        text: "Go to dashboard",
        onClick: ()=>nav("dashboard"),
      },
    },
  ];
  
  return (
    <div className="home-page-container">
      <div className="home-page-main-banner">
        <div className="home-page-welcome-message">
          <h1>
            Welcome to Lume <img src="/assets/Logo.png"></img>
          </h1>
          <p>
            Create your own course or explore a variety of courses tailored to
            your interests.
          </p>
        </div>
        <button>Explore</button>
      </div>
      <div className="getting-started">
        <div className="getting-started-rocket">
          <i className="fa-solid fa-rocket"></i>
        </div>
        <div className="getting-started-body">
          <div className="getting-started-text">
            <h3>Getting started</h3>
            <p>
              Here's a step-by-step guide to help you get started with Lume!
            </p>
          </div>
          <div className="getting-started-pin">
            <img src="/assets/pin.png"></img>
          </div>
        </div>
      </div>
      <div className="getting-started-steps">
        {cards.map((card, index) => {
          return (
            <div key={index} className="getting-started-card">
              <p className="getting-started-card-header">Step {card.stepNum}</p>
              <div className="getting-started-card-body">
                <i className={card.icon}></i>
                <p dangerouslySetInnerHTML={{ __html: card.text }}></p>
                <button className="getting-started-button" onClick={card.button.onClick}>{card.button.text}</button>
              </div>
            </div>
          );
        })}
      </div>
      <Featured />
    </div>
  );
}

export default Home;
