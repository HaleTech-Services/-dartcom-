import React from 'react';
import { Link } from 'react-router-dom'

const ConstructionSolutions = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 mt-[6rem]">
      <div className="md:w-1/2 p-4">
        <h3 className="text-orange-500 mb-2">Where Can We Help You</h3>
        <h1 className="text-3xl font-bold mb-4">Welcome To Construction Real Solutions.</h1>
        <p className="mb-4">
          Our team of experts specializes in designing and constructing commercial and residential spaces
          that are functional, sustainable, and aesthetically pleasing.
        </p>
        <ul className="list-none space-y-2 mb-6">
          <li className="flex items-start">
            <span className="inline-block w-4 h-4 bg-[#2D3E4E] rounded-full mr-2 mt-1"></span>
            Specializes in designing and constructing
          </li>
          <li className="flex items-start">
            <span className="inline-block w-4 h-4 bg-[#2D3E4E] rounded-full mr-2 mt-1"></span>
            Strong understanding of our clients' needs and goals
          </li>
          <li className="flex items-start">
            <span className="inline-block w-4 h-4 bg-[#2D3E4E] rounded-full mr-2 mt-1"></span>
            Architectural design, engineering, and construction management
          </li>
          <li className="flex items-start">
            <span className="inline-block w-4 h-4 bg-[#2D3E4E] rounded-full mr-2 mt-1"></span>
            Environmental impact of our projects
          </li>
          <li className="flex items-start">
            <span className="inline-block w-4 h-4 bg-[#2D3E4E] rounded-full mr-2 mt-1"></span>
            Sustainable engineering solutions
          </li>
        </ul>
        <Link to='/services'><button className="bg-[#2D3E4E] text-white px-4 py-2 rounded">Read More...</button></Link>
      </div>
      <div className="md:w-1/2 p-4 h-full relative">
        <div className="w-full h-64 bg-gray-300 flex items-center justify-center overflow-hidden bg-gradient-to-tr">
          <img src="/assets/Technical.jpeg" alt="Construction workers" className="w-full h-full object-cover rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-110" />
        </div>
        <div className=" absolute bottom-0 left-0 h-1/2 min-h-5 w-1/2 border-b-4 border-b-[#76B5EA] border-l-4 border-l-[#76B5EA]"></div>
        <div className=" absolute top-0 right-0 h-1/2 min-h-5 w-1/2 border-t-4 border-t-[#76B5EA] border-r-4 border-r-[#76B5EA]"></div>
      </div>
    </div>
  );
};

export default ConstructionSolutions;
