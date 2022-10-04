import React from 'react'
import '../Style/Home.css'
import Gallery from '../Components/Gallery'
import Banniere from '../Components/Banniere'
import Photo from '../Assets/banniere_accueil.png'
import { getDatasLogements } from '../Services/Services'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="Home">
      <Banniere
        photo={Photo}
        title={'Chez vous, partout et ailleurs'}
        description={
          "Photo de la bannière en page d'accueil, vagues et criques sauvages"
        }
      />
      <div className="GalleryLogements">
        {/* Mapping du json */}
        {/* {logements.map((logement, index) => {
          return (
            <Gallery
              key={index}
              title={logement.title}
              cover={logement.cover}
            ></Gallery>
          );
        })} */}
        {/* Mapping avec la destructuration */}
        {getDatasLogements().map(({ title, cover, id }) => {
          return (
            <Link to={`/logement/${id}`} key={id}>
              <Gallery title={title} cover={cover}></Gallery>
            </Link>
          )
        })}
        {/* {getDatasLogements().map((logement) => (
          <Link to={`/Logements/${logement.id}`} key={logement.id}>
            <Gallery
              cover={logement.cover}
              title={logement.title}
              id={logement.id}
            />
          </Link>
        ))} */}

        {/* {await getDatas.map(({ title, cover }, index) => {
          return <Gallery key={index} title={title} cover={cover}></Gallery>
        })} */}
      </div>
    </div>
  )
}

export default Home
