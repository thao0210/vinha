"use client";
import { Leaf, Truck, Heart } from "lucide-react";
import { LANG, Locale } from "@/lib/lang";

const ICONS = [Leaf, Truck, Heart];
const ICON_BG = ["bg-green-100", "bg-orange-100", "bg-red-100"];
const ICON_COLOR = ["text-green-600", "text-orange-600", "text-red-600"];

export default function WhyUs({ lang }: { lang: Locale }) {
  const t = LANG[lang].why;

  return (
    <section id="about" className="py-14 bg-[#FFF0E5] border-t border-orange-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-sm font-bold text-red-700 tracking-widest uppercase">
            {t.tag}
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mt-3">
            {t.title}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {t.items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={i}
                className="group bg-white rounded-3xl p-10 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-gray-200/50"
              >
                <div className={`w-16 h-16 rounded-2xl ${ICON_BG[i]} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon size={28} className={ICON_COLOR[i]} />
                </div>

                <h3 className="text-lg font-extrabold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}