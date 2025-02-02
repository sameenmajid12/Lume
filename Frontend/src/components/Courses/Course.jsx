import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Course() {
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const courseId = location.pathname.split('/')[2];
    const getCourse = async () => {
      try {
        const response = await fetch(`http://localhost:3002/course/${courseId}`);
        if (response.ok) {
          const courseData = await response.json();
          setCourse(courseData);
        } else {
          console.error("Failed to fetch course data");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getCourse();
  }, [location]);

  if (loading) return <div>Loading...</div>;
  if (!course) return <div>Course not found</div>;

  return (
    <div className="course-container">
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <div className="blocks">
        {course.blocks.map((block, index) => (
          <div key={index} className="block">
            {block.type === "text" && <p>{block.content}</p>}
            {block.type === "image" && <img src={block.content} alt={`Block ${index}`} />}
            {block.type === "video" && (
              <iframe
                width="560"
                height="315"
                src={block.content}
                title={`Block ${index}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}  
            {block.type === "code" && (
              <div>
                <pre>
                  <code className={`language-${block.codeLanguage}`}>
                    {block.content}
                  </code>
                </pre>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Course;