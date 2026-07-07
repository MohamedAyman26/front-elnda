export default function Services() {
  const services = [
    {
      title: "المنتجات الزراعية",
      description:
        "نوفر مجموعة متنوعة من الأسمدة والمبيدات والتقاوي عالية الجودة وفق أعلى المعايير.",
    },
    {
      title: "الحلول الزراعية الحديثة",
      description:
        "نقدم حلولاً وتقنيات زراعية متطورة تساعد على زيادة الإنتاج وتحقيق التنمية المستدامة.",
    },
    {
      title: "الدعم والاستشارات",
      description:
        "فريق متخصص يقدم الاستشارات والخدمات الفنية لضمان أفضل النتائج لعملائنا.",
    },
  ];

  return (
    <section className="py-24 bg-[#F8FAF5]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-green-600 uppercase tracking-[4px] text-sm font-semibold">
            خدماتنا
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            ماذا نقدم لعملائنا
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            نقدم منتجات وخدمات زراعية متكاملة تساهم في دعم الإنتاج الزراعي
            وتحقيق أعلى مستويات الجودة والكفاءة.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
                🌱
              </div>

              <h3 className="text-2xl font-bold text-gray-900">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {service.description}
              </p>

              <button className="mt-6 text-green-600 font-semibold hover:text-green-700">
                اعرف المزيد ←
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}