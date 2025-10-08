const HomeLoadingSkeleton = () => {
  return (
    <div className="lg:py-24 md:py-20 py-16">
      <div className="lg:space-y-6 space-y-4">
        <div className="md:h-60 lg:w-8/12 h-64 md:w-10/12 w-11/12 mx-auto skeleton bg-gray-200"></div>
      </div>
      <div className="flex items-center justify-center gap-4 lg:mt-12 mt-8">
        <div className="h-10 skeleton bg-gray-200 w-24"></div>
        <div className="h-10 skeleton bg-gray-200 w-24"></div>
      </div>
      <div className="lg:w-8/12 w-11/12 skeleton bg-gray-200 h-96 mx-auto mt-12 pt-12"></div>
    </div>
  );
};

export default HomeLoadingSkeleton;
