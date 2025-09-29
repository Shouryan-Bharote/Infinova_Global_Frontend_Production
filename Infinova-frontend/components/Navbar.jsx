import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [icon, setIcon] = useState('menu');

  const handleClick = () => {
    setOpen(!open);
    setIcon(icon === 'menu' ? 'close' : 'menu');
  };

  return (
    // Applied Glassmorphism effect here: bg-white/20, backdrop-blur-md, shadow-xl, and border
    <div className="outerNavDiv h-[12vh] w-[100vw] flex justify-center fixed top-0 left-0 z-50
                bg-white/35 backdrop-blur-md shadow-xl border-b border-white/30 transition-all duration-300">
      
      {/* Sidebar Menu - Remains solid for readability, but uses fixed positioning */}
      {open && (
        // Added fixed and full-screen overlay for better user experience on mobile
        <div className="fixed inset-0 bg-black/50 z-40" onClick={handleClick}>
          <div 
            className="h-[100vh] w-[70vw] sm:w-[50vw] md:w-[35vw] lg:w-[25vw] bg-white menu z-50 absolute left-0 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside menu
          >
            <div className="flex w-full bg-white logoDiv p-4 border-b">
              <img
                src="/close.png"
                alt="Close Menu"
                onClick={handleClick}
                className="close cursor-pointer w-6 h-6 object-contain"
              />
              <img
                src="/global_Logo_black.png"
                alt="Logo"
                className="w-[60%] sm:w-[70%] md:w-[80%] ml-auto navbarImage"
              />
            </div>

            <ul className="w-full h-[85%] text-2xl sm:text-xl font-medium flex flex-col gap-[2vh] menuList cursor-pointer px-4 py-6 bg-gray-100">
              <NavLink to="/eduventures">
                <li className="cursor-pointer text-left listItems firstItem text-gray-800 py-2 hover:text-blue-600 transition-colors" onClick={handleClick}>
                  Eduventures
                </li>
              </NavLink>
              <NavLink to="/consultants">
                <li className="cursor-pointer listItems text-gray-800 py-2 hover:text-blue-600 transition-colors" onClick={handleClick}>
                  Consultants
                </li>
              </NavLink>
              <NavLink to="/technology">
                <li className="cursor-pointer listItems text-gray-800 py-2 hover:text-blue-600 transition-colors" onClick={handleClick}>
                  Technology
                </li>
              </NavLink>
              <NavLink to="/mission">
                <li className="cursor-pointer listItems text-gray-800 py-2 hover:text-blue-600 transition-colors" onClick={handleClick}>
                  Mission
                </li>
              </NavLink>
              <NavLink to="/vision">
                <li className="cursor-pointer listItems text-gray-800 py-2 hover:text-blue-600 transition-colors" onClick={handleClick}>
                  Vision
                </li>
              </NavLink>
              <NavLink to="/blog">
                <li className="cursor-pointer listItems text-gray-800 py-2 hover:text-blue-600 transition-colors" onClick={handleClick}>
                  Blog
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      )}

      {/* Navbar Content */}
      <div className="innerNavDiv h-full w-[95%] max-w-7xl flex justify-between items-center px-2 sm:px-4 md:px-8">
        <div className="menu h-full flex items-center gap-2 sm:gap-4 w-full sm:w-[30%] md:w-[25%]">
           <img
            src="/toggler.png"
            alt="Menu Toggler"
            name={`${icon}-outline`}
            onClick={handleClick}
            className="cursor-pointer hamburgerIcon w-6 h-6"
          /> 
          
          <NavLink to="/">
            <img
              src="/global_Logo_black.png"
              alt="Global Logo"
              className="object-contain max-h-[10vh] cursor-pointer globalIcon"
            />
          </NavLink>
        </div>

        {/* Desktop Navigation Links */}
        <div className="navbarList hidden lg:block h-full w-[60%]">
          {/* Changed text color to ensure visibility against the light glass background */}
          <ul className="flex h-full w-full items-center text-lg xl:text-xl text-gray-800 font-medium gap-[2vw] justify-center">
            <NavLink to="/about-us">
              <li className="cursor-pointer hover:text-blue-600 transition-colors">About Us</li>
            </NavLink>
            <NavLink to="/careers">
              <li className="cursor-pointer hover:text-blue-600 transition-colors">Careers</li>
            </NavLink>
            <NavLink to="/contact-us">
              <li className="cursor-pointer hover:text-blue-600 transition-colors">Contact Us</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
