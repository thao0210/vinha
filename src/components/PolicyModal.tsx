"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { getPolicyData, transformPolicy } from "@/lib/queryPolicy";

type Locale = "vi" | "en";

// Tuỳ chỉnh cách render từng loại block trong Portable Text
const portableTextComponents = {
  block: {
    h2: ({ children }: any) => (
      <h2
        className="text-xl font-bold mt-6 mb-2"
        style={{ color: "var(--color-heading)", fontFamily: "'Momo Trust Display', sans-serif" }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3
        className="text-base font-semibold mt-4 mb-1"
        style={{ color: "var(--color-heading)", fontFamily: "'Archivo', sans-serif" }}
      >
        {children}
      </h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--color-body)", fontFamily: "'Archivo', sans-serif" }}>
        {children}
      </p>
    ),
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-bold">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside mb-3 space-y-1 text-sm" style={{ color: "var(--color-body)" }}>
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside mb-3 space-y-1 text-sm" style={{ color: "var(--color-body)" }}>
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li>{children}</li>,
    number: ({ children }: any) => <li>{children}</li>,
  },
}

interface PolicyModalProps {
  lang: Locale
  isOpen: boolean
  onClose: () => void
}

export default function PolicyModal({ lang, isOpen, onClose }: PolicyModalProps) {
  const [policy, setPolicy] = useState<ReturnType<typeof transformPolicy> | null>(null)

  useEffect(() => {
    if (isOpen && !policy) {
      getPolicyData().then((raw) => setPolicy(transformPolicy(raw, lang)))
    }
  }, [isOpen, lang])

  // Đổi ngôn ngữ khi lang thay đổi
  useEffect(() => {
    if (policy) {
      getPolicyData().then((raw) => setPolicy(transformPolicy(raw, lang)))
    }
  }, [lang])

  // Đóng bằng Esc
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    if (isOpen) window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  // Khoá scroll body khi modal mở
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    // Overlay
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.55)' }}
      onClick={onClose}
    >
      {/* Modal box — không đóng khi click bên trong */}
      <div
        className="relative w-full max-w-2xl max-h-[85vh] rounded-2xl overflow-hidden flex flex-col"
        style={{ backgroundColor: '#FAF5EE' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4 flex-shrink-0 border-b"
          style={{ borderColor: '#E5DDD5' }}
        >
          <h2
            className="text-lg font-semibold"
            style={{ color: 'var(--color-heading)', fontFamily: "'Momo Trust Display', sans-serif" }}
          >
            {policy?.title ?? (lang === 'vi' ? 'Chính sách & Điều khoản' : 'Policy & Terms')}
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full transition-opacity hover:opacity-60"
            aria-label="Đóng"
          >
            <X size={20} style={{ color: 'var(--color-body)' }} />
          </button>
        </div>

        {/* Content — scrollable */}
        <div className="overflow-y-auto px-6 py-5 flex-1">
          {!policy ? (
            <p className="text-sm text-center py-10" style={{ color: 'var(--color-body)' }}>
              {lang === 'vi' ? 'Đang tải...' : 'Loading...'}
            </p>
          ) : (
            <PortableText value={policy.content as any} components={portableTextComponents} />
          )}
        </div>

        {/* Footer */}
        <div
          className="px-6 py-4 flex-shrink-0 border-t flex justify-end"
          style={{ borderColor: '#E5DDD5' }}
        >
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full text-white text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ background: 'var(--color-heading)', fontFamily: "'Archivo', sans-serif" }}
          >
            {lang === 'vi' ? 'Đã hiểu' : 'Got it'}
          </button>
        </div>
      </div>
    </div>
  )
}