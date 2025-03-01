import { Link } from 'react-router-dom'
import "./Footer.css"
export default function Footer() {
  return (
    <footer>
        <div className='footerContainer'>
            <div className="socialIcons">
                <a href=""><i class="fa-brands fa-facebook"></i></a>
                <a href=""><i class="fa-brands fa-instagram"></i></a>
                <a href=""><i class="fa-brands fa-twitter"></i></a>
                <a href=""><i class="fa-brands fa-google-plus"></i></a>
                <a href=""><i class="fa-brands fa-youtube"></i></a>
            </div>
            <div className="footerNav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/listcar">List Car</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/avis">Avis</Link></li>
                    <li><Link to="/">Contact</Link></li>
                </ul>
            </div>
        </div>
        <div className="footerbottom">
                <p>Copyright &copy;2024;Designed by <span className="designer">Bilal</span></p>
        </div>
    </footer>
  )
}
