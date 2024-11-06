import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a href="/" className="text-[#34d399] text-xl font-semibold">
              DOTMAILIT
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon for closed menu (hamburger) */}
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                // Icon for open menu (X)
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Nav Links Section - Hidden on small screens */}
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <a href="/" className="text-gray-300 hover:text-[#38bdf8] px-3 py-2 text-sm font-medium whitespace-nowrap">
                Meal Kits
              </a>
              <a href="/" className="text-gray-300 hover:text-[#38bdf8] px-3 py-2 text-sm font-medium whitespace-nowrap">
                Special Diets
              </a>
              <a href="/" className="text-gray-300 hover:text-[#38bdf8] px-3 py-2 text-sm font-medium whitespace-nowrap">
                Healthy Eating
              </a>
              <a href="/" className="text-gray-300 hover:text-[#38bdf8] px-3 py-2 text-sm font-medium whitespace-nowrap">
                Food Freedom
              </a>
              <a href="/" className="text-gray-300 hover:text-[#38bdf8] px-3 py-2 text-sm font-medium whitespace-nowrap">
                Conditions
              </a>
              <a href="/" className="text-gray-300 hover:text-[#38bdf8] px-3 py-2 text-sm font-medium whitespace-nowrap">
                Feel Good Food
              </a>
              <a href="/" className="text-gray-300 hover:text-[#38bdf8] px-3 py-2 text-sm font-medium whitespace-nowrap">
                Products
              </a>
              <a href="/" className="text-gray-300 hover:text-[#38bdf8] px-3 py-2 text-sm font-medium whitespace-nowrap">
                Vitamins & Supplements
              </a>
              <a href="/" className="text-gray-300 hover:text-[#38bdf8] px-3 py-2 text-sm font-medium whitespace-nowrap">
                Sustain
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="/" className="text-gray-300 hover:text-[#38bdf8] block px-3 py-2 rounded-md text-base font-medium">
            Meal Kits
          </a>
          <a href="/" className="text-gray-300 hover:text-[#38bdf8] block px-3 py-2 rounded-md text-base font-medium">
            Special Diets
          </a>
          <a href="/" className="text-gray-300 hover:text-[#38bdf8] block px-3 py-2 rounded-md text-base font-medium">
            Healthy Eating
          </a>
          <a href="/" className="text-gray-300 hover:text-[#38bdf8] block px-3 py-2 rounded-md text-base font-medium">
            Food Freedom
          </a>
          <a href="/" className="text-gray-300 hover:text-[#38bdf8] block px-3 py-2 rounded-md text-base font-medium">
            Conditions
          </a>
          <a href="/" className="text-gray-300 hover:text-[#38bdf8] block px-3 py-2 rounded-md text-base font-medium">
            Feel Good Food
          </a>
          <a href="/" className="text-gray-300 hover:text-[#38bdf8] block px-3 py-2 rounded-md text-base font-medium">
            Products
          </a>
          <a href="/" className="text-gray-300 hover:text-[#38bdf8] block px-3 py-2 rounded-md text-base font-medium">
            Vitamins & Supplements
          </a>
          <a href="/" className="text-gray-300 hover:text-[#38bdf8] block px-3 py-2 rounded-md text-base font-medium">
            Sustain
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
