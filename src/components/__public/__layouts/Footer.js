import { UilTrophy, UilSitemap, UilGlobe, UilDesktop, UilLaptop, UilLock, UilArrowRight, UilFacebook, UilInstagram, UilWhatsapp, UilEnvelope, UilPhone, UilTwitter } 
  from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo/footer-logo.png';

const Footer = (props) => {
  return (
    <div className="sections footer" id="footer">
      <div className="row">
          <div className="col-md-6 col-lg-3">
              <div className="footer-about">
                  <h2>Location</h2>
                  <p>2 King Jaja Street, Works &amp; Housing, 3rd Avenue, Gwarinpa, Abuja - Nigeria</p>

                  <iframe 
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15228.404107111688!2d7.411400921809833!3d9.112733853676842!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e750c10f4e05f%3A0xaaf486ef52d3055c!2sSmash%20Technology%20Nigeria!5e0!3m2!1sen!2sng!4v1734024734016!5m2!1sen!2sng"
      width="88%" 
      height="193" className="small-map"
      style={{ border: 0, allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade" }}></iframe>
    
              </div>
          </div>
          <div className="col-md-6 col-lg-9">
              <div className="row">                                
                  <div className="col-md-6 col-lg-4">
                      <div className="footer-link">
                          <h2>Company</h2>
                          <Link to="/">Home</Link>
                          <Link to="/about">About Us</Link>
                          <a href="https://ridesmash.com/">Our Businesses</a>
                          <Link to="/investment-with-roi">Investment Opportunities</Link>
                          <Link to="/careers">Careers</Link>
                          <Link to="/">Latest News</Link>
                      </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                      <div className="footer-link">
                          <h2>Our Businesses</h2>
                          <a href="https://ridesmash.com/">Ridesmash</a>
                          <a href="https://smashtravels.com/">Smash Travels</a>
                          <a href="https://www.smashbookings.com/">Smash Bookings</a>
                          <Link to="/">Smashwise</Link>
                          <Link to="/">SmashApartments</Link>
                          <Link to="/">SmashFood</Link>
                          <Link to="/">Qiimeet</Link>
                          <Link to="/">Owenas</Link>
                      </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                      <div className="footer-link">
                          <h2>Contact Us</h2>
                          <a href="tel:+2348012345678" title="Click to call" className="_070smash">070<span>SMASHTECH</span></a>
                          <a href="tel:+2348012345678" title="Click to call"><UilPhone /> +2349097403297</a>
                          <a href="tel:+2348012345678" title="Click to call"><UilPhone /> +2349097403297</a>
                          <a href="tel:+2348012345678" title="Click to call"><UilPhone /> +2349097403297</a>
                          <a href="mailto:hello@smashtechgroup.com" title="Click to send a mail"><UilEnvelope /> hello@smashtechgroup.com</a>
                          
                          <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="https://x.com/smashtechnology"><UilTwitter /></a>
                            <a href="https://web.facebook.com/smashtechnology"><UilFacebook /></a>
                            <a href="https://www.instagram.com/smashtechnology"><UilInstagram /></a>
                            <a href="https://wa.me/+2349097403297" title="Click to chat on WhatsApp"><UilWhatsapp /></a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
      <hr />

      <div className="footer-menu">
        <div className="row">
          <div className="col-md-6">
            <Link to="/" id="logo">
              <img src={logo} style={{width: '73px', height: '73px' }} title="Logo" alt="Logo" />
            </Link>
            Copyright &copy; Smash Technology Ltd. All Rights Reserved. 
          </div>
          <div className="col-md-6 footer-menu">
            <div className="f-menu">
              <a href="/privacypolicy">Privacy Policy</a>
              <a href="/termsandconditions">Terms of Use</a>
              <a href="/about#team">Blog</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer;