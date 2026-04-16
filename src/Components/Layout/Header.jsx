import React, { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileProgramsOpen, setIsMobileProgramsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#eeeeee] flex items-center justify-between px-8 py-4 shadow-md z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/images/logo.jpg" alt="Logo" className="h-12 w-auto" />
      </div>

      {/*  Nav */}
      <nav className="hidden md:flex items-center gap-8">
        {/* Home */}
        <h2 className="text-base text-blue-600 underline decoration-3 cursor-pointer transition-colors duration-300 underline-offset-4">
          Home
        </h2>

        {/* dropdown */}
        <div className="relative">
          <h2
            className="text-[#555555] text-base flex items-center gap-1 cursor-pointer transition-colors duration-300 hover:text-blue-600"
            onClick={() => setIsProgramsOpen(!isProgramsOpen)}
          >
            Programs <FaChevronDown className="text-lg" />
          </h2>

          {isProgramsOpen && (
            <div className="absolute left-0 mt-2 w-full md:w-md bg-white p-6 rounded-md shadow-lg">
              <div className="grid grid-cols-2  md:grid-cols-2 gap-6">
                <div className="border border-gray-300 p-4 rounded-lg hover:-translate-y-2 hover:bg-[#faf9fe] transition-transform duration-300">
                  <h1 className="font-bold text-lg text-[#4a4a4a]">
                    Software Engineering
                  </h1>
                  <p className="text-sm text-[#666666]">
                    Master modern software development with hands-on projects
                  </p>
                </div>
                <div className="border border-gray-300 p-4 rounded-lg hover:-translate-y-2 hover:bg-[#faf9fe] transition-transform duration-300">
                  <h1 className="font-bold text-lg text-[#4a4a4a]">
                    Data Science
                  </h1>
                  <p className="text-sm text-[#666666]">
                    Dive into data analytics, machine learning, and AI
                  </p>
                </div>
                <div className="border border-gray-300 p-4 rounded-lg hover:-translate-y-2 hover:bg-[#faf9fe] transition-transform duration-300">
                  <h1 className="font-bold text-lg text-[#4a4a4a]">
                    UI/UX Design
                  </h1>
                  <p className="text-sm text-[#666666]">
                    Create beautiful, user-centered designs
                  </p>
                </div>
                <div className="border border-gray-300 p-4 rounded-lg hover:-translate-y-2 hover:bg-[#faf9fe] transition-transform duration-300">
                  <h1 className="font-bold text-lg text-[#4a4a4a]">DevOps</h1>
                  <p className="text-sm text-[#666666]">
                    Bridge development and operations
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* About Us */}
        <h2 className="text-[#555555] text-base cursor-pointer transition-colors duration-300 hover:text-blue-600">
          About Us
        </h2>

        {/* FAQ */}
        <h2 className="text-[#555555] text-base cursor-pointer transition-colors duration-300 hover:text-blue-600">
          FAQ
        </h2>
      </nav>

      {/* Button for Desktop */}
      <button className="hidden md:block mr-2 bg-[#5a43f1] text-white text-base px-6 py-2 rounded-[0.9rem] transition-transform duration-300 hover:scale-105">
        Contact Us
      </button>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Media Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md p-6 flex flex-col gap-4 md:hidden">
          <h2 className="text-blue-600 cursor-pointer">Home</h2>

          {/* Media Dropdown */}
          <div>
            <h2
              className="text-[#555555] flex items-center gap-1 cursor-pointer transition-colors duration-300 hover:text-blue-600"
              onClick={() => setIsMobileProgramsOpen(!isMobileProgramsOpen)}
            >
              Programs <FaChevronDown className="text-lg" />
            </h2>
            {isMobileProgramsOpen && (
              <div className="mt-2 space-y-2 pl-4 cursor-pointer">
                <p className="text-sm text-[#333333]">Software Engineering</p>
                <p className="text-sm text-[#333333]">Data Science</p>
                <p className="text-sm text-[#333333]">UI/UX Design</p>
                <p className="text-sm text-[#333333]">DevOps</p>
              </div>
            )}
          </div>

          <h2 className="text-[#555555] cursor-pointer hover:text-blue-600">
            About Us
          </h2>
          <h2 className="text-[#555555] cursor-pointer hover:text-blue-600">
            FAQ
          </h2>

          {/* Media Button */}
          <div className="flex justify-center">
            <button className="bg-[#5a43f1] text-white text-sm px-5 py-2 rounded-md transition-transform duration-300 hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
