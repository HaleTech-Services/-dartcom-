import React from "react";

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
  return (
    <div className="w-full bg-[#2D3E4E] min-h-6 my-5 flex flex-col md:flex-row items-stretch justify-center gap-8 p-10">
      {services.map((service, index) => (
        <div key={index} className="flex flex-col md:flex-row items-center bg-white w-full md:w-1/3">
          <div className="w-full md:w-1/3">
            <img src={service.imgSrc} alt={service.title} className="w-full h-48 object-cover" />
          </div>
          <div className="p-5 text-center md:text-left w-full md:w-2/3">
            <h3 className="text-lg font-bold mb-3">{service.title}</h3>
            <ul className="text-sm list-disc list-inside">
              {service.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
