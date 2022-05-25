import React from 'react';
import './navbar.css'

const Navbar = () => {
    return (    
        <nav className="navbar">
        <div className="logo col"><span className='letterG'>G </span> gartner</div>
        <div className="links col">
            <a href="/"> Home</a>
            <a href="/">About</a>
            <a href="/">Work</a>
            <a href="/">Contact</a>
        </div>
        </nav>
    );
}
 
export default Navbar;