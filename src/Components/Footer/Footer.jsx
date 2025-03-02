import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaGooglePlus, FaYoutube } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footerContainer">
        <div className="socialIcons">
          <a href="/href"><FaFacebook size={30} color="black"/></a>
          <a href="/href"><FaInstagram size={30} color="black"/></a>
          <a href="/href"><FaTwitter size={30} color="black"/></a>
          <a href="/href"><FaGooglePlus size={30} color="black"/></a>
          <a href="/href"><FaYoutube size={30} color="black"/></a>
        </div>
        <div className="footerNav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/listcar">List Car</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/avis">Reviews</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="footerbottom">
        <p>Copyright &copy; 2024; Designed by <span className="designer">Bilal</span></p>
      </div>
    </footer>
  );
}
