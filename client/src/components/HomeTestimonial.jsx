import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const testimonials = [
  {
    image: '/assets/power.jpg',
    text: "Their expertise in power infrastructure was instrumental in achieving our project goals efficiently and effectively.",
    name: "Federal Ministry of Power",
  },
  {
    image: '/assets/total.jpg',
    text: "Dartcom Projects Ltd.'s dedication to safety and quality made them an invaluable partner in our operations.",
    name: "Total E & P Nigeria",
  },
  {
    image: '/assets/abia.jpg',
    text: "Dartcom Projects Ltd. is a reliable partner, consistently delivering high-quality construction services for state projects.",
    name: "Abia State Government",
  },
  {
    image: '/assets/NLNG.png',
    text: "Dartcom's engineering services were critical in ensuring the success of our LNG projects.",
    name: "Nigeria Liquified Natural Gas (NLNG)",
  },
  {
    image: '/assets/niger.jpg',
    text: "Their innovative approach and timely execution have greatly contributed to the development of our regional infrastructure.",
    name: "Niger Delta Development Commission",
  },
  {
    image: '/assets/notore.png',
    text: "Their professionalism and technical expertise have been crucial in supporting our industrial and agricultural development initiatives.",
    name: "Notore",
  },
  {
    image: '/assets/tenaris.jpg',
    text: "Dartcom's commitment to excellence has made them a trusted partner in our global operations.",
    name: "Tenaris Global Services Ltd.",
  },
  {
    image: '/assets/pcmn.png',
    text: "Dartcom's top-notch services and attention to detail have consistently met our rigorous industry standards.",
    name: "Pipe Coaters Nigeria Ltd.",
  },
  {
    image: '/assets/water.jpg',
    text: "Dartcom Projects Ltd. delivered exceptional infrastructure solutions, exceeding our expectations in water resource management.",
    name: "Federal Ministry of Water Resources of Nigeria.",
  }
];

const Testimonial = () => {
  const navigate = useNavigate()
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

  const Oncontact = () => {
    navigate('/contact')
  }

  return (
    <div className="relative text-center py-12 bg-gray-100">
      {/* Dark radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0.6)_50%,_rgba(0,0,0,0)_100%)] opacity-50"></div>
      <h2 className="relative text-orange-600 mb-4 text-3xl font-bold">TESTIMONIALS</h2>
      <div className="relative flex flex-col items-center p-4 transition-transform duration-500 ease-in-out">
        <img
          src={testimonials[currentIndex].image}
          alt="Person"
          className="rounded-full mb-2 bg-white w-[4rem] h-[4rem] object-cover transition-opacity duration-500 ease-in-out"
        />
        <small className='max-w-2xl mx-auto mb-8 px-4 transition-opacity duration-500 ease-in-out text-white'>
          "{testimonials[currentIndex].name}"
        </small>
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
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 ml-4">
          <button
            onClick={prevTestimonial}
            className="bg-gray-600 text-white p-2 rounded-full"
          >
            &lt;
          </button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 mr-4">
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
        <button className="mt-4 px-6 py-2 bg-white text-[#FF7B00] rounded-full cursor-pointer" onClick={Oncontact}>Contact Us Now</button>
      </div>
    </div>
  );
};

export default Testimonial;
