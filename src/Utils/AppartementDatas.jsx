class AppartementDatas {
  constructor({
    id,
    cover,
    title,
    description,
    equipments,
    host,
    location,
    pictures,
    rating,
    tags,
  }) {
    this.id = id
    this.cover = cover
    this.title = title
    this.description = description
    this.equipments = equipments.map((equipment, index) => (
      <div key={index}>{equipment}</div>
    ))
    this.host = host
    this.location = location
    this.pictures = pictures
    this.rating = rating
    this.tags = tags.map((tag, index) => (
      <li className="tag" key={index}>
        {tag}
      </li>
    ))

    // console.log(this.id)
    // console.log(this.description)
    // console.log(this.equipments)
    // console.log(this.host)
    // console.log(this.location)
    // console.log(this.pictures)
    // console.log(this.rating)
    // console.log(this.tags)
  }
}
export default AppartementDatas
