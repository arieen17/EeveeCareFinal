import React from 'react'
import { MdCatchingPokemon } from "react-icons/md";
import {motion} from "framer-motion";

const Evolutions = [
    {
        id: 1,
        title: "Jolteon",
        link: "/jolteon", 
        icon: <MdCatchingPokemon/>,
        delay:0.2,
        color: "#FCE487 ",
        textColor: "#000000",
        iconColor: "#000000",
    },
    {
        id: 2,
        title: "Espeon",
        link: "/espeon", 
        icon: <MdCatchingPokemon/>,
        delay:0.3,
        color: "#D9BAD2",
        textColor: "#FFFFFF",
        iconColor: "#FFFFFF",
    },
    {
        id: 3,
        title: "Glaceon",
        link: "/glaceon", 
        icon: <MdCatchingPokemon/>,
        delay:0.4,
        color: "#7EC4BC",
        textColor: "#000000",
        iconColor: "#000000",
    },
    {
        id: 4,
        title: "Flareon",
        link: "/flareon", 
        icon: <MdCatchingPokemon/>,
        delay:0.5,
        color: "#e68d63",
        textColor: "#FFFFFF",
        iconColor: "#FFFFFF",
    },
    {
        id: 5,
        title: "Sylveon",
        link: "/sylveon", 
        icon: <MdCatchingPokemon/>,
        delay:0.6,
        color: "#F59BAD",
        textColor: "#000000",
        iconColor: "#000000",
    },
    {
        id: 6,
        title: "Vaporeon",
        link: "/vaporeon", 
        icon: <MdCatchingPokemon/>,
        delay:0.7,
        color: "#336E8C",
        textColor: "#FFFFFF",
        iconColor: "#FFFFFF",
    },
    {
        id: 7,
        title: "Leafeon",
        link: "/leafon", 
        icon: <MdCatchingPokemon/>,
        delay:0.8,
        color: "#89D89B",
        textColor: "#000000",
        iconColor: "#000000",
    },

    {
        id:8,
        title: "Umbreon",
        link: "/umbreon", 
        icon: <MdCatchingPokemon/>,
        delay:0.9,
        color: "#371750",
        textColor: "#FFFFFF",
        iconColor: "#FFFFFF",
    },


];

const SlideLeft = (delay) => {
    return {
        initial:{
            opacity:0,
            x:50
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                delay: delay,
                ease: "easeInOut",
            }
        }
    }
}

const Sections = () => {
  return (
  <section>
    <div className='container pb-14 pt-16'>
        <h1 className='text-4xl  font-dogicabold text-center pb-10'>Evolution Information</h1>
        <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-5'>
            {Evolutions.map((evolutions) => (
                <motion.div 
                variants = {SlideLeft(evolutions.delay)}
                initial = "initial"
                whileInView={"animate"}
                whileHover={{ scale: 1.1 }}
                viewport={{once:true}}
                
                key={evolutions.id} style={{ backgroundColor: evolutions.color }} className='bg-neutral-300 rounded-2xl flex flex-col gap-4 items-center justify-center py-7 p-4 hover:bg-neutral-200 duration-300 hover:shadow-2xl'>
                    <a href={evolutions.link} className='flex flex-col items-center justify-center'>
                        <div style={{ color: evolutions.iconColor }} className='text-4xl mb-4'> {evolutions.icon} </div>
                        <h1 style={{ color: evolutions.textColor }} className='text-sm font-dogicabold text-center'>{evolutions.title}</h1>
                    </a>
                </motion.div>
        ))}
        </div>
    </div>
  </section>
  );
};

export default Sections