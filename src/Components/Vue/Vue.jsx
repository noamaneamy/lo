import "./Vue.css";
import { useRef, useState } from "react";

export default function Vue() {
    const slider = useRef();
    const [transX, setTransX] = useState(0);

    const slideForward = () => {
        if (transX > -75) {
            setTransX(prev => prev - 25);
        }
    };

    const slideBackward = () => {
        if (transX < 0) {
            setTransX(prev => prev + 25);
        }
    };

    return (
        <div className="testimonials" id="reviews">
            <img src={'../assets/next_icon.webp'} alt="Next" className="next-btn" onClick={slideForward} />
            <img src={'../assets/back_icon.webp'} alt="Back" className="back-btn" onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider} style={{ transform: `translateX(${transX}%)`, transition: "transform 0.5s ease" }}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={'../assets/user2.jpg'} alt="User" className="user-img" />
                                <div>
                                    <h3>Jean M.</h3>
                                    <span>Fes</span>
                                </div>
                            </div>
                            <p>Fast purchase and excellent service! The car matched the description perfectly.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={'../assets/user1.jpg'} alt="User" className="user-img" />
                                <div>
                                    <h3>Sophie L.</h3>
                                    <span>Casablanca</span>
                                </div>
                            </div>
                            <p>Good experience, but the delivery took longer than expected.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={"../assets/grand_m.jpg"} alt="User" className="user-img" />
                                <div>
                                    <h3>Grand M.</h3>
                                    <span>Fes</span>
                                </div>
                            </div>
                            <p>Very satisfied! Great selection of cars and outstanding customer service.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={"../assets/user3.jpg"} alt="User" className="user-img" />
                                <div>
                                    <h3>Karim T.</h3>
                                    <span>Fes</span>
                                </div>
                            </div>
                            <p>The website is great, but I wish there were more detailed car photos.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}