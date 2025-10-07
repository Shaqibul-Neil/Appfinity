import { TrendingUp } from "lucide-react";

const TrendingApp = () => {
  return (
    <div className="space-y-8 pb-12">
      <div className="space-y-4">
        <h2 className="lg:text-5xl md:text-4xl text-2xl font-bold flex items-center justify-center gap-2">
          <span>Trending Apps</span>
          <span className="animate-pulse">
            <TrendingUp size={28} />
          </span>
        </h2>
        <p className="text-center">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"></div>
    </div>
  );
};

export default TrendingApp;
