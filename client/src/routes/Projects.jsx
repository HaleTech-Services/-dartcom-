import React from "react";
import ProjectsHero from "../components/ProjectsHero";

const Projects = () => {
  return (
    <>
      <main>
        <ProjectsHero text={"Our Projects"} style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,.5), rgba(0,0,0,.5)), url('/assets/projectss.jpg')`,
      }} />
        
        <div className="max-w-screen-lg mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Left Image */}
          <div className="md:col-span-1 flex justify-center md:justify-end">
            <img
              src="/assets/archi1.jpg" // Replace with actual image source
              alt="Construction 1"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Text and Central Images */}
          <div className="md:col-span-2">
            <h2 className="text-orange-500 text-4xl font-bold text-center mb-6">
              Architecture
            </h2>
            <p className="text-gray-700 text-center max-w-2xl mx-auto mb-8">
              "This project showcased our ability to create vibrant, walkable
              communities. We carefully considered the needs of diverse users to
              design a space that fosters connection and engagement."
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/assets/archi2.jpg" // Replace with actual image source
                alt="Construction 2"
                className="w-full h-64 object-cover"
              />
              <img
                src="/assets/archi3.jpg" // Replace with actual image source
                alt="Construction 3"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="md:col-span-1 flex justify-center md:justify-start">
            <img
              src="/assets/archi5.jpg" // Replace with actual image source
              alt="Construction 4"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Read More Button */}
          <div className="md:col-span-4 flex justify-center mt-8">
            <a href="/">
            <button className="bg-white text-blue-500 border border-blue-500 py-2 px-6 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">
              Read More
            </button>
            </a>
          </div>
        </div>


        <div className="max-w-screen-lg mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Left Image */}
          <div className="md:col-span-1 flex justify-center md:justify-end">
            <img
              src="/assets/plumbing.jpg" // Replace with actual image source
              alt="Construction 1"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Text and Central Images */}
          <div className="md:col-span-2">
            <h2 className="text-orange-500 text-4xl font-bold text-center mb-6">
              CONSTRUCTIONS
            </h2>
            <p className="text-gray-700 text-center max-w-2xl mx-auto mb-8">
              "This project showcased our ability to create vibrant, walkable
              communities. We carefully considered the needs of diverse users to
              design a space that fosters connection and engagement."
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/assets/roofing.jpg" // Replace with actual image source
                alt="Construction 2"
                className="w-full h-64 object-cover"
              />
              <img
                src="/assets/electric.jpg" // Replace with actual image source
                alt="Construction 3"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="md:col-span-1 flex justify-center md:justify-start">
            <img
              src="/assets/block-work.jpg" // Replace with actual image source
              alt="Construction 4"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Read More Button */}
          <div className="md:col-span-4 flex justify-center mt-8">
            <button className="bg-white text-blue-500 border border-blue-500 py-2 px-6 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">
              Read More
            </button>
          </div>
        </div>
        <div className="max-w-screen-lg mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Left Image */}
          <div className="md:col-span-1 flex justify-center md:justify-end">
            <img
              src="/assets/bridge1.jpg" // Replace with actual image source
              alt="Construction 1"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Text and Central Images */}
          <div className="md:col-span-2">
            <h2 className="text-orange-500 text-4xl font-bold text-center mb-6">
              Bridges And Jetty
            </h2>
            <p className="text-gray-700 text-center max-w-2xl mx-auto mb-8">
              "This project showcased our ability to create vibrant, walkable
              communities. We carefully considered the needs of diverse users to
              design a space that fosters connection and engagement."
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/assets/bridge2.jpg" // Replace with actual image source
                alt="Construction 2"
                className="w-full h-64 object-cover"
              />
              <img
                src="/assets/bridge3.jpg" // Replace with actual image source
                alt="Construction 3"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="md:col-span-1 flex justify-center md:justify-start">
            <img
              src="/assets/bridge4.jpg" // Replace with actual image source
              alt="Construction 4"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Read More Button */}
          <div className="md:col-span-4 flex justify-center mt-8">
            <button className="bg-white text-blue-500 border border-blue-500 py-2 px-6 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">
              Read More
            </button>
          </div>
        </div>


        <div className="max-w-screen-lg mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Left Image */}
          <div className="md:col-span-1 flex justify-center md:justify-end">
            <img
              src="/assets/prog1.png" // Replace with actual image source
              alt="Construction 1"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Text and Central Images */}
          <div className="md:col-span-2">
            <h2 className="text-orange-500 text-4xl font-bold text-center mb-6">
              Other Projects
            </h2>
            <p className="text-gray-700 text-center max-w-2xl mx-auto mb-8">
              "This project showcased our ability to create vibrant, walkable
              communities. We carefully considered the needs of diverse users to
              design a space that fosters connection and engagement."
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/assets/prog3.jpg" // Replace with actual image source
                alt="Construction 2"
                className="w-full h-64 object-cover"
              />
              <img
                src="/assets/prog4.jpg" // Replace with actual image source
                alt="Construction 3"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="md:col-span-1 flex justify-center md:justify-start">
            <img
              src="/assets/prog2.png" // Replace with actual image source
              alt="Construction 4"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Read More Button */}
          <div className="md:col-span-4 flex justify-center mt-8">
            <button className="bg-white text-blue-500 border border-blue-500 py-2 px-6 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">
              Read More
            </button>
          </div>
        </div>

        
      </main>
    </>
  );
};

export default Projects;
