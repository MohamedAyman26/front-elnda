import Navbar from "../components/Navbar";

import ShopHero from "./components/ShopHero";
import CategoryFilter from "./components/CategoryFilter";
import SortProducts from "./components/SortProducts";
import ProductGrid from "./components/ProductGrid";
import Pagination from "./components/Pagination";

export default function ShopPage() {
  return (
    <>
      <Navbar />

      <ShopHero />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-20">
        <CategoryFilter />

        <SortProducts />

        <ProductGrid />

        <Pagination />
      </div>
    </>
  );
}