import classes from "./Contact.module.css";
import { useState } from "react";
import { send } from "emailjs-com";
function Contact(props) {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Pratham Jain",
    message: "",
    reply_to: "",
  });
  const [formSubmitStatus, setFormSubmitStatus] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_cbs4s5m",
      "template_ruaz92j",
      toSend,
      "user_Uag7LaAqFJqhDFQtwOPTw"
    )
      .then((response) => {
        if (response.status === 200) {
          setFormSubmitStatus(true);
        }
        setTimeout(() => {
          props.setViewContactForm(false);
        }, 2000);
      })
      .catch((error) => console.log(error));
  };
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: [e.target.value] });
  };
  const form = (
    <div style={{ position: "relative" }}>
      <img
        onClick={() => props.setViewContactForm(false)}
        className={classes.Close}
        alt="close"
        src="https://img.icons8.com/material-outlined/24/000000/delete-sign.png"
      />
      <form onSubmit={onSubmit} className={classes.Form}>
        <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
          <h1
            style={{
              color: "black",
              fontSize: "2rem",

              marginTop: "10px",
            }}
          >
            CONTACT
          </h1>
          <label className={classes.Label} htmlFor="name">
            Name
          </label>
          <input
            className={classes.Input}
            style={{ height: "30px" }}
            id="name"
            required
            type="text"
            name="from_name"
            placeholder="Your Name"
            value={toSend.from_name}
            onChange={handleChange}
          />
        </div>{" "}
        <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
          <label className={classes.Label} htmlFor="name">
            Email
          </label>
          <input
            className={classes.Input}
            style={{ height: "30px" }}
            id="email"
            required
            type="text"
            name="reply_to"
            placeholder="Your Email"
            value={toSend.reply_to}
            onChange={handleChange}
          />
        </div>
        <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
          <label className={classes.Label} htmlFor="message">
            Message
          </label>
          <input
            className={classes.Input}
            id="message"
            type="text"
            required
            name="message"
            placeholder="Your Message"
            value={toSend.message}
            onChange={handleChange}
          />
        </div>
        <button className={classes.btn}>Submit</button>
      </form>
    </div>
  );

  return (
    <div className={classes.Contact}>
      {formSubmitStatus ? (
        <h3
          style={{
            color: "black",
            fontSize: "1.3rem",
            textAlign: "center",
            marginTop: "150px",
          }}
        >
          Form Submitted
        </h3>
      ) : (
        form
      )}
    </div>
  );
}

export default Contact;
