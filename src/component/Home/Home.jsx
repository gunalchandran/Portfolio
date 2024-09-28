import React from 'react';
import { PiCodeFill } from "react-icons/pi";
import Img from '../../assets/Photo.jpeg';
import Ast from '../../assets/Ast.png';
import { BsGithub } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { motion } from 'framer-motion';  

const Home = () => {
  return (
    <div
      className='h-screen bg-cover bg-center relative'
      id='#'
      style={{
        backgroundImage: "url('https://img.freepik.com/free-vector/gradient-blur-pink-blue-abstract-background_53876-117324.jpg')",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className='flex justify-center items-center  h-full'>
        
        <div className=' text-center'>
          <h1 className='font-bold lg:text-5xl text-3xl pb-2 leading-tight'>
            Hey, I'm Gunal
          </h1>
          <div className='flex items-center space-x-4 py-4'>
            <PiCodeFill className='text-4xl text-blue-400' />
            <h2 className='text-xl lg:text-2xl font-light'>
              I am a Creative Designer & Frontend Developer
            </h2>
            
          </div>
          
          {/* Social Media Icons with Links */}
          <div className='flex justify-center space-x-3 text-2xl text-[#741589]'>
            <a href='https://www.linkedin.com/in/your-profile' target="_blank" rel="noopener noreferrer" className='hover:text-blue-500'>
              <CiLinkedin />
            </a>
            <a href='https://github.com/your-profile' target="_blank" rel="noopener noreferrer" className='hover:text-gray-700'>
              <BsGithub />
            </a>
            <a href='https://www.instagram.com/your-profile' target="_blank" rel="noopener noreferrer" className='hover:text-pink-500'>
              <FaInstagram />
            </a>
          </div>

          <div className='mt-5'>
            <a
              href='/path-to-your-resume.pdf'  // Add your resume link here
              className='inline-block px-6 py-3 font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300 ease-in-out'
            >
              Download Resume
            </a>
          </div>

          {/* Optional Motion for an Image (currently commented out) */}
          {/* <motion.img
            src={Ast}
            alt="Flying Astronaut"
            className='w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] mt-6'
            animate={{
              x: [0, 10, -10, 0],  // Horizontal movement
              y: [0, -50, 50, 0],  // Vertical movement
              rotate: [0, 10],     // Slight rotation
            }}
            transition={{
              duration: 8,            // Duration of the animation
              repeat: Infinity,       // Infinite loop
              ease: 'easeInOut',      // Smooth easing
            }}
          /> */}
        </div>

        {/* Profile Image Section (currently commented out) */}
        {/* <div className='pr-20'>
          <img
            src={Img}
            alt="Profile"
            className='rounded-full w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] object-cover shadow-lg border-4 border-white'
          />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
