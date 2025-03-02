import "./Contact.css";
import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

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
                <h3>Send us your message <FaPaperPlane style={{marginLeft:'10px'}}/></h3>
                <p> Our Information </p>
                <ul>
                    <li><FaEnvelope size={30} style={{marginRight:'10px'}}/> DriveX@gmail.com</li>
                    <li><FaPhoneAlt size={30} style={{marginRight:'10px'}}/> +212 12345678</li>
                    <li><FaMapMarkerAlt size={30} style={{marginRight:'10px'}}/> Address will be provided later<br /> States</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label> Your Name</label>
                    <input type="text" name="name" placeholder="Enter your name" required />
                    <label>Phone Number</label>
                    <input type="tel" name="phone" placeholder="Enter your phone number" required />
                    <label>Write your message here</label>
                    <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
                    <button type="submit" className="btn dark-btn">
                        Send <FaPaperPlane />
                    </button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
}
