import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative w-full min-h-[500px] overflow-hidden ">
      {/* Background image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1461958508236-9a742665a0d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
        }}
      ></div>

      {/* Background animation */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-blue-500"
        animate={{ opacity: [0, 1], x: [0, 100, 200, 500, 1000, 0] }}
        transition={{ duration: 3 }}
      ></motion.div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white font-bold text-5xl mb-4">Welcome</h1>
          <p className="mb-5 text-sm md:text-2xl text-white">
            Nowadays, the world has become very small. It is necessary to learn
            the language. to communicate with each other. Even if you go abroad
            for the sake of life, you need to learn the language of thats
            country.{" "}
            <span className="text-red-800 font-bold">
              Come and join our language training{" "}
            </span>{" "}
          </p>
          <Link to={"/courses"}>
            <button className=" hover:bg-gray-200 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              COURSES
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
