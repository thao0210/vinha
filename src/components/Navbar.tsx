"use client";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { LANG, Locale } from "@/lib/lang";

const PAGE_SLUGS: Record<string, string> = {
  menu:   "menu",
  promo:  "khuyen-mai",
  stores: "cua-hang",
  about:  "gioi-thieu",
};

export default function Navbar({
  lang,
  onLangChange,
}: {
  lang: Locale;
  onLangChange: (l: Locale) => void;
}) {
  const t = LANG[lang].nav;
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FFF5EE]/95 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.04)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-[72px]">

          {/* Logo — về trang chủ */}
          <a href={`/${lang}`} className="text-[26px] font-extrabold tracking-tight text-red-700">
            Vị Nhà
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {t.ids.map((id, i) => {
              const href = `/${lang}/${PAGE_SLUGS[id]}`;
              const isActive = pathname.includes(PAGE_SLUGS[id]);
              return (
                <a
                  key={id}
                  href={href}
                  className={`text-[15px] font-semibold transition-colors ${
                    isActive ? "text-red-700" : "text-gray-700 hover:text-red-700"
                  }`}
                >
                  {t.items[i]}
                </a>
              );
            })}
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            {/* Lang switcher */}
            <div className="flex bg-white/70 rounded-full overflow-hidden border border-gray-200/60">
              {(["vi", "en"] as Locale[]).map((l) => (
                <button
                  key={l}
                  onClick={() => onLangChange(l)}
                  className={`text-xs font-bold px-3.5 py-1.5 tracking-wide uppercase transition-all rounded-full ${
                    lang === l
                      ? "bg-orange-600 text-white"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Order CTA */}
            <button className="hidden sm:inline-flex items-center gap-2 bg-red-700 hover:bg-red-600 text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-700/25">
              {t.order}
              <ArrowRight size={15} />
            </button>

            {/* Mobile toggle */}
            <button onClick={() => setOpen(true)} className="md:hidden p-1 text-gray-700">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <>
          <div
            className="fixed inset-0 bg-black/30 z-[200]"
            onClick={() => setOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-[300px] bg-[#FFF5EE] z-[201] p-8 pt-20 shadow-2xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 text-gray-500"
            >
              <X size={24} />
            </button>

            {t.ids.map((id, i) => {
              const href = `/${lang}/${PAGE_SLUGS[id]}`;
              const isActive = pathname.includes(PAGE_SLUGS[id]);
              return (
                <a
                  key={id}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block text-lg font-semibold py-4 border-b border-orange-100 ${
                    isActive ? "text-red-700" : "text-gray-800"
                  }`}
                >
                  {t.items[i]}
                </a>
              );
            })}

            <button className="mt-6 w-full flex items-center justify-center gap-2 bg-red-700 text-white font-bold py-3.5 rounded-full">
              {t.order} <ArrowRight size={15} />
            </button>
          </div>
        </>
      )}
    </>
  );
}