import React from 'react'
import '../Style/Banniere.css'
import '../Style/Footer.css'

function Banniere({ photo, title, description }) {
  return (
    <div className="banniere">
      <img src={photo} alt={description} />
      {/* Condition pour afficher le title */}
      {title && <h1>{title}</h1>}
      <div className="filtre-photo"></div>
    </div>
  )
}

export default Banniere
