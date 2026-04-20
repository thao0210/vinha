"use client";
import { use } from "react";
import { ArrowLeft, Clock, Flame, Star, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LANG, Locale } from "@/lib/lang";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Suspense } from "react";

// Khớp id với lang.ts (số 1-12)
const MENU_DATA = [
  {
    id: 1,
    name: "Cơm Gà Nướng Mật Ong",
    img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&h=800&fit=crop",
    price: "69.000đ",
    tag: "hot",
    category: "mainDish",
    desc: "Gà ta tươi ướp mật ong nguyên chất qua đêm, nướng than hoa đến vàng ruộm. Vị ngọt tự nhiên của mật ong quyện cùng thịt gà mềm mọng, ăn kèm cơm trắng dẻo và rau sống tươi mát.",
    calories: "580 kcal",
    prepTime: "20 phút",
    rating: 4.9,
    ingredients: ["Gà ta tươi", "Mật ong nguyên chất", "Cơm trắng", "Rau sống", "Nước chấm đặc biệt"],
  },
  {
    id: 2,
    name: "Cơm Sườn Nướng BBQ",
    img: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&h=800&fit=crop",
    price: "75.000đ",
    tag: "hot",
    category: "mainDish",
    desc: "Sườn heo nướng theo phong cách BBQ Mỹ, sốt đặc biệt của Vị Nhà được ướp 12 tiếng. Thịt mềm tan, cháy cạnh thơm lừng, ăn kèm cơm trắng và dưa leo.",
    calories: "650 kcal",
    prepTime: "25 phút",
    rating: 4.8,
    ingredients: ["Sườn heo", "Sốt BBQ đặc biệt", "Cơm trắng", "Dưa leo", "Hành lá"],
  },
  {
    id: 3,
    name: "Bún Bò Huế",
    img: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=800&h=800&fit=crop",
    price: "55.000đ",
    tag: null,
    category: "mainDish",
    desc: "Nước dùng hầm xương bò 8 tiếng, thơm sả và mắm ruốc đúng vị Huế. Bún tươi, thịt bò mềm, chả cua đặc trưng — một tô đậm đà không thể chối từ.",
    calories: "490 kcal",
    prepTime: "15 phút",
    rating: 4.7,
    ingredients: ["Bún tươi", "Thịt bò", "Chả cua", "Sả", "Mắm ruốc", "Rau sống"],
  },
  {
    id: 4,
    name: "Phở Bò Tái Chín",
    img: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&h=800&fit=crop",
    price: "59.000đ",
    tag: null,
    category: "mainDish",
    desc: "Nước phở hầm xương ống và gân bò 10 tiếng, trong vắt và ngọt tự nhiên. Thịt bò tái hồng, chín mềm — chuẩn vị phở Bắc truyền thống giữa lòng Sài Gòn.",
    calories: "520 kcal",
    prepTime: "15 phút",
    rating: 4.8,
    ingredients: ["Bánh phở", "Thịt bò tái", "Thịt bò chín", "Nước dùng xương", "Hành, ngò", "Tương đen"],
  },
  {
    id: 5,
    name: "Combo Văn Phòng A",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=800&fit=crop",
    price: "49.000đ",
    tag: "hot",
    category: "combo",
    desc: "Combo tiết kiệm nhưng đầy đủ dinh dưỡng: 1 món chính + cơm trắng + canh rau + nước uống. Lý tưởng cho bữa trưa nhanh gọn, no bụng, tập trung làm việc buổi chiều.",
    calories: "620 kcal",
    prepTime: "10 phút",
    rating: 4.7,
    ingredients: ["Món chính theo ngày", "Cơm trắng", "Canh rau", "Nước uống"],
  },
  {
    id: 6,
    name: "Combo Dinh Dưỡng B",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=800&fit=crop",
    price: "65.000đ",
    tag: "newItem",
    category: "combo",
    desc: "Combo cân bằng dinh dưỡng với rau củ đa màu sắc, protein chất lượng cao và tinh bột phức hợp. Được thiết kế bởi chuyên gia dinh dưỡng, phù hợp cho người ăn lành mạnh.",
    calories: "550 kcal",
    prepTime: "15 phút",
    rating: 4.8,
    ingredients: ["Ức gà áp chảo", "Gạo lứt", "Rau củ hấp", "Salad", "Nước ép trái cây"],
  },
  {
    id: 7,
    name: "Combo Premium C",
    img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=800&fit=crop",
    price: "89.000đ",
    tag: "newItem",
    category: "combo",
    desc: "Trải nghiệm đỉnh cao với combo cao cấp nhất của Vị Nhà: món chính premium, khai vị, canh đặc biệt, tráng miệng và nước uống cao cấp. Xứng đáng cho một ngày làm việc hiệu quả.",
    calories: "780 kcal",
    prepTime: "20 phút",
    rating: 4.9,
    ingredients: ["Món chính premium", "Khai vị", "Canh đặc biệt", "Tráng miệng", "Nước cao cấp"],
  },
  {
    id: 8,
    name: "Trà Chanh Sả",
    img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&h=800&fit=crop",
    price: "25.000đ",
    tag: null,
    category: "drinks",
    desc: "Trà xanh pha lạnh kết hợp chanh tươi và sả thơm, thanh mát và tỉnh táo. Thức uống hoàn hảo cho buổi trưa oi bức tại văn phòng.",
    calories: "80 kcal",
    prepTime: "5 phút",
    rating: 4.6,
    ingredients: ["Trà xanh", "Chanh tươi", "Sả", "Đường phèn", "Đá"],
  },
  {
    id: 9,
    name: "Nước Ép Cam Tươi",
    img: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=800&h=800&fit=crop",
    price: "30.000đ",
    tag: "hot",
    category: "drinks",
    desc: "100% cam vắt tươi ngay lúc đặt hàng, không thêm đường hay chất bảo quản. Giàu vitamin C, giúp tăng đề kháng và tỉnh táo cả buổi chiều.",
    calories: "110 kcal",
    prepTime: "5 phút",
    rating: 4.8,
    ingredients: ["Cam tươi 100%", "Không đường", "Không chất bảo quản"],
  },
  {
    id: 10,
    name: "Sinh Tố Bơ",
    img: "https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?w=800&h=800&fit=crop",
    price: "35.000đ",
    tag: null,
    category: "drinks",
    desc: "Bơ sáp Đắk Lắk chín mịn xay cùng sữa tươi và đường vừa miệng. Béo ngậy, thơm lừng, đủ năng lượng để chinh phục deadline buổi chiều.",
    calories: "280 kcal",
    prepTime: "5 phút",
    rating: 4.7,
    ingredients: ["Bơ sáp Đắk Lắk", "Sữa tươi", "Đường", "Đá xay"],
  },
  {
    id: 11,
    name: "Gỏi Cuốn Tôm Thịt",
    img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&h=800&fit=crop",
    price: "35.000đ",
    tag: "newItem",
    category: "sides",
    desc: "Bánh tráng cuốn tôm sú, thịt heo luộc, bún, rau sống và cà rốt bào sợi. Chấm cùng tương đậu phộng đặc trưng — nhẹ bụng, thanh mát, ăn hoài không ngán.",
    calories: "180 kcal",
    prepTime: "10 phút",
    rating: 4.6,
    ingredients: ["Bánh tráng", "Tôm sú", "Thịt heo luộc", "Bún", "Rau sống", "Tương đậu phộng"],
  },
  {
    id: 12,
    name: "Chả Giò Giòn",
    img: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=800&h=800&fit=crop",
    price: "28.000đ",
    tag: null,
    category: "sides",
    desc: "Chả giò nhân thịt heo, cà rốt, miến và nấm mèo, chiên giòn rụm vàng ươm. Ăn kèm rau sống và nước mắm chua ngọt — món ăn thêm không thể thiếu.",
    calories: "220 kcal",
    prepTime: "10 phút",
    rating: 4.5,
    ingredients: ["Thịt heo xay", "Cà rốt", "Miến", "Nấm mèo", "Bánh tráng cuốn", "Nước mắm chua ngọt"],
  },
];

function MenuDetailContent({ lang }: { lang: Locale }) {
  const t = LANG[lang].menuPage;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const slugParam = searchParams.get("slug");
  const id = slugParam ? parseInt(slugParam) : null;
  const item = MENU_DATA.find((m) => m.id === id);

  // Tìm tên từ lang.ts để hỗ trợ đa ngôn ngữ
  const langItem = t.items.find((i) => i.id === id);

  const handleLangChange = (newLang: Locale) => {
    const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
    router.push(newPath + (slugParam ? `?slug=${slugParam}` : ""));
  };

  const tagStyle: Record<string, string> = {
    hot:     "bg-red-500 text-white",
    newItem: "bg-amber-400 text-white",
  };
  const tagLabel: Record<string, string> = {
    hot:     t.hot,
    newItem: t.newItem,
  };

  return (
    <div className="min-h-screen bg-orange-50">
      <Navbar lang={lang} onLangChange={handleLangChange}  variant="light"/>

      <div className="max-w-5xl mx-auto px-6 lg:px-10 pt-32 pb-24">
        {/* Back */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors font-semibold text-sm mb-10"
        >
          <ArrowLeft size={16} />
          {lang === "vi" ? "Quay lại menu" : "Back to menu"}
        </button>

        {/* Not found */}
        {!item ? (
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
                  alt={langItem?.name ?? item.name}
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
                  {langItem?.name ?? item.name}
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
                {langItem?.price ?? item.price}
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
                  {item.ingredients.map((ing, i) => (
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

      <Footer lang={lang} />
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