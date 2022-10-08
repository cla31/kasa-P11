import React from 'react'
import likeStar from '../Assets/likeStar.png'
import greyStar from '../Assets/greyStar.png'
import '../Style/Components/Rating.css'

function Rating({ stars }) {
  const totalStars = [1, 2, 3, 4, 5]
  const usersRating = stars

  return (
    <div>
      {totalStars.map((index) => (
        <img
          className="star"
          key={index}
          src={index < usersRating ? likeStar : greyStar}
          alt="évaluation"
        />
      ))}
    </div>
  )
}

export default Rating
