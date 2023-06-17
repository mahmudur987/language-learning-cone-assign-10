import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white my-10">
      <div className="max-w-6xl mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h4 className="text-2xl font-bold">Language Learnning Zone</h4>
            <p className="text-sm">© 2023 Your Company. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">
              Home
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              About
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Services
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
