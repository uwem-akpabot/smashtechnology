import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UilPhone, UilWhatsapp, UilEnvelope, UilYoutube, UilSearch, UilApps } from '@iconscout/react-unicons';
import logo from '../../../assets/img/logo/logo.png';

const New_Navbar = (props) => {
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
    <>
    <div id="top__nav">
      <div className="company">
        <div className="short-name">
          <img src={logo} className="logo" title="Zyzics Logo" alt="Zyzics Logo" />
          <h1>Zyzics</h1>
        </div>

        <div className="long-name">
          <code>{props.project} IT Training and Software Ltd.</code>
        </div>
      </div>
      <ul className="menu__right">
        {/* <input placeholder="Search ..." />  */}
        <Link to="/"><li><code>About</code></li></Link>
        <Link to="/"><li><code>Login</code></li></Link>

        <Link to="/" title="Search any course or service ..."><UilSearch /></Link>

        <div className="contacts">
          <a href="https://wa.me/message/GMNIQ5YNLZRFD1" className="zyzics__social-link" title="Chat with us on WhatsApp"><UilWhatsapp /></a>
          <a href="" className="zyzics__social-link" title="Send us an email"><UilEnvelope /></a>
          <a href="https://www.youtube.com/@zyzics-it-training" className="zyzics__social-link" title="Watch tutorials on our YouTube channel"><UilYoutube /></a>
        </div>
      </ul>
    </div>

    <li className="dvs-header__trigger" onClick={toggleMenu}><UilApps /></li>

    <div id="nav__menu">
      <ul className={`menu ${isOpen ? 'is-open' : ''}`}>
        <Link to="/"><li>Home</li></Link>
        {/* <Link to="/"><li>Our Services</li></Link> */}

        <li className="menu-item" title="Click here to browse our services">
          <Link to="/"
            onClick={() => toggleDropdown('featuresDropdown')}
            className={`menu-button ${openDropdown === 'featuresDropdown' ? 'active' : ''}`}
          >
            Our Services <span className={`caret ${openDropdown === 'featuresDropdown' ? 'rotate' : ''}`}>▼</span>
          </Link>
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

        <Link to="/"><li>Products</li></Link>
        
        <li className="menu-item" title="Click here to browse IT Training">
          <Link to="/"
            onClick={() => toggleDropdown('TrainingDropdown')}
            className={`menu-button ${openDropdown === 'TrainingDropdown' ? 'active' : ''}`}
          >
            IT Training <span className={`caret ${openDropdown === 'TrainingDropdown' ? 'rotate' : ''}`}>▼</span>
          </Link>
          {openDropdown === 'TrainingDropdown' && (
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
        <li className="menu-item" title="Software Development services">
          <Link to="/"
            onClick={() => toggleDropdown('SoftwareDropdown')}
            className={`menu-button ${openDropdown === 'SoftwareDropdown' ? 'active' : ''}`}
          >
            Software Development <span className={`caret ${openDropdown === 'SoftwareDropdown' ? 'rotate' : ''}`}>▼</span>
          </Link>
          {openDropdown === 'SoftwareDropdown' && (
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
              </div>
            </div>
          )}
        </li>
      </ul>
      <div className="menu__right">
        <a href="tel:+2348021075169" title="Click to call us now!" id="phoneno">
          <UilPhone /> +234 802-107-5169
        </a>
      </div>
    </div>
      
    </>
  )
}
export default New_Navbar;