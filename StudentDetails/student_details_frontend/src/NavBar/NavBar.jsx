import React from 'react'
import { Link } from 'react-router-dom'
import navbarStyle from './NavBar.module.css'

const NavBar = () => {
  return (
    <div className={navbarStyle.navbar}>
      <div>
        <h1><Link to="/add">ADD STUDENT</Link></h1>
      </div>
      <div>
        <h1><Link to="/stdlist">STUDENT LIST</Link></h1>
      </div>
    </div>
  )
}

export default NavBar
