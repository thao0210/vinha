"use client";
import { ArrowRight, ChefHat, Package, Utensils } from "lucide-react";
import { LANG, Locale } from "@/lib/lang";

const OPS = [
  {
    src: "https://blog.clover.com/wp-content/uploads/2023/01/staff-cooking-in-restaurant-commercial-kitchen.jpg",
    label: "Nhà bếp",
    Icon: ChefHat,
    span: "row-span-2",
  },
  {
    src: "https://static.wixstatic.com/media/eac48a_b60e0dee864f486cb1c046458b25c02a~mv2.jpg/v1/fill/w_640,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/eac48a_b60e0dee864f486cb1c046458b25c02a~mv2.jpg",
    label: "Đóng gói",
    Icon: Package,
    span: "",
  },
  {
    src: "https://saigonrachgiahotel.vn/files/images/recruitment/td00005.jpeg",
    label: "Phục vụ",
    Icon: Utensils,
    span: "",
  },
];

export default function CTABanner({ lang }: { lang: Locale }) {
  const t = LANG[lang].cta;
 
  return (
    <section className="w-full" style={{ backgroundColor: "#FEF0E4" }}>
 
      {/* ── 3 images full-width, equal size ── */}
      <div className="flex w-full" style={{ height: "220px", marginBottom: "2px" }}>
        {OPS.map(({ src, label, Icon }, i) => (
          <div key={i} className="relative flex-1 overflow-hidden group">
            <img
              src={src}
              alt={label}
              className="w-full h-full object-cover brightness-90 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
            />
            {/* gradient for label readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
 
            {/* label pill */}
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap">
              <Icon size={13} />
              {label}
            </span>
 
            {/* divider between panels */}
            {i < OPS.length - 1 && (
              <div className="absolute right-0 top-0 bottom-0 w-[3px]" style={{ backgroundColor: "#FEF0E4" }} />
            )}
          </div>
        ))}
      </div>
 
    </section>
  );
}