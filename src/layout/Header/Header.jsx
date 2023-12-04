import React from "react";

const Header = () => {
  return (
    <>
      <header className="text-white flex items-center justify-between p-5 h-[10vh]">
        <div className="flex items-center gap-2 font-main text-4xl font-extrabold text-accent">
          <img
            src="https://img.icons8.com/?size=256&id=12975&format=png"
            className="w-[40px] rotate-45"
          />
          Fitness
        </div>
        <ul className="flex items-center gap-5 font-info text-base">
          <li className="">Home</li>
          <li className="">Who We Are</li>
          <li className="">Meet The Team</li>
          <li className="">Classes</li>
          <li className="">Membership</li>
          <button className="btn bg-accent text-black px-5 py-2 rounded-lg">
            Contact
          </button>
        </ul>
      </header>
    </>
  );
};

export default Header;
