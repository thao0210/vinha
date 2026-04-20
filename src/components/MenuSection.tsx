"use client";
import { ArrowRight } from "lucide-react";
import { LANG, Locale } from "@/lib/lang";

const BEST_SELLERS = [
  { img: "/images/img1.jpeg",  name: "Cơm sườn nướng", price: "65.000đ", tag: "🔥 Hot" },
  { img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=300&h=300&fit=crop", name: "Cơm văn phòng",  price: "49.000đ", tag: "⭐ Best" },
  { img: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=300&h=300&fit=crop",  name: "Combo đặc biệt", price: "79.000đ", tag: "🎯 Mới" },
  { img: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=300&h=300&fit=crop", name: "Cơm gà xối mỡ",  price: "55.000đ", tag: null },
];

export default function MenuSection({ lang }: { lang: Locale }) {
  return (
    <section id="menu" className="py-24 bg-[#ffd3b6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <span className="inline-block text-xs font-black tracking-[0.2em] uppercase text-orange-500 mb-3">
              ✦ Best Seller
            </span>
            <h2 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Món được yêu<br />
              <span className="text-red-700">thích nhất</span>
            </h2>
          </div>
            <a
          
            href={`/${lang}/menu`}
            className="
              group inline-flex items-center gap-2 self-start sm:self-auto
              font-bold text-sm text-red-700 transition-colors
              border-b-2 border-red-700 pb-0.5
            "
          >
            Xem tất cả thực đơn
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          {BEST_SELLERS.map((item, i) => (
            <div
              key={i}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 shadow-md">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

                {/* Tag */}
                {item.tag && (
                  <span className="absolute top-3 left-3 text-[11px] font-extrabold bg-white/90 backdrop-blur text-gray-800 px-2.5 py-1 rounded-full shadow">
                    {item.tag}
                  </span>
                )}

                {/* Order button — appears on hover */}
                <div className="
                  absolute bottom-3 inset-x-3
                  opacity-0 translate-y-2
                  group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-300
                ">
                  <button
                    className="w-full flex items-center justify-center gap-1.5 text-white text-xs font-bold py-2.5 rounded-xl"
                    style={{ background: "linear-gradient(135deg, #ff6b2b, #c0152a)" }}
                  >
                    Đặt ngay <ArrowRight size={12} />
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="px-1">
                <h3 className="font-bold text-gray-900 text-base mb-1 group-hover:text-red-700 transition-colors">
                  {item.name}
                </h3>
                <p className="text-red-600 font-extrabold text-lg">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}