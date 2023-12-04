import React from "react";
import Title from "../../components/Title";

const GymStaff = () => {
  const galleryData = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1584952811565-c4c4031805a8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Ethan Johnson",
      role: "Strength Training",
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/11/07/21/41/workout-2928389_1280.jpg",
      caption: "Liam Anderson",
      role: "Functional Training",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Ava Williams",
      role: "Cardiovascular Training",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Olivia Martinez",
      role: "Group Fitness Classes:",
    },
    // Add more images and captions as needed
  ];

  return (
    <div className="container mx-auto mt-8">
      <Title title="People Will Help You" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  p-5">
        {galleryData.map((item, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg ">
            <img
              src={item.imageUrl}
              alt={`Fitness Class ${index + 1}`}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-yelllow bg-opacity-50  text-white font-info">
              <p className="text-2xl font-extrabold">{item.caption}</p>
              <p className="text-xl">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GymStaff;
