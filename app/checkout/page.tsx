"use client";

import { useState } from "react";
import {
  ShieldCheck,
  User,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import toast from "react-hot-toast";

import { useCart } from "../components/context/CartContext";
import api from "../lib/api";

export default function CheckoutPage() {
  const { cartItems, clearCart } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = cartItems.length > 0 ? 5 : 0;
  const total = subtotal + shipping;

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    customer_name: "",
    email: "",
    phone: "",
    city: "",
    address: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = async () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    try {
      setLoading(true);

      console.log("Sending Order...");

      const order = await api.post("orders/", {
        customer_name: formData.customer_name,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        address: formData.address,
        total_price: total,
        items: cartItems.map((item) => ({
          product: item.id,
          quantity: item.quantity,
        })),
      });

      console.log("Order Created", order.data);

      const payment = await api.post("payments/", {
        amount: total,
        first_name:
          formData.customer_name.split(" ")[0] || "Customer",

        last_name:
          formData.customer_name
            .split(" ")
            .slice(1)
            .join(" ") || "User",

        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
      });

      // تم إضافة التعديل المطلوب هنا
      await api.patch(
        `orders/${order.data.id}/`,
        {
          paymob_order_id: payment.data.paymob_order_id,
        }
      );

      window.location.href = payment.data.payment_url;

    } catch (error: any) {
      console.log(error.response?.data);

      toast.error(
        error?.response?.data?.error ||
        "Failed to create payment"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#F8FAF5] to-white py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-6 py-3 rounded-full font-medium">
            <ShieldCheck size={18} />
            Secure Checkout
          </div>
          <h1 className="mt-8 text-5xl md:text-6xl font-bold text-[#163020]">
            Complete Your Order
          </h1>
          <p className="mt-5 text-gray-700 max-w-2xl mx-auto text-lg leading-8">
            Fill in your information below and complete your order securely and easily.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 mt-20">
          {/* Left Side */}
          <div className="xl:col-span-2">
            <div className="bg-white rounded-[40px] shadow-xl border border-gray-200 p-10">
              <h2 className="text-3xl font-bold text-[#163020]">Customer Information</h2>
              <div className="grid md:grid-cols-2 gap-7 mt-10">
                {/* Full Name */}
                <div>
                  <label className="block mb-3 text-gray-800 font-semibold">Full Name</label>
                  <div className="relative">
                    <User size={18} className="absolute left-5 top-5 text-gray-400" />
                    <input
                      type="text"
                      name="customer_name"
                      value={formData.customer_name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-gray-50 border border-gray-300 rounded-2xl py-4 pl-14 pr-5 text-gray-800 placeholder:text-gray-500 outline-none focus:border-green-600 transition"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block mb-3 text-gray-800 font-semibold">Email Address</label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-5 top-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@gmail.com"
                      className="w-full bg-gray-50 border border-gray-300 rounded-2xl py-4 pl-14 pr-5 text-gray-800 placeholder:text-gray-500 outline-none focus:border-green-600 transition"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block mb-3 text-gray-800 font-semibold">Phone Number</label>
                  <div className="relative">
                    <Phone size={18} className="absolute left-5 top-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+20 100 000 0000"
                      className="w-full bg-gray-50 border border-gray-300 rounded-2xl py-4 pl-14 pr-5 text-gray-800 placeholder:text-gray-500 outline-none focus:border-green-600 transition"
                    />
                  </div>
                </div>

                {/* City */}
                <div>
                  <label className="block mb-3 text-gray-800 font-semibold">City</label>
                  <div className="relative">
                    <MapPin size={18} className="absolute left-5 top-5 text-gray-400" />
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Cairo"
                      className="w-full bg-gray-50 border border-gray-300 rounded-2xl py-4 pl-14 pr-5 text-gray-800 placeholder:text-gray-500 outline-none focus:border-green-600 transition"
                    />
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="mt-8">
                <label className="block mb-3 text-gray-800 font-semibold">Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Enter your address"
                  className="w-full bg-gray-50 border border-gray-300 rounded-3xl p-5 text-gray-800 placeholder:text-gray-500 outline-none focus:border-green-600 transition"
                />
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <div className="sticky top-32 bg-[#163020] rounded-[40px] p-8 shadow-2xl">
              <h2 className="text-3xl font-bold text-white">Order Summary</h2>
              
              <div className="mt-10 space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-gray-300">
                    <span>{item.name} × {item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}

                <div className="flex justify-between text-gray-300">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>

                <div className="border-t border-white/10 pt-6 flex justify-between">
                  <span className="text-2xl font-bold text-white">Total</span>
                  <span className="text-3xl font-bold text-green-400">
                    ${total.toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={handlePlaceOrder}
                  disabled={loading}
                  className="mt-10 w-full rounded-2xl bg-green-600 hover:bg-green-700 disabled:bg-gray-500 py-4 text-lg font-semibold text-white transition"
                >
                  {loading ? "Please Wait..." : "Place Order"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}