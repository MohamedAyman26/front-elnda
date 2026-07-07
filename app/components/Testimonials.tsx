export default function Testimonials() {
  const testimonials = [
    {
      name: "ك / ايمن خليل ",
      role: "صاحب شركة الندى للزراعة",
      review:
        "نسعى إلى تقديم أفضل الحلول الزراعية والمنتجات عالية الجودة لدعم التنمية الزراعية وتحقيق أعلى مستويات الثقة والتميز لعملائنا.",
    },
    {
      name: "م / أحمد أيمن",
      role: "إدارة الشركة",
      review:
        "نعمل باستمرار على تطوير خدماتنا ومنتجاتنا لضمان تقديم حلول مبتكرة تواكب احتياجات السوق الزراعي وتحقق رضا عملائنا.",
    },
    {
      name: "م / محمد أيمن",
      role: "مطور الموقع الإلكتروني",
      review:
        "تم تطوير الموقع الإلكتروني لشركة الندى بأحدث التقنيات لتوفير تجربة استخدام سهلة وسريعة تساعد العملاء على الوصول إلى المنتجات والخدمات بكل سهولة.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[4px] text-sm font-semibold text-green-600">
            إدارة الشركة
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
          ايمن مخلوف الدباح واولاده          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            نفخر بفريق الإدارة الذي يقود شركة الندى نحو التميز والابتكار
            وتقديم أفضل الحلول الزراعية لعملائنا.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-[#F8FAF5] rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition duration-300"
            >
              <div className="text-yellow-400 text-2xl">
                ★★★★★
              </div>

              <p className="mt-6 text-gray-600 leading-8">
                "{testimonial.review}"
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900">
                  {testimonial.name}
                </h3>

                <span className="text-green-600 font-medium">
                  {testimonial.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}