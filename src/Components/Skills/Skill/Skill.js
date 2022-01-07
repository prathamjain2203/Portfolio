import classes from "./Skill.module.css";

function Skill(props) {
  return (
    <div className={classes.Skill}>
      <img src={process.env.PUBLIC_URL + props.src} alt={props.alt} />
      <h5>{props.title}</h5>
    </div>
  );
}

export default Skill;
