import { useCallback, useEffect, useState } from "react";
import classes from "./About.module.css";
const classAbout = [classes.About];
function About() {
  const [view, setView] = useState(false);
  const handleScroll = useCallback(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 450) {
        if (classAbout.length === 1) {
          classAbout.push(classes.AboutInView);
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
    <section id="about" className={view ? classAbout.join(" ") : classAbout}>
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
    </section>
  );
}

export default About;
