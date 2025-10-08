import { useParams } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import useApp from "../Hooks/useApp";
import RatingsChart from "./RatingsChart";
import download from "../assets/icon-downloads.png";
import review from "../assets/icon-review.png";
import rating from "../assets/icon-ratings.png";
import AppDetailsSkeleton from "./AppDetailsSkeleton";
import ErrorPage from "../Pages/ErrorPage";
import AppError from "../Pages/AppError";
import { useState } from "react";

const AppDetails = () => {
  const [showInstall, setShowInstall] = useState(true);
  const { apps, loading, error } = useApp();
  const { id } = useParams();
  if (loading) return <AppDetailsSkeleton />;
  if (error) return <ErrorPage />;
  //finding the relevant app id
  const app = apps.find((el) => el.id === Number(id));
  if (!app) return <AppError />;
  //getting the app info
  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = app || {};

  //adding to localstorage
  const handleAddStorage = () => {
    //getting data from local storage
    const getExistingApp = JSON.parse(localStorage.getItem("appList"));
    let updatedAppList = [];
    //if data exist
    if (getExistingApp) {
      //it data is already in the storage
      const isDuplicate = getExistingApp.some((item) => item.id === app.id);
      if (isDuplicate)
        return toast.error(`Already Installed ${app.title}`, {
          theme: "dark",
          position: "bottom-right",
        });
      updatedAppList = [...getExistingApp, app];
    } else {
      //if no data available
      updatedAppList.push(app);
      toast.success(`You've Successfully Installed ${app.title}`, {
        theme: "dark",
        position: "bottom-right",
      });
    }
    console.log(updatedAppList);
    //save data to local storage
    localStorage.setItem("appList", JSON.stringify(updatedAppList));
    setShowInstall(false);
  };

  return (
    <div className="w-11/12 mx-auto lg:px-8 md:px-4 px-2">
      <div className="flex lg:flex-row flex-col items-center gap-8 mt-24 mb-20 pb-12 border-b border-gray-600">
        <figure className="lg:w-[350px] lg:h-[350px] w-[300px] h-[250px] flex items-center justify-center">
          <img
            src={image || "No Image Available"}
            alt={title}
            className="lg:h-[350px] w-full h-[250px] rounded-lg object-cover shadow-2xl"
          />
        </figure>
        <div className="space-y-6 lg:w-[50%]">
          <div className="border-b border-gray-400 pb-4 space-y-4">
            <h2 className="lg:text-3xl md:text-2xl font-bold text-[#001931] lg:text-left text-center">
              {title || "No Title Available"}
            </h2>
            <p className="font-medium text-gray-600 text-lg lg:text-left text-center">
              Developed By :
              <span className="text-primary font-semibold">
                {" "}
                {companyName || "N/A"}
              </span>
            </p>
          </div>
          <div className="flex md:flex-row flex-col items-center md:justify-start justify-center md:gap-10 gap-8">
            <div className="md:w-28 flex md:flex-col flex-row items-center justify-center gap-3">
              <div>
                <img src={download} alt="" className="h-8 w-8" />
              </div>
              <div className="text-center w-28">
                <p className="text-sm text-gray-700">Downloads</p>
                <h4 className="font-extrabold lg:text-4xl md:text-2xl text-xl">
                  {downloads}M
                </h4>
              </div>
            </div>
            <div className="md:w-28 flex md:flex-col flex-row items-center justify-center gap-3">
              <div>
                <img src={rating} alt="" className="h-8 w-8" />
              </div>
              <div className="text-center w-28">
                <p className="text-sm text-gray-700">Average Ratings</p>
                <h4 className="font-extrabold lg:text-4xl md:text-2xl text-xl">
                  {ratingAvg || "N/A"}
                </h4>
              </div>
            </div>
            <div className="md:w-28 flex md:flex-col flex-row items-center justify-center gap-3">
              <div>
                <img src={review} alt="" className="h-8 w-8" />
              </div>
              <div className="text-center w-28">
                <p className="text-sm text-gray-700">Total Reviews</p>
                <h4 className="font-extrabold lg:text-4xl md:text-2xl text-xl">
                  {reviews || "N/A"}K
                </h4>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 lg:justify-start justify-center">
            <button
              className="btnIns"
              onClick={handleAddStorage}
              disabled={showInstall === false}
            >
              {showInstall ? `Install Now (${size}MB)` : "Installed"}
            </button>
          </div>
        </div>
      </div>

      <div className="mb-20 space-y-4">
        <h2 className="text-2xl font-bold text-[#001931]">Ratings</h2>
        <div>
          <RatingsChart ratings={ratings || [{}]} />
        </div>
      </div>

      <div className="mb-20 space-y-4">
        <h2 className="text-2xl font-bold text-[#001931]">Description</h2>
        <div className="grid grid-cols-1 gap-6">
          {description?.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AppDetails;
