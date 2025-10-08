import Lottie from "lottie-react";
import emptySearch from "../Lottie/emptySearch.json";
import { Link } from "react-router";

const NoSearchedApp = ({ search, setSearch }) => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-center">
      <div className="flex justify-center">
        <Lottie
          animationData={emptySearch}
          loop={true}
          className="md:w-80 h-80 w-72"
        />
      </div>
      <div className="flex flex-col gap-8 justify-center">
        <h2 className="text-center md:text-2xl text-xl text-gray-600 font-bold tracking-wider">
          Oops! looks like this app packed up and left the store.
        </h2>
        <div className="flex justify-center">
          <Link
            to="/apps"
            className="showAll"
            onClick={() => setSearch(search(""))}
          >
            Show All Apps
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoSearchedApp;
