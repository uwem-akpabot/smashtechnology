import { UilTrophy, UilSitemap, UilGlobe, UilDesktop, UilLaptop, UilLock, UilArrowRight } 
  from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';
import ceo from './../../../assets/images/ourteam/CEO.png';
import gracious from './../../../assets/images/ourteam//Gracious.png';
import charity from './../../../assets/images/ourteam/Charity.png';
import biz2 from './../../../assets/images/ourbusiness/Food.png';
// import biz3 from './../../../assets/images/ourbusiness/SmashTravels.png';

const OurTeam = () => {
  return (
    <>
    <div className="sections" id="ourteam">
      <h2>Meet Our Team</h2>
        
      <div className="zy-c2 zy-c1-sm zy-c1-xs">
        <Link to="/about">
          <div className="business-container">
              <img src={ceo} />

              <div>
                <h3>Chief Executive Officer</h3>
                <p>Get a safe and affordable ride anytime, anywhere with our user-friendly ride-hailing platform.</p>
                <br /><Link to="/about">Read more <UilArrowRight /></Link>
              </div>
          </div>
        </Link>
        <Link to="/about">
          <div className="business-container">
              <img src={biz2} />

              <div>
                <h3>General Manager</h3>
                <p>Get a safe and affordable ride anytime, anywhere with our user-friendly ride-hailing platform.</p>
                <br /><Link to="/about">Read more <UilArrowRight /></Link>
              </div>
          </div>
        </Link>
        <Link to="/about">
          <div className="business-container">
            <img src={gracious} />

            <div>
              <h3>Head of Media & Communications</h3>
              <p>Get a safe and affordable ride anytime, anywhere with our user-friendly ride-hailing platform.</p>
              <br /><Link to="/about">Read more <UilArrowRight /></Link>
            </div>
          </div>
        </Link>
        <Link to="/about">
          <div className="business-container">
            <img src={biz2} />

            <div>
              <h3>Human Resource Manager</h3>
              <p>Get a safe and affordable ride anytime, anywhere with our user-friendly ride-hailing platform.</p>
              <br /><Link to="/about">Read more <UilArrowRight /></Link>
            </div>
          </div>
        </Link>
        <Link to="/about">
          <div className="business-container">
            <img src={biz2} />

            <div>
              <h3>Head of Operations</h3>
              <p>Get a safe and affordable ride anytime, anywhere with our user-friendly ride-hailing platform.</p>
              <br /><Link to="/about">Read more <UilArrowRight /></Link>
            </div>
          </div>
        </Link>
        <Link to="/about">
          <div className="business-container">
            <img src={biz2} />

            <div>
              <h3>Head of Sales</h3>
              <p>Get a safe and affordable ride anytime, anywhere with our user-friendly ride-hailing platform.</p>
              <br /><Link to="/about">Read more <UilArrowRight /></Link>
            </div>
          </div>

        </Link>
        <Link to="/about">
          <div className="business-container">
            <img src={biz2} />

            <div>
              <h3>Head of Investments</h3>
              <p>Get a safe and affordable ride anytime, anywhere with our user-friendly ride-hailing platform.</p>
              <br /><Link to="/about">Read more <UilArrowRight /></Link>
            </div>
          </div>
        </Link>
        <Link to="/about">
          <div className="business-container">
            <img src={charity} />

            <div>
              <h3>Team Lead SmashTravels</h3>
              <p>Get a safe and affordable ride anytime, anywhere with our user-friendly ride-hailing platform.</p>
              <br /><Link to="/about">Read more <UilArrowRight /></Link>
            </div>
          </div>
        </Link>
      </div>
    </div>
    </>
  )
}
export default OurTeam;