import React from 'react'
import "./About.css"
import aboutimg1 from "../../assets/aboutimg1.avif"
import play_icon from   "../../assets/play_icon.png"
export default function About() {
  return (
    <div className='about' id='about'>
        <div className="about-left">
            <img src={aboutimg1} alt=""className='about-img' />
            <img src={play_icon} alt=""className='play-icon' />
        </div>
        <div className="about-right">
            <h3>À propos</h3>
            <h2>Drive X</h2>
            <p>Bienvenue chez DriveX, votre plateforme de confiance pour l'achat et la vente de voitures neuves et d'occasion. 
                Notre mission est de rendre le processus d'achat et de vente de véhicules simple, rapide et sécurisé.
              🚘 Notre engagement
                Chez DriveX, nous mettons l'accent sur la transparence, la qualité et la satisfaction client. 
                Chaque véhicule est soigneusement vérifié, et nous offrons des outils avancés pour comparer les modèles, consulter l’historique des véhicules et estimer leur valeur.
                Vous êtes prêt à trouver votre prochaine voiture ou à vendre votre ancien véhicule au meilleur prix ?
                Rejoignez DriveX dès aujourd’hui et profitez d’une expérience automobile sans stress !

📍 DriveX – Achetez. Vendez. Roulez.</p>
        </div>
    </div>
  )
}
