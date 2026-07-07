import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function OrderSuccessPage() {
  return (
    <section className="min-h-screen bg-[#F8FAF5] flex items-center justify-center px-6">
      <div className="bg-white max-w-2xl w-full rounded-[40px] shadow-2xl p-12 text-center">

        <CheckCircle
          size={90}
          className="mx-auto text-green-600"
        />

        <h1 className="mt-8 text-5xl font-bold text-[#163020]">
          Order Confirmed
        </h1>

        <p className="mt-6 text-gray-600 text-lg leading-8">
          Thank you for your order.
          <br />
          We have received your order successfully and will contact you soon.
        </p>

        <div className="mt-10 flex justify-center gap-5">

          <Link
            href="/shop"
            className="
            px-8
            py-4
            rounded-2xl
            bg-green-600
            hover:bg-green-700
            text-white
            font-semibold
            transition
            "
          >
            Continue Shopping
          </Link>

          <Link
            href="/"
            className="
            px-8
            py-4
            rounded-2xl
            border
            border-gray-300
            hover:border-green-600
            hover:text-green-600
            transition
            "
          >
            Back Home
          </Link>

        </div>

      </div>
    </section>
  );
}