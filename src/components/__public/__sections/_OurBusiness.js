import { UilTrophy, UilSitemap, UilGlobe, UilDesktop, UilLaptop, UilLock, UilArrowRight } 
  from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';
import biz1 from './../../../assets/images/ourbusiness/Ridesmash.png';
import biz2 from './../../../assets/images/ourbusiness/Food.png';
import biz3 from './../../../assets/images/ourbusiness/SmashTravels.png';

const OurBusiness = () => {
  return (
    <>
    <div className="sections" id="ourbusiness">
        <h2>Our Business</h2>
        <p>Smash Technology is a group of innovative app-based subsidiaries designed to simplify and enhance your daily life. 
            We've transformed our services from manual operations to a tech-driven experience, offering a variety of essential 
            apps for both local and international users.
        </p>
        
      <div className="c3 c1-sm c1-xs">
        <Link to="/about" title="Ridesmash">
          <div className="business-container">
              <img src={biz1} />

              <h3>Ridesmash</h3>
              <p>Get a safe and affordable ride anytime, anywhere with our user-friendly ride-hailing platform.</p>
              <Link to="/about">Learn more <UilArrowRight /></Link>
            </div>
        </Link>
        <Link to="/about" title="Smashfood">
          <div className="business-container">
            <img src={biz2} />

            <h3>Smashfood</h3>
            <p>Delicious meals, delivered fast. Order your favorites and enjoy culinary delights at your doorstep.</p>
            <Link to="/about">Learn more <UilArrowRight /></Link>
          </div>
        </Link>
        <Link to="/about" title="Smash Travels">
          <div className="business-container">
            <img src={biz3} />

            <h3>Smash Travels</h3>
            <p>Effortless bookings and memorable journeys await. Let us handle the details—your adventure starts here.</p>
            <Link to="/about">Learn more <UilArrowRight /></Link>
          </div>
        </Link>

      </div>
    </div>
    </>
  )
}
export default OurBusiness;