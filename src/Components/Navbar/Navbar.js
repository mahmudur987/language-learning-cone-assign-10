import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../UserContext/UserContext";
import { FaUser } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const { user, logout, theme, SetTheme } = useContext(authContext);
  // const [theme, SetTheme] = useState(true);
  const handletheme = () => {
    SetTheme(!theme);
  };
  const handleLogOut = () => {
    logout()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  // console.log(user)

  return (
    <div className=" grid gap-3 bg-purple-100  xl:flex xl:justify-between font-mono py-10 mb-10  relative">
      {/* theme */}
      <div className="mx-5 w-32 absolute top-0 right-0">
        <button onClick={handletheme}>
          {" "}
          {theme ? " Theme : Dark" : "Theme : Light"}{" "}
        </button>
      </div>
      {/* title area  start*/}
      <div className="flex-wrap md:flex md:flex-nowrap md:w-full ">
        <img
          className=" w-10 rounded-full ml-2"
          src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          alt=""
        />
        <button className=" m-0 font-bold text-3xl">
          Language Learning{" "}
          <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-purple-600">
            Zone
          </span>
        </button>
      </div>
      {/* title area end */}

      {/* link area start  */}

      <div className=" grid  md:flex md:flex-row-reverse text-blue-900 p-0 md:w-full  ">
        {/* profile +signout */}

        <div className=" flex  justify-end mr-1 ">
          <div className=" border border-black p-1 shadow-2xlnpm run stttttart">
            {user ? (
              <div className="tooltip" data-tip={user?.displayName}>
                <div className=" grid justify-center">
                  <p>
                    <Link to={"/profile"}>
                      <img
                        className="w-10 rounded-3xl mx-auto  "
                        src={user.photoURL}
                        alt=""
                      />
                    </Link>
                  </p>
                  <p className="font-bold">
                    {" "}
                    <Link to={"/profile"}>{user.displayName}</Link>
                  </p>{" "}
                </div>
              </div>
            ) : (
              <div className="text-xl mx-8">
                {" "}
                <FaUser></FaUser>{" "}
              </div>
            )}
          </div>
        </div>

        {/* linkers are here */}

        <div className="grid grid-cols-3 md:grid-flow-col mt-5 md:mt-0 ">
          <p className="mx-3 text-amber-800  hover:text-blue-500">
            <Link to={"/"}>Home</Link>
          </p>
          <p className="mx-3 text-amber-800  hover:text-blue-500">
            <Link to={"/courses"}> Course</Link>
          </p>
          <p className="mx-6 text-amber-800  hover:text-blue-500">
            <Link to={"/faq"}> FAQ</Link>
          </p>
          <p className="mx-3 text-amber-800  hover:text-blue-500">
            <Link to={"/blog"}> Blog</Link>
          </p>
          <p className="mx-3 text-amber-800  hover:text-blue-500">
            <Link to={"/register"}> Register</Link>
          </p>
          <p className="mx-3 text-amber-800  hover:text-blue-500">
            <Link to={"/liflet"}>Leaflet</Link>
          </p>

          {user ? (
            <p
              onClick={handleLogOut}
              className="mx-3 text-amber-800  hover:text-blue-500"
            >
              {" "}
              sign out
            </p>
          ) : (
            <>
              <p className="mx-3 text-amber-800  hover:text-blue-500">
                <Link to={"/login"}>Login</Link>
              </p>
              <p className="mx-3 text-amber-800  hover:text-blue-500">
                <Link to={"/signup"}>Sign Up</Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
