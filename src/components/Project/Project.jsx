function Project({ title, description, image, link, repo }) {
  return (
    <div className="project">
      <img src={image} alt={title} style={{ width: "50%", height: "auto" }} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        <a href={link} target="_blank" rel="noopener noreferrer">Click Here</a>
      </div>
    </div>
  )
}

export default Project
