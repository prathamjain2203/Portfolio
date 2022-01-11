import classes from "./Projects.module.css";
import { useState, useEffect, useCallback } from "react";
import Project from "./Project/Project";
const classProjects = [classes.Projects];

const projectsArr = [
  {
    title: "Netflix Clone",
    github: "https://github.com/prathamjain2203/Netflix-clone",
    live: "https://pratham-netflix.netlify.app/",
    imgSrc: "../../../ProjectsPics/Netflix.jpg",
    description:
      "It is a single page website which is a clone of Netflix with authentication feature. ",
    skills:
      "Html, Css, Javascript, React.js, Redux, React-router, Google Firebase",
  },
  {
    title: "Burger Builder",
    github: "https://github.com/prathamjain2203/Burger-builder",
    live: "https://burger-builder-pratham.netlify.app/",
    imgSrc: "../../../ProjectsPics/BurgerBuilder.png",
    skills:
      "Html, Css, Javascript, React.js, Redux, React-router, Google Firebase",
    description:
      "It is a single page website which is used to order a burger with custom ingredients. It also have authentication feature. ",
  },
  {
    title: "Omnifood",
    github: "https://github.com/prathamjain2203/Omnifood",
    live: "https://omnifood-pratham.netlify.app/",
    imgSrc: "../../../ProjectsPics/Omnifood.png",
    description:
      "It is a beautiful responsive website for both mobiles and desktops.",
    skills: "Html, Css, Javascript, Media Queries",
  },
  {
    title: "Pig Game",
    github: "https://github.com/prathamjain2203/piggame",
    live: "https://piggame-project.netlify.app/",
    imgSrc: "../../../ProjectsPics/PigGame.png",
    skills: "Html, Css, Javascript",
    description: "It is a game in which player who scores 30 first will win.",
  },
  {
    title: "Weather",
    github: "https://github.com/prathamjain2203/Weather",
    live: "https://pratham-weather.netlify.app/",
    imgSrc: "../../../ProjectsPics/Weather.png",
    skills: "Html, Css, Javascript, React.js",
    description:
      "It is a weather update website which gives weather updates of different cities.",
  },
];

function Projects() {
  const [view, setView] = useState(false);
  const handleScroll = useCallback(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1200) {
        if (classProjects.length === 1) {
          classProjects.push(classes.ProjectsInView);
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
    <section
      id="projects"
      className={view ? classProjects.join(" ") : classProjects}
    >
      <h1 className={classes.Title}>Projects</h1>
      <div className={classes.ProjectsList}>
        {projectsArr.map((project, i) => (
          <Project
            key={i}
            title={project.title}
            github={project.github}
            live={project.live}
            imgSrc={project.imgSrc}
            description={project.description}
            skills={project.skills}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
