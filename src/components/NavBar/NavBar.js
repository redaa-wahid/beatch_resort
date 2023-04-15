import React from 'react'
import './NavBar.scss';
import {NavLink} from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
    <div>
    <nav className="navbar bg-body-tertiary">
    <div className="container-fluid d-block nav-bar">
      <NavLink className="navbar-brand" to="/">
       Home
      </NavLink>
      <NavLink className="navbar-brand" to="/rooms">
     Rooms
     </NavLink>
    </div>
  </nav>
    </div>
    </>
  )
}

