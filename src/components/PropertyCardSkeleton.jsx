const PropertyCardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col h-full border border-gray-100 animate-pulse">
      <div className="relative h-64 bg-gray-200">
        <div className="absolute top-4 left-4 flex gap-2">
          <div className="bg-gray-300 h-6 w-24 rounded-full"></div>
          <div className="bg-gray-300 h-6 w-16 rounded-full"></div>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
        
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100 mt-auto">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
        </div>
        
        <div className="mt-6 h-10 bg-gray-200 rounded w-full"></div>
      </div>
    </div>
  );
};

export default PropertyCardSkeleton;
