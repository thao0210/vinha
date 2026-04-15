"use client";
import { ShoppingCart, Calendar, Tag, ArrowRight, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LANG, Locale } from "@/lib/lang";
import { use } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function PromotionsPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = use(params);
  const t = LANG[lang].promoPage;
  const router = useRouter();
  const pathname = usePathname();

  const handleLangChange = (newLang: Locale) => {
    // /vi/menu → /en/menu
    const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
    router.push(newPath);
  };

  return (
    <div className="min-h-screen bg-[#FFF0E5]" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <Navbar lang={lang} onLangChange={handleLangChange} />

      {/* Hero */}
      <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white text-red-600 font-semibold text-sm px-4 py-2 rounded-full mb-5 shadow-sm">
            <Zap size={14} fill="currentColor" />
            {lang === "vi" ? "Ưu đãi mới nhất" : "Latest Deals"}
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mt-3 mb-4">
            {t.title}
            </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">{t.subtitle}</p>
        </div>
      </section>

      {/* Promotions List */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pb-20">
        <div className="flex flex-col gap-8">
          {t.items.map((item, idx) => (
            <div
              key={item.id}
              className={`bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Banner Image */}
              <div className="relative md:w-5/12 h-56 md:h-auto overflow-hidden">
                <img
                  src={item.banner}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                {/* Discount Badge */}
                <div className={`absolute top-4 ${idx % 2 === 0 ? "right-4" : "left-4"} ${item.color} text-white font-black text-xl px-4 py-3 rounded-2xl shadow-lg`}>
                  {item.discount}
                </div>
              </div>

              {/* Content */}
              <div className="md:w-7/12 p-8 flex flex-col justify-center">
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3 leading-tight">
                  {item.title}
                </h2>
                <p className="text-gray-500 text-base leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Conditions */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 bg-[#FFF0E5] rounded-2xl px-4 py-2.5">
                    <Calendar size={16} className="text-red-500" />
                    <div>
                      <p className="text-xs text-gray-400 font-medium">{t.validUntil}</p>
                      <p className="text-sm font-bold text-gray-800">{item.validUntil}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-[#FFF0E5] rounded-2xl px-4 py-2.5">
                    <Tag size={16} className="text-red-500" />
                    <div>
                      <p className="text-xs text-gray-400 font-medium">{t.applyFor}</p>
                      <p className="text-sm font-bold text-gray-800">{item.applyFor}</p>
                    </div>
                  </div>
                </div>

                <button className="self-start flex items-center gap-2 hover:bg-red-700 text-white font-bold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-red-200 group"
                style={{
                  background: "linear-gradient(135deg, #ee520f 0%, #c0152a 100%)",
                }}
                >
                  <ShoppingCart size={17} />
                  {t.orderNow}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
}