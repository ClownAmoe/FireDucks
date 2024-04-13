import "./Navbar.css"
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Logo from "./Logo"
import Icon from "./Icon";
const NavBar = () => {
    return(
        <nav className='navbar'>
        <Link to="/Home">
            <Logo/>
        </Link>
        
        <Link to='/Volonteer' className='nav-list'>
            Волонтер
        </Link>

        <Link to='/Victim' className='nav-list'>
            Постраждалий
        </Link>

        <Link to= '/MyCabinet' className='nav-list'>
            <Icon/>
        </Link>
        
    </nav>

    )
}

export default NavBar