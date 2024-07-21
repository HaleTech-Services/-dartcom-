import React from "react";
import data from "../data";

const Services = () => {
  const servicesToRender = data.map(function (data) {
    return (
      <div className="w-full self-center justify-self-center">
        <div className="w-full aspect-video overflow-hidden flex items-center justify-center">
        <img src={`/assets/${data.img}`} alt={`${data.service}`} />
        </div>
        <span className="block text-center text-lg font-medium mt-3">{data.service}</span>
      </div>
    );
  });
  return (
    <div className="w-full px-6">
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="bg-blue-200 text-[#4D69FF] py-1 px-3 rounded-2xl">
          Dartcom Company
        </div>
        <span className="text-center my-[2rem] md:w-[70ch]">
          At Dartcom Engineering, we are dedicated to delivering exceptional
          quality in every project we undertake. We adhere to strict quality
          control measures and utilize the latest technologies to ensure optimal
          results. Our commitment to excellence has earned us a reputation for
          reliability and customer satisfaction
        </span>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-3">
        {servicesToRender}
      </div>
    </div>
  );
};

export default Services;
