import { Download } from "lucide-react";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";
import useApp from "../Hooks/useApp";
import ErrorPage from "../Pages/ErrorPage";

const App = ({ app }) => {
  const { error } = useApp();
  const { id, image, title, downloads, ratingAvg } = app || {};
  if (error) return <ErrorPage />;
  return (
    <Link to={`/apps/${id}`}>
      <div className="card bg-base-100 shadow-sm p-4 space-y-4 hover:-translate-y-3 transition-all duration-300">
        <figure className="h-[316px]">
          <img
            src={image || "No Image Available"}
            alt={title}
            className="h-[316px] w-full object-cover rounded-md"
          />
        </figure>
        <div className="space-y-6">
          <h2 className="card-title text-[#001931] font-semibold text-lg">
            {title || "No Title"}
          </h2>

          <div className="flex justify-between items-center">
            <div className="bg-green-100 px-2 py-1 rounded-lg text-green-700 font-bold flex items-center gap-1">
              <Download color="#047857" strokeWidth={1.5} size={18} />
              {downloads || "N/A"}M
            </div>
            <div className="bg-amber-100 px-2 py-1 rounded-lg text-amber-700 font-bold">
              {ratingAvg === 5 ? (
                <span className="flex items-center gap-1">
                  <span>
                    <FaStar />
                  </span>
                  <span>{ratingAvg || "N/A"}</span>
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  <span>
                    <FaStarHalfAlt />
                  </span>
                  <span>{ratingAvg || "N/A"}</span>
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
