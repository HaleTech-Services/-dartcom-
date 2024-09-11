import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "ARCHITECTURE",
    items: [
      "Site Plan",
      "HVAC Plans",
      "Electrical Plan",
      "Structural Plan",
      "Structure Design",
    ],
    imgSrc: "/assets/architecture-image.jpeg",
  },
  {
    title: "CONSTRUCTION",
    items: ["Buildings", "Road, Jetty, Bridge", "Corporate Buildings & More"],
    imgSrc: "/assets/construction-image.jpeg",
  },
  {
    title: "MAINTENANCE",
    items: ["Emergency Repairs", "HVAC Maintenance", "Inspection & Testings"],
    imgSrc: "/assets/maintenance-image.jpeg",
  },
];

export default function VisionMission() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Rotate between services (for mobile slideshow)
  const nextService = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };
  const prevService = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  // Auto-rotate every 15 seconds for mobile
  useEffect(() => {
    const intervalId = setInterval(nextService, 15000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full bg-[#2D3E4E] min-h-6 my-5 p-10">
      {/* Flex layout for larger screens */}
      <div className="hidden md:flex justify-center gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center bg-white w-full md:w-1/3"
          >
            <div className="w-full md:w-1/3">
              <img
                src={service.imgSrc}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-5 text-center md:text-left w-full md:w-2/3">
              <h3 className="text-lg font-bold mb-3">{service.title}</h3>
              <ul className="text-sm list-disc list-inside">
                {service.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Slideshow for mobile view */}
      <div className="block md:hidden flex flex-col items-center bg-white w-full transition-opacity duration-500">
        <div className="w-full">
          <img
            src={services[currentIndex].imgSrc}
            alt={services[currentIndex].title}
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="p-5 text-center w-full">
          <h3 className="text-lg font-bold mb-3">{services[currentIndex].title}</h3>
          <ul className="text-sm list-disc list-inside">
            {services[currentIndex].items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-4">
          {services.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full mx-1 cursor-pointer transition-colors duration-300 ${
                index === currentIndex ? 'bg-orange-600' : 'bg-gray-400'
              }`}
            ></span>
          ))}
        </div>

        {/* Manual Navigation Buttons */}
        <div className="flex justify-center mt-4">
          <button
            onClick={prevService}
            className="px-4 py-2 bg-gray-300 text-black rounded-md mx-2"
          >
            Previous
          </button>
          <button
            onClick={nextService}
            className="px-4 py-2 bg-gray-300 text-black rounded-md mx-2"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
