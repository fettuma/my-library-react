import "./Ourlibrary.css";

const Ourlibrary = () => {
  return (
    <div className="about-page">
      <div className="about-layout">

        {/* LEFT — IMAGE */}
        <div className="about-left">
          <img
            src="./ourlibrary.png"
            alt="Library"
            className="about-image"
          />
        </div>

        {/* RIGHT — CONTENT */}
        <div className="about-right">
          <h2 className="about-title"> Our Library</h2>

          <p className="about-text">
            Welcome to <strong>My Library</strong>, a digital sanctuary for book
            lovers. This platform was created to help readers track their
            reading journey, discover books, and celebrate every page read.
          </p>

          <p className="about-text">
            Our goal is simple: transform reading into an immersive and
            enjoyable experience. Whether you read one book a year or one book
            a week, every story matters.
          </p>

          <p className="about-text">
            Built with passion, inspired by timeless libraries, and designed
            for modern readers.
          </p>

          
        </div>

      </div>
    </div>
  );
};

export default Ourlibrary;