import { useState, useEffect } from 'react';
import { baseUrl } from '../../configs/Config';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { UilBookAlt, UilStar, UilArrowRight } from '@iconscout/react-unicons';
import python from './../../../assets/img/courses/courses/python.png';
import teacher1 from './../../../assets/img/instructors/1.jpg';

const Training_Courses = (props) => {
  const [courseData, setCourseData] = useState([]);
  const [cats, setCats] = useState([]); // categories
  const [instr, setInstr] = useState([]); // instructors
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/courses/`)
      .then((response) => {
        setCourseData(response.data.data);
      })
      .catch(error => {
        setCourseData([]);
      });
  }, []);

  useEffect(() => {
    axios.get(`${baseUrl}/course-categories/`)
      .then((response) => {
        setCats(response.data.data);
      })
      .catch(error => {
        setCats([]);
      });
  }, []);

  useEffect(() => {
    axios.get(`${baseUrl}/instructor/`)
      .then((response) => {
        setInstr(response.data);
      })
      .catch(error => {
        setInstr([]);
      });
  }, []);

  // Function to handle checkbox change
  const handleCategoryChange = (categoryId) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  // Filter function to check if course belongs to selected categories
  const isCourseInSelectedCategories = (course) => {
    if (selectedCategories.length === 0) return true; // Show all courses if no category is selected
    return selectedCategories.includes(course.category);
  };

  return (
    <>
    <div className="sections" id="courses">
      <div className="welcome">
        <div>
          <h3>IT Training service. Course catalog</h3>
          <p>Why we are special we are special we are special we are special why we 
          re special we are
          </p>
        </div>
      </div>

      <div id="course">
        <div>
          Left checkbox filters
        </div>

        <div className="">
          <div className="courses zy-c3 zy-c2-md zy-c2-sm zy-c1-xs">

            {courseData.filter(isCourseInSelectedCategories)
            .slice(0, 12) // Limit to the first 12 items
            .map((course, index) => (

            <div className="course" key={index}>
              <div className="course_top"> 
                <div className="zyzics__subbanner">
                  <h4>{course.short_title}</h4>
                </div>     
                {/* <h1>{cats.find(category => category.id === course.category)?.title || "Unknown Category"}</h1> */}
              </div>
              <div className="course_content">
                <p><Link to={`/courses/${course.slug}`}>{course.long_title}</Link><br />
                
                <code>
                  {cats.find(category => category.id === course.category?.id)?.title.slice(0, 22) || "Unknown Category"}
                </code></p>

                <h1>${course.course_fee} USD</h1>

                <p><small>Equals to <span style={{ textDecoration: 'line-through double' }}>N</span>
                  {new Intl.NumberFormat('en-NG').format(Math.round(course.course_fee * 1282.1 / 1000) * 1000)}
                </small></p>
                
                <Link to={`/courses/${course.slug}`} className="btn">+ Course Details</Link>
                
                <Link to={`/courses/${course.slug}`}>
                  <button>Start Learning</button>
                </Link>
              </div>
              
              {/* <div className="course__tag">
                {cats.find(category => category.id === course.category)?.title || "Unknown Category"}
              </div>
              <div className="course_content">
                <Link to={`/course/${course.slug}`}>
                  <h3 className="course__title">{course.title}</h3>
                </Link>
              </div> */}

                {/* <Link to={`/course/${course.slug}`}>
                  <span className="course__button">
                    Course Detail <UilArrowRight className="course__button-icon" />
                  </span>
                </Link> */}
            </div>
          ))}
        </div>
        {/* <div className="section3__caption">
          <h3>Filter by Category:</h3>
          <div className="filter__controls">
            {cats.map((category, index) => (
              <label key={index} className="category__label">
              <input
                type="checkbox"
                value={category.id}
                checked={selectedCategories.includes(category.id)}
                onChange={() => handleCategoryChange(category.id)}
              />
              {category.title}
              </label>
            ))}
            </div>
          </div> */}
          
        </div>
    </div>   
    </div>     
    </>
  )
}
export default Training_Courses;