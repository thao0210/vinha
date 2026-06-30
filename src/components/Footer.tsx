"use client";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Locale } from "@/lib/lang";
import { useState } from "react";
import dynamic from "next/dynamic";

// Lazy load PolicyModal để không ảnh hưởng bundle size
const PolicyModal = dynamic(() => import("./PolicyModal"), { ssr: false });

function SocialIcon({ type }: { type: string }) {
  if (type === "facebook")  return <FaFacebookF size={18} />;
  if (type === "instagram") return <FaInstagram size={18} />;
  if (type === "zalo")      return <span style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "-0.5px" }}>Zalo</span>;
  return null;
}

export default function Footer({ lang, t }: { lang: Locale; t: any }) {
  const [policyOpen, setPolicyOpen] = useState(false);

  // Helper render link: href="#" → mở modal thay vì điều hướng
  const renderLink = (label: string, href: string) => {
    if (href === "#") {
      return (
        <button
          key={label}
          onClick={() => setPolicyOpen(true)}
          className="block text-left text-sm font-medium opacity-80 hover:opacity-100 transition-opacity"
          style={{ fontFamily: "'Archivo', sans-serif" }}
        >
          {label}
        </button>
      );
    }
    return (
      <a
        key={label}
        href={href}
        className="block text-sm font-medium opacity-80 hover:opacity-100 transition-opacity"
        style={{ fontFamily: "'Archivo', sans-serif" }}
      >
        {label}
      </a>
    );
  };

  return (
    <>
      <PolicyModal lang={lang} isOpen={policyOpen} onClose={() => setPolicyOpen(false)} />
      <footer className="text-white pt-16 pb-12" style={{ backgroundColor: "#7F1D1D" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Desktop: 3-column grid ── */}
        <div className="hidden lg:grid grid-cols-3 gap-12 lg:gap-20">

          {/* Col 1: Logo + Tagline */}
          <div className="flex flex-col justify-start">
            <img
              src="/logo-white.png"
              alt="Vị Nhà"
              className="h-16 w-auto object-contain object-left mb-4"
            />
            <p
              style={{
                fontFamily: "'Momo Trust Display', sans-serif",
                fontSize: "1.2rem",
                color: "rgba(255,255,255,0.85)",
              }}
            >
              {t.tagline}
            </p>
          </div>

          {/* Col 2: Khám phá + Theo dõi */}
          <div className="flex flex-col gap-10">
            <div>
              <p
                className="mb-4"
                style={{
                  fontFamily: "'Momo Trust Display', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  color: "#fff",
                }}
              >
                {t.exploreTitle}
              </p>
              <div className="flex flex-col gap-2.5">
                {t.exploreLinks.map(({ label, href }: {label: string; href: string}) =>
                  renderLink(label, href)
                )}
              </div>
            </div>

            <div>
              <p
                className="mb-4"
                style={{
                  fontFamily: "'Momo Trust Display', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  color: "#fff",
                }}
              >
                {t.followTitle}
              </p>
              <div className="flex items-center gap-3">
                {t.social.map(({ label, href, type }: {label: string; href: string; type:string}) => (
                  <a
                    key={label}
                    href={href}
                    title={label}
                    className="w-11 h-11 rounded-full border border-white/50 flex items-center justify-center transition-opacity hover:opacity-70"
                  >
                    <SocialIcon type={type} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Col 3: Bếp chính + Hotline */}
          <div className="flex flex-col gap-8">
            <div>
              <p
                className="mb-4"
                style={{
                  fontFamily: "'Momo Trust Display', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  color: "#fff",
                }}
              >
                {t.kitchenTitle}
              </p>
              <p
                className="mb-2"
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontSize: "1.1rem",
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                {t.kitchenAddress}
              </p>
              <p
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontSize: "1.1rem",
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                {t.kitchenHours}
              </p>
            </div>
            <p
              style={{
                fontFamily: "'Archivo', sans-serif",
                fontSize: "1.1rem",
                color: "rgba(255,255,255,0.85)",
              }}
            >
              {t.hotlineLabel}: {t.hotline}
            </p>
          </div>
        </div>

        {/* ── Mobile layout ── */}
        <div className="lg:hidden flex flex-col gap-10">

          {/* Logo + Tagline */}
          <div>
            <img
              src="/logo-white.png"
              alt="Vị Nhà"
              className="h-14 w-auto object-contain object-left mb-3"
            />
            <p
              style={{
                fontFamily: "'Momo Trust Display', sans-serif",
                fontSize: "1rem",
                color: "rgba(255,255,255,0.85)",
              }}
            >
              {t.tagline}
            </p>
          </div>

          {/* Khám phá — label left, links right in a row */}
          <div className="flex items-start gap-6">
            <p
              className="flex-shrink-0 w-[90px]"
              style={{
                fontFamily: "'Momo Trust Display', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                color: "#fff",
              }}
            >
              {t.exploreTitle}
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {t.exploreLinks.map(({ label, href }: {label: string; href: string}) =>
                renderLink(label, href)
              )}
            </div>
          </div>

          {/* Theo dõi — label left, icons right */}
          <div className="flex items-center gap-6">
            <p
              className="flex-shrink-0 w-[90px]"
              style={{
                fontFamily: "'Momo Trust Display', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                color: "#fff",
              }}
            >
              {t.followTitle}
            </p>
            <div className="flex items-center gap-4">
              {t.social.map(({ label, href, type }: {label: string; href: string, type: string}) => (
                <a
                  key={label}
                  href={href}
                  title={label}
                  className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center transition-opacity hover:opacity-70"
                >
                  <SocialIcon type={type} />
                </a>
              ))}
            </div>
          </div>

          {/* Bếp chính — label left, info right */}
          <div className="flex items-start gap-6">
            <p
              className="flex-shrink-0 w-[90px]"
              style={{
                fontFamily: "'Momo Trust Display', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                color: "#fff",
              }}
            >
              {t.kitchenTitle}
            </p>
            <div>
              <p
                className="mb-1"
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontSize: "0.95rem",
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                {t.kitchenAddress}
              </p>
              <p
                className="mb-1"
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontSize: "0.95rem",
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                {t.kitchenHours}
              </p>
              <p
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontSize: "0.95rem",
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                {t.hotlineLabel}: {t.hotline}
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
    </>
  );
}