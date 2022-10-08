import React from 'react'
import '../Style/Components/Tag.css'
import PropTypes from 'prop-types'

function Tag({ tagsNom }) {
  return <p className="tag">{tagsNom}</p>
}
Tag.propTypes = {
  tagsNom: PropTypes.array.isRequired,
}

export default Tag
