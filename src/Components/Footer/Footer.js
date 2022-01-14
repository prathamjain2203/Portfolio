import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={classes.Footer}>
      <h1>Stay Connected</h1>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
        >
          <span>
            Email :{" "}
            <span style={{ fontWeight: "500", fontSize: "1rem" }}>
              {" "}
              prathamjain2203@gmail.com
            </span>
          </span>
          <span>
            Linkedin :{" "}
            <a
              style={{
                fontWeight: "500",
                textDecoration: "none",
                color: "#1E59B2",
                fontSize: "1.1rem",
              }}
              href="https://www.linkedin.com/in/pratham-jain2203/"
              target="_blank"
              rel="noreferrer"
            >
              Pratham Jain
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
