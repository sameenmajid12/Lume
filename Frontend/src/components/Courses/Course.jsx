import { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";

function Course(){  
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState(null);

  useEffect(()=>{
    const location=useLocation();
    const courseId=location.pathname.split('/')[2];
    const getCourse = async()=> {
      try{
        const response = await fetch(`http://localhost:3002/course/${courseId}`);
        if(response.ok){
          const courseData = await response.json();
          setCourse(courseData);
        }
      }
      catch(error){
        console.error(error);
      }
    }
  },[])
  if(loading) return;
  return(
    <div></div>
  );
}
export default Course;