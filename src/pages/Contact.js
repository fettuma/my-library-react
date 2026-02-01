import {
  FaGithub,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaXTwitter
} from "react-icons/fa6";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>How Can We Help?</h2>

      <p className="contact-text">
        Chat with us <br />
        Send us a text: 1-814-251-9966 <br />
        Give us a call: 1-888-963-8944
      </p>

      <div className="contact-icons">
        <a href="https://github.com/fettuma" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>

        <a href="mailto:yasmineeljamali27@gmail.com">
          <FaEnvelope />
        </a>

        <a href="https://www.instagram.com/fett_uma/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>

        <a href="https://facebook.com/fettuma" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>

        <a href="https://x.com/FBaouaq97482" target="_blank" rel="noreferrer">
          <FaXTwitter />
        </a>
      </div>
    </section>
  );
};

export default Contact;