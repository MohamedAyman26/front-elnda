"use client";

import Link from "next/link";
import { Heart, Trash2 } from "lucide-react";

import AddToCartButton from "../components/AddToCartButton";
import { useWishlist } from "../components/context/WishlistContext";

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist } = useWishlist();

  return (
    <section className="min-h-screen bg-[#F8FAF5] py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">

        {/* Heading */}
        <div className="text-center">
          <span className="uppercase tracking-[5px] text-sm font-semibold text-green-600">
            Wishlist
          </span>

          <h1 className="mt-4 text-5xl font-bold text-gray-900">
            Favorite Products
          </h1>
        </div>

        {/* Empty State */}
        {wishlistItems.length === 0 ? (
          <div className="mt-16 bg-white rounded-[32px] p-12 shadow-xl text-center">

            <h2 className="text-3xl font-bold text-gray-900">
              Your wishlist is empty
            </h2>

            <p className="mt-4 text-gray-500">
              Start adding your favorite products.
            </p>

            <Link
              href="/shop"
              className="
                inline-flex
                mt-10
                bg-green-600
                hover:bg-green-700
                text-white
                px-8
                py-4
                rounded-2xl
                transition
              "
            >
              Continue Shopping
            </Link>

          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {wishlistItems.map((product) => (
              <div
                key={product.id}
                className="
                  bg-white
                  rounded-[32px]
                  overflow-hidden
                  shadow-lg
                  border
                  border-gray-100
                  group
                "
              >

                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={
                      product.image ||
                      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1000"
                    }
                    alt={product.name}
                    className="
                      w-full
                      h-72
                      object-cover
                      transition
                      duration-700
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* Content */}
                <div className="p-7">

                  <div className="flex items-center justify-between">

                    <h3 className="text-2xl font-bold text-gray-900">
                      {product.name}
                    </h3>

                    <Heart
                      size={22}
                      className="fill-red-500 text-red-500"
                    />

                  </div>

                  <h4 className="mt-5 text-2xl font-bold text-green-600">
                    ${Number(product.price).toFixed(2)}
                  </h4>

                  <div className="flex gap-4 mt-8">

                    <div className="flex-1">

                      <AddToCartButton
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                      />

                    </div>

                    <button
                      onClick={() =>
                        removeFromWishlist(product.id)
                      }
                      className="
                        w-14
                        h-14
                        rounded-full
                        border
                        border-red-200
                        text-red-500
                        hover:bg-red-500
                        hover:text-white
                        transition
                      "
                    >
                      <Trash2
                        size={18}
                        className="mx-auto"
                      />
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </section>
  );
}