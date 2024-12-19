import { useEffect } from 'react';
import Header from '../../__layouts/Header';
import { Helmet } from 'react-helmet';
import Banner_otherpages from '../_Banner_otherpages';
import image from '../../../../assets/images/otherpages/people.png';
import ceo from './../../../../assets/images/ourteam/CEO.png';

import deptSales from './../../../../assets/images/dept/sales.png';
import deptSmashtravel from './../../../../assets/images/dept/smashtravel.png';
import deptRidesmash from './../../../../assets/images/dept/ridemash.png';
import deptSmashwise from './../../../../assets/images/dept/smashwise.png';
// import officeAssistants from './../../../../assets/images/ourteam/officeassistants.png';
import media from './../../../../assets/images/dept/smashwise.png';
import { UilArrowRight } from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';

const People = (props) => {
  useEffect(() => {
    document.title = `${props.company} - People in Smash`;
  }, []);

  return (
    <>
    <Helmet>
      <link href="/reg/css/bootstrap.min.css" rel="stylesheet" />
    </Helmet>
    
    <Header />
    <Banner_otherpages title="People" image={image} />

    <div className="sections" id="about_people">
      <h2>Smash Technology Departments</h2>
      
      <div className="text-center">
        <p>Smash Technology operates through a diverse range of specialized departments, each dedicated to delivering excellence in its field. From innovative 
          product development and design to robust customer support and strategic marketing, our departments work seamlessly to power our tech-driven solutions. 
          With a unified vision and expertise across e-commerce, transport, real estate, food delivery, and investment schemes, we’re redefining industries and 
          exceeding expectations. Dive into the core of our operations and discover how each department contributes to the success of our ecosystem.</p>
      </div>

      <div className="people">
        <img src={media} />
        <div>
          <p className="people-h2"><button className="bot"></button> Media & IT Department</p>
          <Link to="/media-it" className="smashtech-button swipe-button">View Department </Link>
        </div>
      </div>

      <div className="people">
        <img src={media} />
        <div>
          <p className="people-h2"><button className="bot"></button> HR & Admin Department</p>
          <Link to="/media-it" className="smashtech-button swipe-button">View Department </Link>
        </div>
      </div>

      <div className="people">
        <img src={deptSales} />
        <div>
          <p className="people-h2"><button className="bot"></button> Sales & Marketing Department</p>
          <Link to="/media-it" className="smashtech-button swipe-button">View Department </Link>
        </div>
      </div>

      <div className="people">
        <img src={deptSmashtravel} />
        <div>
          <p className="people-h2"><button className="bot"></button> CS Department-Smash Travels</p>
          <Link to="/media-it" className="smashtech-button swipe-button">View Department </Link>
        </div>
      </div>

      <div className="people">
        <img src={deptRidesmash} />
        <div>
          <p className="people-h2"><button className="bot"></button> CS Department-Ridesmash</p>
          <Link to="/media-it" className="smashtech-button swipe-button">View Department </Link>
        </div>
      </div>

      <div className="people">
        <img src={deptSmashwise} />
        <div>
          <p className="people-h2"><button className="bot"></button> CS Department-Smashwise</p>
          <Link to="/media-it" className="smashtech-button swipe-button">View Department </Link>
        </div>
      </div>

      <div className="people">
        <img src={media} />
        <div>
          <p className="people-h2"><button className="bot"></button> Office Assistants</p>
          <Link to="/media-it" className="smashtech-button swipe-button">View Department </Link>
        </div>
      </div>

    </div>
  </>
  );
}
export default People;