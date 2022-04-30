import classes from "./Navbar.module.css";

function Navbar() {
  const handleClick = (e) => {
    if (e.target.getAttribute("data-section")) {
      let target = e.target.getAttribute("data-section");
      let section = document.getElementById(target);

      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className={classes.Navbar}>
      <div className={classes.Navbarleft}>
        <a style={{ textDecoration: "none", color: "#ffffff" }} href="/">
          Pratham Jain
        </a>
      </div>
      <div className={classes.Navbarright}>
        <ul onClick={(e) => handleClick(e)} className={classes.Navbarritems}>
          <li data-section="home">HOME</li>
          <li data-section="about">ABOUT</li>
          <li data-section="experience">EXPERIENCE</li>
          <li data-section="skills">SKILLS</li>
          <li data-section="projects">PROJECTS</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
