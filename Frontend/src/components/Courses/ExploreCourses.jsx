import CourseCards from "./CourseCards";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/exploreCourses.css";

function ExploreCourses() {
  const location = useLocation();
  const navigate = useNavigate();

  const [category, setCategory] = useState(location.pathname.split("/")[2] || "science");
  const [subcategory, setSubcategory] = useState(location.pathname.split("/")[3] || "");
  const [courses, setCourses] = useState([]);
  const [active, setActive] = useState();

  const categories = {
    science: ["All", "Chemistry", "Physics", "Biology"],
    math: ["All", "Algebra", "Calculus", "Statistics"],
    english: ["All", "Literature", "Grammar", "Writing"],
    CS: ["All", "Data Structures", "Algorithms", "Machine Learning"],
    engineering: ["All", "Electrical", "Mechanical", "Civil"]
  };

  const changeRoute = (route) => {
    navigate(route);
  };

  useEffect(() => {
    setCategory(location.pathname.split("/")[2] || "science");
    setSubcategory(location.pathname.split("/")[3] || "");
  }, [location]);

  return (
    <div className="explore-page-container">
      <div className="explore-page-banner">
        <div className="explore-page-banner-text">
          <h1>
            Explore our courses<i className="fa-solid fa-lightbulb"> </i>
          </h1>
          <p>
            Browse through a variety of courses designed to help you learn and grow.
          </p>
        </div>
        <button className="explore-page-view-all">View all courses</button>
      </div>
      <div className="explore-page-interactions">
        <div className="explore-page-buttons">
          {Object.keys(categories).map((cat) => (
            <button
              key={cat}
              onClick={() => changeRoute(`${cat}`)}
              className={`${
                category === cat ? "explore-page-button-active" : "explore-page-button"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
        <div className="explore-page-nav">
          <div className="explore-page-sub-category">
            {categories[category].map((sub, index) => (
              <div
                key={index}
                onClick={() => changeRoute(`${category}/${sub.toLowerCase()}`)}
                className={`${
                  subcategory === sub.toLowerCase() ? "explore-page-sub-category-active" : ""
                }`}
              >
                {sub}
                {subcategory==="" && sub.toLowerCase()==="all"?<span className="selector-line"></span>:''}
                {subcategory === sub.toLowerCase()?<span className="selector-line"></span>:''}
              </div>
            ))}
          </div>
          <div className="explore-page-search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input placeholder="Search course"></input>
          </div>
        </div>
      </div>
      <div className="explore-page-courses">
        <CourseCards />
      </div>
    </div>
  );
}

export default ExploreCourses;
