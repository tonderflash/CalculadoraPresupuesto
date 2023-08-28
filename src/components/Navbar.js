/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import logo from "../assets/img/logo-header.jpeg";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar" style={{ backgroundColor: "#F7F7F7"}}>
                <div className="container">
                    <div className="navbar-brand">
                        <img src={logo} alt="Logo" width="100" height="50" className="d-inline-block align-text-top" />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
