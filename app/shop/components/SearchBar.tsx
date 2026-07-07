"use client";

import { Search, SlidersHorizontal } from "lucide-react";

type SearchBarProps = {
  search: string;
  setSearch: (value: string) => void;
};

export default function SearchBar({
  search,
  setSearch,
}: SearchBarProps) {
  return (
    <div className="mb-14">
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-3 flex flex-col md:flex-row gap-4 items-center">

        {/* Search Input */}
        <div className="relative flex-1 w-full">
          <Search
            size={20}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for seeds, fertilizers, irrigation..."
            className="
              w-full
              pl-14
              pr-6
              py-4
              rounded-2xl
              outline-none
              text-gray-700
              bg-transparent
            "
          />
        </div>

        {/* Filter Button */}
        <button
          className="
            w-full
            md:w-auto
            flex
            items-center
            justify-center
            gap-3
            bg-green-600
            hover:bg-green-700
            text-white
            px-8
            py-4
            rounded-2xl
            transition duration-300
          "
        >
          <SlidersHorizontal size={20} />
          Filters
        </button>
      </div>
    </div>
  );
}