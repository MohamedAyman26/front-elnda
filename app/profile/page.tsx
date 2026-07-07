import {
    User,
    Mail,
    Phone,
    MapPin,
    ShoppingBag,
    Heart,
  } from "lucide-react";
  
  export default function ProfilePage() {
    return (
      <section className="py-32 bg-[#F8FAF5] min-h-screen">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
  
          {/* Heading */}
          <div className="text-center">
            <span className="uppercase tracking-[5px] text-sm font-semibold text-green-600">
              My Account
            </span>
  
            <h1 className="mt-4 text-5xl font-bold text-gray-900">
              Profile
            </h1>
          </div>
  
          <div className="grid lg:grid-cols-3 gap-10 mt-20">
  
            {/* Left Side */}
            <div className="bg-white rounded-[32px] p-8 shadow-lg">
  
              <div className="flex flex-col items-center">
                <div className="w-28 h-28 rounded-full bg-green-100 flex items-center justify-center">
                  <User size={40} className="text-green-600" />
                </div>
  
                <h2 className="mt-6 text-2xl font-bold text-gray-900">
                  Mohamed Ayman
                </h2>
  
                <p className="text-gray-500 mt-2">
                  Customer
                </p>
              </div>
  
              <div className="mt-10 space-y-6">
  
                <div className="flex items-center gap-4">
                  <Mail className="text-green-600" />
                  <span className="text-gray-600">
                    amohamedayman32@gmail.com
                  </span>
                </div>
  
                <div className="flex items-center gap-4">
                  <Phone className="text-green-600" />
                  <span className="text-gray-600">
                    +20 127 759 9273
                  </span>
                </div>
  
                <div className="flex items-center gap-4">
                  <MapPin className="text-green-600" />
                  <span className="text-gray-600">
                    Egypt
                  </span>
                </div>
  
              </div>
            </div>
  
            {/* Right Side */}
            <div className="lg:col-span-2 bg-white rounded-[32px] p-8 shadow-lg">
  
              <h2 className="text-3xl font-bold text-gray-900">
                Account Overview
              </h2>
  
              <div className="grid md:grid-cols-2 gap-8 mt-10">
  
                <div className="bg-[#F8FAF5] rounded-3xl p-8">
                  <ShoppingBag
                    size={35}
                    className="text-green-600"
                  />
  
                  <h3 className="mt-6 text-3xl font-bold text-gray-900">
                    12
                  </h3>
  
                  <p className="mt-2 text-gray-500">
                    Total Orders
                  </p>
                </div>
  
                <div className="bg-[#F8FAF5] rounded-3xl p-8">
                  <Heart
                    size={35}
                    className="text-red-500"
                  />
  
                  <h3 className="mt-6 text-3xl font-bold text-gray-900">
                    5
                  </h3>
  
                  <p className="mt-2 text-gray-500">
                    Wishlist Items
                  </p>
                </div>
  
              </div>
  
            </div>
  
          </div>
        </div>
      </section>
    );
  }