export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1800')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/60" />

      {/* Blur Circle */}
      <div className="absolute top-32 left-20 h-72 w-72 rounded-full bg-green-500/20 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 min-h-screen flex items-center">

        <div className="max-w-4xl text-white">

          {/* Company Badge */}
          <div className="inline-flex items-center gap-3 rounded-full border border-green-500/30 bg-white/10 backdrop-blur-xl px-6 py-3">

            <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></div>

            <span className="text-sm tracking-[4px] text-green-300">
              اصل المبيدات في مصر 
            </span>

          </div>

          {/* Parent Company */}
          <p className="mt-5 text-gray-300 text-sm md:text-base">
            (شركة أيمن مخلوف الدباح وأولاده)
          </p>

          {/* Title */}
          <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">
            نبني مستقبلًا زراعيًا
            <br />

            <span className="text-green-400">
              أكثر ازدهارًا واستدامة
            </span>
          </h1>

          {/* Description */}
          <p className="mt-10 text-gray-200 text-lg leading-9 max-w-3xl">
            نقدم حلولًا زراعية متكاملة تشمل الأسمدة والمبيدات والتقاوي
            عالية الجودة، بالإضافة إلى خدمات تحليل التربة والاستشارات
            الزراعية والمشروعات الحديثة، لتحقيق أعلى مستويات الإنتاج
            والجودة ودعم التنمية المستدامة.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap gap-5">

            <button className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full font-semibold transition duration-300 shadow-xl">
              استكشف خدماتنا
            </button>

            <button className="border border-white/20 bg-white/10 backdrop-blur-xl hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold transition duration-300">
              منتجاتنا الزراعية
            </button>

          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-6 hover:-translate-y-2 transition duration-500">

              <h2 className="text-4xl font-bold text-green-400">
                +500
              </h2>

              <p className="mt-3 text-gray-300">
                عميل يثق بنا
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-6 hover:-translate-y-2 transition duration-500">

              <h2 className="text-4xl font-bold text-green-400">
                +1000
              </h2>

              <p className="mt-3 text-gray-300">
                مشروع وخدمة ناجحة
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-6 hover:-translate-y-2 transition duration-500">

              <h2 className="text-4xl font-bold text-green-400">
                +1
              </h2>

              <p className="mt-3 text-gray-300">
                عام من الخبرة
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-6 hover:-translate-y-2 transition duration-500">

              <h2 className="text-4xl font-bold text-green-400">
                24/7
              </h2>

              <p className="mt-3 text-gray-300">
                دعم واستشارات
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}