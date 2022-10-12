import React from 'react'
import Ball from '../Assets/Ball.gif'

export default function Loader() {
  return (
    <div>
      <img src={Ball} alt="Loader en attente du chargement des données"></img>
    </div>
  )
}
