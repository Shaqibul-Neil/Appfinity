import { useParams } from "react-router";
import useApp from "../Hooks/useApp";
import RatingsChart from "./RatingsChart";
import download from "../assets/icon-downloads.png";
import review from "../assets/icon-review.png";
import rating from "../assets/icon-ratings.png";
import AppDetailsSkeleton from "./AppDetailsSkeleton";
import ErrorPage from "../Pages/ErrorPage";
import AppError from "../Pages/AppError";
import { useEffect, useState } from "react";
import {
  getAppFromLocalStorage,
  updateAppList,
} from "../Utilities/localStorage";

const AppDetails = () => {
  const { apps, loading, error } = useApp();
  const { id } = useParams();
  const [showInstall, setShowInstall] = useState(true);
  //finding the relevant app id
  const app = apps.find((el) => el.id === Number(id));

  //check Local Storage on page load----- took AI's help here
  useEffect(() => {
    if (!app) return; //if app is not loaded then don't run this
    const savedApps = getAppFromLocalStorage();
    const alreadySavedApps = savedApps.some((el) => el.id === app.id);
    setShowInstall(!alreadySavedApps);
  }, [app]);

  const handleAddStorage = () => {
    if (!app) return <AppError />;
    const successfullyInstalled = updateAppList(app);
    if (successfullyInstalled) setShowInstall(false);
  };
  if (loading) return <AppDetailsSkeleton />;
  if (error) return <ErrorPage />;
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
    </div>
  );
};

export default AppDetails;

/*if called updateAppList(app) without useEffect 
apps data initially empty array hote pare (karon fetch hocche server/axios theke).updateAppList(app) call korle, app ekhono undefined thakte pare → crash ba wrong behavior.useEffect ensure kore: “App data jokhon ready hobe, tokhon ei check/run hobe.”

useEffect ekhane mainly duita kajer jonno use kora hoise:
LocalStorage check kore button state set kora – mane, showInstall true/false decide kora: Jodi app already install kora thake → showInstall = false Jodi install kora na thake → showInstall = true
React e timing safe rakhte – apps data initially fetch hocche (async), tai direct check korle app undefined thakte pare. useEffect ensure kore “app ready hoar pori ei state update hobe”.

//ai vabe kora jabena cz:
useEffect(() => {
    updateAppList(app);
    setShowInstall(true);
}, [app]);

Timing er problem
apps data initially fetch hocche async (useApp diye niye aslam).
Jodi updateAppList(app) useEffect e app undefined thakar shomoy call hoy → crash hote pare.
Tai check kore if (!app) return; lagse, but even tar poro tumi update + state ekshathe korle ekta logic bug thakte pare:
User agei install kora app er jonno abar updateAppList(app) call hobe → duplicate save hote pare. mane amr btn disabled ta hbena

Separation of concerns (logic clean rakha)
useEffect = initial check, “showInstall true/false set koro based on already saved apps.”
handleAddStorage = user action, jokhon button click kore install korbe.
Eivabe code readable, maintainable, bug-free thake.

Jodi tui button ta “always clickable” rakhte —
tahole updateAppList(app) ke direct onClick e call korlei hoto: const handleAddStorage = () => updateAppList(app); No need for useEffect, no need for setShowInstall. Toast dekhabe, done ✅
But tui je button ta “once installed → disabled & text changes” korte chas,
shei logic ta handle kortei alada duto step lagse:
🔹 useEffect → Check korbe page load e already install kora ache naki
(jodi thake, setShowInstall(false))
🔹 handleAddStorage → User install korle localStorage e add kore, then setShowInstall(false)
Eivabe “Install Now” → “Installed” ei dynamic UI ta possible hoy.

Page open hoile already installed kina check ---> useEffect
User click korle install + toast ----> handleAddStorage
Button disable/enable handle ----> showInstall state
*/
