const Installation = () => {
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
          0 Apps Found
        </h2>
        <select className="select select-primary">
          <option disabled value="">
            Sort By Size
          </option>
          <option value="size-asc">Low - High</option>
          <option value="size-desc">High - Low</option>
        </select>
      </div>
      <div className="grid grid-cols-1 gap-4"></div>
    </div>
  );
};

export default Installation;
