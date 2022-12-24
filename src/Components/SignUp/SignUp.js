import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../UserContext/UserContext";

const SignUp = () => {
  const { signUp, updateUserProfile } = useContext(authContext);
  const [error, SetError] = useState("");
  const [photo, setphoto] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const imageData = new FormData();
    imageData.append("image", photo);

    const url =
      "https://api.imgbb.com/1/upload?key=02b8716b08c03a0ba7282f83767ec3fe";
    fetch(url, {
      method: "POST",
      body: imageData,
    })
      .then((res) => res.json())
      .then((imagedata) => {
        console.log(imagedata);
        const photoURL = imagedata.data.display_url;
        if (imagedata.success) {
          signUp(email, password)
            .then((result) => {
              const user = result.user;
              handleUpdateProfile(name, photoURL);
              navigate(from, { replace: true });

              console.log(user);
            })
            .catch((error) => {
              const errorMessage = error.message;
              SetError(errorMessage);
              console.error(error);
            });
        }
      });

    console.log(photo);
  };

  const handleUpdateProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };

    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => {
        // An error occurred
        // ...
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up!</h1>
          <p className="py-6">
            Already have an Account ! please{" "}
            <Link className="text-blue-500 text-bold" to={"/login"}>
              {" "}
              Login
            </Link>
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                required
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">choose Photo</span>
              </label>
              <input
                type="file"
                required
                name="photoUrl"
                placeholder="photo URL"
                onChange={(e) => setphoto(e.target.files[0])}
                className="input input-bordered"
                id=""
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                required
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                required
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />

              <p className="text-red-500"> {error} </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
