import React from 'react';
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";

const NavbarMenu = [
    {
        id:1,
        title: "Home",
        path: "/",
    },
    {
        id:2,
        title: "Services",
        link: "/Services",
    },
    {
        id:3,
        title: "About Us",
        link: "/about",
    },
    {
        id:4,
        title: "Team",
        link: "/team",
    },
    {
        id:5,
        title: "Contact Us",
        link: "/contact",
    },
];


const Navbar = () => {
    return (
      <nav className='relative z-20'>
          <div className='container py-10 flex justify-between items-center'> 
              {/* Name Section */}
              <div>
                  <h1 className='font-dogicabold text-2xl'>Eevee Care</h1>
              </div>
              {/* Menu Section */}
              <div className='hidden lg:block'>
                  <ul className='flex gap-5 items-center'>
                      {NavbarMenu.map((menu) => (
                          <li key={menu.id}>
                              <Link
                                href={menu.link} 
                                className='inline-block py-2 px-3 hover:text-secondary relative group'
                              >
                              <div className='w-2 h-2 bg-gradient-to-b from-red-500 from-40% via-black to-neutral-100 to-70% rounded-full absolute mt-3 left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden'>
  
                              </div>
                              {menu.title}</Link>
                          </li>
                      ))}
                      <button className='primary-btn'>Sign in</button>
                  </ul>
              </div>
              {/* Mobile Section */}
              <div className='lg:hidden'>
                  <IoMdMenu className='text-4xl' />
              </div>
          </div>
      </nav>
    );
  };
  
export default Navbar




// const Navbar = () => {
//   return (
//     <nav className="bg-blue-500 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-white text-xl font-bold">Global Issues</h1>
//         <ul className="flex space-x-4 text-white">
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/climate-change">Climate Change</Link></li>
//           <li><Link to="/poverty">Poverty</Link></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
