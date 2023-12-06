import React from "react";

const Header = () => {
  return (
    <>
      <header className="text-white lg:flex items-center justify-between p-5 h-[10vh]">
        <div className="flex items-center gap-2 font-main text-4xl font-extrabold text-accent">
          <img
            src="https://img.icons8.com/?size=256&id=12975&format=png"
            className="w-[40px] rotate-45"
            alt=""
          />
          Fitness
        </div>
        <ul className="lg:flex items-center gap-5 font-info text-base">
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
          <button className="btn bg-accent text-black px-5 py-2 rounded-lg">
            Contact
          </button>
        </ul>
      </header>
    </>
  );
};

export default Header;
