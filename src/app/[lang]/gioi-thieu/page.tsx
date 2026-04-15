"use client";
import { Leaf, Clock, Heart, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Locale, LANG } from "@/lib/lang";
import { use } from "react";
import { useRouter, usePathname } from "next/navigation";

const ICON_MAP: Record<string, React.ReactNode> = {
  leaf:  <Leaf  size={26} />,
  clock: <Clock size={26} />,
  heart: <Heart size={26} />,
  users: <Users size={26} />,
};

const VALUE_ACCENTS = [
  "bg-emerald-50 text-emerald-600 border-emerald-100",
  "bg-amber-50   text-amber-600   border-amber-100",
  "bg-red-50     text-red-600     border-red-100",
  "bg-violet-50  text-violet-600  border-violet-100",
];

export default function GioiThieuPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = use(params);
  const t = LANG[lang].aboutPage;
  const stats = LANG[lang].stats;
  const router = useRouter();
  const pathname = usePathname();

  const handleLangChange = (newLang: Locale) => {
    // /vi/menu → /en/menu
    const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
    router.push(newPath);
  };

  return (
    <div style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <Navbar lang={lang} onLangChange={handleLangChange} />

      {/* ── Hero ── */}
      <section className="relative bg-[#FFF0E5] pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-red-100 rounded-full -translate-y-1/2 translate-x-1/3 opacity-50" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-100 rounded-full translate-y-1/2 -translate-x-1/3 opacity-60" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white text-red-600 font-semibold text-sm px-4 py-2 rounded-full mb-6 shadow-sm">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                {t.storyLabel}
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mt-3 mb-4">
          {t.heroTitle}
        </h1>
              <p className="text-red-700 font-bold text-xl mb-5 leading-relaxed">
                {t.heroSubtitle}
              </p>
              <p className="text-gray-600 text-base leading-relaxed">{t.heroDesc}</p>

              {/* Stats (reuse homepage stats values + aboutPage labels) */}
              <div className="grid grid-cols-3 gap-4 mt-10">
                {t.statsValues.map((val, i) => (
                  <div key={i} className="bg-white rounded-3xl p-5 text-center shadow-sm">
                    <p className="text-3xl font-black text-orange-400">{val}</p>
                    <p className="text-xs text-gray-500 font-medium mt-1">{t.statsLabel[i]}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Collage */}
<div className="relative h-[420px] hidden lg:block">
  
  {/* Decorative ring ngoài cùng */}
  <div className="absolute inset-0 rounded-[2.5rem] border-4 border-dashed border-orange-200 rotate-3 scale-105" />
  
  {/* Shadow block lệch — tạo cảm giác layered */}
  <div className="absolute inset-0 rounded-[2.5rem] bg-orange-300 translate-x-4 translate-y-4" />

  {/* Ảnh chính — clip bo góc không đều */}
  <div
    className="relative w-full h-full overflow-hidden rounded-[2.5rem] border-4 border-white shadow-2xl"
    style={{ clipPath: "polygon(0 0, 94% 0, 100% 6%, 100% 100%, 6% 100%, 0 94%)" }}
  >
    <img
      src="https://images.pexels.com/photos/12148991/pexels-photo-12148991.jpeg"
      alt="Kitchen team"
      className="w-full h-full object-cover"
    />
    {/* Gradient overlay nhẹ phía dưới */}
    <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 via-transparent to-transparent" />
  </div>

  {/* Dot grid trang trí góc dưới phải */}
  <div
    className="absolute -bottom-5 -right-5 w-24 h-24 opacity-40"
    style={{
      backgroundImage: "radial-gradient(circle, #f97316 1.5px, transparent 1.5px)",
      backgroundSize: "10px 10px",
    }}
  />
</div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">{t.valuesTitle}</h2>
            <p className="text-gray-400 max-w-md mx-auto">{t.valuesSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.values.map((val, idx) => (
              <div
                key={val.title}
                className={`rounded-3xl border-2 p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${VALUE_ACCENTS[idx]}`}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-white shadow-sm">
                  {ICON_MAP[val.icon]}
                </div>
                <h3 className="font-black text-gray-900 text-lg mb-3 leading-snug">{val.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="bg-[#FFF0E5] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              {t.galleryTitle}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {t.gallery.map((item, idx) => (
              <div
                key={idx}
                className={`relative rounded-3xl overflow-hidden group ${
                  idx === 0 ? "md:col-span-2" : ""
                }`}
                style={{ height: idx === 0 ? 340 : 240 }}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <span className="text-white font-bold text-sm">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #7c2c12ac 0%, #c2400cbf 40%, #ea5a0cc8 70%, #9a3412c7 100%)",
      }}>
        {/* Decorative blobs */}
      <div className="absolute top-[-150px] left-[-120px] w-[450px] h-[450px] rounded-full bg-white opacity-[0.1] pointer-events-none" />
      <div className="absolute bottom-[-80px] right-[-60px] w-[300px] h-[300px] rounded-full bg-white opacity-[0.1] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[180px] h-[180px] rounded-full bg-white opacity-[0.1] pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-4xl font-black text-white mb-4">{t.ctaTitle}</h3>
          <p className="text-red-200 text-lg mb-8">{t.ctaDesc}</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-white text-red-600 font-black text-lg px-10 py-4 rounded-full hover:bg-red-50 transition-colors shadow-xl"
          >
            {t.ctaBtn}
          </a>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
}