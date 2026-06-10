"use client";
import { LANG, Locale } from "@/lib/lang";

export default function WhyUs({ lang }: { lang: Locale }) {
  const t = LANG[lang].why;

  return (
    <section id="why" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Header ── */}
        <h2
          className="text-center mb-12"
          style={{
            fontFamily: "'Momo Trust Display', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            color: "var(--color-body)",
          }}
        >
          {t.title}
        </h2>

        {/* ── Cards ── */}
        <div className="grid md:grid-cols-3 gap-6">
          {t.items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 flex flex-col"
              style={{ border: "2px solid #746A6326" }}
            >
              {/* Illustration */}
              <div className="mb-6 flex justify-center"
              style={{
                height: i === 1 ? "170px" : "140px",
                marginTop: i === 1 ? "-30px" : "0px",
            }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-auto object-contain"
                />
              </div>

              {/* Title */}
              <h3
                className="mb-3"
                style={{
                  fontFamily: "'Momo Trust Display', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(1rem, 1.8vw, 1.5rem)",
                  color: "var(--color-body)",
                }}
              >
                {item.title}
              </h3>

              {/* Desc */}
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontSize: "1rem",
                  color: "var(--color-secondary)",
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}