import React from "react";

const testimonialsData = [
  {
    quote: "Working with dartcom has been pleasing, as I have had no better experience",
    name: "Daniel Kolenda",
    title: "CEO of JX project limited",
    image: "/assets/profile.jpg",
  },
  {
    quote: "Working with dartcom has been pleasing, as I have had no better experience",
    name: "Daniel Kolenda",
    title: "CEO of JX project limited",
    image: "/assets/profile.jpg",
  },
  {
    quote: "Working with dartcom has been pleasing, as I have had no better experience",
    name: "Daniel Kolenda",
    title: "CEO of JX project limited",
    image: "/assets/profile.jpg",
  },
  {
    quote: "Working with dartcom has been pleasing, as I have had no better experience",
    name: "Daniel Kolenda",
    title: "CEO of JX project limited",
    image: "/assets/profile.jpg",
  },
  {
    quote: "Working with dartcom has been pleasing, as I have had no better experience",
    name: "Daniel Kolenda",
    title: "CEO of JX project limited",
    image: "/assets/profile.jpg",
  },
  {
    quote: "Working with dartcom has been pleasing, as I have had no better experience",
    name: "Daniel Kolenda",
    title: "CEO of JX project limited",
    image: "/assets/profile.jpg",
  },
];

export default function HomeTestimonial () {
  return (
    <div className="bg-blue-500 py-12">
      <h2 className="text-center text-white text-2xl md:text-3xl font-bold mb-8">
        Testimonials
      </h2>
      <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between"
          >
            <p className="text-lg text-gray-700 mb-4">"{testimonial.quote}"</p>
            <div className="flex items-center mt-4">
            <div className="w-12 h-12 overflow-hidden flex flex-center items-center justify-center rounded-full mr-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-auto"
              />
              </div>
              <div>
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
