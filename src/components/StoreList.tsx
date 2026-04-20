"use client";
import { MapPin, Clock, ArrowRight, ExternalLink } from "lucide-react";
import { LANG, Locale } from "@/lib/lang";

export default function StoreList({ lang }: { lang: Locale }) {
  const t = LANG[lang].stores;
  const order = LANG[lang].nav.order;

  return (
    <section id="stores" className="py-10 bg-white">
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
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {t.list.map((store, i) => (
            <div
              key={i}
              className="bg-[#FFF8F3] border border-orange-300 rounded-3xl p-7 transition-all duration-300 hover:shadow-lg hover:shadow-orange-100/60 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-3 mb-5">
                <h3 className="text-[15px] font-extrabold text-gray-900">
                  {store.name}
                </h3>
                <span
                  className={`text-[11px] font-bold tracking-wide px-3 py-1.5 rounded-full whitespace-nowrap ${
                    store.open
                      ? "bg-green-100 text-green-700"
                      : "bg-orange-100 text-orange-600"
                  }`}
                >
                  {store.open ? t.openLabel : t.soonLabel}
                </span>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 text-sm text-gray-500">
                  <MapPin size={16} className="flex-shrink-0 mt-0.5 text-gray-300" />
                  {store.addr}
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-500">
                  <Clock size={16} className="flex-shrink-0 mt-0.5 text-gray-300" />
                  {store.hrs}
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-red-600 text-white text-sm font-bold py-2.5 rounded-full transition-all">
                  {order} <ArrowRight size={14} />
                </button>
                <button className="inline-flex items-center gap-2 text-gray-600 text-sm font-bold px-5 py-2.5 rounded-full bg-white hover:bg-gray-50 transition-all">
                  {t.dirLabel} <ExternalLink size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}