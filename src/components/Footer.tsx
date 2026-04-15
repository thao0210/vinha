"use client";
import { Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { LANG, Locale } from "@/lib/lang";

export default function Footer({ lang }: { lang: Locale }) {
  const t = LANG[lang].footer;
  const nav = LANG[lang].nav;
  const stores = LANG[lang].stores;

  return (
    <footer className="bg-[#4c2507] text-white/50 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="text-3xl font-extrabold text-white tracking-tight mb-4">
              Vị Nhà
            </div>
            <p className="text-sm leading-relaxed max-w-xs mb-6">{t.desc}</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Phone size={15} className="text-red-400" /> 0909 123 456
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail size={15} className="text-red-400" /> hello@vinha.vn
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-bold tracking-[2px] uppercase text-white/25 mb-5">
              {t.linksTitle}
            </h4>
            {nav.items.map((item, i) => (
              <a key={i} href={`#${nav.ids[i]}`}
                className="block text-sm py-1.5 hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>

          {/* Stores */}
          <div>
            <h4 className="text-xs font-bold tracking-[2px] uppercase text-white/25 mb-5">
              {stores.tag}
            </h4>
            {stores.list.slice(0, 3).map((s, i) => (
              <a key={i} href="#stores"
                className="block text-sm py-1.5 hover:text-white transition-colors">
                {s.name.split("—")[1]?.trim()}
              </a>
            ))}
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-bold tracking-[2px] uppercase text-white/25 mb-5">
              {t.followTitle}
            </h4>
            <div className="flex gap-3">
              <a href="#" className="w-11 h-11 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white/40 hover:bg-red-700 hover:text-white hover:border-red-700 transition-all">
                <FaFacebookF size={16} />
              </a>
              <a href="#" className="w-11 h-11 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white/40 hover:bg-red-700 hover:text-white hover:border-red-700 transition-all">
                <FaInstagram size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 text-center text-xs">
          {t.copy}
        </div>
      </div>
    </footer>
  );
}