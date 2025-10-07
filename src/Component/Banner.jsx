import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";
import banner from "../assets/hero.png";
import SlotCounter from "react-slot-counter";
import { Link } from "react-router";

const Banner = () => {
  return (
    <section className="lg:py-24 md:py-20 py-16">
      <div className="lg:space-y-6 space-y-4">
        <h1 className="lg:text-7xl md:text-5xl text-4xl text-center font-bold lg:leading-[84px] md:leading-[60px] leading-[40px] text-[#001931]">
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
        <Link
          className="btn"
          to="https://play.google.com/store/games"
          target="blank"
        >
          <span className="text-[#9F62F2]">
            <FaGooglePlay />
          </span>
          Google Play
        </Link>
        <Link
          className="btn"
          to="https://www.apple.com/app-store/"
          target="blank"
        >
          <span className="text-[#9F62F2]">
            <FaAppStoreIos />
          </span>
          App Store
        </Link>
      </div>
      <div className="pt-12 flex items-center justify-center">
        <img
          src={banner}
          alt="appfinity"
          className="lg:w-8/12 w-11/12 object-cover"
        />
      </div>
      <div className="bg-gradient-to-r from-[#4C4CEA] to-[#9865F3] text-white lg:py-16 py-12 lg:space-y-12 space-y-8 px-4">
        <h3 className="lg:text-5xl md:text-3xl text-2xl text-center font-semibold md:px-0 px-16">
          Trusted by Millions, Built for You
        </h3>
        <div className="flex md:flex-row flex-col items-center md:gap-8 gap-6 justify-center">
          <div className="lg:space-y-3 md:space-y-2 space-y-1 flex flex-col items-center shadow-amber-500/50 shadow-2xl w-60 py-4 rounded-lg bg-[#FFA500] hover:scale-105 transition-transform duration-300">
            <p>Total Downloads</p>
            <h2 className="lg:text-6xl md:text-4xl text-2xl font-bold flex items-center">
              <span>
                <SlotCounter value={29.6} />
              </span>
              <span className="md:mt-2 mt-1">M</span>
            </h2>
            <p>21% more than last month</p>
          </div>
          <div className="lg:space-y-3 md:space-y-2 space-y-1 flex flex-col items-center shadow-emerald-500/50 shadow-2xl w-60 py-4 rounded-lg bg-[#1ABC9C] hover:scale-105 transition-transform duration-300">
            <p>Total Reviews</p>
            <h2 className="lg:text-6xl md:text-4xl text-2xl font-bold flex items-center">
              <span>
                <SlotCounter value={906} />
              </span>
              <span className="md:mt-2 mt-1">K</span>
            </h2>
            <p>46% more than last month</p>
          </div>
          <div className="lg:space-y-3 md:space-y-2 space-y-1 flex flex-col items-center shadow-pink-500/50 shadow-2xl w-60 py-4 rounded-lg bg-[#E91E63] hover:scale-105 transition-transform duration-300">
            <p>Active Apps</p>
            <h2 className="lg:text-6xl md:text-4xl text-2xl font-bold flex items-center">
              <span>
                <SlotCounter value={132} />
              </span>
              <span>+</span>
            </h2>
            <p>31 more will Launch</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
