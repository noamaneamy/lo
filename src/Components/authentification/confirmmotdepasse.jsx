import React, { useState } from 'react'
import "./confirmmotdepasse.css"
import Navbar from '../NavBar/NavBar'
export default function Confirme() {
    const[valid , setvalid]=useState(false)
    const[erreur , seterreur]=useState("")
    const[code , setcode]=useState("")

    const confirmer = (e) =>{
        e.preventDefault() ;
        if(code === ""){
        setvalid(true);
        seterreur("Veuillez entrer le code de confirmation");
        }else{
            setvalid(false) ;
            seterreur("");
            window.location.href="/pages/newpwd"
        }

    }

    
  return (
    <div>
        <Navbar className="hhh"/>
      <div className="confirmeCode">
        <h2 className="codecode"> Enter le code de confirmation</h2>

      </div>
      <input type="text" value={code}
        name='confirmercodecompte' 
        id='code'
        placeholder='Confirmation  Code'
        onChange={(e)=>setcode(e.target.value)} required/> <br /><br />

    <button id="btn" onClick={confirmer}>Confirmer</button>
    </div>
  )
}

