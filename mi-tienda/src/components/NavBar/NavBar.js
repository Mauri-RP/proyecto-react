import './Navbar.css';
import logo from '../../assets/images/logo.svg';
import { useLayoutEffect } from 'react';

function Navbar() {
    return (
    <nav className="topnav">
        {<img alt="logo" className="logo" src={logo}/>}
        <ul>
            <li> <a href="#section1">Sección 1</a></li>
            <li> <a href="#section2">Sección 2</a></li>
        </ul>
        
        
    </nav>
    );
}

export default Navbar;
