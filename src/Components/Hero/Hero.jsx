import React from 'react' ;
import "./Hero.css" ;
import dark from "../../assets/dark.jpg";
export default function Hero() {
  return (
    <div className='hero container' id='hero'>
        <div className="hero-text">
            <h1>Des voitures d’exception à prix imbattables !
            </h1>
           <p> Lorem ipsum dolor, sit amet conshhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhectetur adipisicing elit. Ipsa nobis error temporibus quo in doloribus autem officiis dicta! Repellat nulla temporibus sint ab ipsa mollitia reprehenderit cupiditate odio, quia quibusdam?</p>
           <button className='btn'>GetS tarted <img src={dark} alt="" /></button>

        </div>
      
    </div>
  )
}
