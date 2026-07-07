"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import api from "../../lib/api";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export default function RelatedProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("products/");
        setProducts(response.data.slice(0, 3));
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="mt-32">

      {/* Heading */}
      <div className="text-center">

        <span className="uppercase tracking-[5px] text-sm font-semibold text-green-500">
          Related Products
        </span>

        <h2 className="mt-4 text-5xl font-bold text-[#163020]">
          You May Also Like
        </h2>

        <p className="mt-5 text-gray-600">
          Explore more premium agricultural products.
        </p>

      </div>

      {/* Products */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {products.map((product) => (
          <div
            key={product.id}
            className="
            group
            overflow-hidden
            rounded-[32px]
            bg-white
            border border-green-900/10
            shadow-lg
            hover:-translate-y-2
            hover:shadow-[0_25px_60px_rgba(22,48,32,0.15)]
            transition-all
            duration-500
            "
          >
            {/* Image */}
            <div className="relative overflow-hidden">

              <img
                src={product.image}
                alt={product.name}
                className="
                w-full
                h-72
                object-cover
                transition-all
                duration-700
                group-hover:scale-110
                "
              />

              <span
                className="
                absolute
                top-5
                left-5
                bg-[#163020]
                text-white
                px-4
                py-2
                rounded-full
                text-sm
                "
              >
                Featured
              </span>

            </div>

            {/* Content */}
            <div className="p-7">

              <div className="text-yellow-400 text-lg">
                ⭐⭐⭐⭐⭐
              </div>

              <div className="flex items-center justify-between mt-4">

                <h3 className="text-2xl font-bold text-[#163020]">
                  {product.name}
                </h3>

                <span className="text-2xl font-bold text-[#2E7D32]">
                  ${Number(product.price).toFixed(2)}
                </span>

              </div>

              <p className="mt-5 text-gray-600 leading-8 line-clamp-2">
                {product.description}
              </p>

              <Link
                href={`/products/${product.id}`}
                className="
                mt-8
                flex
                items-center
                justify-center
                w-full
                rounded-full
                bg-[#163020]
                hover:bg-[#1f472d]
                text-white
                py-4
                font-semibold
                transition-all
                duration-300
                "
              >
                View Details
              </Link>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}