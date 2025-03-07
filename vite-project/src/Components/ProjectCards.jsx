const ProjectCards = ({ src, alt, value2, value4 }) => {
  return (
    <div className={"card-section"}>
      <div className="img-container">
        <img className="img-project" src={src} alt={alt} />
      </div>
      <h2>{value2}</h2>
      <h4>{value4}</h4>
    </div>
  );
};

export default ProjectCards;
