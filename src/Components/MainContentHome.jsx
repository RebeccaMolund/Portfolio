import RoleDescriptionCard from "./RoleDescriptionCards";

const MainContentHome = () => {
  return <main className="mainContent">
    <div className="roleCardsContainer">
      <RoleDescriptionCard><h1>Frontend Development</h1><h3>Alongside my art skills, I’m also confident in developing websites and applications using React.js, which allows me to bring both visual creativity and functional design to my projects.</h3></RoleDescriptionCard>
      <RoleDescriptionCard><h1>UX/UI Design & Art</h1><h3>With a background in 2D illustration and graphic art, I bring a strong sense of detail and composition to my UX/UI work. My experience as an art teacher has also strengthened my focus on accessibility, helping me design interfaces that are both engaging and inclusive.</h3></RoleDescriptionCard>
    </div>
  </main>;
};

export default MainContentHome;
