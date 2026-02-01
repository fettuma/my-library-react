import "./About.css";

const About = () => {
  return (
    <div id="About" className="about-page">
      <div className="about-wrapper">

        {/* LEFT – TEXT */}
        <div  className="about-text-box">
          <h2 className="about-title">About Us</h2>

          <p className="about-text">
           We are Yasmine and Fatima, two student interns at OFPPT,
            passionate about web development and modern technologies.
          </p>

          <p className="about-text">
           This project was built as part of our training, using React,
            with the goal of combining technology and creativity to deliver meaningful digital experiences.
          </p>

          <p className="about-text">
            We create clean, user-friendly applications with a focus on
             performance, visual identity, and turning ideas into effective digital solutions.
          </p>

         
        </div>

        {/* RIGHT – IMAGE */}
        <div className="about-image-box">
          <img
            src="./us.png"
            alt="About us"
            className="about-image"
          />
        </div>

      </div>
    </div>
  );
};

export default About;