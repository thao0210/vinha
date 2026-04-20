"use client";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Phone } from "lucide-react";
import { LANG, Locale } from "@/lib/lang";

export default function Footer({ lang }: { lang: Locale }) {
  const t = LANG[lang].footer;

  return (
    <footer className="bg-[#702B14] text-white/80 pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left */}
          <div>
            <div className="text-3xl font-bold text-white mb-6">VỊ NHÀ</div>

            <div className="mb-4">
              <div className="font-semibold text-white">Slogan:</div>
              <div className="text-white/80">Cơm ngon chuẩn vị nhà.</div>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <span className="font-semibold text-white">Hỗ trợ:</span>
              <span>0909 123 456</span>
            </div>

            <div className="border-t border-white/20 my-6" />

            <div>
              <div className="font-semibold text-white mb-3">Theo dõi</div>
              <div className="flex gap-4">
                <a className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#6b3414] transition">
                  <FaFacebookF size={16} />
                </a>
                <a className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#6b3414] transition">
                  <FaInstagram size={16} />
                </a>
                <a className="px-3 h-10 rounded-full border border-white/30 flex items-center text-sm hover:bg-white hover:text-[#6b3414] transition">
                  Zalo
                </a>
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="font-bold text-white text-lg mb-4">
              BẾP CHÍNH
            </div>

            <div className="mb-2">123 Lê Lợi, Quận 1</div>
            <div className="mb-6">Phục vụ: 8:30 - 13:30</div>

            <div className="flex gap-4 text-sm underline underline-offset-4">
              <a href="#">Thực đơn</a>
              <span>•</span>
              <a href="#">Ưu đãi</a>
              <span>•</span>
              <a href="#">Chính sách</a>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-white/50 mt-10">
          {t.copy}
        </div>
      </div>
    </footer>
  );
}