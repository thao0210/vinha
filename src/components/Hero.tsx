"use client";
import { ArrowRight, Truck, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { LANG, Locale } from "@/lib/lang";

// Danh sách ảnh món ăn — thay bằng đúng path ảnh của bạn
const FOOD_SLIDES = [
  { src: "/images/diacom.png", badge: "49K", badgeSub: "Cơm sườn" },
//   { src: "/images/img22.avif", badge: "39K", badgeSub: "Noodles" },
  { src: "/images/img1.jpeg", badge: "65K", badgeSub: "Combo" },
];

export default function Hero({ lang }: { lang: Locale }) {
  const t = LANG[lang].hero;

  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % FOOD_SLIDES.length);
        setFading(false);
      }, 2000); // fade-out duration
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = FOOD_SLIDES[current];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#FFF0E5]">
      {/* Decorative blobs */}
      {/* <div className="absolute top-32 right-[8%] w-[480px] h-[480px] rounded-full bg-[#FDDCCA]/60 blur-sm" /> */}
      {/* <div className="absolute bottom-[-40px] left-[30%] w-56 h-56 rounded-full bg-red-700/5" /> */}
      {/* <div className="absolute top-[60%] right-[35%] w-20 h-20 rounded-full bg-orange-400/15" /> */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full pt-24 pb-16">

          {/* ── Left: Content ── */}
          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur rounded-full px-4 py-2 mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[13px] font-semibold text-red-700 tracking-wide">
                {t.badge}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-[68px] font-extrabold tracking-tight leading-[1.2] text-gray-900 mb-6">
              {t.title[0]}{" "}
              <span className="text-red-700">{t.title[1]}</span>
              <br />
              {t.title[2]}
            </h1>

            {/* Desc */}
            <p className="text-[17px] text-gray-500 leading-relaxed max-w-md mb-10">
              {t.desc}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              {/*
                Nút CTA chính: gradient cam → đỏ, khác hẳn nút đỏ trơn trên navbar.
                Mũi tên có animation bounce-x khi hover.
              */}
              <button
                className="
                  group relative inline-flex items-center gap-2.5
                  font-bold text-[15px] px-8 py-4 rounded-full
                  text-white overflow-hidden
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:shadow-2xl hover:shadow-orange-500/40
                "
                style={{
                  background: "linear-gradient(135deg, #ff6b2b 0%, #c0152a 100%)",
                }}
              >
                {/* Shine overlay on hover */}
                <span
                  className="
                    absolute inset-0 opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                    bg-gradient-to-r from-white/0 via-white/15 to-white/0
                    -skew-x-12
                  "
                />
                <span className="relative">{t.cta1}</span>
                <ArrowRight
                  size={17}
                  className="relative transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </button>

              {/* Nút phụ: xem menu */}
              <button className="inline-flex items-center gap-3 text-gray-700 font-semibold text-[15px] hover:text-red-700 transition-colors">
                <span className="w-12 h-12 rounded-full bg-white shadow-lg shadow-gray-200/50 flex items-center justify-center">
                  <span className="w-0 h-0 border-t-[6px] border-b-[6px] border-l-[10px] border-transparent border-l-red-700 ml-1" />
                </span>
                {t.cta2}
              </button>
            </div>
          </div>

          {/* ── Right: Food image slideshow ── */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[380px] h-[380px] sm:w-[440px] sm:h-[440px] lg:w-[600px] lg:h-[600px]">
              {/* Background circle */}
              <div className="absolute inset-0 rounded-full bg-[#FDDCCA] shadow-2xl shadow-orange-200/50" />

              {/* Food image — cross-fade khi đổi slide */}
              <img
                key={slide.src}
                src={slide.src}
                alt="Vị Nhà"
                className="relative z-10 w-full h-full object-cover rounded-full"
                style={{
                  transition: "opacity 0.4s ease",
                  opacity: fading ? 0 : 1,
                }}
              />

              {/* Discount badge — animate khi đổi */}
              <div
                className="
                  absolute -top-[-20px] -right-0 z-20
                  w-25 h-25 rounded-full
                  flex flex-col items-center justify-center
                  shadow-lg shadow-red-700/30
                  border-4 border-[#FFF0E5]
                "
                style={{
                  background: "linear-gradient(135deg, #ff8c42 0%, #e8321a 100%)",
                  transition: "opacity 0.4s ease",
                  opacity: fading ? 0 : 1,
                }}
              >
                <span className="text-white font-extrabold text-xl leading-none">
                  {slide.badge}
                </span>
                <span className="text-white/75 text-[14px] font-semibold">
                  {slide.badgeSub}
                </span>
              </div>

              {/* Dot indicators */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                {FOOD_SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setFading(true);
                      setTimeout(() => { setCurrent(i); setFading(false); }, 400);
                    }}
                    className={`
                      rounded-full transition-all duration-300
                      ${i === current
                        ? "w-6 h-2 bg-red-700"
                        : "w-2 h-2 bg-red-300 hover:bg-red-500"}
                    `}
                  />
                ))}
              </div>

              {/* Decorative blobs */}
              {/* <div className="absolute -bottom-4 left-8 w-14 h-14 rounded-full bg-orange-400/40" />
              <div className="absolute top-10 -left-6 w-8 h-8 rounded-full bg-red-700/20" /> */}
            </div>

            {/* Info card floating */}
            <div className="absolute bottom-8 left-[30px] lg:-left-[80px] z-20 bg-white/80 backdrop-blur-lg rounded-2xl p-5 shadow-xl shadow-gray-200/40 min-w-[220px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                  <Truck size={18} className="text-red-700" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{t.delivery}</p>
                  <p className="text-xs text-gray-400">{t.deliveryDesc}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                  <Clock size={18} className="text-orange-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{t.pickup}</p>
                  <p className="text-xs text-gray-400">{t.pickupDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}