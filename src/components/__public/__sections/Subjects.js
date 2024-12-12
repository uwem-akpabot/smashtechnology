import { UilTrophy, UilSitemap, UilGlobe, UilDesktop, UilLaptop, UilLock, UilArrowRight } 
  from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';

const Subjects = () => {
  return (
    <div className="sections" id="subjects">
      <div className="welcome">
        <div>
          <h3>IT Training service. Broad subjects</h3><br />
        </div>
      </div>

      <div className="zy-c4">
        <div className="">
          <div className="feats-inner">
            <h4>Programming</h4>
          </div>          
          <ul>
            <li><Link to="/">Java</Link></li>
            <li><Link to="/">Python</Link></li>
            <li><Link to="/">PHP</Link></li>
            <li><Link to="/">JavaScript</Link></li>
            <li><Link to="/">C++</Link></li>
            <li><Link to="/">C#</Link></li>
            <li><Link to="/">ASP.NET</Link></li>
          </ul>
        </div>

        <div className="">
          <div className="feats-inner">
            <h4>Development</h4>
          </div>          
          <ul>
            <li><Link to="/">Web App</Link></li>
            <li><Link to="/">Mobile App</Link></li>
            <li><Link to="/">Desktop App</Link></li>
            <li><Link to="/">Full Stack</Link></li>
            <li><Link to="/">Backend</Link></li>
            <li><Link to="/">Frontend</Link></li>
            <li><Link to="/">Cloud</Link></li>
          </ul>
        </div>

        <div className="">
          <div className="feats-inner">
            <h4>Software</h4>
          </div>          
          <ul>
            <li><Link to="/">Software Engineering</Link></li>
            <li><Link to="/">Data Structures</Link></li>
            <li><Link to="/">Algorithms</Link></li>
            <li><Link to="/">UML / Software Design</Link></li>
            <li><Link to="/">Software Testing</Link></li>
            <li><Link to="/">Agile Practice</Link></li>
          </ul>
        </div>

        <div className="">
          <div className="feats-inner">
            <h4>Other </h4>
          </div>          
          <ul>
            <li><Link to="/">Database Admin</Link></li>
            <li><Link to="/">Networking</Link></li>
            <li><Link to="/">Graphic Design</Link></li>
            <li><Link to="/">DevOps</Link></li>
            <li><Link to="/">Data Analytics</Link></li>
            <li><Link to="/">Digital Marketing / SEO</Link></li>
          </ul>
        </div>

      </div>
    </div>
  )
}
export default Subjects;