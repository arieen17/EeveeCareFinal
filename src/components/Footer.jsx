import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import {motion} from "framer-motion";

const Footer = () => {
  return <footer className='py-28 bg-white'>
    <motion.div 
    initial={{opacity: 0, y:50}}
    whileInView={{opacity: 1, y: 0}}
    className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
            {/* brief about section */}
            <div className='space-y-4 max-w-[300px]'>
                <h1 className='text-2xl font-dogicabold'>
                Eevee Care
                </h1>
                <p className='text-dark2'>
                Eevee Care aspires to spread awareness of pressing global issues, leveraging the unique attributes of each Eevee evolution to advocate for change. 
                Our mission to educate and inspire individuals to take action on critical issues affecting the planet and humanity, 
                making the world a better, more equitable place for everyone.
                </p>
            </div>
            {/* board section */}
            <div className="grid grid-cols-2 gap-10">
                <div className='space-y-4'>
                    <h1 className='text-2xl font-dogicabold'>Board Members</h1>
                    <div className='text-dark'>
                        <ul className='space-y-2 text-lg'>
                            <li className='text-dark2'>Ash Ketchum</li>
                            <li className='text-dark2'>Samuel Oak</li>
                            <li className='text-dark2'>Brock Harrison</li>
                            <li className='text-dark2'>Arielle Haryanto</li>
                            <li className='text-dark2'>Jane Lee</li>
                        </ul>
                    </div>
                </div>

            </div>
            {/* contact section */}
            <div className='space-y-4 max-w-[300px]'>
                <h1 className='text-2xl font-dogicabold'>Contact Us:</h1>
                <div className='flex items-center'>
                    <input type ="text" placeholder="Enter your email" className='p-3 rounded-s-xl bg-slate-200 w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2'/>
                    <button className='hover:bg-eevee bg-primary text-white font-semibold py-4 px-6 rounded-e-xl'>
                    Go
                    </button>
                </div>
                {/* Social icons */}
                <div className='px-2 flex space-x-6 py-3'>
                    <a href ="https://www.instagram.com/pokemon/">
                        <FaInstagram className='cursor-pointer hover:text-primary hover:scale-105 duration-200' />
                    </a>
                    <a href ="https://www.facebook.com/unicef/">
                        <FaFacebook className='cursor-pointer hover:text-primary hover:scale-105 duration-200' />
                    </a>
                    <a href ="https://x.com/Pokemon">
                        <FaTwitter className='cursor-pointer hover:text-primary hover:scale-105 duration-200' />
                    </a>
                    <a href ="https://youtube.com/playlist?list=PLAm6_yeZLsSTo4eeM_itmUrJRZ94t3WYQ&si=vvfNpCJq6fjEixP9">
                        <FaYoutube className='cursor-pointer hover:text-primary hover:scale-105 duration-200' />
                    </a>
                </div>
            </div>
        </div>
    </motion.div>

  </footer>;
 
};

export default Footer