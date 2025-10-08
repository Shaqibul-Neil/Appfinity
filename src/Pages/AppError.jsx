import { Link } from "react-router";
import appError from "../assets/App-Error.png";
const AppError = () => {
  return (
    <div className="flex flex-col my-24 w-11/12 mx-auto lg:px-8 md:px-4 px-2 gap-8">
      <div className="flex justify-center">
        <img src={appError} alt="" className="w-80" />
      </div>

      <h2 className="text-center text-2xl text-gray-600 font-bold tracking-wider">
        Oops. Nothing to see here. Just an empty space in the internet void. Try
        going all apps section — it's nicer there.
      </h2>
      <div className="flex justify-center">
        <Link to="/apps" className="showAll">
          Show All Apps
        </Link>
      </div>
    </div>
  );
};

export default AppError;
