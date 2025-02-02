import CourseCards from '../Courses/CourseCards';
function Featured(){
 return(<>
  <div className="featured-courses-banner">
    <img src="/assets/star.png"></img>
    <div className="featured-courses-banner-text">
      <h3>Featured courses</h3>
      <p>Discover Top Courses to Kickstart Your Journey!</p>
    </div>
  </div>
  <div className="featured-courses-cards">
    <CourseCards/>
    <CourseCards/>
    <CourseCards/>
    <CourseCards/>
  </div>
 </>)
}

export default Featured;