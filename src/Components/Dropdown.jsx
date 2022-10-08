import React from 'react'
import arrow from '../Assets/arrow.svg'
import '../Style/Components/Dropdown.css'
import { useState } from 'react'
import PropTypes from 'prop-types'

function Dropdown({ title, text }) {
  const [dropdownOpen, setDropdown] = useState(false)

  //Si le dropdown est ouvert on fait tourner arrow
  let classArrow = ''
  if (dropdownOpen === true) {
    classArrow = 'arrowOpen'
  }

  return (
    <div className="dropdown">
      <div
        className="titre-dropdown"
        onClick={() => {
          setDropdown(dropdownOpen === false)
        }}
      >
        <h3>{title}</h3>
        <img
          className={classArrow}
          src={arrow}
          alt="Contenu visible"
          onClick={() => setDropdown(true)}
        />
      </div>
      {/* {console.log('', typeof text)}
      {dropdownOpen &&
        (typeof text === 'object' ? tabEquipement(text) : <p>{text}</p>)} */}
      {dropdownOpen && <div className="paragraphe">{text}</div>}
      {/* {dropdownOpen &&
        { text }.map((elt) => (
          <ul>
            <li>{elt}</li>{' '}
          </ul>
        ))} */}
    </div>
  )
}

// {dropdownOpen &&
//   { text }.map((elt) => (
//     <ul>
//       <li>{elt}</li>{' '}
//     </ul>
//   ))}

// function tabEquipement(tab) {
//   return (
//     <ul>
//       {tab.map((equipment, index) => (
//         <li key={index}>{equipment}</li>
//       ))}
//     </ul>
//   )
// }

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.any,
}

export default Dropdown
