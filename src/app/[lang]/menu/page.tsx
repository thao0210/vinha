"use client";
import { use, useState } from "react";
import { ArrowRight, Flame, Sparkles, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LANG, Locale } from "@/lib/lang";
import { useRouter, usePathname } from "next/navigation";

export default function MenuPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = use(params);
  const t = LANG[lang].menuPage;
  const [activeTab, setActiveTab] = useState("all");
  const router = useRouter();
  const pathname = usePathname();

  const handleLangChange = (newLang: Locale) => {
    // /vi/menu → /en/menu
    const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
    router.push(newPath);
  };

  const tabs = [
    { key: "all",      label: t.all      },
    { key: "mainDish", label: t.mainDish },
    { key: "combo",    label: t.combo    },
    { key: "drinks",   label: t.drinks   },
    { key: "sides",    label: t.sides    },
  ];

  const filtered =
    activeTab === "all"
      ? t.items
      : t.items.filter((item) => item.category === activeTab);

  const tagStyle: Record<string, string> = {
    hot:     "bg-red-500 text-white",
    newItem: "bg-amber-400 text-white",
  };
  const tagIcon: Record<string, React.ReactNode> = {
    hot:     <Flame size={10} />,
    newItem: <Sparkles size={10} />,
  };
  const tagLabel: Record<string, string> = {
    hot:     t.hot,
    newItem: t.newItem,
  };

  return (
    <div
      className="min-h-screen bg-[#FFF5EE]"
      style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <Navbar lang={lang} onLangChange={handleLangChange} />

      {/* ── Hero ── */}
      <section className="pt-28 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        {/* Tag — khớp với MenuSection */}
        <span className="text-sm font-bold text-red-700 tracking-widest uppercase">
          {t.badgeLabel}
        </span>
        {/* Heading — khớp với MenuSection */}
        <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mt-3 mb-4">
          {t.title}
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">{t.subtitle}</p>
      </section>

      {/* ── Tab filter — căn giữa, bo tròn, shadow khớp MenuSection ── */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <div className="flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`text-sm font-semibold px-6 py-2.5 rounded-full transition-all ${
                activeTab === tab.key
                  ? "bg-red-700 text-white shadow-lg shadow-red-700/20"
                  : "bg-white text-gray-500 hover:text-red-700 hover:shadow-md"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* ── Grid — card khớp với MenuSection ── */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-24">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-16 justify-items-center">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative w-full max-w-[260px] flex flex-col items-center"
            >
              {/* Ảnh tròn nổi lên — khớp MenuSection */}
              <div className="relative z-10 w-[72%] aspect-square rounded-full ring-4 ring-orange-300 bg-white shadow-lg group-hover:scale-105 transition-transform duration-300 mb-[-44%] overflow-hidden flex-shrink-0">
                <img
                  src={item.img}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>

              {/* Card body — bg cam nhạt + border, khớp MenuSection */}
              <div className="relative w-full bg-orange-200 border-2 border-orange-300 rounded-3xl pt-[50%] pb-5 px-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-red-200 shadow-md">
                {/* Tag badge */}
                {item.tag && (
                  <span
                    className={`absolute top-3 right-3 z-20 flex items-center gap-1 text-[10px] font-extrabold px-2.5 py-1 rounded-full border border-white/30 ${tagStyle[item.tag]}`}
                  >
                    {tagIcon[item.tag]}
                    {tagLabel[item.tag]}
                  </span>
                )}

                <h3 className="text-base font-extrabold text-gray-900 mt-1 mb-3 leading-snug">
                  {item.name}
                </h3>
                <p className="text-lg font-extrabold text-red-600">{item.price}</p>

                <div className="mt-4 flex justify-center">
                  <button className="flex items-center gap-1.5 bg-orange-600 hover:bg-red-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all">
                    {t.order} <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
}