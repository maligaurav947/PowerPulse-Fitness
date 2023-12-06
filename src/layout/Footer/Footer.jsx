import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-secondary text-text h-[30vh] w-screen font-info mt-10">
        <main>
          <div className="flex w-[50%] p-5 gap-5">
            <div>
              <h2 className="font-main text-4xl">PowerPulse Fitness</h2>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                doloremque ipsum quo inventore vel in ad qui! Explicabo natus
                voluptates velit sit accusantium aliquam nisi sequi, molestiae
                inventore quo nesciunt.
              </p>
            </div>
            <ul className="text-xl">
              <a href="#">
                <li className="">Home</li>
              </a>
              <a href="#">
                <li className="">Who We Are</li>
              </a>
              <a href="#">
                <li className="">Meet The Team</li>
              </a>
              <a href="#">
                <li className="">Classes</li>
              </a>

              <a href="#">
                <li className="">Membership</li>
              </a>
            </ul>
          </div>
        </main>
      </div>
    </>
  );
};

export default Footer;
