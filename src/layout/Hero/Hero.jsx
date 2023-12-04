import React from "react";

const Hero = () => {
 
  return (
    <>
      <main className="grid place-content-center h-[90vh] text-text relative">
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="hero-img"
            className="w-[800px] rounded-2xl select-none  opacity-80"
          />
          <h2 className="absolute font-main lg:text-7xl lg:top-[120px] lg:left-[-150px] text-3xl top-[-41px] left-[189px]">
            Elevate Your Fitness Journey with{" "}
            <span className="text-yelllow font-extrabold bg-accent">
              PowerPulse
            </span>
          </h2>
        </div>
      </main>
    </>
  );
};

export default Hero;
