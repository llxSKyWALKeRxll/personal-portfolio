import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.open(
      `mailto:vanshispratap@gmail.com?subject=Message from Website&body=${message}`
    );
    setMessage("");
  };

  return (
    <div className="contact-me">
      <h1>Contact Me</h1>
      <p>Feel free to reach out to me by email:</p>
      <p className="email">vanshispratap@gmail.com</p>
      <form onSubmit={handleSubmit}>
        <textarea
          className="message-input"
          placeholder="Type your message here..."
          value={message}
          onChange={handleInputChange}
        ></textarea>
        <button className="send-button" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
