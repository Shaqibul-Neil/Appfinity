import { useEffect, useState } from "react";
import InstalledLoadingSpinner from "../Component/InstalledLoadingSpinner";
import useApp from "../Hooks/useApp";
import NoInstalledApp from "../Component/NoInstalledApp";
import InstalledApp from "../Component/InstalledApp";

const Installation = () => {
  const [installedApps, setInstalledApp] = useState([]);
  const [sortBy, setSortBy] = useState("");
  //getting data from local storage
  useEffect(() => {
    const getExistingApp = JSON.parse(localStorage.getItem("appList"));
    if (getExistingApp) setInstalledApp(getExistingApp);
  }, []);

  const { loading } = useApp();
  if (loading) return <InstalledLoadingSpinner />;

  const sortedApps = [...installedApps].sort((a, b) => {
    if (sortBy === "size-asc") return a.size - b.size;
    if (sortBy === "size-desc") return b.size - a.size;
    return 0;
  });

  return (
    <div className="installationDiv">
      <div className="space-y-4">
        <h2 className="installationTitle">Your Installed Apps</h2>
        <p className="text-center md:px-0 px-8">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="installationCont">
        <h2 className="installAppTitle">
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
            Sort By Size
          </option>
          <option value="size-asc">Low - High</option>
          <option value="size-desc">High - Low</option>
        </select>
      </div>
      {sortedApps.length === 0 ? (
        <NoInstalledApp />
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {sortedApps.map((iApp) => (
            <InstalledApp iApp={iApp} key={iApp.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Installation;
