import { Star } from "lucide-react";
import RelatedProducts from "../../shop/components/RelatedProducts";
import AddToCartButton from "../../components/AddToCartButton";

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <section className="py-32 bg-[#F8FAF5]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Images */}
          <div>
            <div className="overflow-hidden rounded-[32px] shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1000"
                alt="Product"
                className="w-full h-[500px] object-cover"
              />
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <img
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1000"
                alt=""
                className="h-28 md:h-32 w-full object-cover rounded-2xl border-2 border-green-600"
              />

              <img
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1000"
                alt=""
                className="h-28 md:h-32 w-full object-cover rounded-2xl"
              />

              <img
                src="https://images.unsplash.com/photo-1492496913980-501348b61469?w=1000"
                alt=""
                className="h-28 md:h-32 w-full object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Content */}
          <div>

            <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-medium">
              Best Seller
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
              Organic Fertilizer #{id}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={20}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}

              <span className="ml-3 text-gray-500">
                (4.9 Reviews)
              </span>
            </div>

            {/* Price */}
            <h2 className="mt-8 text-4xl font-bold text-green-600">
              $29
            </h2>

            {/* Description */}
            <p className="mt-8 text-gray-600 leading-8">
              High-quality organic fertilizer designed to improve soil
              health, maximize productivity, and support sustainable
              farming for better crop yields.
            </p>

            {/* Quantity */}
            <div className="mt-10">
              <h3 className="text-xl font-bold text-gray-900 mb-5">
                Quantity
              </h3>

              <div className="flex items-center gap-5">
                <button className="w-12 h-12 rounded-full border border-gray-300">
                  -
                </button>

                <span className="text-2xl font-semibold text-gray-900">
                  1
                </span>

                <button className="w-12 h-12 rounded-full border border-gray-300">
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 mt-10">

              <AddToCartButton
                id={Number(id)}
                name={`Organic Fertilizer #${id}`}
                price={29}
              />

              <button className="border border-gray-300 hover:border-green-600 hover:text-green-600 px-10 py-4 rounded-full transition duration-300">
                Buy Now
              </button>

            </div>

            {/* Specifications */}
            <div className="mt-12 space-y-5">
              <div className="flex justify-between border-b border-gray-200 pb-4">
                <span className="font-semibold text-gray-900">
                  Category
                </span>

                <span className="text-gray-600">
                  Fertilizers
                </span>
              </div>

              <div className="flex justify-between border-b border-gray-200 pb-4">
                <span className="font-semibold text-gray-900">
                  Brand
                </span>

                <span className="text-gray-600">
                  Alnada Agriculture
                </span>
              </div>

              <div className="flex justify-between border-b border-gray-200 pb-4">
                <span className="font-semibold text-gray-900">
                  Availability
                </span>

                <span className="text-green-600 font-medium">
                  In Stock
                </span>
              </div>
            </div>

            {/* Features */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900">
                Product Features
              </h3>

              <div className="mt-6 space-y-4 text-gray-600">
                <p>✓ Premium Quality</p>
                <p>✓ Organic Materials</p>
                <p>✓ Eco Friendly</p>
                <p>✓ Fast Delivery</p>
              </div>
            </div>

          </div>
        </div>

        <div className="mt-24">
          <RelatedProducts />
        </div>
      </div>
    </section>
  );
}