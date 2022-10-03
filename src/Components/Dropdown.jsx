import React from 'react'
import arrowclose from '../Assets/arrow_close.png'
import arrowopen from '../Assets/arrow_open.png'
import '../Style/Dropdown.css'
import { useState } from 'react'

function Dropdown({ title, text }) {
  const [dropdownOpen, setDropdown] = useState(false)

  //On rajoute la classe en plus de l'existante selon condition
  //Qui vérifie qu'il y a bien la classe.
  // let dropDownClass = ''
  // if (extraClass === true) dropDownClass = 'dropdown ' + extraClass
  // else dropDownClass = 'dropdown'

  //Mais a t-on vraiment besoin d'une condition?
  // let dropDownClass = 'dropdown '

  //Par défaut le dropdown est fermé
  //Si il est ouvert, on a le text, sinon on a juste le titre et l'image
  if (dropdownOpen === true)
    return (
      <div className="dropdown">
        <div className="titre-dropdown">
          <h3>{title}</h3>
          <img
            src={arrowclose}
            alt="Contenu invisible"
            onClick={() => setDropdown(false)}
          />
        </div>
        {console.log('typeof text', typeof text)}
        {typeof text === 'object' ? tabEquipement(text) : <p>{text}</p>}
      </div>
    )
  else
    return (
      <div className="dropdown">
        <div className="titre-dropdown">
          <h3>{title}</h3>
          <img
            src={arrowopen}
            alt="Contenu visible"
            onClick={() => setDropdown(true)}
          />
        </div>
      </div>
    )
}

function tabEquipement(tab) {
  return (
    <ul>
      {tab.map((equipment, index) => (
        <li key={index}>{equipment}</li>
      ))}
    </ul>
  )
}

export default Dropdown
