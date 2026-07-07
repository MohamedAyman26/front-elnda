export default function CategoryFilter() {
    const categories = [
      "All Products",
      "Seeds",
      "Fertilizers",
      "Irrigation",
      "Equipment",
    ];
  
    return (
      <div className="mb-14">
        <div className="flex flex-wrap items-center gap-4">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`px-7 py-3 rounded-full font-medium transition duration-300 border
                ${
                  index === 0
                    ? "bg-green-600 text-white border-green-600 shadow-lg"
                    : "bg-white text-gray-700 border-gray-200 hover:bg-green-600 hover:text-white hover:border-green-600"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    );
  }