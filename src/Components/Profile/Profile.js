import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../UserContext/UserContext";

const Profile = () => {
  const { user } = useContext(authContext);
  //   const photURLRef = useRef(user.photoURL);
  //   const nameRef = useRef(user.displayName);
  const phoneNumberRef = useRef("");
  const addressRef = useRef("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = user?.displayName;
    const email = user.email;
    const image = user.photoURL;
    const phoneNumber = phoneNumberRef.current.value;
    const address = addressRef.current.value;
    console.log(phoneNumber, address, name, email, image);
  };

  return (
    <div className="  bg-base-200 p-5 md:w-2/3 mx-auto">
      <div className=" justify-start">
        <h1 className=" my-10  text-center text-3xl font-bold">My Profile</h1>

        <div className="card shadow-2xl  bg-base-100 ">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                readOnly
                defaultValue={user.email}
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Name </span>
              </label>
              <input
                readOnly
                defaultValue={user.displayName}
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number </span>
              </label>
              <input
                ref={phoneNumberRef}
                type="text"
                placeholder="Your phone number"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address </span>
              </label>
              <input
                ref={addressRef}
                type="text"
                placeholder="Your phone number"
                className="input input-bordered"
              />
            </div>

            <button className="btn btn-info">Update profile</button>
          </form>
        </div>
      </div>

      <div className="m-5">
        <Link
          to={"/mybooking"}
          className=" my-10  text-center text-3xl font-bold hover:text-blue-500"
        >
          My Bookings
        </Link>
      </div>
    </div>
  );
};

export default Profile;
