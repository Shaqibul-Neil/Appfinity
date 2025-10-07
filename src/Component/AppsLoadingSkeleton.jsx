import LoadingSpinner from "./LoadingSpinner";

const AppsLoadingSkeleton = () => {
  return (
    <div className="lg:space-y-16 md:space-y-12 space-y-8 py-16 w-11/12 mx-auto lg:px-8 md:px-4 px-2">
      <div className="space-y-4 skeleton w-full h-20 bg-gray-200"></div>
      <div className="flex md:flex-row flex-col justify-between items-center gap-4">
        <div className="skeleton h-12 w-64 bg-gray-200"></div>
        <div className="skeleton h-12 w-64 bg-gray-200"></div>
      </div>
      <LoadingSpinner count="12" />
    </div>
  );
};

export default AppsLoadingSkeleton;
