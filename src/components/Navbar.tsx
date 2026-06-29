"use client";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { Locale } from "@/lib/lang";

const PAGE_SLUGS: Record<string, string> = {
  menu:   "menu",
  promo:  "khuyen-mai",
  stores: "cua-hang",
  about:  "gioi-thieu",
};

// Bowl icon matching the Vị Nhà logo in design
const BowlIcon = () => (
  <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    {/* Bowl body */}
    <path
      d="M6 18 C6 26 12 30 18 30 C24 30 30 26 30 18 Z"
      fill="#991B1B"
    />
    {/* Bowl rim */}
    <path
      d="M5 18 H31"
      stroke="#991B1B"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Steam / chopsticks */}
    <path
      d="M14 8 Q13 5 15 3"
      stroke="#991B1B"
      strokeWidth="1.8"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M18 7 Q17 4 19 2"
      stroke="#991B1B"
      strokeWidth="1.8"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M22 8 Q21 5 23 3"
      stroke="#991B1B"
      strokeWidth="1.8"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export default function Navbar({
  lang,
  onLangChange,
  variant = "light",
  t,
  orderUrl
}: {
  lang: Locale;
  onLangChange: (l: Locale) => void;
  variant?: "dark" | "light";
  t: any;
  orderUrl: string;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-[68px]">

          {/* ── Logo ── */}
          <a href={`/${lang}`} className="flex items-center gap-2">
           <img src="/logo.png" alt="Vị Nhà" className="h-16" />
          </a>

          {/* ── Desktop nav links ── */}
          <div className="hidden md:flex items-center gap-8">
            {t.ids.map((id, i) => {
              const href = `/${lang}/${PAGE_SLUGS[id]}`;
              const isActive = pathname.includes(PAGE_SLUGS[id]);
              return (
                <a
                  key={id}
                  href={href}
                  className={`text-[16px] font-semibold transition-colors ${
                    isActive
                      ? "text-red-800"
                      : "text-gray-700 hover:text-red-800"
                  }`}
                >
                  {t.items[i]}
                </a>
              );
            })}
          </div>

          {/* ── Right controls ── */}
          <div className="flex items-center gap-3">

            {/* Lang switcher pill */}
            <div className="flex rounded-full overflow-hidden border border-gray-200 bg-gray-50">
              {(["vi", "en"] as Locale[]).map((l) => (
                <button
                  key={l}
                  onClick={() => onLangChange(l)}
                  className={`text-[12px] font-bold px-3.5 py-1.5 tracking-wider uppercase transition-all rounded-full ${
                    lang === l
                      ? "bg-[#991B1B] text-white"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Order CTA */}
            <a
              href={orderUrl}
              className="hidden sm:inline-flex items-center gap-2 text-white text-[15px] font-bold px-5 py-2.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-md"
              style={{ background: "linear-gradient(135deg, #991B1B 0%, #7F1D1D 100%)" }}
            >
              {t.order}
              <ArrowRight size={14} />
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-1 text-gray-700"
            >
              <Menu size={24} />
            </button>
          </div>

        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      {open && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-[200]"
            onClick={() => setOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-[300px] bg-white z-[201] p-8 pt-20 shadow-2xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-600"
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
                  className={`block text-[16px] font-semibold py-4 border-b border-gray-100 transition-colors ${
                    isActive ? "text-red-800" : "text-gray-700 hover:text-red-800"
                  }`}
                >
                  {t.items[i]}
                </a>
              );
            })}

            <a
              href={orderUrl}
              className="mt-6 w-full flex items-center justify-center gap-2 text-white font-bold py-3.5 rounded-full"
              style={{ background: "linear-gradient(135deg, #991B1B 0%, #7F1D1D 100%)" }}
            >
              {t.order}
              <ArrowRight size={15} />
            </a>
          </div>
        </>
      )}
    </>
  );
}