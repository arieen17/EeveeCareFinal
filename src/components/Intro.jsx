import React from 'react';
import Wheel from "./Wheel.jsx"
import {motion} from "framer-motion";

export const FadeUp = (delay) => {
    return {
        initial: {
            opacity: 0,
            y: 50,
        },
        animate: {  
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                duration: 0.5, 
                delay:delay,
                ease: "easeInOut"
            }
        }
    }
}

const Intro = () => {
  return <section className='bg-light overflow-hidden relative'>
    <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[725px]'>
        {/* Information */}
        <div className='flex flex-col justify-center py-14 md:py-0 relative z-20'>
            <div className='text-center md:text-left space-y-10 lg:max-w-[400px]'>
                <motion.h1 
                variants={FadeUp(0.6)}
                initial="initial"
                animate="animate"
                className='text-3xl lg:text-5xl font-BandyBold !leading-snug'>Learn about <span className='text-secondary'>Global Issues</span> to be more aware and donate to help fight against these issues!
                </motion.h1>
                <motion.div 
                    variants={FadeUp(0.8)}
                    initial="initial"
                    animate="animate"
                    className='mt-3 flex justify-center md:justify-start'>
                    <button className="font-BandyBold primary-btn text-xl"> Donate HERE </button>
                </motion.div>
          </div>
        </div>

        <div className='flex justify-center items-center'>
            <Wheel />
        </div>
    </div>
  </section>
};

export default Intro