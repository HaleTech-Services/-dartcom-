import React from 'react';

const Testimonial = () => {
  return (
    <div className="text-center py-12 bg-gray-100">
      <h2 className="text-orange-600 mb-4">TESTIMONIALS</h2>
      <div className="flex flex-col items-center p-4">
        <img
          src="/assets/avatar.jpeg"
          alt="Person"
          className="rounded-full mb-4 w-[4rem] h-[4rem] object-cover"
        />
        <p className="max-w-2xl mx-auto mb-8">
          “Dartcom Construction Company delivered exceptional service, completing the project on time, within budget, and to the highest quality standards.”
        </p>
        <div className="flex justify-center">
          <span className="h-2 w-2 bg-gray-400 rounded-full mx-1"></span>
          <span className="h-2 w-2 bg-orange-600 rounded-full mx-1"></span>
          <span className="h-2 w-2 bg-gray-400 rounded-full mx-1"></span>
        </div>
      </div>
      <div className="bg-[#FF7B00] py-6 mt-12 flex flex-col md:flex-row items-center justify-center gap-3">
        <h3 className="text-white text-xl translate-y-0 md:translate-y-2">LOOKING FOR A CONSTRUCTOR FOR YOUR NEXT PROJECT?</h3>
        <button className="mt-4 px-6 py-2 bg-white text-[#FF7B00] rounded-full">Contact Us Now</button>
      </div>
    </div>
  );
};

export default Testimonial;
