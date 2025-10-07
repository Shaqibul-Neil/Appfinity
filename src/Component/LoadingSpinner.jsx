const LoadingSpinner = ({ count = 8 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <div className="flex flex-col gap-4" key={i}>
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 flex justify-between items-center">
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-28"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSpinner;
