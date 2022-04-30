import classes from "./Skills.module.css";
import { useEffect, useRef, useMemo, useState } from "react";

import Skill from "./Skill/Skill";
const classSkills = [classes.Skills];
const skillArr = [
  { title: "HTML", src: "../../../SkillsLogo/Html.png" },
  { title: "CSS", src: "../../../SkillsLogo/Css.png" },
  { title: "JAVASCRIPT", src: "../../../SkillsLogo/Javascript.png" },
  { title: "REACT.JS", src: "../../../SkillsLogo/React.png" },
  { title: "REDUX", src: "../../../SkillsLogo/Redux.png" },
  { title: "REACT-ROUTER", src: "../../../SkillsLogo/React-router.png" },
  {
    title: "STYLED-COMPONENTS",
    src: "../../../SkillsLogo/StyledComponents.png",
  },
  { title: "TYPESCRIPT", src: "../../../SkillsLogo/typescript.png" },
];
function Skills() {
  const [view, setView] = useState(false);

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };
  }, []);
  const containerRef = useRef(null);
  const callBackFunc = (entries) => {
    const [entry] = entries;

    if (entry.isIntersecting) {
      if (classSkills.length === 1) {
        classSkills.push(classes.SkillsInView);
      }
    } else {
      if (classSkills.length === 2) {
        classSkills.pop();
      }
    }

    setView(entry.isIntersecting);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(callBackFunc, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    const currentRef = containerRef.current;
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options, containerRef]);
  return (
    <section
      id="skills"
      ref={containerRef}
      className={view ? classSkills.join(" ") : classSkills}
    >
      <div className={classes.Container}>
        <h1 className={classes.Title}>
          TECHNICAL <span style={{ color: "#01b0d3" }}>SKILLS</span>
        </h1>
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
