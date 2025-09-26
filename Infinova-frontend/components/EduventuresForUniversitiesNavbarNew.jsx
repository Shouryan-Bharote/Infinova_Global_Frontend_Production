import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../global.css';
import logoImage from '/eduventures.png';

const EduventuresForUniversitiesNavbar = () => {
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isPartnersOpen, setIsPartnersOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="w-full h-16 md:h-20 lg:h-24 bg-white flex items-center justify-between px-4 md:px-6 lg:px-8 shadow-sm border-b border-gray-200 sticky top-0 z-50">
        
        {/* Left Section: Logo + Label + Desktop Links */}
        <div className="flex items-center space-x-8">
          {/* Logo + Label */}
          <div className="flex items-center space-x-3">
            <img
              src={logoImage}
              alt="Infinova Eduventures"
              className="h-10 md:h-12 lg:h-16 w-auto"
            />
            <span className="text-black font-semibold text-sm md:text-lg lg:text-xl px-2 py-1 rounded-md hover:bg-gray-100">
              For <span className="text-blue-600">Campus</span>
            </span>
          </div>
          <div className="w-5"></div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Programs Dropdown (hover on desktop) */}
            <div
              className="relative"
              onMouseEnter={() => setIsProgramsOpen(true)}
              onMouseLeave={() => setIsProgramsOpen(false)}
            >
              <button
                className="font-medium text-gray-800 hover:text-blue-600 focus:outline-none px-3 py-2 rounded-md hover:bg-gray-100"
              >
                Our Programs ▾
              </button>
              <AnimatePresence>
                {isProgramsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 w-48 bg-white border rounded-md shadow-md py-2 z-50"
                  >
                    <a href="#program1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Program 1
                    </a>
                    <a href="#program2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Program 2
                    </a>
                    <a href="#program3" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Program 3
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Partners Dropdown (hover on desktop) */}
            <div
              className="relative"
              onMouseEnter={() => setIsPartnersOpen(true)}
              onMouseLeave={() => setIsPartnersOpen(false)}
            >
              <button
                className="font-medium text-gray-800 hover:text-blue-600 focus:outline-none px-3 py-2 rounded-md hover:bg-gray-100"
              >
                Our Partners ▾
              </button>
              <AnimatePresence>
                {isPartnersOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 w-48 bg-white border rounded-md shadow-md py-2 z-50"
                  >
                    <a href="#partner1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Partner 1
                    </a>
                    <a href="#partner2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Partner 2
                    </a>
                    <a href="#partner3" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Partner 3
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Right: Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {/* Hamburger Icon */}
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
        </div>
      </nav>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-b border-gray-200 shadow-md overflow-hidden"
          >
            <div className="flex flex-col px-4 py-3 space-y-2">
              {/* Programs (click on mobile) */}
              <button
                onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                className="w-full text-left font-medium text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md hover:bg-gray-100"
              >
                Our Programs ▾
              </button>
              <AnimatePresence>
                {isProgramsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-4 flex flex-col space-y-1 overflow-hidden"
                  >
                    <a href="#program1" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                      Program 1
                    </a>
                    <a href="#program2" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                      Program 2
                    </a>
                    <a href="#program3" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                      Program 3
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Partners (click on mobile) */}
              <button
                onClick={() => setIsPartnersOpen(!isPartnersOpen)}
                className="w-full text-left font-medium text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md hover:bg-gray-100"
              >
                Our Partners ▾
              </button>
              <AnimatePresence>
                {isPartnersOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-4 flex flex-col space-y-1 overflow-hidden"
                  >
                    <a href="#partner1" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                      Partner 1
                    </a>
                    <a href="#partner2" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                      Partner 2
                    </a>
                    <a href="#partner3" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                      Partner 3
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EduventuresForUniversitiesNavbar;
