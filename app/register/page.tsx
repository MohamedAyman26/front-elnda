"use client";

import Link from "next/link";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="min-h-screen bg-[#F8FAF5] flex items-center justify-center px-6 py-32">
      <div className="w-full max-w-6xl bg-white rounded-[40px] shadow-2xl overflow-hidden grid lg:grid-cols-2">

        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-center bg-green-700 text-white p-14">
          <span className="uppercase tracking-[5px] text-sm">
            Join ALNADA
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight">
            Create Your Account Today
          </h1>

          <p className="mt-8 text-lg text-green-100 leading-8">
            Access premium products and manage your orders easily.
          </p>
        </div>

        {/* Right Side */}
        <div className="p-8 md:p-14">

          <h2 className="text-4xl font-bold text-gray-900">
            Sign Up
          </h2>

          <p className="mt-3 text-gray-500">
            Create your account and start growing with us.
          </p>

          <form className="mt-10 space-y-6">

            {/* Name */}
            <div>
              <label className="font-medium text-gray-700">
                Full Name
              </label>

              <div className="mt-3 flex items-center border border-gray-200 rounded-2xl px-5 py-4">
                <User className="text-gray-400" size={20} />

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="ml-3 w-full outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="font-medium text-gray-700">
                Email Address
              </label>

              <div className="mt-3 flex items-center border border-gray-200 rounded-2xl px-5 py-4">
                <Mail className="text-gray-400" size={20} />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="ml-3 w-full outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="font-medium text-gray-700">
                Password
              </label>

              <div className="mt-3 flex items-center border border-gray-200 rounded-2xl px-5 py-4">
                <Lock className="text-gray-400" size={20} />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="ml-3 w-full outline-none"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="text-gray-400" size={20} />
                  ) : (
                    <Eye className="text-gray-400" size={20} />
                  )}
                </button>
              </div>
            </div>

            {/* Button */}
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-medium transition duration-300">
              Create Account
            </button>

            {/* Google */}
            <button
              type="button"
              className="w-full border border-gray-200 py-4 rounded-2xl hover:bg-gray-50 transition"
            >
              Continue With Google
            </button>

            {/* Login */}
            <p className="text-center text-gray-500">
              Already have an account?

              <Link
                href="/login"
                className="ml-2 text-green-600 font-semibold"
              >
                Sign In
              </Link>
            </p>

          </form>
        </div>
      </div>
    </section>
  );
}