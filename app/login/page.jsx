"use client";

import Link from "next/link";
import { Mail, Lock } from "lucide-react";

export default function LoginPage() {
  return (
    <section className="min-h-screen bg-[#F8FAF5] flex items-center justify-center px-6 py-32">
      <div className="w-full max-w-md bg-white rounded-[32px] shadow-xl p-10">

        {/* Heading */}
        <div className="text-center">
          <span className="uppercase tracking-[5px] text-sm font-semibold text-green-600">
            Welcome Back
          </span>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            Login
          </h1>

          <p className="mt-4 text-gray-500">
            Sign in to your account
          </p>
        </div>

        {/* Form */}
        <form className="mt-10 space-y-6">

          {/* Email */}
          <div>
            <label className="text-gray-700 font-medium">
              Email Address
            </label>

            <div className="mt-3 flex items-center gap-3 border border-gray-200 rounded-2xl px-5 py-4 focus-within:border-green-600 transition">
              <Mail size={20} className="text-gray-400" />

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-700 font-medium">
              Password
            </label>

            <div className="mt-3 flex items-center gap-3 border border-gray-200 rounded-2xl px-5 py-4 focus-within:border-green-600 transition">
              <Lock size={20} className="text-gray-400" />

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Remember */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-500">
              <input type="checkbox" />
              Remember me
            </label>

            <Link
              href="/forgot-password"
              className="text-green-600 hover:text-green-700"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Button */}
          <button
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-semibold transition duration-300"
          >
            Login
          </button>

          {/* Register */}
          <p className="text-center text-gray-500">
            Don't have an account?

            <Link
              href="/register"
              className="ml-2 text-green-600 font-medium hover:text-green-700"
            >
              Register
            </Link>
          </p>

        </form>
      </div>
    </section>
  );
}