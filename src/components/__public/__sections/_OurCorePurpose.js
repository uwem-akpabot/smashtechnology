import { UilTrophy, UilSitemap, UilGlobe, UilDesktop, UilLaptop, UilLock, UilArrowRight } 
  from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';
import core1 from './../../../assets/images/corevalues/1.png';
import core2 from './../../../assets/images/corevalues/2.png';
import core3 from './../../../assets/images/corevalues/3.png';
import core4 from './../../../assets/images/corevalues/4.png';

const OurCorePurpose = () => {
  return (
    <>
    <div className="sections" id="ourcorepurpose">
        <h2>Our Core Purpose</h2>
        
      <div className="">
        <div className="">
          <img src={core1} />
        </div>
        <div className="">
          <h3>Customer Service Experience</h3>
          <p>As a world-class organization, we understand that we exist to serve and satisfy our customers. 
              Accordingly, our customer orientation reflects intimacy, integrity and learning.</p>
        </div>

      </div>
    </div>
    </>
  )
}
export default OurCorePurpose;