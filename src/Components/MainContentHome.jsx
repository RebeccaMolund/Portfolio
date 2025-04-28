import RoleDescriptionCard from "./RoleDescriptionCards";
import "../Stylesheets/roleCard.css";
import TagCategory from "./TagCategory";

const MainContentHome = () => {
  return <main className="mainContent">
    <div className="roleCardsContainer">
      <RoleDescriptionCard>
        <h3 className="title3">Frontend Development</h3> 
        <span>Alongside my art skills, I'm also confident in developing websites and applications using React.js, 
        which allows me to bring both visual creativity and functional design to my projects.</span>
        <div className="tagCategoryContainer">
        <TagCategory>Frontend</TagCategory>
        <TagCategory>React</TagCategory>
        </div>
      </RoleDescriptionCard>
      <RoleDescriptionCard>
      <h3 className="title3">UX/UI Design & Art</h3> 
        <span>
          UX/UI Design & Art With a background in 2D illustration and graphic art, 
          I bring a strong sense of detail and composition to my UX/UI work. 
          My experience as an art teacher has also strengthened my focus on accessibility, 
          helping me design interfaces that are both engaging and inclusive.
        </span>
      </RoleDescriptionCard>
    </div>
  </main>;
};

export default MainContentHome;
