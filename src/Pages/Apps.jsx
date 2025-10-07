import { useState } from "react";
import App from "../Component/App";
import AppsLoadingSkeleton from "../Component/AppsLoadingSkeleton";
import useApp from "../Hooks/useApp";
import NoSearchedApp from "../Component/NoSearchedApp";
import { MagnifyingGlass } from "react-loader-spinner";

const Apps = () => {
  const [search, setSearch] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const { apps, loading, error } = useApp();

  //getting the searched text
  const searchedApp = search.toLowerCase().trim();

  //filtering the main apps array to find the search item
  const searchedApps = search
    ? apps.filter((el) => el.title.toLowerCase().includes(searchedApp))
    : apps;

  const handleSearch = (e) => {
    setSearch(e.target.value);
    //set the search to true
    setSearchLoading(true);
    //add a timeout
    setTimeout(() => {
      setSearchLoading(false);
    }, 1000);
  };

  return loading ? (
    <AppsLoadingSkeleton />
  ) : (
    <div className="lg:space-y-16 md:space-y-12 space-y-8 py-16 w-11/12 mx-auto lg:px-8 md:px-4 px-2">
      <div className="space-y-4">
        <h2 className="lg:text-5xl md:text-4xl text-2xl font-bold text-center text-[#001931]">
          Our All Applications
        </h2>
        <p className="text-center md:px-0 px-8">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center gap-4">
        <h2 className="lg:text-2xl text-lg font-semibold pb-1 border-b text-[#001931]">
          ({searchedApps.length}) Apps Found
        </h2>
        <label className="input input-bordered input-primary">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            placeholder="Search Apps"
            value={search}
            onChange={handleSearch}
          />
        </label>
      </div>

      {searchedApps.length == 0 ? (
        <NoSearchedApp />
      ) : searchLoading ? (
        <div className="w-8/12 mx-auto flex justify-center">
          <MagnifyingGlass
            visible={true}
            height="180"
            width="180"
            ariaLabel="magnifying-glass-loading"
            wrapperStyle={{}}
            wrapperClass="magnifying-glass-wrapper"
            glassColor="#eadcff"
            color="#9f62f2"
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {searchedApps.map((app) => (
            <App key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
