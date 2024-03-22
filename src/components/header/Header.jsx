import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div id='header-container'>
      <span id='logo-container'>
        Welcome to our Recipe Haven!

      </span>

      <nav id='navbar'>
        <ul>
          <Link to='/'>
           <a href="#home" className="navbar-link active">Home</a>

          </Link>
        </ul>

      </nav>
    </div>
  )
}

export default Header
