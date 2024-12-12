import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UilApps, UilMultiply, UilSearch } from '@iconscout/react-unicons';
import eagles_logo from '../../../assets/img/logos/eagles_logo_removebg.png';

const Nav = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const menu = document.querySelector('#menu-bar');
        const navbar = document.querySelector('.navbar');
        const header = document.querySelector('header');
        const navLogo = document.querySelector('.nav__logo'); // Get the nav__logo element

        const handleMenuClick = () => {
            setIsMenuOpen(!isMenuOpen);
            menu.classList.toggle('times');
            navbar.classList.toggle('nav-toggle');
        };

        const handleScroll = () => {
            if (window.scrollY > 0) {
                header.style.background = '#fff';
                header.style.color = '#f00'; //here
                navbar.classList.add('red-links');
                navLogo.classList.add('red-logo'); // Add class to nav__logo
            } else {
                // header.style.background = 'transparent';
                header.style.background = '#fff';
                navbar.classList.remove('red-links');
                navLogo.classList.remove('red-logo'); // Remove class from nav__logo
            }
        };

        menu.addEventListener('click', handleMenuClick);
        window.addEventListener('scroll', handleScroll);

        return () => {
            menu.removeEventListener('click', handleMenuClick);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMenuOpen]);

    return (
        <>
        <header>
            <Link to="/" className="nav__logo"><img src={eagles_logo} alt="logo-light" /> 
            {props.project}</Link> 
            
            <div id="menu-bar">
                {isMenuOpen ? <UilMultiply /> : <UilApps />}
            </div>

            <nav className="navbar">       
                <Link to="/" className="">IT Courses</Link>
                <Link to="/" className="">What We Do</Link>
                <Link to="/" className="">Work Samples</Link>
                <Link to="/contact" className="">Clients Area</Link>
                <Link to="/search"><UilSearch title="Find a course, an IT solution, etc..." /></Link>
                <Link to="/conference-registration" className="button button__header">Contact Us</Link>
            </nav>
        </header>
        </>
    );
};

export default Nav;