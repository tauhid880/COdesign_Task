import BannarImg from "../assets/banner.jpg";
import { BsSearch } from "react-icons/bs";
import TopCategories from "./TopCategories";
const HeroBanner = () => {
  return (
    <div className="font-Poppins">
      <div className="absolute w-full">
        <img className="w-full h-4/5 lg:h-[700px]" src={BannarImg} alt="" />
      </div>
      <div className="relative text-center text-white top-12 md:top-36 lg:top-80 font-bold text-sm lg:text-5xl">
        <h1 className="lg:leading-snug">
          Your local source of high quality images <br /> and videos directly
          from their creators
        </h1>
      </div>
      <div className="relative flex justify-center items-center top-14 md:top-40 lg:top-80 lg:mt-3">
        <input
          className="lg:px-[400px] py-2 lg:py-4 rounded-full bg-white placeholder:invisible lg:placeholder:visible lg:placeholder:translate-x-[-370px]"
          type="text"
          placeholder="Search photos and videos"
        />
        <BsSearch className="text-black right-44 lg:right-10 relative" />
      </div>
      <TopCategories className="w-20"></TopCategories>
    </div>
  );
};

export default HeroBanner;
