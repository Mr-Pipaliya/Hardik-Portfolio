import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:pipaliya.hardik.devloper@gmail.com" data-cursor="disable">
                pipaliya.hardik.devloper@gmail.com
              </a>
            </p>
            <h4>Phone & Location</h4>
            <p>+91 7600182010</p>
            <p style={{ opacity: 0.7, fontSize: "14px", marginTop: "2px" }}>
              Surat, Gujarat, India
            </p>
            <h4 style={{ marginTop: "16px" }}>Education</h4>
            <p>B.E. in Computer Engineering</p>
            <p style={{ opacity: 0.7, fontSize: "14px", marginTop: "2px" }}>
              Shree Swami Atmanand Saraswati Institute of Technology / GTU (Expected 2027)
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Mr-Pipaliya"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://linkedin.com/in/hardik-pipaliya-b9843341a"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Hardik Pipaliya</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
