import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../global.css';
import logoImage from '/eduventures.png';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="w-full h-16 md:h-20 lg:h-24 bg-white flex items-center px-4 md:px-6 lg:px-8 mr-4 shadow-sm border-b border-gray-200 sticky top-0 z-50">
        {/* Left: Logo + label */}
        <div className="flex items-center space-x-2 md:space-x-6 lg:space-x-8">
          <div className="logo">
            <img
              src={logoImage}
              alt="Infinova Eduventures - Bridging your Career"
              className="h-10 md:h-12 lg:h-16 w-auto"
            />
          </div>

          <div className="text-black font-semibold text-xs md:text-lg lg:text-xl">
  For <span className="text-blue-600">Students</span>
</div>

        </div>

        {/* Spacer pushes search to the right end */}
        <div className="flex-1" />

        {/* Desktop Search (right-aligned) */}
        <div className="hidden md:flex items-center">
          <form onSubmit={handleSearchSubmit} className="flex items-center gap-3">
            <input
              type="text"
              placeholder="What do you want to learn?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search courses"
              className="w-72 md:w-96 lg:w-[28rem] h-10 md:h-12 lg:h-14 border border-gray-300 rounded-md text-sm md:text-base lg:text-lg bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              style={{
                paddingLeft: '1rem',
                paddingRight: '0.75rem',
                boxSizing: 'border-box'
              }}
            />

            <button
              type="submit"
              className="bg-black text-white h-10 md:h-12 lg:h-14 rounded-md hover:bg-gray-800 transition-colors duration-200 font-medium text-sm md:text-base lg:text-lg whitespace-nowrap mr-5"
              style={{
                paddingLeft: '1rem',
                paddingRight: '1rem',
                minWidth: 100
              }}
            >
              Search
            </button>
          </form>
          <div className="w-3"></div>
        </div>

        {/* Mobile search toggle */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle search"
            className="p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <div className="w-3"></div>
        </div>
      </nav>

      {/* Mobile Search Dropdown with Animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-b border-gray-200 shadow-lg overflow-hidden"
          >
            <div className="px-4 py-3">
              <form onSubmit={handleSearchSubmit} className="flex items-center gap-0">
                <input
                  type="text"
                  placeholder="What do you want to learn?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Mobile search"
                  className="flex-1 h-12 border border-gray-300 text-base bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                  style={{
                    paddingLeft: '0.95rem',
                    paddingRight: '0.75rem',
                    boxSizing: 'border-box'
                  }}
                />

                <button
                  type="submit"
                  className="bg-black text-white h-12 hover:bg-gray-800 transition-colors duration-200 font-medium text-sm md:text-base mr-2"
                  style={{
                    paddingLeft: '0.75rem',
                    paddingRight: '0.75rem',
                    minWidth: 80
                  }}
                >
                  Search
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
