import React from "react";
import Title from "../../components/Title";

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "John Doe",
      occupation: "Fitness Enthusiast",
      testimonial:
        "I've been a member for a year, and PowerPulse Fitness has transformed my fitness journey. The trainers are knowledgeable, and the community is incredibly supportive. Highly recommended!",
    },
    {
      name: "Jane Smith",
      occupation: "Yoga Instructor",
      testimonial:
        "PowerPulse Fitness is my go-to gym. The variety of classes and state-of-the-art facilities make it a perfect place for fitness enthusiasts. The friendly staff adds to the positive atmosphere!",
    },
    {
      name: "Alex Johnson",
      occupation: "Personal Trainer",
      testimonial:
        "As a fitness professional, I appreciate the excellent equipment and welcoming environment at PowerPulse Fitness. It's a fantastic place for both beginners and experienced athletes.",
    },
  ];

  return (
    <div className="container mx-auto p-5">
      <Title title="Client Testimonials" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center place-content-center">
        {testimonialsData.map((testimonial, index) => (
          <div className="grid gap-2">
            <div className="grid place-content-center">
              <img
                src="https://images.unsplash.com/photo-1584952811565-c4c4031805a8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="h-[150px] w-[150px] rounded-full object-cover"
                alt=""
              />
            </div>
            <div className="grid gap-2">
              <h3 className="font-main text-2xl">{testimonial.name}</h3>
              <h5 className="font-info text-lg">{testimonial.occupation}</h5>
            </div>
            <p className="font-info text-base">{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
