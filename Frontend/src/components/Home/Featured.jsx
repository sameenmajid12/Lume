import CourseCards from '../Courses/CourseCards';
function Featured(){
 return(<>
  <div className="featured-courses-banner">
    
    <div className="featured-courses-banner-text">
      <h3>Featured courses</h3>
      <p>Discover Top Courses to Kickstart Your Journey!</p>
    </div>
    <img src="/assets/star.png"></img>
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