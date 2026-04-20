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
  variant = "dark",
}: {
  lang: Locale;
  onLangChange: (l: Locale) => void;
  variant?: "dark" | "light";
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

  // ── Derived styles ──────────────────────────────────────
  const navBg = scrolled
    ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]"
    : variant === "light"
      ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_20px_rgba(0,0,0,0.06)]"
      : "bg-transparent";

  const logoColor = scrolled || variant === "light"
    ? "text-red-700"
    : "text-white drop-shadow";

  const linkColor = (isActive: boolean) =>
    scrolled || variant === "light"
      ? isActive ? "text-red-700" : "text-gray-700 hover:text-red-700"
      : isActive ? "text-orange-300" : "text-white hover:text-orange-300 drop-shadow";

  const langSwitcherBg = scrolled || variant === "light"
    ? "bg-gray-100 border-gray-200"
    : "bg-white/20 border-white/30";

  const langInactiveTxt = scrolled || variant === "light"
    ? "text-gray-400 hover:text-gray-600"
    : "text-white/70 hover:text-white";

  const mobileIconColor = scrolled || variant === "light"
    ? "text-gray-700"
    : "text-white drop-shadow";

  return (
    <>
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-[72px]">

          {/* Logo */}
          <a href={`/${lang}`} className={`text-[26px] font-extrabold tracking-tight transition-colors ${logoColor}`}>
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
                  className={`text-[15px] font-semibold transition-colors ${linkColor(isActive)}`}
                >
                  {t.items[i]}
                </a>
              );
            })}
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            {/* Lang switcher */}
            <div className={`flex rounded-full overflow-hidden border ${langSwitcherBg}`}>
              {(["vi", "en"] as Locale[]).map((l) => (
                <button
                  key={l}
                  onClick={() => onLangChange(l)}
                  className={`text-xs font-bold px-3.5 py-1.5 tracking-wide uppercase transition-all rounded-full ${
                    lang === l ? "bg-orange-500 text-white" : langInactiveTxt
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Order CTA */}
            <button className="hidden sm:inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-400 text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/40">
              {t.order}
              <ArrowRight size={15} />
            </button>

            {/* Mobile toggle */}
            <button onClick={() => setOpen(true)} className={`md:hidden p-1 ${mobileIconColor}`}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <>
          <div className="fixed inset-0 bg-black/40 z-[200]" onClick={() => setOpen(false)} />
          <div className="fixed top-0 right-0 bottom-0 w-[300px] bg-[#1a0a00] z-[201] p-8 pt-20 shadow-2xl">
            <button onClick={() => setOpen(false)} className="absolute top-5 right-5 text-white/60">
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
                  className={`block text-lg font-semibold py-4 border-b border-white/10 ${
                    isActive ? "text-orange-400" : "text-white/80"
                  }`}
                >
                  {t.items[i]}
                </a>
              );
            })}

            <button className="mt-6 w-full flex items-center justify-center gap-2 bg-orange-500 text-white font-bold py-3.5 rounded-full">
              {t.order} <ArrowRight size={15} />
            </button>
          </div>
        </>
      )}
    </>
  );
}