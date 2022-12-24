import { Link } from "react-router-dom";
import Courses from "../Courses/Courses";

const Home = () => {
  return (
    <div>
      <div
        className=" hero min-h-screen "
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1461958508236-9a742665a0d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"> </div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl md:text-5xl font-bold">
              Hello people{" "}
            </h1>
            <p className="mb-5 text-sm md:text-2xl">
              Nowadays, the world has become very small. It is necessary to
              learn the language. to communicate with each other. Even if you go
              abroad for the sake of life, you need to learn the language of
              thats country.{" "}
              <span className="text-red-300">
                Come and join our language training{" "}
              </span>{" "}
            </p>
            <Link to={"/courses"}>
              {" "}
              <button className="btn btn-primary">Course </button>{" "}
            </Link>
          </div>
        </div>
      </div>

      <div className="my-5">
        <Courses></Courses>
      </div>
    </div>
  );
};

export default Home;
