import React from "react";

const Booking = ({ booking }) => {
  console.log(booking);
  const { courseName, courseDetail, batch, courseEmail, coursePhone } = booking;
  return (
    <div className="font-bold ml-11">
      <h1>Language Name :{courseName} </h1>
      <h1>Course Name :{courseDetail} </h1>
      <h1>Bathc Name :{batch} </h1>
      <h1>Course Email : {courseEmail}</h1>
      <h1>Course Phone : {coursePhone} </h1>
    </div>
  );
};

export default Booking;
