import React, { useState } from "react"; 
import { Link } from "react-router-dom";
import "./auth.css";
export  default function Auth() {
  const [email, setemail] = useState("");
  const [pwd, setPwd] = useState("");
  const [erreur , seterreur] =useState("") ;
  const[valid , setvalid]=useState(false) //Indique s'il y a une erreur de validation (si les champs sont vides).
  const submit = (e) =>{
    e.preventDefault() ;
    if(email==="" || pwd===""){
      setvalid(true) 
      seterreur("Veuillez remplir les champs");
    } 
    else{
      setvalid(false);
      seterreur("");
      window.location.href="/" ;

    }
  }
  return (
    <div className="body" >

<div
  className="authlogin" //style={{ backgroundImage: `url("../img/bmw.jpg")`}}
   >
      <h1 id="h1">Welcome back !</h1>
      <span id="h3">Please enter your details</span> <br /><br />
      <form action="" method="post">
      {valid && (
          <div className="error">
            <div className="error__icon">
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
            <div className="error__title">{erreur}</div>
        
          </div>
        )}

      <input
        type="email"
        className="input-login"
        placeholder="Votre Email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      /><br/><br/>

      <input
        type="password"
        className="input-pwd"
        placeholder="Mot de passe"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
      /><br/><br/>
          <Link to="/pages/forgetpwd" >Mot de passe oublié ? </Link> <br /> <br />
        <input type="checkbox" /><span className="spanme">Remember me !!</span><br/>

      <button id="btn" className="btn-submit" onClick={submit}>Se connecter</button>
        <br />
      <div className="sign">
         N avez pas de compte : {" "}
         <Link to="/pages/register" id="lien1" > S'inscrire </Link> 
      </div>
      </form>

    </div>
      
    </div>

    

    
  );
}


