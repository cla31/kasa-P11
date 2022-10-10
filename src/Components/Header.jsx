import React from 'react'
import logo from '../Assets/logo_header.png'
import '../Style/Components/Header.css'
import { NavLink } from 'react-router-dom'

/**
 * Composant Header avec récupération du Logo et mise en place de la navigation
 * @returns {JSX.Element} composant Header
 */

const Header = () => {
  return (
    <header id="header">
      <img src={logo} alt="logo" />
      <nav>
        <NavLink
          to="/"
          className={(Home) => (Home.isActive ? 'active' : '')}
          end
        >
          Accueil
        </NavLink>
        <NavLink
          to="/Apropos"
          className={(Apropos) => (Apropos.isActive ? 'active' : '')}
        >
          À Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
