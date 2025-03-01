import React from 'react'
import "./Cars.css"
import { Link } from 'react-router-dom'


const carData = [
  { 
    id: 1, 
    name: "Tesla Model S", 
    location: "USA", 
    rating: "⭐⭐⭐⭐⭐", 
    image: '../assets/touareg.jpg'
  },
  { 
    id: 2, 
    name: "BMW M3", 
    location: "Germany", 
    rating: "⭐⭐⭐⭐", 
    image: "../assets/c220.jpg"
  },
  { 
    id: 3, 
    name: "Toyota Corolla", 
    location: "Japan", 
    rating: "⭐⭐⭐⭐", 
    image: "../assets/golf7.jpg"
  }
];

export default function  Cars  () {
  
  return (
    <div className="car-list" id='listcar'>
      {carData.map((car) => (
        <div key={car.id} className="car-card">
          <img src={car.image} alt={car.name} className="car-image" />
          <h3>
            <Link to={`/cardetails/${car.id}`} className="car-name-link">
              {car.name}
            </Link>
          </h3>
          <p>Location: {car.location}</p>
          <p className="rating">Rating: {car.rating}</p>
        </div>
      ))}
      <button className='btn dark-btn'>voir plus <img src="" alt="" /></button>

    </div>
  );
};











































// export default function Cars() {
//   return (
//     <div className='cars'>
//       <div className="car">
//         <img src={touareg} alt="" />
        {/* <div className="caption">
            <img src={icon} alt="" />
            <p>hhhhhhhhhhh</p>
        </div> */}
      {/* </div>
      <div className="car">
        <img src={c220} alt="" />
      
      </div>
      <div className="car">
        <img src={golf7} alt="" />
      </div>
    </div>
  )
} */}
