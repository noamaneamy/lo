import "./NavbarStyles.css"
import { Link } from "react-scroll";
import Drive from "../../assets/Drive.png"
import menuicon from "../../assets/menuicon.png"
import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
const Navbar = () =>{
  const[sticky , setSticky]=useState(false) ;
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      window.scrollY> 70 ? setSticky(true) : setSticky(false) ;
    })
  },[]) ;
  const[mobileMenu , setMobileMenu]=useState(false)
  const affichermenu = () =>{
    mobileMenu?setMobileMenu(false) : setMobileMenu(true)
  }
  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={Drive} alt="" className="logo"/>

      <ul className={mobileMenu?"":"hide-mobile-menu"} >
        <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to="listcar" smooth={true} offset={-260} duration={500}>List Car</Link></li>
        <li><Link to="about" smooth={true} offset={-150} duration={500}>About</Link></li>
        <li><Link to="avis" smooth={true} offset={-260} duration={500}>Avis</Link></li>
        <li><Link to="contact" smooth={true} offset={-260} duration={500}>Contact</Link></li>
        <li><Link className="btn" >Login</Link></li>
      </ul>

      <img src={menuicon} 
          alt="" 
          className="menuicon"
          onClick={affichermenu}
          />
    </nav>
  )
}
export default Navbar ;