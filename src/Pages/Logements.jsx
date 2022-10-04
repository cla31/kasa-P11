import React from 'react'
import '../Style/Logement.css'
import { useParams } from 'react-router-dom'
import { getLogementById } from '../Services/Services'
import Tag from '../Components/Tag'
import Carroussel from '../Components/Carroussel'
import Page404 from '../Pages/Page404'
import Dropdown from '../Components/Dropdown'

function Logement() {
  const { logementId } = useParams()
  //Récupération des valeurs du logement en fonction de l'id
  const ficheLogement = getLogementById(logementId)
  // Affichage de logement après l'avoir récupéré
  // console.log('Fiche logement', ficheLogement)

  function afficheEtoiles() {
    const classes = [null, 'une', 'deux', 'trois', 'quatre', 'cinq']
    return 'etoiles ' + classes[parseInt(ficheLogement.rating)]
  }

  if (ficheLogement === undefined) return <Page404 />
  else
    return (
      <div className="ficheLogement">
        <div className="navig">
          <Carroussel pictures={ficheLogement.pictures} />
        </div>

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
          <div className={afficheEtoiles()}></div>
        </div>

        <div className="descript-equip">
          <div className="description">
            <Dropdown title="Description" text={ficheLogement.description} />
          </div>
          <div className="equipements">
            <Dropdown title="Équipements" text={ficheLogement.equipments} />
          </div>
        </div>
      </div>
    )
}
export default Logement
