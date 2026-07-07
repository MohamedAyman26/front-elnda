"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Heart, Eye } from "lucide-react";
import AddToCartButton from "../../components/AddToCartButton";
import api from "../../lib/api";
import { useWishlist } from "../../components/context/WishlistContext";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
}

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("products/");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <section className="flex justify-center items-center py-32">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#163020]">Loading Products...</h2>
          <p className="mt-3 text-gray-500">Please wait a moment</p>
        </div>
      </section>
    );
  }

  return (
    <section>
      {/* Search Bar */}
      <div className="mb-12">
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-3">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full px-6 py-4 rounded-2xl outline-none text-gray-700"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group overflow-hidden rounded-[32px] bg-[#FCFDFB] border border-green-900/10 shadow-lg hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(22,48,32,0.15)] transition-all duration-500"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover transition-all duration-700 group-hover:scale-110"
              />

              {/* Badge */}
              <span className="absolute top-5 left-5 bg-[#163020] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                Best Seller
              </span>

             {/* Wishlist */}
<button
  onClick={() => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: Number(product.price),
        image: product.image,
      });
    }
  }}
  className="
    absolute
    top-5
    right-5
    w-12
    h-12
    rounded-full
    bg-white/90
    backdrop-blur-xl
    flex
    items-center
    justify-center
    shadow-lg
    transition-all
    duration-300
    hover:bg-red-50
  "
>
  <Heart
    size={18}
    className={
      isInWishlist(product.id)
        ? "fill-red-500 text-red-500"
        : "text-[#163020]"
    }
  />
</button>
            </div>

            {/* Content */}
            <div className="p-7">
              {/* Rating */}
              <div className="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</div>

              {/* Name + Price */}
              <div className="flex items-center justify-between mt-4">
                <h3 className="text-2xl font-bold text-[#163020]">
                  {product.name}
                </h3>
                <span className="text-2xl font-bold text-[#2E7D32]">
                  ${Number(product.price).toFixed(2)}
                </span>
              </div>

              {/* Description */}
              <p className="mt-5 text-gray-600 leading-8 line-clamp-2">
                {product.description}
              </p>

              {/* Buttons */}
              <div className="mt-8 flex gap-4">
                <div className="flex-1">
                  <AddToCartButton
                    id={product.id}
                    name={product.name}
                    price={Number(product.price)}
                    image={product.image}
                  />
                </div>

                <Link
                  href={`/products/${product.id}`}
                  className="flex items-center justify-center w-14 h-14 rounded-full bg-[#F8FAF5] border border-gray-200 text-[#163020] hover:bg-[#163020] hover:text-white transition-all duration-300"
                >
                  <Eye size={18} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}