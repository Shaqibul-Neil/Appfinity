import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";
import banner from "../assets/hero.png";

const Banner = () => {
  return (
    <section className="py-24">
      <div className="space-y-6">
        <h1 className="text-7xl text-center font-bold leading-[84px]">
          We Build <br />
          <span className="text-[#9F62F2]">Productive </span>
          Apps
        </h1>
        <p className="text-center">
          At Affinity, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>
      </div>
      <div className="flex items-center justify-center gap-4 mt-12">
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
        <img src={banner} alt="appfinity" />
      </div>
      <div className="bg-gradient-to-r from-[#4C4CEA] to-[#9865F3] text-white py-16 space-y-12">
        <h3 className="text-5xl text-center font-semibold">
          Trusted by Millions, Built for You
        </h3>
        <div className="flex items-center gap-12 justify-center">
          <div className="space-y-3 flex flex-col items-center">
            <p>Total Downloads</p>
            <h2 className="text-6xl font-bold">29.6M</h2>
            <p>21% more than last month</p>
          </div>
          <div className="space-y-3 flex flex-col items-center">
            <p>Total Reviews</p>
            <h2 className="text-6xl font-bold">906K</h2>
            <p>46% more than last month</p>
          </div>
          <div className="space-y-3 flex flex-col items-center">
            <p>Active Apps</p>
            <h2 className="text-6xl font-bold">132+</h2>
            <p>31 more will Launch</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
