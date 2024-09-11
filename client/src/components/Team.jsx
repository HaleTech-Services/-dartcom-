import React, { useState, useEffect } from "react";

const Team = () => {
  const teamMembers = [
    { imgSrc: "/assets/teem3.jpeg", title: "Project Managers" },
    { imgSrc: "/assets/Teamm.jpeg", title: "Technical Team" },
    { imgSrc: "/assets/teem.jpeg", title: "Construction Team" },
    { imgSrc: "/assets/teem1.jpeg", title: "Architectural Team" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the next member (for mobile slideshow)
  const nextMember = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  // Move to the previous member (for mobile slideshow)
  const prevMember = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  // Auto-rotate every 10 seconds (for mobile view)
  useEffect(() => {
    const intervalId = setInterval(nextMember, 10000); // 10-second interval
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-[90%] mx-auto p-3">
      <div className="text-center">
        <h2 className="text-sm text-orange-500">OUR TEAM</h2>
        <h1 className="text-2xl md:text-4xl font-bold">WE HAVE EXPERIENCED MEMBERS</h1>
      </div>

      {/* Grid layout for larger screens */}
      <div className="hidden md:flex flex-row items-stretch gap-3 my-9">
        {teamMembers.map((member, index) => (
          <div key={index}>
            <div className="md:w-64 h-64">
              <img
                src={member.imgSrc}
                alt={member.title}
                className="w-full md:w-64 h-64 object-cover"
              />
            </div>
            <span className="my-3 text-xl">{member.title}</span>
          </div>
        ))}
      </div>

      {/* Slideshow for mobile view */}
      <div className="block md:hidden my-9">
        <div className="flex flex-col items-center">
          <div className="w-64 h-64">
            <img
              src={teamMembers[currentIndex].imgSrc}
              alt={teamMembers[currentIndex].title}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="my-3 text-xl">{teamMembers[currentIndex].title}</span>
        </div>

        {/* Navigation Dots (for mobile) */}
        <div className="flex justify-center mt-4">
          {teamMembers.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full mx-1 cursor-pointer transition-colors duration-300 ${
                index === currentIndex ? 'bg-orange-600' : 'bg-gray-400'
              }`}
            ></span>
          ))}
        </div>

        {/* Manual Navigation Buttons (for mobile) */}
        <div className="flex justify-center mt-4">
          <button
            onClick={prevMember}
            className="px-4 py-2 bg-gray-300 text-black rounded-md mx-2"
          >
            Previous
          </button>
          <button
            onClick={nextMember}
            className="px-4 py-2 bg-gray-300 text-black rounded-md mx-2"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;
