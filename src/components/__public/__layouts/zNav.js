import { Link } from 'react-router-dom';
import { UilSearch, UilApps } from '@iconscout/react-unicons';

const Nav = (props) => {
  return (
    <>
     <div className="zy-c1_2">
      <div className="zyzics-caption">
        {props.project}
      </div>

      <nav className="zy-nav nav-right">
        <Link to="/" className="">Our Services</Link>
        <Link to="/" className="">IT Training</Link>
        <Link to="/" className="">Work Portfolio</Link>
        <Link to="/" className="">More</Link>        
          {/* <Link to="/" className="">Zy-solutions</Link>
          <Link to="/" className="">Books</Link>
          <Link to="/" className="">IT Consulting</Link>
          <Link to="/contact" className="">Users Area</Link> 
          <Link to="/contact" className="">Login</Link> */}
        <Link to="/search" title="Find a course, an IT solution, etc..."><UilSearch /></Link>
        <a href="https://linkedin.com/company/zyzics" className="zyzics__social-link"
          style={{color: '#17224d', background: 'rgba(3, 169, 244, .1)', padding:'.5rem'}} title="Our Apps" alt="Our Apps"><UilApps /></a>
        <Link to="/conference-registration" className="zyzics-btn button__header">Contact</Link>
      </nav>
    </div> 
    </>
  )
}

export default Nav
