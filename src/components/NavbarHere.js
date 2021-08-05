import React from 'react'
import logo from "../optum.png";
import '../App.css';

import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

function NavbarHere() {
    return (
        <div>
            
            <nav className='navbar navbar-expand-lg navbar-light py-2 justify-content-center' activeKey="/">
                <img src={logo} class="navbar-img img-responsive " alt="logo"></img>
                <Nav.Item className='p-3'>
                    <Link to='/'><input type='button' value='Home' className='btn btn-outline-dark p-2'/></Link>
                </Nav.Item>
                <Nav.Item className='p-3'>
                    <Link to='/'><input type='button' value='Appointments' className='btn btn-outline-dark p-2'/></Link>
                </Nav.Item>
                <Nav.Item className='p-3'>
                    <Link to='/'><input type='button' value='History' className='btn btn-outline-dark p-2'/></Link>
                </Nav.Item>
                <Nav.Item className='p-3'>
                    <Link to='/'><input type='button' value='About us' className='btn btn-outline-dark p-2'/></Link>
                </Nav.Item>
                
            </nav>
            
            
        </div>
    )
}

export default NavbarHere
