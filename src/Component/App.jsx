import { Download } from "lucide-react";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";

const App = ({ app }) => {
  const { id, image, title, downloads, ratingAvg } = app;
  return (
    <Link to={`/app/${id}`}>
      <div className="card bg-base-100 shadow-sm p-4 space-y-4 hover:-translate-y-3 transition-all duration-300">
        <figure className="h-[316px]">
          <img
            src={image}
            alt={title}
            className="h-[316px] w-full object-cover rounded-md"
          />
        </figure>
        <div className="space-y-6">
          <h2 className="card-title text-[#001931] font-semibold text-lg">
            {title}
          </h2>

          <div className="flex justify-between items-center">
            <div className="bg-green-100 px-2 py-1 rounded-lg text-green-700 font-bold flex items-center gap-1">
              <img src="" alt="" />
              <Download color="#047857" strokeWidth={1.5} size={18} />
              {downloads}M
            </div>
            <div className="bg-amber-100 px-2 py-1 rounded-lg text-amber-700 font-bold">
              {ratingAvg === 5 ? (
                <span className="flex items-center gap-1">
                  <span>
                    <FaStar />
                  </span>
                  <span>5</span>
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  <span>
                    <FaStarHalfAlt />
                  </span>
                  <span>{ratingAvg}</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default App;
