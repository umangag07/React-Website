import React from 'react'
import {Link} from 'react-router-dom'



function Navbar() {
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                TRAVELO <img src={process.env.PUBLIC_URL + '/images/Logo.png'} alt="logo"></img>
                 {/*  <i className='fab fa-typo3' />  This is the logo from font awesome cdn*/}
                </Link> 
            </div>
        </nav>
        </>
    )
}

export default Navbar
