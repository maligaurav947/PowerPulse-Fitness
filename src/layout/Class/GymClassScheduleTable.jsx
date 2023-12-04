import React from "react";
import Title from "../../components/Title";

const GymClassScheduleTable = () => {
  const classSchedule = [
    {
      time: "8:00 AM - 9:00 AM",
      className: "Morning Yoga",
      instructor: "Instructor A",
      location: "Studio 1",
    },
    {
      time: "10:00 AM - 11:00 AM",
      className: "HIIT Workout",
      instructor: "Instructor B",
      location: "Fitness Area",
    },
    {
      time: "1:00 PM - 2:00 PM",
      className: "Zumba Fitness",
      instructor: "Instructor C",
      location: "Studio 2",
    },
    {
      time: "4:00 PM - 5:00 PM",
      className: "Strength Training",
      instructor: "Instructor D",
      location: "Fitness Area",
    },
    {
      time: "6:00 PM - 7:00 PM",
      className: "Cardio Kickboxing",
      instructor: "Instructor E",
      location: "Studio 1",
    },
    {
      time: "8:00 PM - 9:00 PM",
      className: "Yoga Flow",
      instructor: "Instructor F",
      location: "Studio 2",
    },
    // Add more rows as needed
  ];

  return (
    <div className="grid justify-center mt-8">
      <Title title="Class Schedules" />
      <div className="flex items-center justify-center gap-10 font-info">
        <table className="bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden w-[50%]">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="border-b p-4 text-left">Time</th>
              <th className="border-b p-4 text-left">Class Name</th>
              <th className="border-b p-4 text-left">Instructor</th>
              <th className="border-b p-4 text-left">Location</th>
            </tr>
          </thead>
          <tbody>
            {classSchedule.map((classItem, index) => (
              <tr
                key={index}
                className={
                  index % 2 === 0 ? "bg-gray-100" : "bg-white hover:bg-gray-200"
                }
              >
                <td className="border-b p-4">{classItem.time}</td>
                <td className="border-b p-4">{classItem.className}</td>
                <td className="border-b p-4">{classItem.instructor}</td>
                <td className="border-b p-4">{classItem.location}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <iframe
          width="600"
          height="350"
          src="https://www.youtube.com/embed/Eml2xnoLpYE?si=_oNtH44-V0nz2Vjh"
          title="YouTube video player"
          frameborder="0"
          allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="rounded-2xl"
        ></iframe>
      </div>
    </div>
  );
};

export default GymClassScheduleTable;
