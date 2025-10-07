import { TrendingUp } from "lucide-react";
import useApp from "../Hooks/useApp";
import LoadingSpinner from "./LoadingSpinner";
import App from "./App";
import { Link } from "react-router";

const TrendingApps = () => {
  const { apps, loading, error } = useApp();

  const trendingApps = apps.slice(0, 8);
  return (
    <div className="space-y-16 pb-12 w-11/12 mx-auto lg:px-8 md:px-4 px-2">
      <div className="space-y-4">
        <h2 className="lg:text-5xl md:text-4xl text-2xl font-bold flex items-center justify-center gap-2 text-[#001931]">
          <span>Trending Apps</span>
          <span className="animate-pulse">
            <TrendingUp size={28} />
          </span>
        </h2>
        <p className="text-center">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {trendingApps.map((app) => (
            <App key={app.id} app={app} />
          ))}
        </div>
      )}
      <div className="flex items-center justify-center">
        <Link to="/apps" className="showAll">
          Show All
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
