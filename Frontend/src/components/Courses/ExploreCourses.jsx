import CourseCards from "./CourseCards";
import { useState } from "react";
import '../../styles/exploreCourses.css'
function ExploreCourses(){
  const [category, setCategory] = useState(null);
  const [subcategory, setSubcategory] = useState("");
  return(
    <div className="explore-page-container">
      <div className="explore-page-banner">
        <div className="explore-page-banner-text">
          <h1>Explore our courses<i className="fa-solid fa-lightbulb"> </i></h1>
          <p>Browse through a variety of courses designed to help you learn and grow.</p>
        </div>
        <button className="explore-page-view-all">View all courses</button>
      </div>
      <div className="explore-page-interactions">
        <div className="explore-page-buttons">
          <button className="explore-page-button-active">Science</button>
          <button className="explore-page-button">Math</button>
          <button className="explore-page-button">English</button>
          <button className="explore-page-button">CS</button>
          <button className="explore-page-button">Engineering</button>
        </div>
        <div className="explore-page-nav">
          <div className="explore-page-sub-category">
            <div>All{subcategory===""?<span className="selector-line"></span>:''}</div>
            <div>Chemistry</div>
            <div>Physics</div>
            <div>Biology</div>
          </div>
          <div className="explore-page-search"><i className="fa-solid fa-magnifying-glass"></i><input placeholder="Search course"></input></div>
        </div>
      </div>
      <div className="explore-page-courses">
        <CourseCards/>
      </div>
    </div>
  )
}

export default ExploreCourses;