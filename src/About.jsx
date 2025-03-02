'use client';

import React, { useRef } from 'react';
import about from './assets/aboutimg.jpg';
import { MdDeveloperMode } from 'react-icons/md';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="border-b border-neutral-900 pb-16 px-4 sm:px-8 lg:px-20"
    >
      {/* Section Title */}
      <div className="my-16 text-center text-white text-3xl sm:text-4xl lg:text-6xl font-semibold">
        About Me
      </div>

      {/* Content Wrapper */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start text-white gap-12">
        {/* Image Section */}
        <div className="relative overflow-hidden rounded-lg shadow-lg group">
          <motion.img
            src={about}
            alt="About"
            quality={95}
            className="w-40 sm:w-52 md:w-64 lg:w-[400px] rounded-lg shadow-lg group-hover:scale-105 transition-transform"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col gap-4 sm:gap-6 text-sm sm:text-base md:text-lg max-w-2xl text-center lg:text-left">
          <motion.p className="flex items-center justify-center lg:justify-start gap-2 font-semibold text-red-400 text-lg sm:text-xl">
            <MdDeveloperMode size={28} /> Full Stack Developer
          </motion.p>

          <motion.p>
            Passionate Full Stack Developer with expertise in building modern,
            scalable, and user-friendly web applications.
          </motion.p>

          <motion.p>
            Tech stack includes <span className="font-semibold text-red-400">React.js</span>,
            <span className="font-semibold text-red-400"> Tailwind CSS</span>,
            <span className="font-semibold text-red-400"> Node.js</span>, and
            <span className="font-semibold text-red-400"> Express.js</span>,
            with experience in UI/UX design using
            <span className="font-semibold text-red-400"> Figma</span>.
          </motion.p>

          <motion.p>
            Enjoy solving complex problems, optimizing performance, and creating
            seamless user experiences. Whether crafting interactive front-end
            interfaces or developing robust back-end systems, always focused on
            bringing ideas to life.
          </motion.p>

          <motion.p>
            Eager to learn new technologies and stay updated with the latest
            industry trends. Let's build something amazing together!
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;