import classes from "./Project.module.css";

function Project(props) {
  return (
    <div className={classes.Project}>
      <img src={process.env.PUBLIC_URL + props.imgSrc} alt={props.title} />
      <div className={classes.ProjectDetails}>
        <h3 style={{ marginBottom: "5px" }}>{props.title}</h3>
        <div
          style={{
            fontSize: "0.9rem",
          }}
        >
          <p
            style={{
              fontSize: "0.9rem",
              marginBottom: "10px",
              fontWeight: "500",
            }}
          >
            {props.description}
          </p>
          <p style={{ marginBottom: "5px" }}>
            Skills Used:
            <span style={{ marginLeft: "5px", fontWeight: "bold" }}>
              {props.skills}
            </span>
          </p>
        </div>
        <a href={props.github} rel="noreferrer" target="_blank">
          Github
        </a>{" "}
        <a
          style={{ padding: "5px 0 0 10px" }}
          href={props.live}
          rel="noreferrer"
          target="_blank"
        >
          Live
        </a>
      </div>
    </div>
  );
}

export default Project;
