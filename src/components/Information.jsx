import React from 'react';
import {motion} from "framer-motion";
import AllEvolution from "../images/AllEvolution.png";
import { MdCatchingPokemon} from "react-icons/md";

const About = () => {
  const bgStyle = {
    backgroundImage: `url(${AllEvolution})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
     <section className="bg-slate-300 relative">
        <motion.div 
        inital={{opacity :0}}
        whileInView={{opacity: 1}}
        
        style={bgStyle} 
        className="container relative py-24 md:py-48">
        <div className="absolute inset-0 bg-black opacity-75"></div>

          <motion.div 
          initial = {{opacity:0, scale: 0.5}}
          whileInView={{opacity: 1, scale: 1}}
          transition ={{duration: 0.7, ease: "easeInOut"}}
          
          className="relative flex flex-col justify-center">
            <div className='text-center space-y-4 lg:max-w-[430px] mx-auto'>
                <h1 className='text-4xl text-white font-bold !leading-snug z-10'>Currently 560,000 members within program</h1>
                <p className='text-white text-xl'>Want to know more about the purpose and mission of Eevee Care, click the button below!</p>
                <a href="" className='primary-btn !mt-8 inline-flex items-center gap-2'>
                  Learn More!
                  <MdCatchingPokemon/>
                </a>
            </div>
          </motion.div>
        </motion.div>
      </section>
  );
};

export default About