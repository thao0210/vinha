"use client";
import { use, useState } from "react";
import { ArrowRight, Flame, Sparkles } from "lucide-react";
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
    <div className="min-h-screen bg-orange-50">
      <Navbar lang={lang} onLangChange={handleLangChange} variant="light" />

      {/* ── Hero ── */}
      <section className="pt-32 pb-12 px-6 lg:px-10 max-w-7xl mx-auto text-center">
        <span className="inline-block text-xs font-black tracking-[0.2em] uppercase text-orange-400 mb-3">
          ✦ Thực đơn
        </span>
        <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight mt-2 mb-4">
          {t.title}
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">{t.subtitle}</p>
      </section>

      {/* ── Tabs ── */}
      <section className="px-6 lg:px-10 max-w-7xl mx-auto mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`text-sm font-semibold px-6 py-2.5 rounded-full transition-all ${
                activeTab === tab.key
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                  : "bg-white/10 text-gray-500 hover:text-gray-800 hover:bg-white/15"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="px-6 lg:px-10 max-w-7xl mx-auto pb-28">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {filtered.map((item) => (
            <a
              key={item.id}
              href={`/${lang}/menu-details?slug=${item.id}`}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 shadow-lg shadow-black/40">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

                {/* Tag */}
                {item.tag && (
                  <span className={`absolute top-3 left-3 flex items-center gap-1 text-[11px] font-extrabold px-2.5 py-1 rounded-full ${tagStyle[item.tag]}`}>
                    {tagIcon[item.tag]}
                    {tagLabel[item.tag]}
                  </span>
                )}

                {/* Hover CTA */}
                <div className="absolute bottom-3 inset-x-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <div
                    className="w-full flex items-center justify-center gap-1.5 text-white text-xs font-bold py-2.5 rounded-xl"
                    style={{ background: "linear-gradient(135deg, #ff6b2b, #c0152a)" }}
                  >
                    Đặt ngay <ArrowRight size={12} />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="px-1">
                <h3 className="font-bold text-base mb-1 group-hover:text-orange-400 transition-colors">
                  {item.name}
                </h3>
                <p className="text-orange-400 font-extrabold text-lg">{item.price}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
}