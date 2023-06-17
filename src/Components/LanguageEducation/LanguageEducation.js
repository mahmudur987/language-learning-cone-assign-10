/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const LanguageEducation = () => {
  return (
    <div className=" flex flex-col items-center justify-center min-h-[400px] border my-10">
      <h2 className="text-3xl font-bold mb-4 font-serif">
        Language Education for Schools and Teachers
      </h2>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 p-8">
          <img
            className="w-full h-full"
            src="https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1011&q=80"
          />
        </div>
        <div className="md:w-1/2 p-8  ">
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            feugiat, urna eu vulputate iaculis, mauris mauris fringilla est,
            vitae volutpat est nunc sed massa. Sed interdum risus ut pharetra
            commodo.
          </p>
          <p className="mb-4">
            Aliquam finibus ex vitae est congue auctor. Praesent volutpat nisi
            eget tortor vulputate, sed tincidunt urna pharetra. Fusce finibus
            quam purus, ac eleifend nibh mattis at. Sed a fermentum urna. Sed
            iaculis consectetur nisi, in elementum felis consequat in. Fusce
            eget libero non leo finibus eleifend.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LanguageEducation;
