import React from "react";
import {FaFacebookF} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white px-10 pt-16">
      {/* horizontal line */}
      <hr className="border-t border-[#faf9fe] mb-12" />

      {/* Columns 1 logo and paragraph */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-8 mb-12 ">
       
        <div>
          <img src="/images/logo.jpg" alt="Logo" className="h-12 mb-6" />
          <p className="text-[#333333] text-medium leading-relaxed">
            Empowering individuals through technology education <br /> and
            career development. We believe everyone <br />
            deserves a chance to build a successful future in tech. <br /> Join
            our community and transform your career path <br />
            today.
          </p>
        </div>

        {/* Column 2 - programs */}
        <div className="space-y-2">
          <h3 className="text-[#5a43f1] font-semibold mb-4">Programs</h3>
          <p className="text-[#333333] hover:text-[#5a43f1] cursor-pointer ">
            Frontend Development
          </p>
          <p className="text-[#333333] hover:text-[#5a43f1] cursor-pointer">
            Backend Development
          </p>
          <p className="text-[#333333] hover:text-[#5a43f1] cursor-pointer">
            UI/UX Design
          </p>
          <p className="text-[#333333] hover:text-[#5a43f1] cursor-pointer">
            Data Analysis
          </p>
          <p className="text-[#333333] hover:text-[#5a43f1] cursor-pointer">
            Project Management
          </p>
        </div>

        {/* Column 3 - company */}
        <div className="space-y-2">
          <h3 className="text-[#5a43f1] font-semibold mb-4">Company</h3>
          <p className="text-[#333333] hover:text-[#5a43f1] cursor-pointer">
            About Us
          </p>
          <p className="text-[#333333] hover:text-[#5a43f1] cursor-pointer">
            Our Mission
          </p>
          <p className="text-[#333333] hover:text-[#5a43f1] cursor-pointer">
            Success Stories
          </p>
          <p className="text-[#333333] hover:text-[#5a43f1] cursor-pointer">
            FAQ
          </p>
        </div>

        {/* Column 4 - support */}
        <div className="space-y-2"> 
          <h3 className="text-[#5a43f1] font-semibold mb-4">Support</h3>
          <p className="text-[#333333] hover:text-[#5a43f1] cursor-pointer">
            Contact Us
          </p>
          <p className="text-[#333333] hover:text-[#5a43f1] cursor-pointer">
            Privacy Policy
          </p>
          <p className="text-[#333333] hover:text-[#5a43f1] cursor-pointer">
            Terms of Service
          </p>
          <p className="text-[#333333] hover:text-[#5a43f1] cursor-pointer">
            Help Centre
          </p>
        </div>
      </div>

      {/* horizontal line */}
      <div className="flex justify-center">
        <hr className="border-t border-[#eeeeee] w-4/4 mb-6" />
      </div>

      {/* Bottom footer */}
      <div className="flex flex-col md:flex-row justify-between items-center pb-8">
        <h4 className="text-[#333333] text-sm mb-4 md:mb-0">
          © 2024 Just A Chance. All rights reserved.
        </h4>
        <div className="flex gap-3 text-[#333333] text-2xl">
          <FaFacebookF className="cursor-pointer hover:text-[#5a43f1]" />
          <FaLinkedin className="cursor-pointer hover:text-[#5a43f1]" />
          <FaInstagram className="cursor-pointer hover:text-[#5a43f1]" />
          <FaGithub className="cursor-pointer hover:text-[#5a43f1]" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
