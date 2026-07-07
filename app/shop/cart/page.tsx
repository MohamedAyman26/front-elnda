"use client";

import Link from "next/link";
import { Trash2 } from "lucide-react";
import { useCart } from "../../components/context/CartContext";

export default function CartPage() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = cartItems.length > 0 ? 5 : 0;

  const total = subtotal + shipping;

  return (
    <section className="min-h-screen bg-[#F8FAF5] py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        {/* Heading */}
        <div className="text-center">
          <span className="uppercase tracking-[5px] text-sm font-semibold text-green-600">
            Shopping Cart
          </span>

          <h1 className="mt-4 text-5xl font-bold text-gray-900">
            Your Cart
          </h1>
        </div>

        <div className="mt-20 grid grid-cols-1 xl:grid-cols-3 gap-10">
          {/* Products */}
          <div className="xl:col-span-2">
            {cartItems.length === 0 ? (
              <div className="bg-white rounded-[32px] p-10 shadow-xl text-center">
                <h2 className="text-3xl font-bold text-gray-900">
                  Your cart is empty
                </h2>

                <Link
                  href="/shop"
                  className="inline-flex mt-10 bg-green-600 text-white px-8 py-4 rounded-2xl hover:bg-green-700 transition"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-[32px] shadow-xl border border-gray-100 p-8 mb-8"
                >
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Image */}
                    <img
                      src={
                        item.image ||
                        "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1000"
                      }
                      alt={item.name}
                      className="w-full lg:w-64 h-64 rounded-3xl object-cover"
                    />

                    {/* Content */}
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-gray-900">
                        {item.name}
                      </h2>

                      {/* Quantity Controls */}
                      <div className="mt-6 flex items-center gap-4">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-2xl font-bold transition"
                        >
                          -
                        </button>

                        <span className="text-2xl font-bold w-8 text-center">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="w-10 h-10 rounded-full bg-green-600 hover:bg-green-700 text-white text-2xl font-bold transition"
                        >
                          +
                        </button>
                      </div>

                      <h3 className="mt-6 text-4xl font-bold text-green-600">
                        ${(item.price * item.quantity).toFixed(2)}
                      </h3>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="mt-8 flex items-center gap-2 text-red-500 hover:text-red-600 transition"
                      >
                        <Trash2 size={20} />
                        Remove Item
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Summary */}
          <div>
            <div className="bg-white rounded-[32px] shadow-xl border border-gray-100 p-8 sticky top-32">
              <h2 className="text-3xl font-bold text-gray-900">
                Order Summary
              </h2>

              <div className="mt-10 space-y-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>

                  <span className="font-semibold">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>

                  <span className="font-semibold">
                    ${shipping.toFixed(2)}
                  </span>
                </div>

                <div className="border-t pt-6 flex justify-between">
                  <span className="text-2xl font-bold text-gray-900">
                    Total
                  </span>

                  <span className="text-3xl font-bold text-green-600">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="mt-10 w-full flex items-center justify-center bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-semibold transition duration-300"
              >
                Proceed To Checkout
              </Link>

              <Link
                href="/shop"
                className="mt-5 w-full flex items-center justify-center border border-gray-300 py-4 rounded-2xl hover:border-green-600 hover:text-green-600 transition duration-300"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}