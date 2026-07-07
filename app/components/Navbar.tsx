"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Search,
  ShoppingCart,
  User,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

import { useCart } from "../components/context/CartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { cartItems } = useCart();

  // إجمالي عدد المنتجات داخل السلة
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "/shop" },
    { name: "Services", href: "#services" },
    { name: "Contact Us", href: "#Contact" },
  ];
  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/30 backdrop-blur-2xl">
        <nav className="max-w-7xl mx-auto h-14 px-6 md:px-8 lg:px-10 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="select-none">
            <h1 className="text-xl font-bold text-white leading-none">
              ALNADA
            </h1>

            <p className="mt-1 text-[9px] tracking-[4px] text-green-400">
              AGRICULTURE
            </p>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="relative text-[13px] text-gray-200 font-medium transition duration-300 hover:text-green-400 group"
                >
                  {link.name}

                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-2">

            {/* Search */}
            <button className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-green-600 transition duration-300">
              <Search size={16} />
            </button>

            {/* Cart */}
            <Link
              href="/shop/cart"
              className="relative w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-green-600 transition duration-300"
            >
              <ShoppingCart size={16} />

              {totalQuantity > 0 && (
                <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full bg-green-500 text-[10px] flex items-center justify-center text-white font-semibold">
                  {totalQuantity}
                </span>
              )}
            </Link>

            {/* Account */}
            <Link
              href="/login"
              className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-green-600 transition duration-300"
            >
              <User size={16} />
            </Link>

            {/* Contact Button */}
            <button className="group flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-[13px] text-white font-medium hover:bg-green-700 transition duration-300">
              Contact

              <ArrowUpRight
                size={15}
                className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>

          </div>

          {/* Mobile Menu */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-white"
          >
            <Menu size={24} />
          </button>

        </nav>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/60 z-40 transition duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-[280px] bg-[#111827] z-50 p-8 transition-all duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close */}
        <div className="flex justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white"
          >
            <X size={26} />
          </button>
        </div>

        {/* Links */}
        <div className="mt-12 flex flex-col gap-7 text-white">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg hover:text-green-400 transition"
            >
              {link.name}
            </Link>
          ))}

          <div className="border-t border-white/10 pt-8 flex flex-col gap-6">

            <Link
              href="/shop/cart"
              className="flex items-center gap-3 hover:text-green-400 transition"
            >
              <ShoppingCart size={18} />
              Cart ({totalQuantity})
            </Link>

            <Link
              href="/checkout"
              className="flex items-center gap-3 hover:text-green-400 transition"
            >
              💳 Checkout
            </Link>

            <Link
              href="/login"
              className="flex items-center gap-3 hover:text-green-400 transition"
            >
              <User size={18} />
              Account
            </Link>

          </div>

          <button className="mt-6 bg-green-600 hover:bg-green-700 py-3 rounded-full flex items-center justify-center gap-2 transition duration-300">
            Contact Us
            <ArrowUpRight size={18} />
          </button>

        </div>
      </div>
    </>
  );
}