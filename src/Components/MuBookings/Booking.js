import React from "react";
import { Link } from "react-router-dom";

const Booking = ({ booking, idx }) => {
  const {
    courseName,
    courseDetail,
    batch,
    courseEmail,
    coursePhone,
    studentName,
    _id,
  } = booking;
  return (
    <div className="font-bold ml-11 my-10">
      <div className="flex justify-between">
        <h1>Course No :{idx + 1} </h1>
      </div>

      <h1 className="text-green-600 text-xl">Student Name :{studentName} </h1>
      <h1>Language Name :{courseName} </h1>

      <h1>Course Name :{courseDetail} </h1>
      <h1>Bathc Name :{batch} </h1>
      <h1>Course Email : {courseEmail}</h1>
      <h1>Course Phone : {coursePhone} </h1>
      <div className="flex justify-end">
        <p>
          <button className=" btn  btn-sm">Delete</button>
        </p>
        <p>
          <button className=" btn btn-info btn-sm">
            <Link to={`/confirmpayment/${_id}`}>Confirm</Link>
          </button>
        </p>
      </div>
    </div>
  );
};

export default Booking;
