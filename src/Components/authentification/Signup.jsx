import React, { useState } from 'react'
import "./Signup.css"
export default function Signup() {
    const[fullname , setfullname]=useState("") ;
    const[email , setemail]=useState("") ;
    const[cities , setcities] = useState("") ;
    const[pwd , setpwd]=useState("") ;
    const[confirmpwd , setconfirmpwd]=useState("");
    
    const[valid , setvalid]=useState(false);
    const[erreur , seterreur]=useState("") ;

    const creer = (e) =>{
        e.preventDefault() ;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const pwdRegex = /^[A-Z][a-z]{4,}[@#$!%*?&][0-9]{1,}$/;
    
        if(fullname ===""||email===""||cities===""||pwd===""||confirmpwd==="" ){
            setvalid(true);
            seterreur("Veuillez remplir tous les champs")
        }else if (!emailRegex.test(email)){
            setvalid(true) ;
            seterreur("email incorrect")
        }else if (!pwdRegex.test(pwd)){
            setvalid(true) ;
            seterreur("mot de passe incorrect")
        }else if (pwd !== confirmpwd){
            setvalid(true);
            seterreur("mot de passe incorrect")
        }else{
            setvalid(false);
            seterreur("") ;
            window.location.href="/pages/codeconfirme"
        }
    
    }
  return (
    <div className='signup'>
      <h1 className='h1'>Creer Votre Compte</h1>
      <form action="" method="post">
        {valid && (
            <div className="erreur">
                <div className="erreur_icon">
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
                <div className="erreur_titre">{erreur}</div>
            </div>
        )}
        <input type="text" name="full" id="full"
            value={fullname} 
            onChange={(e)=>setfullname(e.target.value)}
            placeholder='Nom & prenom'/>  <br /><br />

        <input type="text" 
            name='email'
            value={email}
            onChange={(e)=>setemail(e.target.value)}
            placeholder='votre email'
        />    <br /><br />
              <select
        id="cities"
        name="cities"
        value={cities}
        onChange={(e) => setcities(e.target.value)}
      >
        <option value="">Choose a city in Morocco</option>
        <option value="casablanca">Casablanca</option>
        <option value="rabat">Rabat</option>
        <option value="marrakech">Marrakech</option>
        <option value="fes">Fès</option>
        <option value="meknes">Meknès</option>
        <option value="tangier">Tangier</option>
        <option value="agadir">Agadir</option>
        <option value="oujda">Oujda</option>
        <option value="tetouan">Tétouan</option>
        <option value="safi">Safi</option>
        <option value="el-jadida">El Jadida</option>
        <option value="nador">Nador</option>
        <option value="kenitra">Kénitra</option>
        <option value="temara">Témara</option>
        <option value="settat">Settat</option>
        <option value="berrechid">Berrechid</option>
        <option value="khemisset">Khémisset</option>
        <option value="beni-mellal">Beni Mellal</option>
        <option value="taroudant">Taroudant</option>
        <option value="errachidia">Errachidia</option>
        <option value="laayoune">Laâyoune</option>
        <option value="dakhla">Dakhla</option>
        <option value="ouarzazate">Ouarzazate</option>
        <option value="taza">Taza</option>
        <option value="guelmim">Guelmim</option>
        <option value="sidi-kacem">Sidi Kacem</option>
        <option value="sidi-slimane">Sidi Slimane</option>
        <option value="oualidia">Oualidia</option>
        <option value="zoumi">Zoumi</option>
        <option value="youssoufia">Youssoufia</option>
        <option value="chefchaouen">Chefchaouen</option>
        <option value="asfi">Asfi</option>
        <option value="al-hoceima">Al Hoceima</option>
        <option value="midelt">Midelt</option>
        <option value="azilal">Azilal</option>
        <option value="taourirt">Taourirt</option>
        <option value="ifran">Ifrane</option>
        <option value="tiznit">Tiznit</option>
        <option value="essaouira">Essaouira</option>
        <option value="tan-tan">Tan-Tan</option>
        <option value="chichaoua">Chichaoua</option>
        <option value="smara">Smara</option>
      </select> <br /><br />
        <input
            type="password"
            name="password"
            id="password"
            placeholder="Mot de passe"
            value={pwd}
            onChange={(e) => setpwd(e.target.value)}
      />
      <br /> <br />
        <input
            type="password"
            name="confirmpassword"
            id="confirmpassword"
            placeholder="Confirmer votre mot de passe"
            value={confirmpwd}
            onChange={(e) => setconfirmpwd(e.target.value)}
      /><br /><br />
     <button id='btnsignup' onClick={creer}> Creer</button> 
      </form>
    </div>
  )
}
