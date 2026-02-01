import "./Home.css";
import "./Books.js";
import Ourlibrary from "./Ourlibrary.js";
import About from "./About.js";
import Contact from "./Contact.js";

export default function Home() {
  return (
    <div>
      <div className="home">
        <div className="overlay">
          <h1 className="title">Welcome to Your Digital Library</h1>
          <p className="subtitle">
          Discover books and build your own library where you can explore, collect, and manage your books.
          </p>
          <a href="/books"> <button className="cta-btn">Explore Books</button> </a>
        </div>
      </div>
      <Ourlibrary/>
      <About/>
      <Contact/>
    </div>
  );
}
