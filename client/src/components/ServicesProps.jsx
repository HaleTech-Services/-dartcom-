import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";
import img10 from "../assets/img10.png";
import img11 from "../assets/img11.png";
import img12 from "../assets/img12.png";

const services = [
  {
    title: "Building Construction",
    image: "/assets/house.jpg",
    description:
      "We provide high-quality building construction services, from residential homes to commercial structures, ensuring durability and modern designs that meet client specifications.",
  },
  {
    title: "Lifting Inspection Service",
    image: "/assets/crane.jpg",
    description:
      "Our lifting inspection services cover the thorough examination of cranes and lifting equipment, ensuring compliance with safety regulations and enhancing operational efficiency.",
  },
  {
    title: "Roads, Bridges and Jetty Construction",
    image: "/assets/bridge3.jpg",
    description:
      "We specialize in the construction of roads, bridges, and jetties, focusing on infrastructure that supports long-term use and withstands environmental challenges.",
  },
  {
    title: "Coating/Painting Services",
    image: "/assets/spray.jpeg",
    description:
      "Our coating and painting services offer protection against corrosion and wear for industrial and commercial structures, using high-performance paints and coatings.",
  },
  {
    title: "Structural Fabrication and Installation",
    image: "/assets/concrete.jpg",
    description:
      "We offer structural fabrication and installation services, ensuring that steel frameworks and concrete structures are assembled with precision and safety.",
  },
  {
    title: "Welding Inspection Services",
    image: "/assets/img4.jpeg",
    description:
      "Our certified welding inspection services ensure the quality and strength of welded joints, helping to prevent failures and ensuring safety in construction projects.",
  },
  {
    title: "Warehouses Construction",
    image: "/assets/ware.jpg",
    description:
      "We design and construct modern, functional warehouses tailored to the storage and logistical needs of your business, ensuring optimized space utilization.",
  },
  {
    title: "Radiographic Testing",
    image: "/assets/radio.jpg",
    description:
      "Our radiographic testing service uses advanced X-ray technology to detect hidden flaws in materials and structures without causing damage.",
  },
  {
    title: "Ultrasonic Testing",
    image: "/assets/img6.jpeg",
    description:
      "We use ultrasonic testing to detect subsurface flaws in metals and other materials, offering a non-destructive testing solution with high accuracy.",
  },
  {
    title: "NON DESTRUCTIVE TESTING(NDT)",
    image: img1,
    description:
      "We conduct a wide group of analysis techniques in industries to evaluate the properties of a material component or system without causing damage.",
  },
  {
    title: "MAGNETIC PARTICLE INSPECTION",
    image: img2,
    description: "Construction of ultramodern...",
  },
  // {
  //   title: "LIQUID PENETRANT INSPECTION",
  //   image: img3,
  //   description:
  //     "Liquid penetrant inspection is used to detect casting, forging welding, surface defects...",
  // },
  // {
  //   title: "COATING/PAINTING INSPECTION",
  //   image: img7,
  //   description:
  //     "We offer professional coating project design and independent paint inspection services...",
  // },
  {
    title: "DRILL PIPE INSPECTION SERVICES",
    image: img8,
    description:
      "We use modified instruments at inspection sites to identify defects in metallurgy...",
  },
  {
    title: "CALIBRATION/PRESSURE TESTING",
    image: img9,
    description:
      "We conduct certification of a wide range of control pressure storage tanks...",
  },
  {
    title: "SOCKETING AND SPLICING INSPECTION",
    image: img11,
    description:
      "We conduct onsite socketing and splicing inspection and testing on all types of lifting equipment...",
  },
  {
    title: "DESTRUCTIVE TESTING SERVICE",
    image: img12,
    description:
      "We conduct destructive tests to determine the ultimate tensile strength...",
  },
];

const ServicesProps = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/services");
  };

  return (
    <section className="bg-[#2D3E4E] m-0 text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-orange-500 text-sm uppercase mb-2">Our Services</h2>
        <h1 className="text-3xl font-bold mb-8">What We Offer</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative transform transition-transform duration-500 ease-in-out hover:-translate-y-2 mb-8"
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
              <div className="text-lg font-medium text-white justify-start transition-transform duration-500 ease-in-out group-hover:translate-y-1">
                {service.title}
              </div>
              <p className="pt-1 text-[15px] text-center">
                {service.description}
              </p>
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

export default ServicesProps;
