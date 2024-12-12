import { useState, useEffect } from 'react';
import { UilYoutube, UilEnvelope, UilPhone, UilWhatsapp, UilApps } from '@iconscout/react-unicons';
import {Link} from 'react-router-dom';
import logo from '../../../assets/images/logo/smash-logo.png';

const Navbar = (props) => {
  // state for navbar click event
  const [isOpen, setIsOpen] = useState(false);

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdownId) => {
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.menu-item')) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Mobile Nav
  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  return (
    <nav className="navbar zyzics_company_banner">
      <div id="top">
      <Link to="/" id="logo">
        <img src={logo} style={{width: '50px', height: '50px' }} title="Zyzics Logo" alt="Zyzics Logo" />

        <h1>{props.company}</h1>
      </Link>
      
      <li className="dvs-header__trigger" onClick={toggleMenu}><UilApps /></li>
      
      {/* style={{background: 'green'}} */}
      <ul className={`menu ${isOpen ? 'is-open' : ''}`}>
        <li className="menu-item" title="Click here to browse our services">
          <button
            onClick={() => toggleDropdown('featuresDropdown')}
            className={`menu-button ${openDropdown === 'featuresDropdown' ? 'active' : ''}`}
          >
            Our Services <span className={`caret ${openDropdown === 'featuresDropdown' ? 'rotate' : ''}`}>▼</span>
          </button>
          {openDropdown === 'featuresDropdown' && (
            <div className="dropdown">
              <div className="dropdown-angle"></div>
              <div className="dropdown-content">
                <ul className="">
                  <h6>Programming</h6>
                  <li><Link to="/">Java</Link></li>
                  <li><Link to="/">Python</Link></li>
                  <li><Link to="/">PHP</Link></li>
                  <li><Link to="/">JavaScript, C#</Link></li>

                  <br />
                  <h6>Frontend Web Developmt</h6>
                  <li><Link to="/">React.js</Link></li>
                  <li><Link to="/">HTML, CSS, JavaScript</Link></li>
                  
                  <br />
                  <h6>Backend Web Developmt</h6>
                  <li><Link to="/">Django, DRF</Link></li>
                  <li><Link to="/">Laravel</Link></li>
                  <li><Link to="/">Node.js, Spring Boot</Link></li>
                  <li><Link to="/">REST API, Microserv.</Link></li>
                
                </ul>
                <ul>
                  <h6>Full-Stack Web Developmt</h6>
                  <li><Link to="/">Django</Link></li>
                  <li><Link to="/">Laravel</Link></li>

                  <br />
                  <h6>Desktop App Developmt</h6>
                  <li><Link to="/">Swing, Tkinter, Kivy</Link></li>

                  <br />
                  <h6>Database Administration</h6>
                    <li><Link to="/">MySQL, PostgreSQL, MongoDB</Link></li>
                </ul>
                <div className="features">
                  <h5>Training Types</h5>
                  <ul>
                      <li><Link to="/">Corporate </Link></li>
                      <li><Link to="/">Private/Executive</Link></li>
                  </ul>

                  <h5>Course Delivery</h5>
                  <ul>
                      <li><Link to="/">Live Online Class</Link></li>
                      <li><Link to="/">Self-Paced Study</Link></li>
                      <li><Link to="/">On-Campus Class</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </li>
        <li className="menu-item" title="Browse our projects, work portfolio, and products">
          <button onClick={() => toggleDropdown('whyDropdown')} className="menu-button">
            Products <span className={`caret ${openDropdown === 'whyDropdown' ? 'rotate' : ''}`}>▼</span>
          </button>
          {openDropdown === 'whyDropdown' && (
            <div className="dropdown">
              <div className="dropdown-angle"></div>
                <div className="dropdown-content">
                  <ul className="">
                    <h5>Website Design</h5>
                    <li><a href="https://legalcardinal.com.ng">Legal Cardinal Attorneys</a></li>   
                    <li><a href="https://eaglesofzion.com.ng">Eagles of Zion</a></li>

                    <br />
                    <h5>Software Development</h5>
                    <li><Link to="/">School Software</Link></li>

                    <br />
                    <h5>Corporate IT Training</h5>
                    <li><Link to="/">Roz Academy, Abuja</Link></li>
                  </ul>

                  <ul>
                    <h5>IT Consulting</h5>
                    <li><Link to="/">Risky-T Solutions</Link></li>

                    <br />
                    <h5>Training Partners</h5>
                    <li><Link to="/">MIT Technology Abuja</Link></li>
                  </ul>
              </div>
            </div>
          )}
        </li>
        <li className="menu-item" title="Click here for information about us">
          <button onClick={() => toggleDropdown('resourcesDropdown')} className="menu-button">
            About <span className={`caret ${openDropdown === 'resourcesDropdown' ? 'rotate' : ''}`}>▼</span>
          </button>
          {openDropdown === 'resourcesDropdown' && (
            <div className="dropdown">
              <div className="dropdown-angle"></div>
              <div className="dropdown-content">
                <ul className="">
                  <li><Link to="/">Company</Link></li>
                  <li><Link to="/">Work Portfolio</Link></li>
                  <li><Link to="/">Contact</Link></li>
                  <li><Link to="/">Books</Link></li>
                  <li><Link to="/">Study Guides</Link></li>
                  <li><Link to="/">Pricing</Link></li>
                  <li><Link to="/">IT Support</Link></li>
                </ul>
              </div>
            </div>
          )}
        </li>         
      </ul>
      </div>

      {/* style={{background: 'red'}} */}
      <div className="contacts" >
          <div>
            <a href="https://wa.me/message/GMNIQ5YNLZRFD1" className="zyzics__social-link" title="Chat with us on WhatsApp"><UilWhatsapp /></a>
            <a href="" className="zyzics__social-link" title="Send us an email"><UilEnvelope /></a>
            <a href="https://www.youtube.com/@zyzics-it-training" className="zyzics__social-link" title="Watch tutorials on our YouTube channel"><UilYoutube /></a>
            
            {/* <a href="https://linkedin.com/company/zyzics" className="zyzics__social-link"><UilLinkedin /></a> */}
          </div> 
          <div>
            <a href="tel:+2348021075169" title="Click to call us now!">
              <h6><UilPhone /> +234 802-107-5169</h6>
            </a>
          </div>       
        </div>  
    </nav>
  );
};
export default Navbar;