import React from "react";
import { useState } from "react";

const Register = () => {
  const [img, setimg] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    console.log(img);
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input
          type="file"
          name="photo"
          id=""
          onChange={(e) => setimg(e.target.files[0])}
        />

        <input type="submit" value="submit" className="btn btn-submit" />
      </form>
    </div>
  );
};

export default Register;
