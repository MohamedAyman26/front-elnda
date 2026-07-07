import {
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              الندى
            </h2>

            <p className="text-sm tracking-[5px] text-green-400 mt-1">
              للخدمات الزراعية
            </p>

            <p className="mt-6 text-gray-400 leading-8">
              تقدم شركة الندى للخدمات الزراعية أجود الأسمدة والمبيدات
              والتقاوي، بالإضافة إلى خدمات تحليل التربة ومكافحة آفات
              الصحة العامة وتصميم الحدائق المنزلية، بهدف دعم التنمية
              الزراعية وتحقيق أعلى مستويات الجودة والإنتاج.
            </p>

            {/* Social Media */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://www.facebook.com/ahmed.ayman.524353?locale=ar_AR"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-gray-800 hover:bg-green-600 transition duration-300 flex items-center justify-center"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-gray-800 hover:bg-green-600 transition duration-300 flex items-center justify-center"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-gray-800 hover:bg-green-600 transition duration-300 flex items-center justify-center"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              خدماتنا
            </h3>

            <ul className="space-y-4">
              <li>المبيدات الزراعية</li>
              <li>الأسمدة العضوية</li>
              <li>التقاوي الممتازة</li>
              <li>تحليل التربة</li>
              <li>مكافحة آفات الصحة العامة</li>
              <li>تصميم الحدائق المنزلية</li>
            </ul>
          </div>

          {/* Management */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              الإدارة
            </h3>

            <div className="space-y-5">

              <div>
                <p className="text-gray-400 text-sm">
                  صاحب الشركة
                </p>

                <h4 className="text-white font-medium">
                  كيميائي / أيمن خليل
                </h4>
              </div>

              <div>
                <p className="text-gray-400 text-sm">
                  المدير العام
                </p>

                <h4 className="text-white font-medium">
                  م / أحمد أيمن
                </h4>
              </div>

              <div>
                <p className="text-gray-400 text-sm">
                  مطور الموقع الإلكتروني
                </p>

                <h4 className="text-green-400 font-medium">
                  م / محمد أيمن
                </h4>
              </div>

            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              معلومات التواصل
            </h3>

            <div className="space-y-5">

              {/* Phone */}
              <div className="flex items-center gap-4 rounded-2xl border border-gray-800 p-4 hover:border-green-600 transition duration-300">
                <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center">
                  <Phone size={20} className="text-white" />
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    أرقام الهاتف
                  </p>

                  <a
                    href="tel:01158329659"
                    className="block text-white font-medium hover:text-green-400 transition"
                  >
                    01158329659
                  </a>

                  <a
                    href="tel:01021142930"
                    className="block text-white font-medium hover:text-green-400 transition"
                  >
                    01021142930
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-4 rounded-2xl border border-gray-800 p-4 hover:border-green-600 transition duration-300">
                <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center">
                  <MapPin size={20} className="text-white" />
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    الموقع
                  </p>

                  <h4 className="text-white font-medium">
                    السمطا - سوهاج - مصر
                  </h4>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-4 rounded-2xl border border-gray-800 p-4 hover:border-green-600 transition duration-300">
                <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center">
                  <Clock size={20} className="text-white" />
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    مواعيد العمل
                  </p>

                  <h4 className="text-white font-medium">
                    السبت - الخميس | 9 صباحًا - 6 مساءً
                  </h4>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-center">
            © 2026 شركة الندى للخدمات الزراعية. جميع الحقوق محفوظة.
          </p>

          <p className="text-gray-500 text-center">
            تصميم وتطوير
            <span className="text-green-400 ml-2 font-medium">
              م / محمد أيمن
            </span>
          </p>

        </div>
      </div>
    </footer>
  );
}