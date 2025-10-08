import { Link } from "react-router";
import error from "../assets/error-404.png";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
const ErrorPage = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className="lg:px-8 py-2 md:px-4 px-2">
          <Navbar />
        </header>

        <main className="bg-[#f2f2f2] flex-1">
          <div className="flex flex-col my-24 w-11/12 mx-auto lg:px-8 md:px-4 px-2 gap-8">
            <div className="flex justify-center">
              <img src={error} alt="" className="w-80" />
            </div>

            <h2 className="text-center md:text-2xl text-xl text-gray-600 font-bold tracking-wider">
              404: This page couldn't be found. Maybe it was deleted, moved, or
              just got tired of existing. Either way, you can head home or
              explore our apps instead.
            </h2>
            <div className="flex justify-center md:flex-row flex-col items-center gap-4">
              <Link to="/" className="showAll">
                Go Home
              </Link>
              <Link to="/apps" className="showAll">
                Show All Apps
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ErrorPage;
