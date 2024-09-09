import React from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/projects')
  }

  return (
    <div className="w-[90%] mx-auto p-3">
      <div className="text-center">
        <h2 className="text-sm text-orange-500">OUR WORK</h2>
        <h1 className="text-2xl md:text-4xl font-bold">EXPLORE OUR RECENT PROJECT</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="relative row-span-2 w-full h-64 md:h-full">
          <img
            src="/assets/grid-5.jpg"
            alt="Project 1"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50"></div>
        </div>
        <div className="relative w-full h-48 md:h-64">
          <img
            src="/assets/grid-2.jpg"
            alt="Project 2"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tl from-black/50 via-transparent to-black/50"></div>
        </div>
        <div className="relative w-full h-48 md:h-64">
          <img
            src="/assets/grid-3.jpg"
            alt="Project 3"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50"></div>
        </div>
        <div className="relative w-full h-48 md:h-64">
          <img
            src="/assets/grid-4.jpg"
            alt="Project 4"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50"></div>
        </div>
        <div className="relative w-full h-48 md:h-64">
          <img
            src="/assets/grid-1.jpg"
            alt="Project 5"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50"></div>
        </div>
      </div>
      <div className="text-center mt-8">
        <button onClick={handleClick} className="bg-transparent text-blue-500 font-semibold py-2 px-4 border border-blue-500 rounded hover:bg-blue-500 hover:text-white transition-colors duration-300">
          Explore Projects
        </button>
      </div>
    </div>
  );
};

export default Projects;
