import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";
import banner from "../assets/hero.png";

const Banner = () => {
  return (
    <section className="lg:py-24 md:py-20 py-16">
      <div className="lg:space-y-6 space-y-4">
        <h1 className="lg:text-7xl md:text-5xl text-4xl text-center font-bold lg:leading-[84px] md:leading-[60px] leading-[40px]">
          We Build <br />
          <span className="text-[#9F62F2]">Productive </span>
          Apps
        </h1>
        <p className="text-center lg:px-0 md:px-40 px-10">
          At Affinity, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>
      </div>
      <div className="flex items-center justify-center gap-4 lg:mt-12 mt-8">
        <button className="btn">
          <span className="text-[#9F62F2]">
            <FaGooglePlay />
          </span>
          Google Play
        </button>
        <button className="btn">
          <span className="text-[#9F62F2]">
            <FaAppStoreIos />
          </span>
          App Store
        </button>
      </div>
      <div className="pt-12 flex items-center justify-center">
        <img
          src={banner}
          alt="appfinity"
          className="lg:w-8/12 w-11/12 object-cover"
        />
      </div>
      <div className="bg-gradient-to-r from-[#4C4CEA] to-[#9865F3] text-white lg:py-16 py-12 lg:space-y-12 space-y-8">
        <h3 className="lg:text-5xl md:text-3xl text-2xl text-center font-semibold md:px-0 px-16">
          Trusted by Millions, Built for You
        </h3>
        <div className="flex md:flex-row flex-col items-center lg:gap-12 md:gap-8 gap-6 justify-center">
          <div className="lg:space-y-3 md:space-y-2 space-y-1 flex flex-col items-center">
            <p>Total Downloads</p>
            <h2 className="lg:text-6xl md:text-4xl text-2xl font-bold">
              29.6M
            </h2>
            <p>21% more than last month</p>
          </div>
          <div className="lg:space-y-3 md:space-y-2 space-y-1 flex flex-col items-center">
            <p>Total Reviews</p>
            <h2 className="lg:text-6xl md:text-4xl text-2xl font-bold">906K</h2>
            <p>46% more than last month</p>
          </div>
          <div className="lg:space-y-3 md:space-y-2 space-y-1 flex flex-col items-center">
            <p>Active Apps</p>
            <h2 className="lg:text-6xl md:text-4xl text-2xl font-bold">132+</h2>
            <p>31 more will Launch</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
