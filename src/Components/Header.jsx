import React from 'react'
import logo from '../Assets/logo_header.png'
import '../Style/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header id="header">
      <img src={logo} alt="logo" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/Apropos">A Propos</Link>
      </nav>
    </header>
  )
}

export default Header
