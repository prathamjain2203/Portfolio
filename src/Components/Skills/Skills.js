import classes from "./Skills.module.css";
import { useEffect, useCallback, useState } from "react";

import Skill from "./Skill/Skill";
const classSkills = [classes.Skills];
const skillArr = [
  { title: "HTML", src: "../../../SkillsLogo/Html.png" },
  { title: "CSS", src: "../../../SkillsLogo/Css.png" },
  { title: "JAVASCRIPT", src: "../../../SkillsLogo/Javascript.png" },
  { title: "REACT.JS", src: "../../../SkillsLogo/React.png" },
  { title: "REDUX", src: "../../../SkillsLogo/Redux.png" },
  { title: "REACT-ROUTER", src: "../../../SkillsLogo/React-router.png" },
];
function Skills() {
  const [view, setView] = useState(false);
  const handleScroll = useCallback(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 800) {
        if (classSkills.length === 1) {
          classSkills.push(classes.SkillsInView);
          setView(true);
        }
      }
    });
  }, []);
  useEffect(() => {
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  return (
    <section id="skills" className={view ? classSkills.join(" ") : classSkills}>
      <div className={classes.Container}>
        <h1 className={classes.Title}>SKILLS</h1>
        <div className={classes.SkillsList}>
          {skillArr.map((skill, i) => (
            <Skill key={i} title={skill.title} src={skill.src} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
