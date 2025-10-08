const AppDetailsSkeleton = () => {
  return (
    <div className="w-11/12 mx-auto lg:px-8 md:px-4 px-2">
      <div className="flex lg:flex-row flex-col items-center gap-8 mt-24 mb-20 pb-12 ">
        <div className="lg:w-[550px] lg:h-[350px] w-[300px] h-[250px] skeleton bg-gray-200"></div>
        <div className="space-y-4 w-full">
          <div className="skeleton bg-gray-200 h-20 w-full"></div>
          <div className="skeleton bg-gray-200 h-28 w-full"></div>
          <div className="skeleton bg-gray-200 h-10 w-36"></div>
        </div>
      </div>
      <div className="skeleton bg-gray-200 h-80 w-full mb-12"></div>
      <div className="skeleton bg-gray-200 h-80 w-full"></div>
    </div>
  );
};

export default AppDetailsSkeleton;
