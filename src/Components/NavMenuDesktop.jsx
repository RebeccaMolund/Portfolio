import "../Stylesheets/navbar.css";

const NavMenuDesktop = () => {
    return (

        <div className="navMenuDesktop">
    
            <div className="navSocialsDesk">
                
                <div className="linkContainerDesk">
                <a href="">LinkedIn</a><img src="IconLinkedIn.png" alt="LinkedIn" /></div>

                <div className="linkContainerDesk">
                <img src="IconGithub.png" alt="IconGithub" />
                <a href="">Github</a></div>

                <div className="linkContainerDesk">
                <img src="IconInstagram.png" alt="IconInstagram" />
                <a href="">Instagram</a></div>

                <div className="linkContainerDesk">
                <img src="IconEmail.png" alt="IconEmail" />
                <a href="rebecca.labeeb@gmail.com" type="email">Email</a></div>
            </div>
            <Link className="deskListItem" to="/Pages/Home">Home</Link>
            <Link className="deskListItem" to="/Pages/About">About Me</Link>
      </div>);
}
 
export default NavMenuDesktop;