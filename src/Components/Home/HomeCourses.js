import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { authContext } from "../../UserContext/UserContext";
import Course from "../Course/Course";
import Loading from "../Loading/Loading";

const HomeCourses = () => {
  const { loading, Setloading } = useContext(authContext);
  const [courses, SetCourses] = useState([]);
  useEffect(() => {
    Setloading(true);
    fetch("https://language-learning-server.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => {
        Setloading(false);
        SetCourses(data);
      });
  }, [Setloading]);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="text-center border  p-2">
      <h1 className="text-3xl font-bold text-yellow-700">All Courses </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {courses?.slice(0, 3).map((course) => (
          <Course key={course._id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default HomeCourses;
