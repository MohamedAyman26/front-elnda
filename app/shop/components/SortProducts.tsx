import { ArrowUpDown } from "lucide-react";

export default function SortProducts() {
  return (
    <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-5">

      {/* Products Count */}
      <div>
        <h3 className="text-2xl font-bold text-whight-900">
          Our Products
        </h3>

        <p className="mt-2 text-whight-500">
          Showing 1 - 6 of 24 products
        </p>
      </div>

      {/* Sort */}
      <div className="flex items-center gap-4 bg-white border border-gray-100 shadow-md rounded-2xl px-5 py-4">
        <ArrowUpDown
          size={20}
          className="text-green-600"
        />

        <select className="bg-transparent outline-none text-gray-700 font-medium cursor-pointer">
          <option>Latest Products</option>
          <option>Most Popular</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>

    </div>
  );
}