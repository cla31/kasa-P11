import React from 'react'
import logo from '../Assets/logo_header.png'
import '../Style/Components/Header.css'
import { Link } from 'react-router-dom'

/**
 * Composant Header avec récupération du Logo et mise en place de la navigation
 * @returns {JSX.Element} composant Header
 */

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
