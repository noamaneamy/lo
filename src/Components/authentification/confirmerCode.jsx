import React, { useState } from 'react'
import "./confirmerCode.css"
export default function ConfirmerCode() {
    const[code , setCode]=useState("");
    const[valid , setvalid]=useState(false);
    const[erreur , seterreur]=useState("")
    const confirmer = (e) => {
        e.preventDefault() ;
        if(code === ""){
            setvalid(true) ;
            seterreur("Veuillez remplir tous les champs") 
        }else{
            setvalid(false)
            seterreur("") 
            window.location.href="/" ;
        }
    }
  return (
<div className="CodeConfirm">
      <h2 id="h2code">Veuillez saisir le code de confirmation</h2>
      <form action="" method="post">
      {valid && (
          <div className="erreur">
            <div className="erreur__icon">
              <svg
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z"
                  fill="#393a37"
                ></path>
              </svg>
            </div>
            <div className="titreErreur">{erreur}</div>
          </div>
        )}
        <input
          type="text"
          name="codeconfirmer"
          placeholder="Confirmation de Code "
          id="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <br /> <br />
        <button id="btn" onClick={confirmer}>confirmer</button>
      </form>
    </div>
  );
}