import Navbar from "./NavBar/NavBar"
import Hero from "./Hero/Hero";
import Cars from "./Cars/Cars";
import Title from "./Title/Title";
import About from "./About/About";
import Vue from "./Vue/Vue";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
export default function Home() {
  return (
    <>
        <Navbar />
        <Hero/>
        <div className="container">
            <Title subTitle="Ce que nous offrons" title="Découvrez Nos Voitures"/> 
            <Cars/>
            <About/>
            <Title subTitle="Avis de nos Clients" title="Vue"/> 
            <Vue/>
            <Title subTitle="Contactez-nous" title="Entrer en contact"/> 
            <Contact />
            <Footer/>
        </div>
    </>
  )
}
