"use client";
import { Flame, Gift, Zap, ArrowRight } from "lucide-react";
import { LANG, Locale } from "@/lib/lang";

const ICONS = [Flame, Gift, Zap];

export default function PromoSection({ lang }: { lang: Locale }) {
  const t = LANG[lang].promo;
  const order = LANG[lang].nav.order;

  return (
    <section
      id="promo"
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #7c2c128f 0%, #c2400cb4 40%, #ea5a0cb4 70%, #9a3412af 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-[-150px] left-[-120px] w-[450px] h-[450px] rounded-full bg-white opacity-[0.1] pointer-events-none" />
      <div className="absolute bottom-[-80px] right-[-60px] w-[300px] h-[300px] rounded-full bg-white opacity-[0.1] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[180px] h-[180px] rounded-full bg-white opacity-[0.1] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-white/15 border border-white/30 text-white text-[11px] font-bold tracking-[0.15em] uppercase px-5 py-1.5 rounded-full mb-4">
            {t.tag}
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight mt-1 drop-shadow-lg">
            {t.title}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {t.items.map((item, i) => {
            const Icon = ICONS[i];

            const cardBgs = [
            "bg-white/88 border border-white/95 shadow-[0_8px_32px_rgba(124,45,18,0.25)] backdrop-blur-md",
            "bg-white/85 border border-white/92 shadow-[0_8px_32px_rgba(194,65,12,0.25)] backdrop-blur-md",
            "bg-white/82 border border-white/90 shadow-[0_8px_32px_rgba(234,88,12,0.25)] backdrop-blur-md",
            ];
            const iconWrap = [
              "bg-red-500 text-white",
              "bg-orange-400 text-white",
              "bg-emerald-600 text-white",
            ];
            const badgeStyle = [
              "bg-red-500/10 text-red-600 border border-red-500/80",
              "bg-orange-600/10 text-orange-600 border border-orange-400/80",
              "bg-emerald-600/10 text-emerald-600 border border-emerald-600/80",
            ];
            const titleGlow = [
              "[text-shadow:0_0_30px_rgba(239,68,68,0.4)]",
              "[text-shadow:0_0_30px_rgba(251,146,60,0.4)]",
              "[text-shadow:0_0_30px_rgba(52,211,153,0.4)]",
            ];

            return (
              <div
                key={i}
                className={`group ${cardBgs[i]} rounded-3xl p-8 relative overflow-hidden
                  transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/40`}
              >
                {/* Glow orb */}
                <div
                  className={`absolute -top-10 -right-10 w-28 h-28 rounded-full opacity-[0.07] pointer-events-none
                    ${i === 0 ? "bg-red-500" : i === 1 ? "bg-orange-400" : "bg-emerald-400"}`}
                />

                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div className={`w-14 h-14 rounded-2xl ${iconWrap[i]} flex items-center justify-center`}>
                    <Icon size={24} />
                  </div>
                  <span className={`text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full ${badgeStyle[i]}`}>
                    {item.badge}
                  </span>
                </div>

                <h3 className={`text-2xl font-black text-black mb-3 leading-tight tracking-tight ${titleGlow[i]}`}>
                  {item.title}
                </h3>
                <p className="text-sm text-black/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Shared CTA */}
        <div className="flex justify-center">
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
                  background: "linear-gradient(135deg, #ee520f 0%, #c0152a 100%)",
                }}
>
  {order}
  <ArrowRight size={20} strokeWidth={2.5} />
</button>
        </div>
      </div>
    </section>
  );
}