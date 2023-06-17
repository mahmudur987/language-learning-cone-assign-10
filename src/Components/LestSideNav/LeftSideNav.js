import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../UserContext/UserContext";
import Loading from "../Loading/Loading";

const LeftSideNav = () => {
  const { loading, Setloading } = useContext(authContext);

  const [courses, SetCourses] = useState([]);
  useEffect(() => {
    Setloading(true);
    const url = "https://language-learning-server.vercel.app/courses";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        SetCourses(data);
        Setloading(false);
      });
  }, [Setloading]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="p-5 m-2 rounded-lg h-full border">
      <h1 className="text-2xl font-bold">Our Latest Addition </h1>

      {loading && <Loading />}
      <div className="font-bold text-small ml-6 ">
        {courses?.map((course) => (
          <li
            key={course._id}
            className="hover:text-blue-500 my-2 md:my-5 lg:my-8"
          >
            {" "}
            <Link to={`/courses/${course._id}`}> {course.name} </Link>{" "}
          </li>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
