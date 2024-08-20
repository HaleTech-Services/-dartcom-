import React from 'react'
import ProjectHero from '/assets/progectss.jpg';

const ProjectsHero = ({ text, children }) => {
  return (
    <>
      <div
      className={`bg-cover h-[250px] md:h-[100vh] ${
        !children && "flex items-center justify-center md:justify-start"
      }`}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${ProjectHero})`,
      }}
    >
        {children}
      <div
        className={`${!children && "translate-y-1/2 md:translate-x-[50%] translate-x-0 flex flex-col"}`}
      >
        {!children && (
          <h2 className="text-white font-bold text-center md:text-right text-4xl md:text-5xl">
            {text}
          </h2>
        )}
        {!children && (
          <p className="text-center md:text-right text-white">
            @ Dartcom Projects
          </p>
        )}

      </div>
    </div>
    </>
  )
}

export default ProjectsHero
