import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { SiFigma } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-5xl text-orange-500" />, level: "90%", color: "bg-orange-500" },
  { name: "CSS3", icon: <FaCss3Alt className="text-5xl text-blue-500" />, level: "85%", color: "bg-blue-500" },
  { name: "JavaScript", icon: <FaJsSquare className="text-5xl text-yellow-400" />, level: "80%", color: "bg-yellow-400" },
  { name: "React.js", icon: <RiReactjsLine className="text-5xl text-cyan-400" />, level: "75%", color: "bg-blue-600" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-5xl text-teal-400" />, level: "80%", color: "bg-teal-500" },
  { name: "Node.js", icon: <SiNodedotjs className="text-5xl text-green-500" />, level: "75%", color: "bg-green-500" },
  { name: "Express.js", icon: <SiExpress className="text-5xl text-gray-400" />, level: "75%", color: "bg-gray-500" },
  { name: "MongoDB", icon: <SiMongodb className="text-5xl text-green-400" />, level: "75%", color: "bg-green-600" },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-5xl text-blue-400" />, level: "70%", color: "bg-blue-700" },
  { name: "Figma", icon: <SiFigma className="text-5xl text-purple-500" />, level: "70%", color: "bg-purple-500" },
];

const Skills = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["0.1", "1.33"] });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      className="border-b border-neutral-800 pb-20"
      style={{ scale: scaleProgress, opacity: opacityProgress }}
    >
      <h1 className="text-center text-white text-3xl md:text-4xl lg:text-6xl font-semibold my-16">
        Skills
      </h1>

      {/* Skills Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 lg:px-16">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="flex items-center gap-4 p-5 bg-gray-800 rounded-xl shadow-lg w-full sm:w-72 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <span className="sr-only">{skill.name} Icon</span>
            {skill.icon}
            <div className="w-full">
              <p className="text-lg font-semibold text-white">{skill.name}</p>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                <div className={`${skill.color} h-2 rounded-full`} style={{ width: skill.level }}></div>
              </div>
              <p className="text-sm text-gray-300 mt-1">{skill.level}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
