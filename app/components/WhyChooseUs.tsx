import {
  BadgeCheck,
  Leaf,
  Users,
  ShieldCheck,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: BadgeCheck,
      title: "جودة عالية",
      description:
        "نوفر منتجات زراعية عالية الجودة تلبي أعلى المعايير لضمان أفضل النتائج.",
    },
    {
      icon: Leaf,
      title: "حلول مستدامة",
      description:
        "نقدم حلولاً مبتكرة وصديقة للبيئة لدعم التنمية الزراعية وتحقيق النجاح المستدام.",
    },
    {
      icon: Users,
      title: "فريق متخصص",
      description:
        "يضم فريقنا نخبة من المتخصصين ذوي الخبرة لتقديم أفضل الخدمات والاستشارات الزراعية.",
    },
    {
      icon: ShieldCheck,
      title: "ثقة العملاء",
      description:
        "نفخر بثقة عملائنا واعتمادهم على منتجاتنا وخدماتنا لتحقيق أعلى مستويات الجودة.",
    },
  ];

  return (
    <section className="py-24 bg-[#F8FAF5]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="uppercase tracking-[5px] text-sm font-semibold text-green-600">
            لماذا نحن
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            معًا نحو نجاح زراعي مستدام
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            نجمع بين الجودة والخبرة والابتكار لتقديم أفضل الحلول الزراعية
            التي تساعد على تحقيق النمو والإنتاجية بأعلى مستوى.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="bg-white rounded-[32px] border border-gray-100 shadow-lg p-8 group hover:-translate-y-2 transition duration-500"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center group-hover:bg-green-600 transition duration-300">
                  <Icon
                    size={30}
                    className="text-green-600 group-hover:text-white transition duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-8 text-2xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-5 text-gray-500 leading-8">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}