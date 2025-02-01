import CourseCards from "./CourseCards";
import { useState } from "react";
function ExploreCourses(){
  const [category, setCategory] = useState(null);
  return(
    <div className="explore-page-container">
      <div className="explore-page-banner">
        <div className="explore-page-banner-text">
          <h3></h3>
          <p></p>
        </div>
        <button>View all courses</button>
      </div>
      <div className="explore-page-interactions">
        <div className="explore-page-buttons">
          <button>Science</button>
          <button>Math</button>
          <button>English</button>
          <button>CS</button>
          <button>Engineering</button>
        </div>
        <div className="explore-page-nav">
          <div className="explore-page-sub-category">
            <div>All</div>
            <div>Chemistry</div>
            <div>Physics</div>
            <div>Biology</div>;
          </div>
          <div className="explore-page-search"><i className="fa-solid fa-magnifying-glass"></i><input></input></div>
        </div>
      </div>
      <div>
        <CourseCards/>
      </div>
    </div>
  )
}

export default ExploreCourses;