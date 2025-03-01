import React, { useRef } from 'react';
import about from './assets/aboutimg.jpg';
import { MdDeveloperMode } from "react-icons/md";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.1", "1.33"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div
      ref={ref}
      className="border-b border-neutral-900 pb-10"
      style={{ scale: scaleProgress, opacity: opacityProgress }}
    >
      {/* Section Title */}
      <div className="my-20 text-center text-white text-3xl sm:text-4xl lg:text-6xl font-semibold">
        About Me
      </div>

      {/* Content Wrapper */}
      <div className="flex flex-col lg:flex-row items-center text-white px-4 sm:px-10 lg:px-16 gap-8 lg:gap-16 pt-10">
        
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={about}
            alt="About"
            className="w-40 sm:w-60 md:w-72 lg:w-[400px] rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col gap-3 sm:gap-4 text-base sm:text-lg md:text-xl max-w-2xl text-center lg:text-left">
          <p className="flex items-center justify-center lg:justify-start gap-2 font-semibold text-red-400">
            <MdDeveloperMode size={28} /> Full Stack Developer
          </p>

          <p>
            Passionate Full Stack Developer with expertise in building modern,
            scalable, and user-friendly web applications.
          </p>

          <p>
            Tech stack includes React.js, Tailwind CSS, Node.js, Express.js, 
            HTML, and CSS, with experience in designing intuitive UI/UX using 
            Figma.
          </p>

          <p>
            Enjoy solving complex problems, optimizing performance, and creating
            seamless user experiences. Whether crafting interactive front-end 
            interfaces or developing robust back-end systems, always focused on
            bringing ideas to life.
          </p>

          <p>
            Eager to learn new technologies and stay updated with the latest
            industry trends. Let's build something amazing together!
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
