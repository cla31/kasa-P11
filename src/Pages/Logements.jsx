import React from 'react'
import '../Style/Logement.css'
import { useParams } from 'react-router-dom'
import { getLogementById } from '../Services/Services'
import Tag from '../Components/Tag'
import Carroussel from '../Components/Carroussel'
import Page404 from '../Pages/Page404'
import Dropdown from '../Components/Dropdown'
import '../Style/Rating.css'
import Rating from '../Components/Rating'

function Logement() {
  const { logementId } = useParams()
  //Récupération des valeurs du logement en fonction de l'id
  const ficheLogement = getLogementById(logementId)
  // Affichage de logement après l'avoir récupéré
  // console.log('Fiche logement', ficheLogement)

  if (ficheLogement === undefined) return <Page404 />
  else
    return (
      <div className="ficheLogement">
        <div className="navig">
          <Carroussel pictures={ficheLogement.pictures} />
        </div>
        <div className="contentLogement">
          <div className="titre-nom">
            <div className="titre">
              <h2>{ficheLogement.title}</h2>
              <p>{ficheLogement.location}</p>
            </div>
            <div className="nom">
              <h3>{ficheLogement.host.name}</h3>
              <img
                src={ficheLogement.host.picture}
                alt={ficheLogement.host.name}
              />
            </div>
          </div>

          <div className="tag-eval">
            <div className="tags">
              {ficheLogement.tags.map((tag) => (
                <Tag tagsNom={tag} key={tag} />
              ))}
            </div>
            <div className="rating">
              <Rating stars={ficheLogement.rating} />
            </div>
          </div>

          <div className="descript-equip">
            <div className="description">
              <Dropdown
                title="Description"
                text={
                  <div className="descript-logement">
                    {ficheLogement.description}
                  </div>
                }
              />
            </div>
            <div className="equipements">
              <Dropdown
                title="Équipements"
                text={
                  <div className="listItem">
                    {ficheLogement.equipments.map((elmt, index) => (
                      <li key={index}>{elmt}</li>
                    ))}{' '}
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
    )
}
export default Logement
