import React from "react";
import bigImg from "../../../assets/bigImg.png";
import smallImg from "../../../assets/smallImg.png";

const HomeBanner = () => {
  return (
    <div className="w-full h-[80vh] flex justify-between pl-[5rem] pt-[85px] mb-[60px]">
      <div className="pt-[120px]">
        <h1 className="text-5xl font-bold mb-3 leading-[55px]">
          Engineering <br /> Excellence Delivered
        </h1>
        <p className="w-[400px] mb-8 text-[#333333]">
          Your Trusted Partner In Innovation and Quality Engineering Solutions
          You Can Rely On.
        </p>
        <button className="text-white bg-[#4D69FF] px-8 py-2 rounded-md font-medium">
          Our Service
        </button>
      </div>
      <div className="relative">
        <img className="w-[600px] h-[550px]" src={bigImg} alt="banner big image" />
        <img
          className="w-[450px] h-[254px] absolute right-[60%] bottom-[-160px] border-4 border-gray-300 rounded-md"
          src={smallImg}
          alt="small image"
        />
      </div>
    </div>
  );
};

export default HomeBanner;
