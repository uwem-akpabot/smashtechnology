import {Routes, Route} from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute'; // Import the ProtectedRoute
import Home from './pages/Home';

// Public
// import Registration from './pages/member/Registration';
// import Login from './pages/member/Login';
// import Dashboard from './pages/member/Dashboard';
// import Logout from './pages/member/Logout';

const Main = () => {
  const company =  'Smash Technology';
  // const ittraining_desc = 'Learn Your Dream IT Courses In Simple, Clear Steps'
  const softwaredev_desc = 'Software Development, Website Design, etc. for businesses, organizations, and individuals'

  return (
    <>
      <Routes>
        {/* Public */}
        <Route path="" element={<Home company={company} />} />
        
        {/* <Route path="/about" element={<About />} /> */}

        {/* DETAIL PAGES */}
        {/* <Route path="/course-category/:category_id" element={<CategoryDetail project={project} />} />
        <Route path="/course/:course_id" element={<CourseDetail project={project} />} />
        <Route path="/instructor/:instructor_id" element={<InstructorDetail project={project} />} />

        <Route path="/manage-courses" element={<ManageCourses />} />
        <Route path="/course-sample" element={<CourseSample project={project} />} /> */}
      </Routes>
    </>
  );
}
export default Main;
