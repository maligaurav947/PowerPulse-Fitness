import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <>
      <section className="section-hero">
        <main className="section-hero-main-left">
          <img
            src="https://images.pexels.com/photos/19031635/pexels-photo-19031635/free-photo-of-a-window-with-a-reflection-of-trees-and-water.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="section-hero-main-left-img"
            alt="section-hero-main-left-img"
          />
        </main>
        <main className="section-hero-main-right">
          <h2 className="section-title">lorem</h2>
          <p className="section-pargraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, rerum quibusdam? Tempora soluta natus id magni non
            animi ipsa laudantium.
          </p>
          <button className="hero-button">Learn More</button>
        </main>
      </section>
    </>
  );
};

export default Hero;
