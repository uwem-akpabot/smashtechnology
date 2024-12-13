import { UilTrophy, UilSitemap, UilGlobe, UilDesktop, UilLaptop, UilLock, UilArrowRight } 
  from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';
import core1 from './../../../assets/images/corevalues/1.png';
import core2 from './../../../assets/images/corevalues/2.png';
import core3 from './../../../assets/images/corevalues/3.png';
import core4 from './../../../assets/images/corevalues/4.png';

const CoreValues = () => {
  return (
    <>
    <div className="sections" id="ourcorevalues">
        <h2>Our Core Values</h2>
        
      <div className="zy-c2 zy-c1-sm zy-c1-xs">
        <div className="">
          <img src={core1} />
        </div>
        <div className="">
          <h3>Customer Service Experience</h3>
          <p>As a world-class organization, we understand that we exist to serve and satisfy our customers. 
              Accordingly, our customer orientation reflects intimacy, integrity and learning.</p>
        </div>
        
        <div className="">
          <h3>Entrepreneurship</h3>
          <p>We continuously seek and develop new business in tech, employing state-of-the-art methods to retain our market leadership.</p>
        </div>
        <div className="">
          <img src={core2} />
        </div>

        <div className="">
          <img src={core3} />
        </div>
        <div className="">
          <h3>Excellence through teamwork</h3>
          <p>We are a large organization, working together to deliver the best products and services to our valuable customers and stakeholders. 
            To achieve this, we demonstrate teamwork, respect, and meritocracy.</p>
        </div>
        
        <div className="">
          <h3>Leadership</h3>
          <p>We thrive on being leaders in our various businesses, markets and communities. 
            To drive this, we focus on continuous improvement, partnership and professionalism.</p>
        </div>
        <div className="">
          <img src={core4} />
        </div>

      </div>
    </div>
    </>
  )
}
export default CoreValues;