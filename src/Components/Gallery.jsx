import React from 'react'
import '../Style/Components/Gallery.css'
import PropTypes from 'prop-types'

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
//typage des props
Gallery.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string,
}

export default Gallery
