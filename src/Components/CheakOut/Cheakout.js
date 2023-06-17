import React, { useReducer } from "react";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { authContext } from "../../UserContext/UserContext";

const Cheakout = () => {
  const { user } = useContext(authContext);
  const course = useLoaderData();
  // console.log(course);
  // console.log(user);

  const initialState = {
    studentName: user.displayName,
    studentEmail: user.email,
    studentPhone: "",
    studentPhoto: user.photoURL,
    courseName: course.name,
    courseDetail: course.title,
    batch: course.company,
    price: course.price,
    courseEmail: course.email,
    coursePhone: course.phone,
  };
  const reducer = (state, action) => {
    // console.log(action);
    switch (action.type) {
      case "INPUT":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleConfirm = (e) => {
    e.preventDefault();

    if (!state.studentPhone) {
      return toast.error("please add aphone number");
    }
    const url = "https://language-learning-server.vercel.app/bookings";

    fetch(url, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((response) => {
        if (response.status === 401) {
          toast.error("you already bookd this course");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);

        if (data.acknowledged) {
          toast.success(
            "you have to access to  Mandira chiness language course"
          );
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div id="premmium" className="p-4 border shadow-xl m-5 rounded-lg ">
      <div>
        <h1 className="text-3xl text-center font-extrabold text-green-700">
          Premmium Access{" "}
        </h1>
      </div>
      <form className="p-4 mb-5">
        <div className="avatar online placeholder">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
            <img src={user.photoURL} alt="" />
          </div>
        </div>
        <h1 className=" font-extrabold ">
          Student name :
          <input
            readOnly
            type="text"
            name=" studentName"
            defaultValue={user?.displayName}
            className="text-2xl font-mono"
          />
        </h1>
        <h1 className=" font-extrabold">
          Student Email :
          <input
            readOnly
            type="text"
            name=" stdentEmail"
            defaultValue={user?.email}
            className="   font-mono w-2/3    "
          />
        </h1>
        <h1 className=" font-extrabold">
          Student Phone :
          <input
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
            required
            type="studentPhone"
            name="studentPhone"
            className="  border border-black rounded-lg  font-mono w-2/3    "
          />
        </h1>
        <h1 className=" font-extrabold">
          Course Name:
          <input
            readOnly
            type="text"
            name="courseName"
            defaultValue={course.name}
            className="   font-mono w-2/3    "
          />
        </h1>
        <h1 className=" font-extrabold">
          Course Detail:
          <input
            readOnly
            type="text"
            name="courseDetail"
            defaultValue={course.title}
            className="   font-mono w-2/3    "
          />
        </h1>
        <h1 className=" font-extrabold">
          Batch:
          <input
            readOnly
            type="text"
            name="batch"
            defaultValue={course.company}
            className="   font-mono w-2/3    "
          />
        </h1>
        <h1 className=" font-extrabold">
          Price:
          <input
            readOnly
            type="text"
            name="price"
            defaultValue={course.price}
            className="   font-mono w-2/3    "
          />
        </h1>
        <h1 className=" font-extrabold text-red-500">
          For Emergency
          <p className="text-black ">
            Course Email :{" "}
            <input
              readOnly
              type="text"
              name="courseEmail"
              defaultValue={course.email}
              className="  font-mono w-2/3    "
            />
          </p>
          <p className="text-black ">
            Phone :
            <input
              readOnly
              type="text"
              name="coursePhone"
              defaultValue={course.phone}
              className="   font-mono w-2/3    "
            />
          </p>
        </h1>
        <div className="flex justify-end  gap-6 ">
          <button onClick={handleConfirm} className="btn btn-info btn-sm ">
            Add Bookings
          </button>
        </div>
      </form>
    </div>
  );
};

export default Cheakout;
