"use client";
import { useState } from "react";
import { ArrowRight, Star, Heart } from "lucide-react";
import { LANG, Locale } from "@/lib/lang";

const FOOD_IMGS = [
  "/images/img1.jpeg",
  "/images/diacom.png",
  "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=300&h=300&fit=crop",
  "/images/diacom.png",
  "/images/img1.jpeg",
  "/images/diacom.png",
  "/images/img1.jpeg",
  "/images/diacom.png",
  "/images/img1.jpeg",
  "/images/diacom.png",
];

export default function MenuSection({ lang }: { lang: Locale }) {
  const t = LANG[lang].menu;
  const [cat, setCat] = useState(0);

  const filtered = t.items
    .map((item, idx) => ({ ...item, imgIdx: idx }))
    .filter((item) => item.cat === cat);

  return (
    <section id="menu" className="py-24 bg-[#FFF5EE]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-sm font-bold text-red-700 tracking-widest uppercase">
            {t.tag}
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mt-3">
            {t.title}
          </h2>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {t.cats.map((c, i) => (
            <button
              key={i}
              onClick={() => setCat(i)}
              className={`text-sm font-semibold px-6 py-2.5 rounded-full transition-all ${
                cat === i
                  ? "bg-red-700 text-white shadow-lg shadow-red-700/20"
                  : "bg-white text-gray-500 hover:text-red-700 hover:shadow-md"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Menu cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-16 justify-items-center">
          {filtered.map((item, i) => (
            <div
              key={`${cat}-${i}`}
              className="group relative w-full max-w-[260px] flex flex-col items-center"
            >
              {/* Food image circle */}
              <div className="relative z-10 w-[72%] aspect-square rounded-full ring-4 ring-orange-300 bg-white shadow-lg group-hover:scale-105 transition-transform duration-300 mb-[-44%] overflow-hidden flex-shrink-0">
                <img
                  src={FOOD_IMGS[item.imgIdx]}
                  alt={item.name}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center center",
                  }}
                />
              </div>

              {/* Card body */}
              <div className="relative w-full bg-orange-200 border-2 border-orange-300 rounded-3xl pt-[50%] pb-5 px-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-red-200 shadow-md">
                {/* Tag badge */}
                {item.tag && (
                  <span className="absolute top-3 right-3 z-20 text-[10px] font-extrabold bg-red-500 text-white px-2.5 py-1 rounded-full border border-red-100">
                    {item.tag}
                  </span>
                )}

                {/* Name */}
                <h3 className="text-base font-extrabold text-gray-900 mt-1 mb-3 leading-snug">
                  {item.name}
                </h3>

                {/* Price + heart */}
                <div>
                  <span className="text-lg font-extrabold text-red-600">{item.price}</span>
                  {/* <Heart size={16} className="fill-red-400 stroke-none" /> */}
                </div>

                <div className="mt-4 flex justify-center">
                    <button className="flex items-center gap-1.5 bg-orange-600 hover:bg-red-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all">
                        {t.orderBtn} <ArrowRight size={12} />
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}