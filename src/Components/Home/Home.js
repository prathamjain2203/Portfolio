import classes from "./Home.module.css";
import img from "../../assets/ProfilePic/Picture2.png";
import resume from "../../assets/Resume/Resume.pdf";
import Contact from "../ContactForm/Contact";
import { useState } from "react";
import Typewriter from "typewriter-effect";
function Home() {
  const [viewContactForm, setViewContactForm] = useState(false);

  return (
    <section id="home" className={classes.Home}>
      {viewContactForm ? (
        <Contact setViewContactForm={setViewContactForm} />
      ) : null}
      <div className={classes.container}>
        <div
          style={{
            fontWeight: "700",
            alignSelf: "center",
            paddingLeft: "5px",
          }}
        >
          <div className={classes.Hi}>Hi !</div>
          <div className={classes.Typewriter}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("I'm Pratham Jain").start();
              }}
            />
          </div>
          <div className={classes.Description}>
            I'm a frontend developer who brings ideas to life with code. <br />I
            live in Delhi.
          </div>
          <button
            onClick={() => setViewContactForm(true)}
            className={classes.Contactbtn}
          >
            Contact Me
          </button>
          <a href={resume} download>
            <button className={classes.DownloadRes}>Download Resume</button>
          </a>
        </div>
        <div className={classes.Pic}>
          <img src={img} alt="Profile Pic" />
        </div>
      </div>
    </section>
  );
}

export default Home;
