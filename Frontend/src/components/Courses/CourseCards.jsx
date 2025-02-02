import "../../styles/course.css";
function CourseCards({course}) {
  return (
    <div className="course-card-container">
      <div className="course-card-top">
        <img src="/assets/Python.png"></img>
        <h3>Python for Absolute Beginners</h3>
        <h4>Samin Raiyan, Angelica Klisewicz, Michell ...</h4>
        <p>
          Start your programming journey with Python! Learn the fundamentals,
          from variables and loops to functions and object-oriented programming,
          with real-world projects.
        </p>
      </div>
      <div className="course-card-bottom">
        <div className="course-card-icons">
          <i className="fa-solid fa-heart"></i>
          <img src="/assets/link.png"></img>
        </div>
        <button className="course-card-button">Enroll now</button>
      </div>
    </div>
  );
}
export default CourseCards;
