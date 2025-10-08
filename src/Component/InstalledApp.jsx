import { Server, Trash } from "lucide-react";
import download from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";

const InstalledApp = ({ iApp }) => {
  console.log(iApp);
  const { image, title, downloads, ratingAvg, size } = iApp;
  return (
    <div className="bg-white p-3 flex justify-between items-center md:flex-row flex-col gap-4 rounded-md">
      <div className="flex items-center gap-4">
        <div className="w-20 h-16 rounded-md">
          <img src={image} alt={title} className="w-full h-16 rounded-md" />
        </div>
        <div className="space-y-2">
          <h3 className="text-[#001931] font-semibold">{title}</h3>
          <div className="flex items-center gap-3 text-gray-600">
            <div className="flex gap-2 items-center">
              <img src={download} alt="" className="w-4 h-4" />
              <p>{downloads}M</p>
            </div>
            <div className="flex gap-2 items-center">
              <img src={rating} alt="" className="w-4 h-4" />
              <p>{ratingAvg}</p>
            </div>
            <div className="flex gap-2 items-center">
              <Server size={16} color="#9f62f2" />
              <p>{size}MB</p>
            </div>
          </div>
        </div>
      </div>
      <button className="btnUn">
        Uninstall
        <Trash
          size={16}
          className="ml-2 text-current transition-colors duration-300"
          strokeWidth={2.5}
        />
      </button>
    </div>
  );
};

export default InstalledApp;
