import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMealKitsOpen, setIsMealKitsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleMenuItemClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    setTimeout(() => {
      window.location.href = e.target.href;
    }, 150);
  };

  const toggleMealKitsMenu = () => {
    setIsMealKitsOpen(!isMealKitsOpen);
    setIsLoginOpen(false);
  };

  const toggleLoginMenu = () => {
    setIsLoginOpen(!isLoginOpen);
    setIsMealKitsOpen(false);
  };

  return (
    <>
      <div className="h-16"></div>

      <nav className="bg-black border-b border-gray-700 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="relative flex items-center justify-between h-16">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <a href="/" className="text-[#34d399] text-xl font-semibold">
                DOTMAILIT
              </a>
            </div>

            {/* Nav Links Section - Hidden on small screens */}
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4 items-center">
                {/* Meal Kits Dropdown */}
                <div className="relative group">
                  <button className="h-16 text-gray-300 hover:text-[#38bdf8] px-3 py-2 text-sm font-medium whitespace-nowrap flex items-center">
                    Meal Kits
                    <svg
                      className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Desktop Dropdown Menu */}
                  <div className="absolute left-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500">
                    <div className="bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                      <a
                        href="/overview"
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-200"
                      >
                        Overview
                      </a>
                      <a
                        href="/diets"
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-200"
                      >
                        Diets
                      </a>
                      <a
                        href="/meal-kits"
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-200"
                      >
                        Meal Kits
                      </a>
                      <a
                        href="/prepared-meals"
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-200"
                      >
                        Prepared Meals
                      </a>
                      <a
                        href="/comparisons"
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-200"
                      >
                        Comparisons
                      </a>
                      <a
                        href="/grocery-delivery"
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Grocery Delivery
                      </a>
                    </div>
                  </div>
                </div>

                {/* Regular menu items */}
                <a
                  href="/"
                  className="text-gray-300 hover:text-[#38bdf8] px-3 py-2 text-sm font-medium whitespace-nowrap"
                >
                  Special Diets
                </a>
                <a
                  href="/"
                  className="text-gray-300 hover:text-[#38bdf8] px-3 py-2 text-sm font-medium whitespace-nowrap"
                >
                  Healthy Eating
                </a>
                <a
                  href="/"
                  className="text-gray-300 hover:text-[#38bdf8] px-3 py-2 text-sm font-medium whitespace-nowrap"
                >
                  Food Freedom
                </a>
                <a
                  href="/"
                  className="text-gray-300 hover:text-[#38bdf8] px-3 py-2 text-sm font-medium whitespace-nowrap"
                >
                  Conditions
                </a>
                <a
                  href="/"
                  className="text-gray-300 hover:text-[#38bdf8] px-3 py-2 text-sm font-medium whitespace-nowrap"
                >
                  Feel Good Food
                </a>
                <a
                  href="/"
                  className="text-gray-300 hover:text-[#38bdf8] px-3 py-2 text-sm font-medium whitespace-nowrap"
                >
                  Products
                </a>
                <a
                  href="/"
                  className="text-gray-300 hover:text-[#38bdf8] px-3 py-2 text-sm font-medium whitespace-nowrap"
                >
                  Vitamins & Supplements
                </a>
                {/* <a href="/" className="text-gray-300 hover:text-[#38bdf8] px-3 py-2 text-sm font-medium whitespace-nowrap">
                  Sustain
                </a> */}

                {/* Login Dropdown */}
                <div className="relative group">
                  <button className="h-16 text-gray-300 hover:text-[#38bdf8] px-3 py-2 text-sm font-medium whitespace-nowrap flex items-center">
                    Login
                    <svg
                      className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Login Dropdown Menu */}
                  <div className="absolute right-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500">
                    <div className="bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                      <Link
                        to="/BlogAdd"
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 text-center border-b border-gray-200"
                      >
                        Admin
                      </Link>
                      <a
                        href="/super-admin"
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 text-center border-b border-gray-200"
                      >
                        Super Admin
                      </a>
                      <a
                        href="/sub-admin"
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 text-center"
                      >
                        Sub Admin
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
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
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`sm:hidden ${isOpen ? "block" : "hidden"} bg-black`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Mobile Meal Kits Dropdown */}
            <div className="border-t border-gray-700 mt-2 pt-2">
              <button
                onClick={toggleMealKitsMenu}
                className="w-full flex items-center justify-between px-3 py-2 text-gray-300 hover:text-[#38bdf8] text-base font-medium"
              >
                <span>Meal Kits</span>
                <svg
                  className={`h-4 w-4 transition-transform ${
                    isMealKitsOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Mobile Meal Kits Dropdown Items */}
              <div
                className={`${
                  isMealKitsOpen ? "block" : "hidden"
                } pl-4 py-2 space-y-0 bg-gray-900`}
              >
                <a
                  href="/overview"
                  className="block px-3 py-2 text-gray-300 hover:text-[#38bdf8] text-base font-medium border-b border-gray-700"
                  onClick={handleMenuItemClick}
                >
                  Overview
                </a>
                <a
                  href="/diets"
                  className="block px-3 py-2 text-gray-300 hover:text-[#38bdf8] text-base font-medium border-b border-gray-700"
                  onClick={handleMenuItemClick}
                >
                  Diets
                </a>
                <a
                  href="/meal-kits"
                  className="block px-3 py-2 text-gray-300 hover:text-[#38bdf8] text-base font-medium border-b border-gray-700"
                  onClick={handleMenuItemClick}
                >
                  Meal Kits
                </a>
                <a
                  href="/prepared-meals"
                  className="block px-3 py-2 text-gray-300 hover:text-[#38bdf8] text-base font-medium border-b border-gray-700"
                  onClick={handleMenuItemClick}
                >
                  Prepared Meals
                </a>
                <a
                  href="/comparisons"
                  className="block px-3 py-2 text-gray-300 hover:text-[#38bdf8] text-base font-medium border-b border-gray-700"
                  onClick={handleMenuItemClick}
                >
                  Comparisons
                </a>
                <a
                  href="/grocery-delivery"
                  className="block px-3 py-2 text-gray-300 hover:text-[#38bdf8] text-base font-medium"
                  onClick={handleMenuItemClick}
                >
                  Grocery Delivery
                </a>
              </div>
            </div>

            {/* Regular mobile menu items */}
            <a
              href="/"
              className="text-gray-300 hover:text-[#38bdf8] block px-3 py-2 rounded-md text-base font-medium"
              onClick={handleMenuItemClick}
            >
              Special Diets
            </a>

            <a
              href="/"
              className="text-gray-300 hover:text-[#38bdf8] block px-3 py-2 rounded-md text-base font-medium"
              onClick={handleMenuItemClick}
            >
              Healthy Eating
            </a>

            <a
              href="/"
              className="text-gray-300 hover:text-[#38bdf8] block px-3 py-2 rounded-md text-base font-medium"
              onClick={handleMenuItemClick}
            >
              Food Freedom
            </a>

            <a
              href="/"
              className="text-gray-300 hover:text-[#38bdf8] block px-3 py-2 rounded-md text-base font-medium"
              onClick={handleMenuItemClick}
            >
              Conditions
            </a>

            <a
              href="/"
              className="text-gray-300 hover:text-[#38bdf8] block px-3 py-2 rounded-md text-base font-medium"
              onClick={handleMenuItemClick}
            >
              Feel Good Food
            </a>
            <a
              href="/"
              className="text-gray-300 hover:text-[#38bdf8] block px-3 py-2 rounded-md text-base font-medium"
              onClick={handleMenuItemClick}
            >
              Products
            </a>
            <a
              href="/"
              className="text-gray-300 hover:text-[#38bdf8] block px-3 py-2 rounded-md text-base font-medium"
              onClick={handleMenuItemClick}
            >
              Vitamins & Supplements
            </a>

            <a
              href="/"
              className="text-gray-300 hover:text-[#38bdf8] block px-3 py-2 rounded-md text-base font-medium"
              onClick={handleMenuItemClick}
            >
              Sustain
            </a>

            {/* ... other mobile menu items ... */}

            {/* Mobile Login Dropdown */}
            <div className="border-t border-gray-700 mt-2 pt-2">
              <button
                onClick={toggleLoginMenu}
                className="w-full flex items-center justify-between px-3 py-2 text-gray-300 hover:text-[#38bdf8] text-base font-medium"
              >
                <span>Login</span>
                <svg
                  className={`h-4 w-4 transition-transform ${
                    isLoginOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Mobile Login Dropdown Items */}
              <div
                className={`${
                  isLoginOpen ? "block" : "hidden"
                } pl-4 py-2 space-y-0 bg-gray-900`}
              >
                <a
                  href="/admin"
                  className="block px-3 py-2 text-gray-300 hover:text-[#38bdf8] text-base font-medium border-b border-gray-700"
                  onClick={handleMenuItemClick}
                >
                  Admin
                </a>
                <a
                  href="/super-admin"
                  className="block px-3 py-2 text-gray-300 hover:text-[#38bdf8] text-base font-medium border-b border-gray-700"
                  onClick={handleMenuItemClick}
                >
                  Super Admin
                </a>
                <a
                  href="/sub-admin"
                  className="block px-3 py-2 text-gray-300 hover:text-[#38bdf8] text-base font-medium"
                  onClick={handleMenuItemClick}
                >
                  Sub Admin
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
