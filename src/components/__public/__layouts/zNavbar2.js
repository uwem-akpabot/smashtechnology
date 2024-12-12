import {Link} from 'react-router-dom';

const Navbar2 = () => {
  return (
    <header>
        <nav className="nav">
            Company

            <ul className="menu">
                <li><Link>Our Services</Link></li>
                <li><Link>Products</Link></li>
                <li><Link>More</Link></li>
                
                <div>
                    08012345678
                    <Link>Email</Link>
                </div>
            </ul>

        </nav>
    </header>
  )
}
export default Navbar2