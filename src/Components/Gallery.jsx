import React from 'react'
import '../Style/Components/Gallery.css'

const Gallery = ({ title, cover }) => {
  //Quand on met des brakets on lui dit d'interpréter une variable
  return (
    <div className="gallery">
      <img src={cover} alt={title} />
      <div className="filtreGallery"></div>
      <h2>{title}</h2>
    </div>
  )
}

export default Gallery
