import React from 'react';
import Img from '../../assets/Photo.jpeg';

export const About = () => {
  return (
    <div
      className='h-screen bg-cover bg-center flex items-center justify-center'
      id='#'
      style={{
        backgroundImage: "url('https://img.freepik.com/free-vector/gradient-blur-pink-blue-abstract-background_53876-117324.jpg')",
      }}
    >
      {/* Profile Section */}
      <div className='flex items-center space-x-10 bg-white p-8 rounded-lg shadow-lg'>
        {/* Profile Image */}
        <div>
          <img
            src={Img}
            alt='Profile'
            className='rounded-full object-cover'
          />
        </div>

        {/* Name and Bio */}
        <div>
          <h1 className='text-4xl font-bold'>Gunal Chandran</h1>
          <p className='text-lg text-gray-700 mt-2'>A Bit About Me</p>
          <p className='text-md text-gray-600 mt-4'>
          I am a Web Developer fellow working at Carnegie Observatories. I am passionate about creating innovative solutions that intersect with astronomy, focusing on observational galaxy evolution, supermassive black holes, and applying machine learning algorithms to analyze astronomical datasets and the interstellar medium.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
