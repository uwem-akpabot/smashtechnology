import {Routes, Route} from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute'; // Import the ProtectedRoute
import Home from './pages/Home';
import About from './pages/About';
import People from './__public/__sections/About/People';
import InvestorRelations from './__public/__sections/About/InvestorRelations';
import Careers from './pages/Careers';
import Footer from './__public/__layouts/Footer';
import MediaIT from './pages/MediaIT';
import InvestmentWithROI from './pages/InvestmentWithROI';
import ApplicationForm from './pages/ApplicationForm';

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
        <Route path="/about" element={<About company={company} />} />
        <Route path="/smash-people" element={<People company={company} />} />
        <Route path="/investor-relations" element={<InvestorRelations company={company} />} />
        <Route path="/careers" element={<Careers company={company} />} />
        <Route path="/media-it" element={<MediaIT company={company} />} />
        <Route path="/investment-with-roi" element={<InvestmentWithROI company={company} />} />
        <Route path="/investor-signup" element={<ApplicationForm company={company} />} />

        {/* DETAIL PAGES */}
        {/* <Route path="/course-category/:category_id" element={<CategoryDetail project={project} />} />
        <Route path="/course/:course_id" element={<CourseDetail project={project} />} />
        <Route path="/instructor/:instructor_id" element={<InstructorDetail project={project} />} />

        <Route path="/manage-courses" element={<ManageCourses />} />
        <Route path="/course-sample" element={<CourseSample project={project} />} /> */}
      </Routes>
      <Footer />
    </>
  );
}
export default Main;
