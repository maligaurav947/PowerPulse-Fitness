/* eslint-disable jsx-a11y/anchor-is-valid */
// AboutUs.jsx
import React from "react";
import Title from "../../components/Title";
const about = [
  {
    title: "Introduction",
    info: "Welcome to PowerPulse Fitness, your ultimate destination for a     transformative fitness experience. At PowerPulse, we believe that     fitness is not just a routine; it's a lifestyle, a journey towards     empowerment and well-being.",
  },
  {
    title: "Our Story",
    info: "At PowerPulse Fitness, our story is one of passion, commitment,    and the relentless pursuit of excellence in fitness. Founded in    [year], our gym was born out of the idea that everyone deserves a    space where they can unleash their full potential, regardless of    their fitness level or background.",
  },
  {
    title: "Mission Statement",
    info: "Our mission is simple yet powerful: to inspire and empower individuals to lead healthier, more active lives. We are dedicated    to creating an inclusive and motivating environment where every    member feels supported on their fitness journey.",
  },
];
const About = () => {
  return (
    <>
      <section className=" grid lg:flex justify-center items-center p-5 gap-5 bg-secondary">
        <div className="">
          <img
            src="https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="rounded-3xl shadow-lg lg:h-[650px]"
          />
        </div>
        <div className="lg:w-[50%] grid gap-7">
          {about.map((data) => (
            <div>
              <h2 className="font-main font-bold text-4xl border-b-2">
                {data.title}:
              </h2>
              <p className="font-info font-light text-xl lowercase first-letter:text-3xl">
                {data.info}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
