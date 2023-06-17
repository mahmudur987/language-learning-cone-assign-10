import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Headers from "../Components/Header/Headers";
import LeftSideNav from "../Components/LestSideNav/LeftSideNav";
import "./Main.css";
const Main = () => {
  return (
    <div>
      <div>
        {" "}
        <Headers></Headers>{" "}
      </div>

      <div className="grid h-full  md:grid-cols-8">
        <div className="hidden md:block md:col-span-2">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="min-h-screen h-full  grid col-span-1 md:col-span-6">
          <Outlet></Outlet>
        </div>
      </div>

      <div>
        {" "}
        <Footer></Footer>{" "}
      </div>
    </div>
  );
};

export default Main;
