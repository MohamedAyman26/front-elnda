"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import api from "../lib/api";
import AddToCartButton from "../../app/components/AddToCartButton";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
}

export default function ProductDetailsPage() {
  const params = useParams();

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`products/${params.id}/`);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [params.id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-3xl font-bold text-[#163020]">
          Loading...
        </h1>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#F8FAF5] py-32">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Image */}
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-[40px] shadow-2xl"
            />
          </div>

          {/* Content */}
          <div>

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
              {product.category}
            </span>

            <h1 className="mt-8 text-5xl font-bold text-[#163020]">
              {product.name}
            </h1>

            <div className="mt-6 text-yellow-400 text-2xl">
              ⭐⭐⭐⭐⭐
            </div>

            <h2 className="mt-8 text-4xl font-bold text-green-700">
              ${Number(product.price).toFixed(2)}
            </h2>

            <p className="mt-8 text-gray-600 leading-9 text-lg">
              {product.description}
            </p>

            <div className="mt-8">
              <p className="text-gray-700">
                Stock:
                <span className="ml-3 text-green-700 font-bold">
                  {product.stock}
                </span>
              </p>
            </div>

            <div className="mt-12 max-w-sm">
              <AddToCartButton
                id={product.id}
                name={product.name}
                price={Number(product.price)}
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}