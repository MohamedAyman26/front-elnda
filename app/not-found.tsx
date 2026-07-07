import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#F8FAF5]">
      <h1 className="text-8xl font-bold text-green-600">
        404
      </h1>

      <h2 className="mt-6 text-3xl font-bold text-gray-900">
        Page Not Found
      </h2>

      <Link
        href="/"
        className="mt-8 bg-green-600 text-white px-8 py-4 rounded-full"
      >
        Back Home
      </Link>
    </section>
  );
}