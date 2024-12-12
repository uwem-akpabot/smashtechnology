import { UilTrophy, UilSitemap, UilGlobe, UilDesktop, UilLaptop, UilLock, UilArrowRight } 
  from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="sections" id="services">
      <div className="welcome">
        <div>
          <span>Welcome to Zyzics!</span>
          <h3>Choose from our services</h3>
          <p>Why we are special we are special we are special we are special why we 
          re special we are special we are special we are 
          </p>
        </div>
        <div>
          <img src="" alt="image" />
        </div>
      </div>

      <div className="serv zy-c3">
        <div className="zyzics__subbanner">
          <Link to="/">
            <div className="feats-inner">
              <UilTrophy className="uil" />
              <h4>Professional IT Training</h4>
            </div>
            <p>Why we are special we are special we are special we are special why we 
            re special we are special</p>
          </Link>
        </div>

        <div className="zyzics__subbanner">
          <Link to="/">
            <div className="feats-inner">
              <UilDesktop className="uil" />
              <h4>Software Development</h4>
            </div>
            <p>Why we are special we are special we are special we are special why we 
            re special we are special</p>
          </Link>
        </div>
        
        <div className="zyzics__subbanner">
          <Link to="/">
            <div className="feats-inner">
              <UilGlobe className="uil" />
              <h4>Website Design and Consulting</h4>
            </div>
            <p>Why we are special we are special we are special we are special why we 
            re special we are special</p>
          </Link>
        </div>
        
      </div>
    </div>
  )
}
export default Services;