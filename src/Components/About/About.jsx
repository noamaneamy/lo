import React from 'react';
import "./About.css";

export default function About() {
  return (
    <div className='about' id='about'>
        <div className="about-left">
            <img src={"../assets/aboutimg1.avif"} alt="About DriveX" className='about-img' />
            <img src={"../assets/play_icon.png"} alt="Play Icon" className='play-icon' />
        </div>
        <div className="about-right">
            <h3>About</h3>
            <h2>DriveX</h2>
            <p>
                Welcome to DriveX, your trusted platform for buying and selling new and used cars. 
                Our mission is to make the car buying and selling process simple, fast, and secure.
                <br />
                🚘 <strong>Our Commitment</strong><br/>
                At DriveX, we focus on transparency, quality, and customer satisfaction. 
                Every vehicle is carefully inspected, and we provide advanced tools to compare models, check vehicle history, and estimate value.
                
                Ready to find your next car or sell your old one at the best price? 
                Join DriveX today and enjoy a stress-free car shopping experience!
                <br />
                📍 <strong>DriveX – Buy. Sell. Drive.</strong>
            </p>
        </div>
    </div>
  );
}
