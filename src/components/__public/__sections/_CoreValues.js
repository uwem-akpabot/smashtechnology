import { UilTrophy, UilSitemap, UilGlobe, UilDesktop, UilLaptop, UilLock, UilArrowRight } 
  from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';
import biz1 from './../../../assets/images/ourbusiness/Ridesmash.png';
import biz2 from './../../../assets/images/ourbusiness/Food.png';
import biz3 from './../../../assets/images/ourbusiness/SmashTravels.png';

const CoreValues = () => {
  return (
    <>
    <div className="sections" id="ourbusiness">
        <h2>Our Business</h2>
        <p>Smash Technology is a group of innovative app-based subsidiaries designed to simplify and enhance your daily life. 
            We've transformed our services from manual operations to a tech-driven experience, offering a variety of essential 
            apps for both local and international users.
        </p>
        
      <div className="zy-c3 zy-c1-sm zy-c1-xs">
        <div className="">
            <img src={biz1} />

            <h3>Ridesmash</h3>
            <p>Get a safe and affordable ride anytime, anywhere with our user-friendly ride-hailing platform.</p>
            <Link to="/about">Learn more <UilArrowRight /></Link>
        </div>
        <div className="">
            <img src={biz2} />

            <h3>Smashfood</h3>
            <p>Delicious meals, delivered fast. Order your favorites and enjoy culinary delights at your doorstep.</p>
            <Link to="/about">Learn more <UilArrowRight /></Link>
        </div>
        <div className="">
            <img src={biz3} />

            <h3>Smash Travels</h3>
            <p>Effortless bookings and memorable journeys await. Let us handle the details—your adventure starts here.</p>
            <Link to="/about">Learn more <UilArrowRight /></Link>
        </div>

      </div>
    </div>
    </>
  )
}
export default CoreValues;