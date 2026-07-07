export default function Pagination() {
    return (
      <div className="flex items-center justify-center gap-4 mt-20">
        <button className="px-5 py-3 rounded-full border border-gray-200 hover:border-green-600 hover:text-green-600 transition">
          Previous
        </button>
  
        <button className="w-12 h-12 rounded-full bg-green-600 text-white">
          1
        </button>
  
        <button className="w-12 h-12 rounded-full border border-gray-200 hover:border-green-600 hover:text-green-600 transition">
          2
        </button>
  
        <button className="w-12 h-12 rounded-full border border-gray-200 hover:border-green-600 hover:text-green-600 transition">
          3
        </button>
  
        <button className="px-5 py-3 rounded-full border border-gray-200 hover:border-green-600 hover:text-green-600 transition">
          Next
        </button>
      </div>
    );
  }