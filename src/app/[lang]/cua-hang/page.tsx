"use client";
import { MapPin, Clock, Phone, ShoppingCart, Store } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Locale, LANG } from "@/lib/lang";
import { use } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function CuaHangPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = use(params);
    const t = LANG[lang].storePage;
    const router = useRouter();
  const pathname = usePathname();

  const handleLangChange = (newLang: Locale) => {
    // /vi/menu → /en/menu
    const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
    router.push(newPath);
  };

  return (
    <div
      className="min-h-screen bg-[#FFF0E5]"
      style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <Navbar lang={lang} onLangChange={handleLangChange} variant="light"/>

      {/* ── Hero ── */}
      <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-white text-red-600 font-semibold text-sm px-4 py-2 rounded-full mb-5 shadow-sm">
          <Store size={14} />
          {t.badgeLabel}
        </div>
        <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mt-3 mb-4">
          {t.title}
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">{t.subtitle}</p>
      </section>

      {/* ── Branches ── */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pb-20 flex flex-col gap-10">
        {t.branches.map((branch, idx) => (
          <div
            key={branch.id}
            className={`bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${
              branch.status === "coming" ? "opacity-80" : ""
            }`}
          >
            {/* Images */}
            <div className="grid grid-cols-2 h-52 sm:h-64 relative overflow-hidden">
              <img src={branch.img1} alt={branch.name} className="w-full h-full object-cover" />
              <img
                src={branch.img2}
                alt={branch.name}
                className="w-full h-full object-cover border-l-4 border-white"
              />

              {/* Status badge */}
              <span
                className={`absolute top-4 left-4 flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-sm ${
                  branch.status === "open"
                    ? "bg-emerald-500 text-white"
                    : "bg-amber-400 text-white"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full bg-white ${
                    branch.status === "open" ? "animate-pulse" : ""
                  }`}
                />
                {branch.status === "open" ? t.openNow : t.comingSoon}
              </span>

              {/* Branch number */}
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur text-white font-black text-2xl w-12 h-12 rounded-2xl flex items-center justify-center">
                {String(idx + 1).padStart(2, "0")}
              </div>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Info */}
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-4">{branch.name}</h2>

                <div className="flex flex-col gap-3">
                  {[
                    { Icon: MapPin, top: true,  primary: branch.address, secondary: null },
                    { Icon: Clock,  top: false, primary: branch.hours,   secondary: t.hours },
                    { Icon: Phone,  top: false, primary: branch.phone,   secondary: null },
                  ].map(({ Icon, top, primary, secondary }) => (
                    <div key={primary} className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
                        <Icon size={17} className="text-red-500" />
                      </div>
                      <div className={top ? "pt-1" : ""}>
                        {secondary && (
                          <p className="text-xs text-gray-400 font-medium">{secondary}</p>
                        )}
                        <p
                          className={`text-sm ${
                            top ? "text-gray-600 leading-relaxed" : "text-gray-800 font-bold"
                          }`}
                        >
                          {primary}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-6">
                  {branch.status === "open" ? (
                    <>
                      <button  className="self-start flex items-center gap-2 hover:bg-red-700 text-white font-bold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-red-200 group"
                style={{
                  background: "linear-gradient(135deg, #ee520f 0%, #c0152a 100%)",
                }}>
                        <ShoppingCart size={15} />
                        {t.orderNow}
                      </button>
                      <a
                        href={`tel:${branch.phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-2 bg-[#FFF0E5] hover:bg-red-50 text-red-600 font-bold px-5 py-2.5 rounded-full text-sm transition-all border border-red-100"
                      >
                        <Phone size={15} />
                        {t.call}
                      </a>
                    </>
                  ) : (
                    <button
                      disabled
                      className="flex items-center gap-2 bg-gray-100 text-gray-400 font-bold px-5 py-2.5 rounded-2xl text-sm cursor-not-allowed"
                    >
                      <Clock size={15} />
                      {t.comingSoon}
                    </button>
                  )}
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden min-h-[180px]">
                <iframe
                  src={branch.mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 220 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      <Footer lang={lang} />
    </div>
  );
}