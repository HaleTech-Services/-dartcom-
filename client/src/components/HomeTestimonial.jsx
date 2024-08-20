import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    image: '/assets/icon1.jpg',
    text: "Dartcom Construction Company delivered exceptional service, completing the project on time, within budget, and to the highest quality standards.",
    name: "John Doe",
  },
  {
    image: '/assets/icon2.jpg',
    text: "The team at Dartcom went above and beyond to ensure every detail was perfect. Highly recommend their services.",
    name: "Jane Smith",
  },
  {
    image: '/assets/icon3.jpg',
    text: "Professional, reliable, and always exceeding expectations. Dartcom is my go-to for all construction needs.",
    name: "Emily Johnson",
  },
  {
    image: '/assets/icon4.jpg',
    text: "An outstanding experience with Dartcom. They delivered high-quality work on time and on budget.",
    name: "Michael Brown",
  },
  {
    image: '/assets/icon5.jpg',
    text: "Dartcom Construction offers top-notch service with a personal touch. I couldn't be happier with the results.",
    name: "Sarah Davis",
  },
  {
    image: '/assets/icon6.jpeg',
    text: "Exceptional quality and service. Dartcom’s attention to detail and professionalism is unmatched.",
    name: "David Wilson",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextTestimonial, 15000); // Change testimonial every 15 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className="relative text-center py-12 bg-gray-100">
      {/* Dark radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0.6)_50%,_rgba(0,0,0,0)_100%)] opacity-50"></div>
      <h2 className="relative text-orange-600 mb-4 text-3xl font-bold">TESTIMONIALS</h2>
      <div className="relative flex flex-col items-center p-4 transition-transform duration-500 ease-in-out">
        <img
          src={testimonials[currentIndex].image}
          alt="Person"
          className="rounded-full mb-4 w-[4rem] h-[4rem] object-cover transition-opacity duration-500 ease-in-out"
        />
        <p className="max-w-2xl mx-auto mb-8 px-4 transition-opacity duration-500 ease-in-out text-white">
          “{testimonials[currentIndex].text}”
        </p>
        <div className="flex justify-center mb-4">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full mx-1 cursor-pointer transition-colors duration-300 ${
                index === currentIndex
                  ? 'bg-orange-600'
                  : 'bg-gray-400'
              }`}
            ></span>
          ))}
        </div>
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
          <button
            onClick={prevTestimonial}
            className="bg-gray-600 text-white p-2 rounded-full"
          >
            &lt;
          </button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
          <button
            onClick={nextTestimonial}
            className="bg-gray-600 text-white p-2 rounded-full"
          >
            &gt;
          </button>
        </div>
      </div>
      <div className="bg-[#FF7B00] py-6 mt-12 flex flex-col md:flex-row items-center justify-center gap-3">
        <h3 className="text-white text-xl">LOOKING FOR A CONSTRUCTOR FOR YOUR NEXT PROJECT?</h3>
        <button className="mt-4 px-6 py-2 bg-white text-[#FF7B00] rounded-full">Contact Us Now</button>
      </div>
    </div>
  );
};

export default Testimonial;
