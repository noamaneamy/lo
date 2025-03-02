import React from 'react' ;
import "./Hero.css" ;

export default function Hero() {
  return (
    <div className='hero container' id='hero'>
        <div className="hero-text">
        <h1>Exceptional Cars at Unbeatable Prices!</h1>
            <p>Find your perfect car effortlessly! Our platform connects buyers with top-rated sellers, offering a wide selection of new and used vehicles. Browse detailed listings, compare prices, and schedule test drives—all in one place. Start your journey to owning your dream car today!</p>
            <button className='btn'>Get Started <img src={"../assets/dark.jpg"} alt="" /></button>
        </div>
      
    </div>
  )
}
