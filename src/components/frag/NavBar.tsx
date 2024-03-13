/* eslint-disable */
//import React, {useState, useEffect} from "react";

import '../css/Navbar.css';
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <nav
            className="navbar is-primary"
            role="navigation"
            aria-label="main navigation"
        >
            <div className="start">
                <div className="nav">
                    <div className="nav-container">
                        <Link className="navbar-item" to="/" aria-label="home"> 
                            <span>[</span>
                            <span>   home   </span>
                            <span>]</span>
                        </Link>
                    </div>
                    <div className="nav-container">
                        <div className="nav-dropdown">
                            <div className="nav-label">projects</div>
                            <div className="dropdown-content">
                            
                                <Link className="nav-drop-item"  to="/projects/this-site/">
                                    <span>[</span>
                                    <span>   this site   </span>
                                    <span>]</span>
                                </Link>
                                <Link className="nav-drop-item"  to="/projects/gallery/" aria-label="gallery">
                                    <span>[</span>
                                    <span>   gallery   </span>
                                    <span>]</span>
                                </Link>
                                
                            </div>
                        </div>
                    </div>
                    <div className="nav-container">
                        <Link className="navbar-item"  to="/games/" aria-label="games">
                            <span>[</span>
                            <span>   games!   </span>
                            <span>]</span>
                        </Link>
                    </div>
                    <div className="nav-container">
                        <Link className="navbar-item" to="/about/" aria-label="about">
                            <span>[</span>
                            <span>   about   </span>
                            <span>]</span>
                        </Link>
                    </div>
                    <div className="nav-container">
                        <Link className="navbar-item" to="/guestbook/" aria-label="guestbook">
                            <span>[ </span>
                            <span>   guestbook   </span>
                            <span>]</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;