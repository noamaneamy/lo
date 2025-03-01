import "./Contact.css" ;
import msg_icon from "../../assets/msg_icon.jpg" ;
import mail_icon from "../../assets/mail_icon.png" ;
import phone_icon from "../../assets/phone_icon.jpg" ;
import location_icon from "../../assets/location_icon.jpg" ;
import white_arrow from "../../assets/white_arrow.jpg" ;
import { useState } from "react";
export default function Contact() {
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "376a3749-d4c2-45ff-8682-fc2b7360b3d0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact" name="contact">
      <div className="contact-col">
        <h3>Envoyez-nous vos message<img src={msg_icon} alt=""/></h3>
        <p> Nos informations </p>
        <ul>
            <li><img src={mail_icon} alt="" />DriveX@gmail.com</li>
            <li><img src={phone_icon} alt="" />+212 12345678</li>
            <li><img src={location_icon} alt="" />adrees en fais plus tard <br />States</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label> Votre nom</label>
            <input type="text" name="name" placeholder="Entrez votre nom" required />
            <label>Telephone</label>
            <input type="tel" name="phone" placeholder="Entrer votre numero de telephone" required/>
            <label>Ecrivez votre message ici</label>
            <textarea name="message" rows="6" placeholder="Entrer votre message" required></textarea>
            <button type="submit" className="btn dark-btn">
                Envoyer <img src={white_arrow} alt="" />
            </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}
