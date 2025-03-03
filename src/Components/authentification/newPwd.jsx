import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./newPwd.css";

export default function NewPwd() {
    const [newpwd, setNewPwd] = useState("");
    const [confirmpwd, setConfirmPwd] = useState("");
    const [erreur, setErreur] = useState("");
    const navigate = useNavigate();

    const confirmer = (e) => {
        e.preventDefault();

        const pwdRegex = /^[A-Z][a-z]{4,}[0-9]+[@#$!%*?&]+$/;

        if (newpwd === "" || confirmpwd === "") {
            setErreur("Veuillez entrer le mot de passe.");
        } else if (newpwd !== confirmpwd) {
            setErreur("Les mots de passe ne correspondent pas.");
        } else if (!pwdRegex.test(newpwd) || newpwd.length < 8) {
            setErreur("Le mot de passe doit commencer par une majuscule, contenir au moins 4 lettres minuscules, un chiffre, un caractère spécial (@#$!%*?&) et avoir au moins 8 caractères.");
        } else {
            setErreur("");
            navigate("/pages/newpwd");
        }
    };

    return (
        <div className='newpwd'>
            <h2 className="h2code">Entrez votre nouveau mot de passe</h2>
            <form onSubmit={confirmer}>
                {erreur && (
                    <div className="erreur">
                        <div className="error__icon">
                            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z" fill="#393a37"></path>
                            </svg>
                        </div>
                        <div className="titrerreur">{erreur}</div>
                    </div>
                )}
                <input 
                    type="password"
                    name="newpwd"
                    id="newpwd"
                    value={newpwd}
                    placeholder="Nouveau mot de passe"
                    onChange={(e) => setNewPwd(e.target.value)}
                /><br /><br />
                
                <input 
                    type="password"
                    name="confirmpwd"
                    id="confirmpwd"
                    value={confirmpwd}
                    placeholder="Confirmez votre mot de passe"
                    onChange={(e) => setConfirmPwd(e.target.value)}
                /><br /><br />

                <button id="btn" type="submit">Confirmer</button>
            </form>
        </div>
    );
}
