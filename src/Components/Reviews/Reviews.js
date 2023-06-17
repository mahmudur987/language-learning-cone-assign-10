import React from "react";

const Reviews = () => {
  const reviews = [
    {
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, urna eu vulputate iaculis.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      text: "Aliquam finibus ex vitae est congue auctor. Praesent volutpat nisi eget tortor vulputate, sed tincidunt urna pharetra.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
      text: "Curabitur nec orci sagittis, malesuada tellus nec, feugiat libero. Ut finibus, neque id pellentesque ullamcorper, purus diam fermentum est.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
      text: "Sed interdum risus ut pharetra commodo. Sed a fermentum urna. Sed iaculis consectetur nisi, in elementum felis consequat in.",
    },
  ];

  return (
    <div className="py-8 border ">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Peoples Reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className=" border p-4 shadow-md rounded-md">
              <img
                className="w-24 h-24 rounded-full mx-auto mb-4"
                src={review.image}
                alt="User"
              />
              <p>{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
