import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} My Library. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;