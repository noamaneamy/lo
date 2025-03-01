import "./Vue.css" ;
import next_icon from "../../assets/next_icon.webp"
import back_icon from "../../assets/back_icon.webp"
import user1 from "../../assets/user1.jpg"
import user2 from "../../assets/user2.jpg"
import user3 from "../../assets/user3.jpg"
import grand_m from "../../assets/grand_m.jpg"
import { useRef } from "react";
export default function Vue() {

    const slider =useRef() ;
    let transX = 0 ; 

    const slideForward = () =>{
        if(transX > -50){
            transX -= 25 ;
            
        }
        slider.current.style.transform = `translateX(${transX}%)` ;
    }

    const slideBackward = () =>{
        if(transX < 0){
            transX += 25 ;
            
        }
        slider.current.style.transform = `translateX(${transX}%)` ;        
    }
  return (
    <div className="testimonials" id="avis">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
            {/* 1 hade */}
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user2} alt="" className="user-img" />
                        <div>
                            <h3>Jean  M.</h3>
                            <span>  fes</span>
                        </div>
                    </div>
                    <p>Achat rapide et service impeccable ! La voiture correspondait parfaitement à la description.</p>
                </div>
            </li>
                        {/* 2 hade */}
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user1} alt="" className="user-img" />
                        <div>
                            <h3>Sophie L.</h3>
                            <span>  casa</span>
                        </div>
                    </div>
                    <p>Bonne expérience, mais délai de livraison un peu long. Sinon, rien à redire !</p>
                </div>
            </li>
                        {/* 3 hade */}
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={grand_m} alt="" className="user-img" />
                        <div>
                            <h3>grand  M</h3>
                            <span>  fes</span>
                        </div>
                    </div>
                    <p>Très satisfait ! Large choix de véhicules et excellent service client.</p>
                </div>
            </li>
                        {/* 4 hade */}
                        <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user3} alt="" className="user-img" />
                        <div>
                            <h3>Karim   T.</h3>
                            <span>  fes</span>
                        </div>
                    </div>
                    <p>Le site est bien fait, mais j’aurais aimé plus de photos détaillées des voitures.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}
