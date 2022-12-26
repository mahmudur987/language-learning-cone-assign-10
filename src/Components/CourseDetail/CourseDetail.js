import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { authContext } from "../../UserContext/UserContext";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { FaDownload } from "react-icons/fa";

const CourseDetail = () => {
  const { SetCart } = useContext(authContext);
  const course = useLoaderData();
  const { title, name, discription, outine, exploring, price, _id } = course;
  //   console.log(course);
  return (
    <div
      className="card w-full bg-base-100 shadow-xl relative"
      id="coursedetails"
    >
      <h1 className="text-3xl text-center font-bolder text-green-500 m-10">
        {title}{" "}
      </h1>

      <figure>
        <img src={course.picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold  text-2xl">
          {name}
          <div className="badge badge-secondary  ">NEW</div>
        </h2>

        <div className="m-5">
          <h3 className="text-2xl underline">Course Discription</h3>
          <p className="font-bold"> {discription} </p>
        </div>
        <div className="m-5">
          <h3 className="text-2xl underline">Course Outline</h3>
          <p className="font-bold"> {outine} </p>
        </div>
        <div className="m-5">
          <h3 className="text-2xl underline">Exploring Grammar</h3>
          <p className="font-bold"> {exploring} </p>
        </div>

        <div className="m-5">
          <h3 className="text-2xl underline">You will Explore</h3>
          <p className="font-bold"> {exploring} </p>
        </div>
        <h3 className="text-2xl">Course Price {price} $</h3>

        <div className="card-actions flex justify-between">
          <Link to={`/cheakout/${_id}`}>
            <button onClick={() => SetCart(course)} className="btn btn-accent">
              {" "}
              Get Premium Access
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
