"use client";
import { use, useState, useEffect } from "react";
import { ArrowLeft, Clock, Flame, Star, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Locale } from "@/lib/lang";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { getMenuItemById } from "@/lib/queryMenuItem";
import { transformMenuItem } from "@/lib/transformMenuItem";
import { useSiteSettings } from "@/lib/useSiteSettings";

// Nhãn tĩnh theo ngôn ngữ (giữ nguyên như code cũ, không liên quan Sanity)
const LABELS = {
  vi: {hot: "Bán chạy", newItem: "Mới"},
  en: {hot: "Best seller", newItem: "New"},
};

function MenuDetailContent({ lang }: { lang: Locale }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const site = useSiteSettings(lang);

  const slugParam = searchParams.get("slug");
  const id = slugParam ? parseInt(slugParam) : null;

  const [item, setItem] = useState<ReturnType<typeof transformMenuItem> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }
    setLoading(true);
    getMenuItemById(id).then((raw) => {
      setItem(transformMenuItem(raw, lang));
      setLoading(false);
    });
  }, [id, lang]);

  const handleLangChange = (newLang: Locale) => {
    const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
    router.push(newPath + (slugParam ? `?slug=${slugParam}` : ""));
  };

  const tagStyle: Record<string, string> = {
    hot:     "bg-red-500 text-white",
    newItem: "bg-amber-400 text-white",
  };
  const tagLabel: Record<string, string> = {
    hot:     LABELS[lang].hot,
    newItem: LABELS[lang].newItem,
  };

  if (!site) {
    return <div className="min-h-screen bg-orange-50" />;
  }

  return (
    <div className="min-h-screen bg-orange-50">
      <Navbar lang={lang} onLangChange={handleLangChange} variant="light" t={site.nav} orderUrl={site.orderUrl} />

      <div className="max-w-5xl mx-auto px-6 lg:px-10 pt-32 pb-24">
        {/* Back */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors font-semibold text-sm mb-10"
        >
          <ArrowLeft size={16} />
          {lang === "vi" ? "Quay lại menu" : "Back to menu"}
        </button>

        {/* Loading */}
        {loading ? (
          <div className="flex justify-center py-32 text-gray-400">
            {lang === "vi" ? "Đang tải..." : "Loading..."}
          </div>
        ) : !item ? (
          /* Not found */
          <div className="flex flex-col items-center justify-center py-32 text-center gap-4">
            <p className="text-2xl font-bold text-gray-500">
              {lang === "vi" ? "Không tìm thấy món ăn" : "Dish not found"}
            </p>
            <a href={`/${lang}/menu`} className="text-orange-400 underline font-semibold">
              {lang === "vi" ? "Xem tất cả menu" : "View all menu"}
            </a>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* ── Image ── */}
            <div className="relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-black/60">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>

              {item.tag && (
                <span className={`absolute top-4 left-4 flex items-center gap-1.5 text-sm font-extrabold px-3 py-1.5 rounded-full shadow-lg ${tagStyle[item.tag]}`}>
                  {item.tag === "hot" ? <Flame size={13} /> : <Sparkles size={13} />}
                  {tagLabel[item.tag]}
                </span>
              )}
            </div>

            {/* ── Info ── */}
            <div className="flex flex-col gap-6 pt-2">
              {/* Title + rating */}
              <div>
                <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight mb-3">
                  {item.name}
                </h1>
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < Math.floor(item.rating)
                          ? "fill-orange-400 stroke-orange-400"
                          : "stroke-gray-600 fill-none"
                      }
                    />
                  ))}
                  <span className="text-orange-400 font-bold text-sm ml-1">{item.rating}</span>
                </div>
              </div>

              {/* Price */}
              <p className="text-4xl font-extrabold text-orange-400">
                {item.price}
              </p>

              {/* Stats */}
              <div className="flex gap-4 flex-wrap">
                <div className="flex items-center gap-2 bg-white/5 rounded-xl px-4 py-3">
                  <Clock size={16} className="text-orange-400" />
                  <div>
                    <p className="text-xs text-gray-600">
                      {lang === "vi" ? "Thời gian" : "Prep time"}
                    </p>
                    <p className="text-sm font-bold">{item.prepTime}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-white/5 rounded-xl px-4 py-3">
                  <Flame size={16} className="text-orange-400" />
                  <div>
                    <p className="text-xs text-gray-400">
                      {lang === "vi" ? "Năng lượng" : "Calories"}
                    </p>
                    <p className="text-sm font-bold">{item.calories}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">
                  {lang === "vi" ? "Mô tả" : "Description"}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>

              {/* Ingredients */}
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">
                  {lang === "vi" ? "Thành phần" : "Ingredients"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {item.ingredients.map((ing: string, i: number) => (
                    <span
                      key={i}
                      className="text-sm bg-orange-100 text-gray-700 px-3 py-1.5 rounded-full border border-orange-300"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <button
                className="mt-2 w-full flex items-center justify-center gap-2 text-white font-extrabold text-base py-4 rounded-2xl transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-orange-500/30"
                style={{ background: "linear-gradient(135deg, #ff6b2b, #c0152a)" }}
              >
                {lang === "vi" ? "Đặt món ngay" : "Order Now"}
                <ArrowLeft size={18} className="rotate-180" />
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer lang={lang} t={site.footer} />
    </div>
  );
}

export default function MenuDetailPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = use(params);
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-950" />}>
      <MenuDetailContent lang={lang} />
    </Suspense>
  );
}