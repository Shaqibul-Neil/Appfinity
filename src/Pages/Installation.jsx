import { useEffect, useState } from "react";
import InstalledLoadingSpinner from "../Component/InstalledLoadingSpinner";
import useApp from "../Hooks/useApp";
import NoInstalledApp from "../Component/NoInstalledApp";
import InstalledApp from "../Component/InstalledApp";
import { getAppFromLocalStorage } from "../Utilities/localStorage";

const Installation = () => {
  const [installedApps, setInstalledApp] = useState(() =>
    getAppFromLocalStorage()
  );
  const [sortBy, setSortBy] = useState("");

  const { loading } = useApp();
  if (loading) return <InstalledLoadingSpinner />;

  const sortedApps = [...installedApps].sort((a, b) => {
    if (sortBy === "downloads-asc") return a.downloads - b.downloads;
    if (sortBy === "downloads-desc") return b.downloads - a.downloads;
    return 0;
  });

  return (
    <div className="lg:space-y-16 md:space-y-12 space-y-8 py-16 w-11/12 mx-auto lg:px-8 md:px-4 px-2">
      <div className="space-y-4">
        <h2 className="lg:text-5xl md:text-4xl text-2xl font-bold text-center text-[#001931]">
          Your Installed Apps
        </h2>
        <p className="text-center md:px-0 px-8">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex md:flex-row flex-col justify-between items-center gap-4">
        <h2 className="lg:text-2xl text-lg font-semibold pb-1 border-b text-[#001931]">
          {sortedApps.length === 0
            ? "No Apps Installed"
            : sortedApps.length < 9
            ? `0${sortedApps.length} Apps Found`
            : `${sortedApps.length} Apps Found`}
        </h2>
        <select
          className="select select-primary"
          disabled={sortedApps.length === 0}
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option disabled value="">
            Sort By Downloads
          </option>
          <option value="downloads-asc">Low - High</option>
          <option value="downloads-desc">High - Low</option>
        </select>
      </div>
      {sortedApps.length === 0 ? (
        <NoInstalledApp />
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {sortedApps.map((iApp) => (
            <InstalledApp
              iApp={iApp}
              key={iApp.id}
              setInstalledApp={setInstalledApp}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Installation;
