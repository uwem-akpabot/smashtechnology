import { useState, useEffect } from 'react';
import { UilBars } from '@iconscout/react-unicons';
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
    <nav className="navbar">
      {/* <div id="top"> */}
      <Link to="/" id="logo">
        <img src={logo} className="logo" style={{width: '65.21px', height: '65.21px' }} title="Logo" alt="Logo" /> 
        <div>
          <span>Smash </span>Technology
        </div>
      </Link>
      
      <li className="dvs-header__trigger" onClick={toggleMenu}><UilBars /></li>
      
      {/* style={{background: 'green'}} */}
      <ul className={`menu ${isOpen ? 'is-open' : ''}`}>
        <li className="menu-item" title="Click to browse company">
          <button
            onClick={() => toggleDropdown('company')}
            className={`menu-button ${openDropdown === 'company' ? 'active' : ''}`}
          >
            Company <span className={`caret ${openDropdown === 'company' ? 'rotate' : ''}`}>▼</span>
          </button>
          {openDropdown === 'company' && (
            <div className="dropdown">
              {/* <div className="dropdown-angle"></div> */}
              <div className="dropdown-content">
                <ul className="">
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="#about_missionceo">Our Core Values</Link></li>
                    <li><Link to="/about#commitment1">Commitment to Sustainability</Link></li>
                    <li><Link to="/about#commitment2">Commitment To Quality</Link></li>
                    <li><Link to="/about#">Exceptional Customer Service</Link></li>
                    <li><Link to="/investor-relations">Investor Relations</Link></li>
                    <li><Link to="/smash-people">People</Link></li>
                </ul>
              </div>
            </div>
          )}
        </li>
        <li className="menu-item" title="Browse our businesses">
          <button onClick={() => toggleDropdown('ourBusiness')} className="menu-button">
            Our Business <span className={`caret ${openDropdown === 'ourBusiness' ? 'rotate' : ''}`}>▼</span>
          </button>
          {openDropdown === 'ourBusiness' && (
            <div className="dropdown">
              {/* <div className="dropdown-angle"></div> */}
                <div className="dropdown-content">
                  <ul className="">
                    <li><a href="https://ridesmash.com/">Ridesmash</a></li>
                    <li><a href="https://smashtravels.com/">Smash Travels</a></li>
                    <li><a href="https://www.smashbookings.com/">Smash Bookings</a></li>
                    <li><Link to="/">Smashwise</Link></li>
                    <li><Link to="/">Smashbuy247</Link></li>
                    <li><Link to="/">Smash Apartments</Link></li>
                    <li><Link to="/">Smashfood</Link></li>
                    <li><Link to="/">Smashproperties</Link></li>
                    <li><Link to="/">Smash Hire</Link></li>
                    <li><Link to="/">Smash Logistics</Link></li>
                    <li><Link to="/">Smash Laundry</Link></li>
                    <li><Link to="/">Owenas</Link></li>
                    <li><Link to="/">Qiimeet</Link></li>
                  </ul>
              </div>
            </div>
          )}
        </li>

        <li className="menu-item" title="Browse investment opportunities">
          <button onClick={() => toggleDropdown('investment')} className="menu-button">
            Investment<span className={`caret ${openDropdown === 'investment' ? 'rotate' : ''}`}>▼</span>
          </button>
          {openDropdown === 'investment' && (
            <div className="dropdown">
              {/* <div className="dropdown-angle"></div> */}
                <div className="dropdown-content">
                  <ul className="">
                    <li><Link to="/">Buy Shares</Link></li>
                    <li><Link to="/investment-with-roi">Investment with ROI</Link></li>
                    <li><Link to="/investor-signup">Investor Signup</Link></li>  
                  </ul>
              </div>
            </div>
          )}
        </li>

        <li className="menu-item" title="Browse our careers">
          <Link to="/careers" className="menu-button" id="careers">Careers</Link>
        </li>

        <li className="menu-item" title="Our media">
          <button onClick={() => toggleDropdown('media')} className="menu-button">
            Media <span className={`caret ${openDropdown === 'media' ? 'rotate' : ''}`}>▼</span>
          </button>
          {openDropdown === 'media' && (
            <div className="dropdown">
              {/* <div className="dropdown-angle"></div> */}
              <div className="dropdown-content">
                <ul className="">
                  <li><Link to="/">Smash CSR</Link></li>
                  <li><Link to="/">Gallery</Link></li>
                  <li><Link to="/">Blog</Link></li>
                </ul>
              </div>
            </div>
          )}
        </li> 
               
      </ul>
      {/* </div> */}

      {/* style={{background: 'red'}} */}
      <div className="contacts" >
          <div>
            <button className="smashtech-button swipe-button">Get In Touch</button>

            {/* <a href="https://wa.me/message/GMNIQ5YNLZRFD1" className="zyzics__social-link" title="Chat with us on WhatsApp"><UilWhatsapp /></a>
            <a href="" className="zyzics__social-link" title="Send us an email"><UilEnvelope /></a>
            <a href="https://www.youtube.com/@zyzics-it-training" className="zyzics__social-link" title="Watch tutorials on our YouTube channel"><UilYoutube /></a>
            <a href="https://linkedin.com/company/zyzics" className="zyzics__social-link"><UilLinkedin /></a>  */}
          </div> 
          <div>
            <a href="tel:+2348012345678" title="Click here to call us now!">
              {/* <h6><UilPhone /> +234 801234455</h6> */}
            </a>
          </div>       
        </div>  
    </nav>
  );
};
export default Navbar;