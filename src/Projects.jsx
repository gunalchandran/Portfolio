import React from "react";
import HeadPhone from "./assets/HeadPhoneShop.png";
import Online from "./assets/Online.png";
import contact from "./assets/contact.png";
import { ShineBorder } from "./components/magicui/shine-border";
import { Meteors } from "./components/magicui/meteors";
import { InteractiveHoverButton } from "./components/magicui/interactive-hover-button";

const projects = [
  {
    name: "HeadPhone Website",
    image: HeadPhone,
    about: "Simple E-commerce website using ReactJs, TailwindCSS, NodeJs, MongoDB",
    githubLink: "https://github.com/gunalchandran/e-commerce-mern.git",
  },
  {
    name: "Online Booking & Reading",
    image: Online,
    about: "Online Booking Website using ReactJs, TailwindCSS, NodeJs, MongoDB",
    githubLink: "https://github.com/gunalchandran/online-booking",
  },
  {
    name: "Contact Management",
    image: contact,
    about: "Contact Management website using ReactJs, TailwindCSS, NodeJs, MongoDB",
    githubLink: "",
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 lg:pt-[30vh]">
      <h1 className="my-16 text-center text-white text-3xl sm:text-4xl lg:text-6xl font-semibold">
        Projects
      </h1>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <ShineBorder
            key={project.name}
            className="relative group h-[400px] w-full max-w-[320px] sm:max-w-[280px] bg-opacity-10 bg-gray-800 backdrop-blur-md shadow-lg rounded-xl border border-gray-600 overflow-hidden"
          >
            {/* Meteor Effect */}
            <div className="absolute inset-0 z-0">
              <Meteors number={10} />
            </div>

            <div className="relative flex flex-col items-center justify-center p-6 text-center">
              <h6 className="text-2xl font-semibold bg-gradient-to-b from-white to-gray-500 text-transparent bg-clip-text pb-4">
                {project.name}
              </h6>
              
              {/* Responsive Image */}
              <img
                src={project.image}
                alt={`${project.name} Preview`}
                className="w-full max-w-[220px] sm:max-w-[250px] rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
              />

              <p className="text-2vh text-white text-center pt-4 px-4">
                {project.about}
              </p>
            </div>

            {/* GitHub Button - Centered Properly */}
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <InteractiveHoverButton className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg px-5 py-2 rounded-xl bg-gradient-to-r from-red-500 to-purple-600 hover:from-purple-600 hover:to-red-500 transition-all duration-300">
                GitHub
              </InteractiveHoverButton>
            </a>
          </ShineBorder>
        ))}
      </div>
    </div>
  );
};

export default Projects;
