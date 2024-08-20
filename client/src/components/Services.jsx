import React from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Lifting Inspection Service",
    image: "/assets/img1.jpeg",
  },
  {
    title: "Coating/Painting Services",
    image: "/assets/img2.jpeg",
  },
  {
    title: "Drill Pipe Inspection Services",
    image: "/assets/img3.jpeg",
  },
  {
    title: "Welding Inspection Services",
    image: "/assets/img4.jpeg",
  },
  {
    title: "Radiographic Testing",
    image: "/assets/img5.jpeg",
  },
  {
    title: "Ultrasonic Testing",
    image: "/assets/img6.jpeg",
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/services');
  };

  return (
    <section className="bg-[#2D3E4E] text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-orange-500 text-sm uppercase mb-2">Our Services</h2>
        <h1 className="text-3xl font-bold mb-8">We Offer Our Clients</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative transform transition-transform duration-500 ease-in-out hover:-translate-y-2"
            >
              <div className="relative p-3 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 h-1/2 min-h-5 w-1/2 border-b-4 border-[#76B5EA] border-l-4 transition-all duration-500 ease-in-out transform -translate-x-10 group-hover:translate-x-0"></div>
                <div className="absolute top-0 right-0 h-1/2 min-h-5 w-1/2 border-t-4 border-[#76B5EA] border-r-4 transition-all duration-500 ease-in-out transform translate-x-10 group-hover:translate-x-0"></div>
              </div>
              <div className="mt-3 mx-1 flex items-start justify-start text-lg font-semibold opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                {service.title}
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handleClick}
          className="mt-8 px-6 py-2 bg-transparent text-white rounded hover:bg-gray-700 border-white border transition-colors duration-500 ease-in-out"
        >
          Read More...
        </button>
      </div>
    </section>
  );
};

export default Services;
