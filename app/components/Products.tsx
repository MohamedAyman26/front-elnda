"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import api from "../lib/api";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("products/");
        setProducts(response.data.slice(0, 6));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">

        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">

          <span className="uppercase tracking-[5px] text-sm font-semibold text-green-600">
            منتجاتنا المميزة
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            أفضل منتجاتنا الزراعية
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            نوفر مجموعة متنوعة من المنتجات الزراعية عالية الجودة التي
            تساعد على زيادة الإنتاج وتحقيق أفضل النتائج.
          </p>

        </div>

        {/* Products */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {products.map((product) => (
            <div
              key={product.id}
              className="
              overflow-hidden
              rounded-[32px]
              bg-white
              shadow-lg
              border border-gray-100
              group
              hover:-translate-y-2
              hover:shadow-2xl
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

                <span className="absolute top-5 left-5 bg-[#163020] text-white px-4 py-2 rounded-full text-sm">
                  الأكثر طلبًا
                </span>

              </div>

              {/* Content */}
              <div className="p-7">

                <div className="flex justify-between items-center">

                  <h3 className="text-2xl font-bold text-[#163020]">
                    {product.name}
                  </h3>

                  <span className="text-[#2E7D32] text-2xl font-bold">
                    ${Number(product.price).toFixed(2)}
                  </span>

                </div>

                <div className="mt-4 text-yellow-400 text-lg">
                  ⭐⭐⭐⭐⭐
                </div>

                <p className="mt-4 text-gray-600 line-clamp-2 leading-7">
                  {product.description}
                </p>

                <Link
                  href={`/products/${product.id}`}
                  className="
                  mt-8
                  w-full
                  flex
                  items-center
                  justify-center
                  bg-[#163020]
                  hover:bg-[#304D30]
                  text-white
                  py-3
                  rounded-full
                  transition-all
                  duration-300
                  "
                >
                  عرض التفاصيل
                </Link>

              </div>
            </div>
          ))}

        </div>

        {/* View All */}
        <div className="mt-16 flex justify-center">

          <Link
            href="/shop"
            className="
            bg-[#163020]
            hover:bg-[#304D30]
            text-white
            px-10
            py-4
            rounded-full
            transition-all
            duration-300
            "
          >
            عرض جميع المنتجات
          </Link>

        </div>

      </div>
    </section>
  );
}