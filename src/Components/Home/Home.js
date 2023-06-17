import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import BestMathod from "../BestMethod/BestMathod";
import LanguageEducation from "../LanguageEducation/LanguageEducation";
import Reviews from "../Reviews/Reviews";
import ServiceSection from "../Services/Services";
import HomeAboutUs from "./HomeAboutUs";
import HomeCourses from "./HomeCourses";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <div className="flex flex-col justify-center items-center font-bold text-3xl md:hidden">
        <HomeCourses />

        <button className="btn btn-info btn-sm mt-5">
          <Link to={"/courses"}>See All</Link>
        </button>
      </div>

      <HomeAboutUs />
      <ServiceSection />
      <BestMathod />
      <LanguageEducation />

      <Reviews />
    </div>
  );
};

export default Home;
