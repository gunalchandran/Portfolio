import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import myphoto from './assets/my-phot.jpg';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

    const handleDone = () => {
        console.log('Typewriter animation completed!');
    };

    const handleType = (count) => {
        console.log(`Typing ${count}`);
    };

    return (
        <motion.div
            ref={ref}
            style={{ scale: scaleProgress, opacity: opacityProgress }}
            className="group mb-3 sm:mb-8 border-b border-neutral-900 lg:mb-35"
        >
            <div className='flex flex-col-reverse lg:flex-row items-center justify-center px-4 lg:px-16'>
                
                {/* Left Section - Name & Typewriter */}
                <div className='w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left'>
                    <h1 className='text-5xl md:text-6xl lg:text-8xl font-light text-white mt-10 lg:mt-[30vh]'>
                        Gunal
                    </h1>

                    <p className="text-xl md:text-2xl lg:text-4xl bg-gradient-to-r from-pink-700 to-blue-600 bg-clip-text text-transparent mt-4">
                        <Typewriter
                            words={['Frontend Developer']}
                            loop={Infinity}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            onType={handleType}      
                            onLoopDone={handleDone}  
                        />
                    </p>
                </div>

                {/* Right Section - Image */}
                <div className='w-full lg:w-1/2 flex justify-center'>
                    <img
                        src={myphoto}
                        alt="Profilepic"
                        className='w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-[380px] lg:h-[380px] mt-10 lg:mt-[20vh] rounded-3xl shadow-lg'
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Hero;
