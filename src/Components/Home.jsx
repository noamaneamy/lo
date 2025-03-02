import Navbar from "./NavBar/NavBar";
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
        <Hero />
        <div className="container">
            <Title subTitle="What We Offer" title="Discover Our Cars"/> 
            <Cars />
            <About />
            <Title subTitle="Customer Reviews" title="Testimonials"/> 
            <Vue />
            <Title subTitle="Get in Touch" title="Contact Us"/> 
            <Contact />
            <Footer />
        </div>
    </>
  );
}
