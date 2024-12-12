import { UilTrophy, UilSitemap, UilGlobe, UilDesktop, UilLaptop, UilLock, UilArrowRight } 
  from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';

const Footer = (props) => {
  return (
    <div className="sections" id="footer">
      <div className="welcome">
        <div>
          <h3>{props.project} {props.company}</h3>
          <p>RC. 7921450. JESUS is LORD above all</p>
        </div>
      </div>

      <div className="zy-c4">
        <div className="">
          <div className="feats-inner">
            <h4>Company</h4>
          </div>          
          <ul>
            <li><Link to="/">About Us</Link></li>
            <li><Link to="/">How We're Different</Link></li>
            <li><Link to="/">Clients' Reviews</Link></li>
            <li><Link to="/">Products</Link></li>
            <li><Link to="/">Services</Link></li>
            <li><Link to="/">Team</Link></li>
            <li><Link to="/">Contact</Link></li>
            <li><Link to="/">Partners</Link></li>
            <li><Link to="/">Pricing</Link></li>
            <li><Link to="/">Login</Link></li>
          </ul>
        </div>

        <div className="">
          <div className="feats-inner">
            <h4>Services</h4>
          </div>          
          <ul>
            <li><Link to="/">IT Training</Link></li>
            <li><Link to="/">Software Development</Link></li>
            <li><Link to="/">Website Design</Link></li>
            <li><Link to="/">IT Consulting</Link></li>
          </ul>

          <br />
          <div className="feats-inner">
            <h4>Products</h4>
          </div>          
          <ul>
            <li><Link to="/">Zyzics School Software</Link></li>
            <li><Link to="/">Web Design Portfolio</Link></li>
            <li><Link to="/">Software Dev Portfolio</Link></li>
            <li><Link to="/">IT Training Portfolio</Link></li>
          </ul>
        </div>

        <div className="">
          <div className="feats-inner">
            <h4>Course Delivery</h4>
          </div>          
          <ul>
            <li><Link to="/">Live Online Class</Link></li>
            <li><Link to="/">Self-Paced Study</Link></li>
            <li><Link to="/">On-Campus Class</Link></li>
          </ul>

          <br />
          <div className="feats-inner">
            <h4>Training Types</h4>
          </div>          
          <ul>          
            <li><Link to="/">Regular</Link></li>
            <li><Link to="/">Corporate</Link></li>
            <li><Link to="/">Private / Executive</Link></li>
          </ul>
        </div>

        <div className="">
          <div className="feats-inner">
            <h4>Pricing </h4>
          </div>          
          <ul>
            <li><Link to="/">For Web Design</Link></li>
            <li><Link to="/">For Software Devt.</Link></li>
            <li><Link to="/">For Zyzics Apps</Link></li>
            <li><Link to="/">For IT Consulting</Link></li>
            <li><Link to="/">For Corporate Training</Link></li>
            <li><Link to="/">For Executive Training</Link></li>
            <li><Link to="/">Retainer / Maintenance</Link></li>
          </ul>
        </div>

      </div>
    </div>
  )
}
export default Footer;