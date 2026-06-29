"use client";
import { useState, useEffect } from "react";
import { getSiteSettings } from "./querySiteSettings";
import { transformSiteSettings } from "./transformSiteSettings";

type Locale = "vi" | "en";

/**
 * Hook dùng chung cho MỌI trang cần Navbar + Footer (ngoại trừ trang chủ,
 * vì trang chủ đã lấy siteSettings sẵn trong getHomePageData để tránh gọi 2 lần).
 *
 * Cách dùng:
 *   const site = useSiteSettings(lang);
 *   if (!site) return <div>...</div>; // đang tải
 *   <Navbar lang={lang} t={site.nav} ... />
 *   <Footer lang={lang} t={site.footer} />
 */
export function useSiteSettings(lang: Locale) {
  const [site, setSite] = useState<ReturnType<typeof transformSiteSettings> | null>(null);

  useEffect(() => {
    getSiteSettings().then((raw) => {
      setSite(transformSiteSettings(raw, lang));
    });
  }, [lang]);

  return site;
}