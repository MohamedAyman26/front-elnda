export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1000"
              alt="من نحن"
              className="w-full rounded-3xl object-cover shadow-2xl"
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-green-600 uppercase tracking-[4px] text-sm font-semibold">
              من نحن
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              نقدم حلولاً زراعية متكاملة لتحقيق أفضل النتائج
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              تسعى شركة الندى للخدمات الزراعية إلى توفير أجود المنتجات
              والحلول الزراعية الحديثة، بما يساهم في زيادة الإنتاجية
              وتحقيق التنمية الزراعية المستدامة، مع الالتزام بأعلى
              معايير الجودة وخدمة العملاء.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-green-600"></div>
                <p className="text-gray-700">
                  منتجات زراعية عالية الجودة
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-green-600"></div>
                <p className="text-gray-700">
                  حلول وتقنيات زراعية حديثة
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-green-600"></div>
                <p className="text-gray-700">
                  فريق عمل متخصص وخبرة واسعة
                </p>
              </div>
            </div>

            <button className="mt-10 bg-green-600 hover:bg-green-700 transition px-8 py-4 rounded-full text-white font-medium">
              اعرف المزيد
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}