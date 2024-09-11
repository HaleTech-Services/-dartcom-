import React, { useState, useEffect } from "react";

const PromiseAndValues = () => {
  const values = [
    { imgSrc: "/assets/Excellent-Work.jpg", title: "Excellent Work Strategy" },
    { imgSrc: "/assets/budget-image.jpeg", title: "Budget Adherence" },
    { imgSrc: "/assets/safety-image.jpeg", title: "High Safety Measures" },
    { imgSrc: "/assets/progectss.jpg", title: "High Quality Construction" },
    { imgSrc: "/assets/strategy.jpg", title: "Timeliness" },
    { imgSrc: "/assets/satisfaction.jpg", title: "Customer Satisfaction Survey" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the next value (for mobile slideshow)
  const nextValue = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % values.length);
  };

  // Move to the previous value (for mobile slideshow)
  const prevValue = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? values.length - 1 : prevIndex - 1
    );
  };

  // Auto-rotate every 10 seconds (for mobile view)
  useEffect(() => {
    const intervalId = setInterval(nextValue, 10000); // 10-second interval
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-white py-16">
      <div className="text-center">
        <h2 className="text-sm font-semibold text-orange-600">WHY CHOOSE US</h2>
        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          OUR PROMISE AND VALUES
        </h1>
      </div>

      {/* Grid layout for larger screens */}
      <div className="hidden md:grid mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5">
        {values.map((value, index) => (
          <div
            key={index}
            className="group relative overflow-hidden bg-white shadow p-5 flex flex-col items-start transform transition-transform duration-500 ease-in-out hover:-translate-y-2"
          >
            <div className="relative w-full max-w-xs h-48 overflow-hidden p-3">
              <img
                src={value.imgSrc}
                alt={value.title}
                className="w-full h-full rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 h-1/2 min-h-5 w-1/2 border-b-4 border-[#76B5EA] border-l-4 transition-all duration-500 ease-in-out transform -translate-x-10 group-hover:translate-x-0"></div>
              <div className="absolute top-0 right-0 h-1/2 min-h-5 w-1/2 border-t-4 border-[#76B5EA] border-r-4 transition-all duration-500 ease-in-out transform translate-x-10 group-hover:translate-x-0"></div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900 transition-transform duration-500 ease-in-out group-hover:translate-y-1">
                {value.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Slideshow for mobile view */}
      <div className="block md:hidden mt-10 p-5">
        <div
          key={currentIndex}
          className="group relative overflow-hidden bg-white shadow p-5 flex flex-col items-start transform transition-transform duration-500 ease-in-out"
        >
          <div className="relative w-full max-w-xs h-48 overflow-hidden p-3">
            <img
              src={values[currentIndex].imgSrc}
              alt={values[currentIndex].title}
              className="w-full h-full rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 h-1/2 min-h-5 w-1/2 border-b-4 border-[#76B5EA] border-l-4 transition-all duration-500 ease-in-out transform -translate-x-10 group-hover:translate-x-0"></div>
            <div className="absolute top-0 right-0 h-1/2 min-h-5 w-1/2 border-t-4 border-[#76B5EA] border-r-4 transition-all duration-500 ease-in-out transform translate-x-10 group-hover:translate-x-0"></div>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium text-gray-900 transition-transform duration-500 ease-in-out group-hover:translate-y-1">
              {values[currentIndex].title}
            </h3>
          </div>
        </div>

        {/* Navigation Dots (for mobile) */}
        <div className="flex justify-center mt-4">
          {values.map((_, index) => (
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
            onClick={prevValue}
            className="px-4 py-2 bg-gray-300 text-black rounded-md mx-2"
          >
            Previous
          </button>
          <button
            onClick={nextValue}
            className="px-4 py-2 bg-gray-300 text-black rounded-md mx-2"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromiseAndValues;
