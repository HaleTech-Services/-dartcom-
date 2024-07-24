import React from 'react';

const Projects = () => {
  return (
    <div className="w-[90%] mx-auto p-3">
      <div className="text-center">
        <h2 className="text-sm text-orange-500">OUR WORK</h2>
        <h1 className="text-4xl font-bold">EXPLORE OUR RECENT PROJECT</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <img src="/assets/grid-1.jpeg" alt="Project 1" className='row-span-2 w-full h-full object-cover'/>
        <img src="/assets/grid-2.jpeg" alt="Project 1" className='w-full h-full object-cover' />
        <img src="/assets/grid-3.jpeg" alt="Project 1" className='w-full h-full object-cover'/>
        <img src="/assets/grid-4.jpeg" alt="Project 1" className='w-full h-full object-cover'/>
        <img src="/assets/grid-5.jpeg" alt="Project 1" className='w-full h-full object-cover'/>
      </div>
      <div className="text-center mt-8">
        <button className="bg-transparent text-blue-500 font-semibold py-2 px-4 border border-blue-500 rounded">
          Explore Projects
        </button>
      </div>
    </div>
  );
};

export default Projects;
