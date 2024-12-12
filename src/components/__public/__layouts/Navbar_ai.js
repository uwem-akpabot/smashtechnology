import React, { useState, useEffect } from 'react';
import { UilYoutube, UilEnvelope, UilPhone, UilWhatsapp } from '@iconscout/react-unicons';
import {Link} from 'react-router-dom';
import logo from '../../../assets/img/logo/logo.png';

const Navbar_ai = (props) => {
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

  return (
    <nav className="navbar zyzics_company_banner">
      <Link to="/" id="logo">
        <img src={logo} style={{width: '50px', height: '50px' }} title="Zyzics Logo" alt="Zyzics Logo" />

        <h1>{props.project} IT Training <br />and Software Ltd.</h1>
      </Link>
      
      {/* style={{background: 'green'}} */}
      <ul className="menu">
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
                <ul>
                  <li><a href="#">Onboard & Verify</a><span>Attract talent, onboard at scale and automate verification workflows</span></li>
                  <li><a href="#">Pay</a><span>Pay workers quickly, at scale, almost anywhere in the world</span></li>
                  <li><a href="#">Organize Talent</a><span>Create pre-vetted pools of your talent based on skills sets, location and more</span></li>
                  <li><a href="#">Compliance Support</a><span>Tax ID verification, invoice audit trail, tax filing & more</span></li>
                  <li><a href="#">Manage Assignments</a><span>Easily manage large volumes of work and help ensure deliverables are met</span></li>
                  <li><a href="#">Integration & Automation</a><span>Open API and custom automation rules</span></li>
                </ul>
                <div className="featured">
                  <h3>Featured</h3>
                  <img src="https://via.placeholder.com/100" alt="Featured" />
                  <a href="#">IT Field Services Marketplace</a>
                  <a href="#">Client Stories</a>
                  <a href="#">Use Cases</a>
                </div>
              </div>
            </div>
          )}
        </li>
        <li className="menu-item" title="Click here to explore our work portfolio">
          <button onClick={() => toggleDropdown('whyDropdown')} className="menu-button">
            Projects <span className={`caret ${openDropdown === 'whyDropdown' ? 'rotate' : ''}`}>▼</span>
          </button>
          {openDropdown === 'whyDropdown' && (
            <div className="dropdown">
              <div className="dropdown-angle"></div>
              <div className="dropdown-content">
                <p>Content for "Projects"</p>
              </div>
            </div>
          )}
        </li>
        <li className="menu-item" title="Click here for more links">
          <button onClick={() => toggleDropdown('resourcesDropdown')} className="menu-button">
            More <span className={`caret ${openDropdown === 'resourcesDropdown' ? 'rotate' : ''}`}>▼</span>
          </button>
          {openDropdown === 'resourcesDropdown' && (
            <div className="dropdown">
              <div className="dropdown-angle"></div>
              <div className="dropdown-content">
                <p>Content for "More"</p>
              </div>
            </div>
          )}
        </li>

        {/* style={{background: 'red'}} */}
        <div className="contacts" >
          <div>
            <a href="https://wa.me/message/GMNIQ5YNLZRFD1" className="zyzics__social-link" title="Chat with us on WhatsApp"><UilWhatsapp /></a>
            <a href="" className="zyzics__social-link" title="Send us an email"><UilEnvelope /></a>
            <a href="https://www.youtube.com/@zyzics-it-training" className="zyzics__social-link" title="Watch tutorials on our YouTube channel"><UilYoutube /></a>
            
            {/* <a href="https://linkedin.com/company/zyzics" className="zyzics__social-link"><UilLinkedin /></a> */}
          </div> 
          <div>
            <a href="tel:+2348021075169" style={{color: '#222'}} title="Click here to call us now">
              <h6><UilPhone /> +234 802-107-5169</h6>
            </a>
          </div>       
        </div>   

        <li className="dvs-header__trigger">Trigger</li>

      </ul>
    </nav>
  );
};
export default Navbar_ai;