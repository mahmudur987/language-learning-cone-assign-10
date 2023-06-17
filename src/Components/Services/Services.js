import React from "react";

const ServiceSection = () => {
  const services = [
    {
      image:
        "https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      title: "Language Lessons",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, urna eu vulputate iaculis, mauris mauris fringilla est, vitae volutpat est nunc sed massa.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1555431189-0fabf2667795?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      title: "Weekly Exum",
      description:
        "Aliquam finibus ex vitae est congue auctor. Praesent volutpat nisi eget tortor vulputate, sed tincidunt urna pharetra. Fusce finibus quam purus, ac eleifend nibh mattis at.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1620969427101-7a2bb6d83273?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",
      title: "Language Books",
      description:
        "Curabitur nec orci sagittis, malesuada tellus nec, feugiat libero. Ut finibus, neque id pellentesque ullamcorper, purus diam fermentum est, non consequat sem lorem sit amet sem.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1513705153361-9bc726c8db67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      title: "Language work sheet",
      description:
        "Sed interdum risus ut pharetra commodo. Sed a fermentum urna. Sed iaculis consectetur nisi, in elementum felis consequat in. Fusce eget libero non leo finibus eleifend.",
    },
  ];

  return (
    <div className="py-8 border my-10 ">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          How do you learn language with Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="border p-4 shadow-md rounded-md flex gap-8"
            >
              <div className="w-1/3">
                <img
                  className="w-full  object-cover mb-4 rounded-md"
                  src={service.image}
                  alt={service.title}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
