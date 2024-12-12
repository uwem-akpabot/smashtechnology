// import logo from '../../../img/logo.png';
import { Link } from 'react-router-dom';
// import eagles_logo from '../../../assets/img/logos/eagles_logo_removebg.png';
import { UilFacebookF, UilTwitterAlt, UilYoutube, UilFacebook, UilWhatsapp, UilTelegram } from '@iconscout/react-unicons';

const Footer = (props) => {
    return (
    <>
    <div className="zyzics__footer">
        <div className="zyzics__footer-container zy-c4 zy-c2-md zy-c2-sm zy-c1-xs">
            <div className="footer__content">
                <Link to="/" className="footer__logo"><img src="" alt="logo-light" /></Link> 
                <h1 className="">
                    {props.project}<br />
                    {props.company}
                </h1>
            </div>

            {/* COLUMN 2 */}
            <div className="footer__content">
                <h3 className="footer__title">IT Training</h3>
                <ul className="footer__links">
                    <h6>Programming</h6>
                    <li><Link to="/" className="footer__link">Java</Link></li>
                    <li><Link to="/" className="footer__link">Python</Link></li>
                    <li><Link to="/" className="footer__link">PHP</Link></li>
                    <li><Link to="/" className="footer__link">JavaScript</Link></li>
                    <li><Link to="/" className="footer__link">C#</Link>, etc.</li>

                    <h6>Web Development</h6>
                    &mdash; Frontend &mdash;
                    <li><Link to="/" className="footer__link">React.js</Link></li>
                    <li><Link to="/" className="footer__link">HTML, CSS, JS</Link>, etc.</li>

                    &mdash; Backend &mdash;
                    <li><Link to="/" className="footer__link">REST API, Microserv.</Link></li>
                    <li><Link to="/" className="footer__link">Django, DRF</Link></li>
                    <li><Link to="/" className="footer__link">Laravel</Link></li>
                    <li><Link to="/" className="footer__link">Node.js</Link></li>
                    <li><Link to="/" className="footer__link">Spring Boot</Link></li>
                    &mdash; Full Stack &mdash;
                    <li><Link to="/" className="footer__link">Django, Laravel, ASP.NET</Link></li>
                    &mdash; Desktop &mdash;
                    <li><Link to="/" className="footer__link">Swing, Java FX</Link></li>
                    <li><Link to="/" className="footer__link">Tkinter, Kivy</Link></li>

                    <h6>Database Admin</h6>
                    <li><Link to="/" className="footer__link">MySQL</Link></li>
                    <li><Link to="/" className="footer__link">PostgreSQL</Link></li> 
                    <li><Link to="/" className="footer__link">MongoDB</Link>, etc.</li>
                </ul>
            </div>

            {/* COLUMN 3 */}
            <div className="footer__content">
            <h3 className="footer__title">Software Devt.</h3>
                <ul className="footer__links">
                    <li><Link to="/" className="footer__link">Software Engineering</Link></li>
                    <li><Link to="/" className="footer__link">Website Design</Link></li>
                    <li><Link to="/" className="footer__link">Web Development</Link></li>
                    <li><Link to="/" className="footer__link">Mobile App Developmt</Link></li>
                    <li><Link to="/" className="footer__link">Desktop App Dev</Link></li>
                    <li><Link to="/" className="footer__link">IT Consulting</Link></li>
                    
                    <h6>Add-on Services</h6>
                    <li><Link to="/" className="footer__link">Search Optimizatn (SEO)</Link></li>
                    <li><Link to="/" className="footer__link">Content Managemt (CMS)</Link></li>
                    <li><Link to="/" className="footer__link">Hosting / Domain</Link></li>
                    <li><Link to="/" className="footer__link">Database Admin</Link></li>
                    <li><Link to="/" className="footer__link">Long-term Maintenance</Link></li>
                </ul>
                
                <h3 className="footer__title">e-Solutions</h3>
                <ul className="footer__links">
                    <li><Link to="/" className="footer__link">Schoolzy</Link></li>
                    <li><Link to="/" className="footer__link">Hotelzy</Link></li>
                    {/* <li><Link to="/" className="footer__link">Pharmazy</Link></li> */} 
                    {/* <li><Link to="/" className="footer__link">Cleanzy</Link></li> //for Laundry */}
                </ul>

                <h3 className="footer__title">Training Types</h3>
                <h6>Types</h6>
                <ul className="footer__links">
                    <li><Link to="/" className="footer__link">Corporate </Link></li>
                    <li><Link to="/" className="footer__link">Private/Executive</Link></li>
                </ul>

                <h6>Course Delivery</h6>
                <ul className="footer__links">
                    <li><Link to="/" className="footer__link">Live Online Class</Link></li>
                    <li><Link to="/" className="footer__link">Self-Paced Study</Link></li>
                    <li><Link to="/" className="footer__link">On-Campus Class</Link></li>
                </ul>
            </div>

            {/* COLUMN 4 */}
            <div className="footer__content">
            <h3 className="footer__title">About Zyzics</h3>
                <ul className="footer__links">
                    <li><Link to="/" className="footer__link">Company</Link></li>
                    <li><Link to="/" className="footer__link">Why Choose Zyzics</Link></li>
                    <li><Link to="/" className="footer__link">Products</Link></li>
                    <li><Link to="/" className="footer__link">Services</Link></li>
                    <li><Link to="/" className="footer__link">Pricing</Link></li>
                    <li><Link to="/" className="footer__link">Contact</Link></li>
                    <li><Link to="/" className="footer__link">Incorporation</Link></li>
                    <li><Link to="/" className="footer__link">Disclaimer</Link></li>
                </ul>
                
                <h3 className="footer__title">Miscellaneous</h3>                          
                <h6>Resources</h6>
                <ul className="footer__links"> 
                    <li><Link to="/" className="footer__link">Books</Link></li>
                    <li><Link to="/" className="footer__link">Study Guides</Link></li>
                    <li><Link to="/" className="footer__link">Free Video Tutorials</Link></li>
                    <li><Link to="/" className="footer__link">Study Guides</Link></li>

                    <h6>Reviews on Google</h6>
                    <li><Link to="/" className="footer__link">Zyzics Reviews</Link></li>
                    <li><Link to="/" className="footer__link">Instructors' Reviews</Link></li>

                    <h6>Register / Login</h6>      
                    <li><Link to="/" className="footer__link">Clients Area</Link></li>
                    <li><Link to="/" className="footer__link">Students Area</Link></li>
                    <li><Link to="/" className="footer__link">Students' Certificates</Link></li>
                    <br />
                    <Link to="/" className="button">Request Service</Link>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer


        {/* <div className="footer-column">
          <h4>Contact</h4>
          <p><u>Email</u>: <br />
          nationalyouthfellowshipmzgc<br />@gmail.com</p><br />

          <p>Phone: <br />
          +234 803-854-7692</p>
        </div> */}

