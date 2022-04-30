import { useEffect, useMemo, useRef, useState } from "react";
import classes from "./Experience.module.css";
import oodles from "../../assets/Experience/oodles.jpg";

const classAbout = [classes.About];
function Experience() {
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
    <section
      id="experience"
      ref={aboutRef}
      className={view ? classAbout.join(" ") : classAbout}
    >
      <div className={classes.container}>
        <h1 className={classes.Title}>EXPERIENCE</h1>
      </div>
      {/* <div className={classes.AboutDescription}>
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
      </div> */}

      <div className={classes.Experience} style={{ marginTop: "0" }}>
        <div className={classes.ExperienceFl}>
          <div style={{ width: "300px" }}>
            <img className={classes.EduLogo} src={oodles} alt="oodles" />
            <h2 style={{ fontSize: "1rem", marginTop: "15px" }}>
              Associate frontend Developer
            </h2>
            <h2 style={{ fontSize: "1rem", marginTop: "15px" }}>
              January, 2022
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
