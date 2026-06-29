import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: 'o9jcjqp9',
  dataset: 'production',
  apiVersion: '2024-01-01',
  // false = đọc trực tiếp, luôn lấy đúng data mới nhất ngay sau khi Publish.
  // (true = qua CDN Sanity, nhanh hơn nhưng có thể trễ vài chục giây so với lúc Publish)
  useCdn: false,
})

const builder = imageUrlBuilder(sanityClient)

/**
 * Resolve field "smartImage" (object {upload, fallbackUrl, alt}) thành 1 URL string.
 * - Có ảnh upload -> trả về URL qua Sanity CDN (tự nén, tự convert webp)
 * - Không có upload -> trả về fallbackUrl (ảnh tĩnh có sẵn từ code FE, ví dụ /images/mon1.png)
 * - Không có gì cả -> trả về '' (rỗng), để component tự xử lý placeholder nếu cần
 *
 * width/quality optional: chỉ áp dụng khi ảnh là upload qua Sanity CDN.
 */
export function resolveImage(
  smartImage: {upload?: any; fallbackUrl?: string} | null | undefined,
  opts?: {width?: number; quality?: number}
): string {
  if (!smartImage) return ''
  if (smartImage.upload) {
    let img = builder.image(smartImage.upload).auto('format')
    if (opts?.width) img = img.width(opts.width)
    img = img.quality(opts?.quality ?? 75)
    return img.url()
  }
  return smartImage.fallbackUrl || ''
}