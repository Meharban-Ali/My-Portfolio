import { useState } from "react";
import { Link } from "react-router-dom"; // Use Link from react-router-dom for navigation
import { FaBars, FaTimes } from "react-icons/fa"; // Importing the hamburger (FaBars) and close (FaTimes) icons

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu for mobile view
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gray-950 fixed w-full p-3 z-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-0 lg:px-0">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-white" href="/">
              <span className="h-8 text-2xl font-semibold"><span className="">M</span>eharban <span className="">A</span>li (<span className="">J</span>ava <span className="">D</span>eveloper)</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            {/* Toggle button for mobile */}
            <div className="block md:hidden">
              <button
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {/* Conditional rendering of hamburger or close icon */}
                {isMenuOpen ? (
                  // Close (X) icon (using FaTimes)
                  <FaTimes className="w-6 h-6" />
                ) : (
                  // Hamburger menu icon (using FaBars)
                  <FaBars className="w-6 h-6" />
                )}
              </button>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
              <div className="absolute top-16 right-0 w-full bg-black md:hidden">
                <nav className="h-screen">
                  <ul className="flex flex-col items-center gap-4 text-sm p-4">
                    <li>
                      <Link
                        className="text-gray-100 transition hover:text-gray-100/75"
                        to="/"
                        onClick={closeMenu}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-100 transition hover:text-gray-100/75"
                        to="/about"
                        onClick={closeMenu}
                      >
                        About
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="text-gray-100 transition hover:text-gray-100/75"
                        to="/projects"
                        onClick={closeMenu}
                      >
                        Projects
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="text-gray-100 transition hover:text-gray-100/75"
                        to="/services"
                        onClick={closeMenu}
                      >
                        Services
                      </Link>
                    </li>

                <li className="relative group">
                <Link
                  className="text-gray-100 transition hover:text-gray-100/75"
                  to="/login"
                  onClick={closeMenu}
                >
                  Login
                </Link>
                <span
                  className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-100 transition-all duration-300 group-hover:w-full"
                ></span>
              </li>
              
              <li className="relative group">
                <Link
                  className="text-gray-100 transition hover:text-gray-100/75"
                  to="/Registration"
                  onClick={closeMenu}
                >
                  Register Here
                </Link>
                <span
                  className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-100 transition-all duration-300 group-hover:w-full"
                ></span>
              </li>

                    <li>
                      <Link
                        className="text-black font-bold transition bg-white px-8 py-3 rounded"
                        to="/contact"
                        onClick={closeMenu}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </div>

          {/* Hidden menu for large screens */}
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li className="relative group">
                <Link
                  className="text-gray-100 transition hover:text-gray-100/75 text-lg"
                  to="/"
                >
                  Home
                </Link>
                <span
                  className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-100 transition-all duration-300 group-hover:w-full"
                ></span>
              </li>
              <li className="relative group">
                <Link
                  className="text-gray-100 transition hover:text-gray-100/75 text-lg"
                  to="/about"
                >
                  About
                </Link>
                <span
                  className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-100 transition-all duration-300 group-hover:w-full"
                ></span>
              </li>

              <li className="relative group">
                <Link
                  className="text-gray-100 transition hover:text-gray-100/75 text-lg"
                  to="/projects"
                >
                  Projects
                </Link>
                <span
                  className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-100 transition-all duration-300 group-hover:w-full"
                ></span>
              </li>

              <li className="relative group">
                <Link
                  className="text-gray-100 transition hover:text-gray-100/75 text-lg"
                  to="/services"
                >
                  Services
                </Link>
                <span
                  className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-100 transition-all duration-300 group-hover:w-full"
                ></span>
              </li>
              
              <li className="relative group">
                <Link
                  className="text-gray-100 transition hover:text-gray-100/75 text-lg"
                  to="/login"
                >
                  Login
                </Link>
                <span
                  className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-100 transition-all duration-300 group-hover:w-full"
                ></span>
              </li>
              <li className="relative group">
                <Link
                  className="text-gray-100 transition hover:text-gray-100/75 text-lg"
                  to="/Registration"
                >
                  Register Here
                </Link>
                <span
                  className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-100 transition-all duration-300 group-hover:w-full"
                ></span>
              </li>

              {/* <li className="relative group">
                <Link
                  className="text-gray-100 transition hover:text-gray-100/75 text-lg"
                  to="/Profiles"
                >
                  Profile
                </Link>
                <span
                  className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-100 transition-all duration-300 group-hover:w-full"
                ></span>
              </li> */}

              <li>
                <Link
                  className="font-bold transition text-black bg-white hover:bg-gray-200 px-8 py-3 rounded"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

