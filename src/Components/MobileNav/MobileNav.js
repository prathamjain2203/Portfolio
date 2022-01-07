import classes from "./MobileNav.module.css";
import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
function Mobilenav() {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleClick = (e) => {
    if (e.target.getAttribute("data-section")) {
      let target = e.target.getAttribute("data-section");
      let section = document.getElementById(target);
      section.scrollIntoView({ behavior: "smooth" });
      setShowDropdown(false);
    }
  };
  return (
    <nav className={classes.Nav}>
      <div className={classes.Mobilenav}>
        <div className={classes.MobilenavLeft}>
          <a style={{ textDecoration: "none", color: "#ffffff" }} href="/">
            Pratham Jain
          </a>
        </div>
        <div className={classes.MobilenavRight}>
          <Hamburger
            toggled={showDropdown}
            size={25}
            toggle={setShowDropdown}
          />
        </div>
      </div>
      {showDropdown ? (
        <div className={classes.Dropdown}>
          <ul className={classes.DropdownFl} onClick={(e) => handleClick(e)}>
            <li data-section="home">HOME</li>
            <li data-section="about">ABOUT</li>
            <li data-section="skills">SKILLS</li>
            <li data-section="projects">PROJECTS</li>
          </ul>
        </div>
      ) : null}
    </nav>
  );
}

export default Mobilenav;
