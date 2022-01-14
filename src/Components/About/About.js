import { useEffect, useMemo, useRef, useState } from "react";
import classes from "./About.module.css";
import IgnouLogo from "../../assets/EducationLogo/Ignou.png";
import LfpsLogo from "../../assets/EducationLogo/Lfps.png";

const classAbout = [classes.About];
function About() {
  const [view, setView] = useState(false);

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };
  }, []);
  const aboutRef = useRef(null);
  const callBackFunc = (entries) => {
    const [entry] = entries;

    if (entry.isIntersecting) {
      if (classAbout.length === 1) {
        classAbout.push(classes.AboutInView);
      }
    } else {
      if (classAbout.length === 2) {
        classAbout.pop();
      }
    }

    setView(entry.isIntersecting);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(callBackFunc, options);

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    const currentRef = aboutRef.current;
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options, aboutRef]);

  return (
    <section id="about" ref={aboutRef} className={classAbout.join(" ")}>
      <div className={classes.container}>
        <h1 className={classes.Title}>
          About <span style={{ color: "#01b0d3" }}>Me</span>
        </h1>
        <div className={classes.AboutDescription}>
          <p>
            Hi, my name is <b>Pratham Jain</b> and I am a{" "}
            <b>frontend developer</b>. I completed my <b>BCA</b> from Indira
            Gandhi National Open University (IGNOU) and completed my 10th & 12th
            from Little Flowers Public Senior Secondary School.
          </p>
          <br />
          <p>
            I like to see things through to the finish and am never happy with a
            job half done. Determination is important when you want to get to
            your goal in life, whatever that may be in the short or long-term.
          </p>
        </div>
      </div>
      <div className={classes.Education}>
        <h1
          style={{
            marginBottom: "40px",
            fontSize: "1.8rem",
          }}
        >
          EDUCATION
        </h1>
        <div className={classes.EducationFl}>
          <div style={{ width: "300px" }}>
            <img className={classes.EduLogo} src={IgnouLogo} alt="Ignou" />
            <h2 style={{ fontSize: "1rem", marginTop: "15px" }}>
              Indira Gandhi National Open University(IGNOU), Delhi
            </h2>
            <div style={{ marginTop: "10px", fontWeight: "500" }}>
              <p>BCA</p>
              <p> YEAR : 2018</p>
            </div>
          </div>
          <div style={{ width: "300px" }}>
            <img className={classes.EduLogo} src={LfpsLogo} alt="Ignou" />
            <h2 style={{ fontSize: "1rem", marginTop: "15px" }}>
              Little Flowers Sr. Sec. Public School, Delhi
            </h2>
            <div style={{ marginTop: "10px", fontWeight: "500" }}>
              <p>CBSE (Class XII)</p>
              <p> YEAR : 2017</p>
              <p> PERCENTAGE : 91%</p>
            </div>
          </div>
          <div style={{ width: "300px" }}>
            <img className={classes.EduLogo} src={LfpsLogo} alt="Ignou" />
            <h2 style={{ fontSize: "1rem", marginTop: "15px" }}>
              Little Flowers Sr. Sec. Public School, Delhi
            </h2>
            <div style={{ marginTop: "10px", fontWeight: "500" }}>
              <p>CBSE (Class X)</p>
              <p> YEAR : 2015</p>
              <p> CGPA : 9.8/10</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
