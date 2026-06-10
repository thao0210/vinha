// ─────────────────────────────────────────────────────────────
//  lang.ts — Single source of truth for Vị Nhà website
// ─────────────────────────────────────────────────────────────

export type Locale = "vi" | "en";

export const LANG = {
  vi: {
    // ── NAVBAR ────────────────────────────────────────────────
    nav: {
      items: ["Menu", "Khuyến mãi", "Cửa hàng", "Giới thiệu"],
      ids:   ["menu", "promo",      "stores",    "about"],
      order: "Đặt món",
    },

    // ── HERO ──────────────────────────────────────────────────
    hero: {
      badge:    "Bữa ăn chuẩn vị Việt",
      titleTop: "Dẫu ngày bận rộn,",
      titleRed: "vẫn trọn vị nhà",
      subtitle: "Ngon lành - tươm tất - xứng tầm giá",
      cta:      "Xem thực đơn",
      banner:   "/images/banner.png",
      phone:    "tel:+84909123456",
      zalo:     "https://zalo.me/84909123456",
    },

    // ── STATS (trang chủ) ─────────────────────────────────────
    stats: [
      { value: "2,000+", label: "Khách hàng" },
      { value: "30'",    label: "Giao hàng"  },
      { value: "4.9",    label: "Đánh giá"   },
    ],

    // ── PROMO SNIPPET (trang chủ) ─────────────────────────────
    promo: {
      tag:   "Ưu đãi đặc biệt",
      title: "Khuyến mãi hôm nay",
      items: [
        { badge: "HOT",  title: "Combo trưa 49K",  desc: "Cơm + nước + tráng miệng. Áp dụng 11h–13h hàng ngày." },
        { badge: "MỚI",  title: "Mua 5 tặng 1",    desc: "Tích đủ 5 đơn hàng, nhận ngay 1 phần cơm miễn phí."  },
        { badge: "FREE", title: "Freeship từ 99K", desc: "Miễn phí giao hàng bán kính 3km cho đơn từ 99K."      },
      ],
    },

    // ── PROMO BANNER (trang chủ — section xanh nhạt) ──────────
    promoBanner: {
      title:      "Combo trưa 49K",
      desc1:      "Cơm + Nước + Tráng miệng.",
      desc2:      "Áp dụng từ 11h – 13h hàng ngày.",
      cta:        "Đặt món",
      ctaAll:     "Xem tất cả ưu đãi",
      banner:     "/images/promote.png",
    },

    // ── MENU SNIPPET (trang chủ) ──────────────────────────────
    menu: {
      tag:      "Thực đơn",
      title:    "Món khách hay chọn",
      viewAll:  "Xem thực đơn",
      orderBtn: "Đặt ngay",
      items: [
        { name: "Cơm sườn nướng", price: "65.000đ", img: "/images/mon1.png" },
        { name: "Cơm gà xối mỡ",  price: "55.000đ", img: "/images/mon2.png" },
        { name: "Combo đặc biệt", price: "79.000đ", img: "/images/mon3.png" },
        { name: "Cơm tấm bì chả", price: "48.000đ", img: "/images/mon1.png" },
        { name: "Phở bò tái nạm", price: "55.000đ", img: "/images/mon2.png" },
        { name: "Bún bò Huế",     price: "52.000đ", img: "/images/mon3.png" },
      ],
    },

    // ── WHY (trang chủ) ───────────────────────────────────────
    why: {
      tag:   "Cam kết",
      title: "Vì sao chọn Vị Nhà?",
      items: [
        { title: "Nấu mới mỗi ngày",        desc: "Chế biến mới trong ngày, giữ trọn hương vị tươi ngon.",                              img: "/images/why1.png" },
        { title: "Chọn lọc kỹ lưỡng",       desc: "Nguyên liệu được chọn lọc, bảo quản, và chế biến đúng chuẩn an toàn.",               img: "/images/why2.png" },
        { title: "Chất lượng xứng tầm giá", desc: "Từng phần ăn được chăm chút chỉn chu với mức giá hợp lý, vừa vặn.",                  img: "/images/why3.png" },
      ],
    },

    // ── STORES SNIPPET (trang chủ) ────────────────────────────
    stores: {
      tag:       "Chi nhánh",
      title:     "Hệ thống cửa hàng",
      viewAll:   "Xem tất cả",
      openLabel: "Đang mở cửa",
      soonLabel: "Sắp khai trương",
      dirLabel:  "Chỉ đường",
      list: [
        { name: "Vị Nhà — Quận 1",     addr: "123 Nguyễn Huệ, P. Bến Nghé, Q.1",         hrs: "10:00–14:00 · 17:00–20:00", open: true , img: "/images/store-1.png" },
        { name: "Vị Nhà — Quận 3",     addr: "456 Võ Văn Tần, P.5, Q.3",                 hrs: "10:00–14:00 · 17:00–20:00", open: true , img: "/images/store-2.png" },
        { name: "Vị Nhà — Quận 7",     addr: "789 Nguyễn Thị Thập, Tân Phong, Q.7",      hrs: "10:00–14:00",               open: false, img: "/images/store-1.png" },
        { name: "Vị Nhà — Thủ Đức",    addr: "321 Võ Văn Ngân, Linh Chiểu, TP. Thủ Đức", hrs: "10:00–14:00",               open: false, img: "/images/store-2.png" },
        { name: "Vị Nhà — Bình Thạnh", addr: "654 Xô Viết Nghệ Tĩnh, P.25, Bình Thạnh",  hrs: "10:00–14:00 · 17:00–20:00", open: false, img: "/images/store-1.png" },
      ],
    },

    // ── CTA BANNER (trang chủ — "Từ bếp đến tay khách") ──────
    ctaBanner: {
      title: "Từ bếp đến tay khách",
      ops: [
        { label: "Nấu như cho chính mình", img: "/images/cta-1.png",  fallback: "/images/cta-1.png" },
        { label: "Đóng gói cẩn thận",      img: "/images/cta-2.png",  fallback: "/images/cta-2.png" },
        { label: "Giao đúng bữa",          img: "/images/cta-3.png", fallback: "/images/cta-3.png" },
      ],
    },

    // ── FOOTER ────────────────────────────────────────────────
    footer: {
      tagline:      "Tử tế từng bữa cơm",
      exploreTitle: "Khám phá",
      exploreLinks: [
        { label: "Menu",        href: "/vi/menu"        },
        { label: "Ưu đãi",     href: "/vi/khuyen-mai"  },
        { label: "Chính sách", href: "#"               },
      ],
      followTitle: "Theo dõi",
      social: [
        { label: "Facebook",  href: "#", type: "facebook"  },
        { label: "Instagram", href: "#", type: "instagram" },
        { label: "Zalo",      href: "#", type: "zalo"      },
      ],
      kitchenTitle:   "Bếp chính",
      kitchenAddress: "123 Lê Lợi, Quận 1",
      kitchenHours:   "Phục vụ: 8:30 – 13:30",
      hotlineLabel:   "Hỗ trợ",
      hotline:        "0909 123 456",
      copy:           "© 2026 Vị Nhà. All rights reserved.",
    },

    // ══════════════════════════════════════════════════════════
    //  TRANG CON /menu
    // ══════════════════════════════════════════════════════════
    menuPage: {
      // Hero banner (full-screen)
      heroTitle:    "Bữa ăn hôm nay",
      heroSubtitle: "Bữa cơm nhà, ở bất cứ nơi đâu",
      heroBanner:   "/images/menu-banner.png",

      // 3 món nổi bật
      featuredLabel: "Món nổi bật",
      featured: [
        { id: 1, name: "Cơm Sườn Nướng",    price: "65.000đ", tag: "hot", img: "/images/menu-feature.png" },
        { id: 2, name: "Cơm Gà Xối Mỡ",     price: "55.000đ", tag: "hot", img: "/images/menu-feature.png" },
        { id: 3, name: "Combo Đặc Biệt",     price: "79.000đ", tag: "hot", img: "/images/menu-feature.png" },
      ],

      // CTA bottom
      ctaTitle: "Nấu như cho chính mình",
      ctaImg: "/images/cta-mascot.png",
      ctaDesc:  "Mỗi phần ăn được chuẩn bị mới trong ngày, đóng gói cẩn thận và giao đúng bữa để khách luôn có một bữa ngon lành, ấm bụng.",
      ctaBtn:   "Đặt món",

      title:      "Thực đơn",
      subtitle:   "Bữa trưa chất lượng nhà hàng, giao nóng trong 30 phút",
      badgeLabel: "Thực đơn hôm nay",
      all:        "Tất cả",
      mainDish:   "Món chính",
      combo:      "Combo",
      drinks:     "Nước",
      sides:      "Món thêm",
      order:      "Đặt hàng",
      hot:        "Bán chạy",
      newItem:    "Mới",
      // Labels cho modal
      modalOrder:       "Đặt món",
      modalNotes:       "Ghi chú",
      modalPairings:    "Món dùng kèm",
      modalSpiceNone:   "Không cay",
      modalSpiceMild:   "Ít cay",
      modalSpiceHot:    "Cay",
      modalReviews:     "đánh giá",
      modalPrepTime:    "phút",

      items: [
        {
          id: 1,  name: "Cơm Gà Nướng Mật Ong", price: "69.000đ", category: "mainDish", tag: "hot",
          img: "/images/mon1.png",
          desc: "Đùi gà ta ướp mật ong nguyên chất và gia vị nhà làm, nướng vàng thơm lừng. Ăn kèm cơm trắng dẻo và rau tươi mát.",
          rating: 4.8, reviewCount: 230, spiceLevel: "none", prepTime: 30, calories: "550 kcal",
          notes: ["Gà ta tươi", "Mật ong nguyên chất", "Cơm trắng", "Rau sống", "Nước chấm đặc biệt"],
          pairings: [
            { id: 11, name: "Rau muống xào tỏi", price: "29.000đ", img: "/images/mon1.png" },
            { id: 12, name: "Canh chua cá",       price: "29.000đ", img: "/images/mon2.png" },
            { id: 8,  name: "Trà Chanh Sả",       price: "25.000đ", img: "/images/mon3.png" },
          ],
        },
        {
          id: 2,  name: "Cơm Sườn Nướng BBQ",   price: "75.000đ", category: "mainDish", tag: "hot",
          img: "/images/mon2.png",
          desc: "Sườn heo nướng theo phong cách BBQ, sốt đặc biệt của Vị Nhà ướp 12 tiếng. Thịt mềm tan, cháy cạnh thơm lừng, ăn kèm cơm trắng và dưa leo.",
          rating: 4.8, reviewCount: 185, spiceLevel: "mild", prepTime: 25, calories: "650 kcal",
          notes: ["Sườn heo", "Sốt BBQ đặc biệt", "Cơm trắng", "Dưa leo", "Hành lá"],
          pairings: [
            { id: 11, name: "Gỏi Cuốn Tôm Thịt", price: "35.000đ", img: "/images/mon1.png" },
            { id: 9,  name: "Nước Ép Cam Tươi",   price: "30.000đ", img: "/images/mon2.png" },
            { id: 12, name: "Chả Giò Giòn",       price: "28.000đ", img: "/images/mon3.png" },
          ],
        },
        {
          id: 3,  name: "Bún Bò Huế",            price: "55.000đ", category: "mainDish", tag: "",
          img: "/images/mon3.png",
          desc: "Nước dùng hầm xương bò 8 tiếng, thơm sả và mắm ruốc đúng vị Huế. Bún tươi, thịt bò mềm, chả cua đặc trưng — một tô đậm đà không thể chối từ.",
          rating: 4.7, reviewCount: 142, spiceLevel: "hot", prepTime: 15, calories: "490 kcal",
          notes: ["Bún tươi", "Thịt bò", "Chả cua", "Sả", "Mắm ruốc", "Rau sống"],
          pairings: [
            { id: 11, name: "Gỏi Cuốn Tôm Thịt", price: "35.000đ", img: "/images/mon1.png" },
            { id: 8,  name: "Trà Chanh Sả",       price: "25.000đ", img: "/images/mon3.png" },
            { id: 12, name: "Chả Giò Giòn",       price: "28.000đ", img: "/images/mon3.png" },
          ],
        },
        {
          id: 4,  name: "Phở Bò Tái Chín",       price: "59.000đ", category: "mainDish", tag: "",
          img: "/images/mon1.png",
          desc: "Nước phở hầm xương ống và gân bò 10 tiếng, trong vắt và ngọt tự nhiên. Thịt bò tái hồng, chín mềm — chuẩn vị phở Bắc giữa lòng Sài Gòn.",
          rating: 4.8, reviewCount: 198, spiceLevel: "none", prepTime: 15, calories: "520 kcal",
          notes: ["Bánh phở", "Thịt bò tái", "Thịt bò chín", "Nước dùng xương", "Hành, ngò", "Tương đen"],
          pairings: [
            { id: 12, name: "Chả Giò Giòn",       price: "28.000đ", img: "/images/mon3.png" },
            { id: 9,  name: "Nước Ép Cam Tươi",   price: "30.000đ", img: "/images/mon2.png" },
            { id: 11, name: "Gỏi Cuốn Tôm Thịt", price: "35.000đ", img: "/images/mon1.png" },
          ],
        },
        {
          id: 5,  name: "Combo Văn Phòng A",     price: "49.000đ", category: "combo",    tag: "hot",
          img: "/images/mon2.png",
          desc: "Combo tiết kiệm nhưng đầy đủ dinh dưỡng: 1 món chính + cơm trắng + canh rau + nước uống. Lý tưởng cho bữa trưa nhanh gọn, no bụng.",
          rating: 4.7, reviewCount: 312, spiceLevel: "none", prepTime: 10, calories: "620 kcal",
          notes: ["Món chính theo ngày", "Cơm trắng", "Canh rau", "Nước uống"],
          pairings: [
            { id: 11, name: "Gỏi Cuốn Tôm Thịt", price: "35.000đ", img: "/images/mon1.png" },
            { id: 12, name: "Chả Giò Giòn",       price: "28.000đ", img: "/images/mon3.png" },
            { id: 10, name: "Sinh Tố Bơ",         price: "35.000đ", img: "/images/mon1.png" },
          ],
        },
        {
          id: 6,  name: "Combo Dinh Dưỡng B",    price: "65.000đ", category: "combo",    tag: "newItem",
          img: "/images/mon3.png",
          desc: "Combo cân bằng dinh dưỡng với rau củ đa màu sắc, protein chất lượng cao. Thiết kế bởi chuyên gia dinh dưỡng, phù hợp cho người ăn lành mạnh.",
          rating: 4.8, reviewCount: 97, spiceLevel: "none", prepTime: 15, calories: "550 kcal",
          notes: ["Ức gà áp chảo", "Gạo lứt", "Rau củ hấp", "Salad", "Nước ép trái cây"],
          pairings: [
            { id: 9,  name: "Nước Ép Cam Tươi",   price: "30.000đ", img: "/images/mon3.png" },
            { id: 11, name: "Gỏi Cuốn Tôm Thịt", price: "35.000đ", img: "/images/mon1.png" },
            { id: 10, name: "Sinh Tố Bơ",         price: "35.000đ", img: "/images/mon1.png" },
          ],
        },
        {
          id: 7,  name: "Combo Premium C",        price: "89.000đ", category: "combo",    tag: "newItem",
          img: "/images/mon1.png",
          desc: "Trải nghiệm đỉnh cao với combo cao cấp nhất: món chính premium, khai vị, canh đặc biệt, tráng miệng và nước uống cao cấp.",
          rating: 4.9, reviewCount: 64, spiceLevel: "mild", prepTime: 20, calories: "780 kcal",
          notes: ["Món chính premium", "Khai vị", "Canh đặc biệt", "Tráng miệng", "Nước cao cấp"],
          pairings: [
            { id: 9,  name: "Nước Ép Cam Tươi",   price: "30.000đ", img: "/images/mon3.png" },
            { id: 10, name: "Sinh Tố Bơ",         price: "35.000đ", img: "/images/mon1.png" },
            { id: 11, name: "Gỏi Cuốn Tôm Thịt", price: "35.000đ", img: "/images/mon1.png" },
          ],
        },
        {
          id: 8,  name: "Trà Chanh Sả",           price: "25.000đ", category: "drinks",   tag: "",
          img: "/images/mon2.png",
          desc: "Trà xanh pha lạnh kết hợp chanh tươi và sả thơm, thanh mát và tỉnh táo. Thức uống hoàn hảo cho buổi trưa oi bức.",
          rating: 4.6, reviewCount: 88, spiceLevel: "none", prepTime: 5, calories: "80 kcal",
          notes: ["Trà xanh", "Chanh tươi", "Sả", "Đường phèn", "Đá"],
          pairings: [
            { id: 1, name: "Cơm Gà Nướng Mật Ong", price: "69.000đ", img: "/images/mon1.png" },
            { id: 5, name: "Combo Văn Phòng A",     price: "49.000đ", img: "/images/mon2.png" },
            { id: 11, name: "Gỏi Cuốn Tôm Thịt",  price: "35.000đ", img: "/images/mon1.png" },
          ],
        },
        {
          id: 9,  name: "Nước Ép Cam Tươi",       price: "30.000đ", category: "drinks",   tag: "hot",
          img: "/images/mon3.png",
          desc: "100% cam vắt tươi ngay lúc đặt hàng, không thêm đường hay chất bảo quản. Giàu vitamin C, giúp tăng đề kháng và tỉnh táo cả buổi chiều.",
          rating: 4.8, reviewCount: 154, spiceLevel: "none", prepTime: 5, calories: "110 kcal",
          notes: ["Cam tươi 100%", "Không đường", "Không chất bảo quản"],
          pairings: [
            { id: 1, name: "Cơm Gà Nướng Mật Ong", price: "69.000đ", img: "/images/mon1.png" },
            { id: 2, name: "Cơm Sườn Nướng BBQ",   price: "75.000đ", img: "/images/mon2.png" },
            { id: 11, name: "Gỏi Cuốn Tôm Thịt",  price: "35.000đ", img: "/images/mon1.png" },
          ],
        },
        {
          id: 10, name: "Sinh Tố Bơ",             price: "35.000đ", category: "drinks",   tag: "",
          img: "/images/mon1.png",
          desc: "Bơ sáp Đắk Lắk chín mịn xay cùng sữa tươi và đường vừa miệng. Béo ngậy, thơm lừng, đủ năng lượng cho buổi chiều.",
          rating: 4.7, reviewCount: 76, spiceLevel: "none", prepTime: 5, calories: "280 kcal",
          notes: ["Bơ sáp Đắk Lắk", "Sữa tươi", "Đường", "Đá xay"],
          pairings: [
            { id: 5,  name: "Combo Văn Phòng A",  price: "49.000đ", img: "/images/mon2.png" },
            { id: 6,  name: "Combo Dinh Dưỡng B", price: "65.000đ", img: "/images/mon3.png" },
            { id: 11, name: "Gỏi Cuốn Tôm Thịt", price: "35.000đ", img: "/images/mon1.png" },
          ],
        },
        {
          id: 11, name: "Gỏi Cuốn Tôm Thịt",     price: "35.000đ", category: "sides",    tag: "newItem",
          img: "/images/mon1.png",
          desc: "Bánh tráng cuốn tôm sú, thịt heo luộc, bún, rau sống và cà rốt bào sợi. Chấm cùng tương đậu phộng đặc trưng — nhẹ bụng, thanh mát.",
          rating: 4.6, reviewCount: 103, spiceLevel: "none", prepTime: 10, calories: "180 kcal",
          notes: ["Bánh tráng", "Tôm sú", "Thịt heo luộc", "Bún", "Rau sống", "Tương đậu phộng"],
          pairings: [
            { id: 1, name: "Cơm Gà Nướng Mật Ong", price: "69.000đ", img: "/images/mon1.png" },
            { id: 2, name: "Cơm Sườn Nướng BBQ",   price: "75.000đ", img: "/images/mon2.png" },
            { id: 8, name: "Trà Chanh Sả",          price: "25.000đ", img: "/images/mon2.png" },
          ],
        },
        {
          id: 12, name: "Chả Giò Giòn",           price: "28.000đ", category: "sides",    tag: "",
          img: "/images/mon3.png",
          desc: "Chả giò nhân thịt heo, cà rốt, miến và nấm mèo, chiên giòn rụm vàng ươm. Ăn kèm rau sống và nước mắm chua ngọt.",
          rating: 4.5, reviewCount: 91, spiceLevel: "none", prepTime: 10, calories: "220 kcal",
          notes: ["Thịt heo xay", "Cà rốt", "Miến", "Nấm mèo", "Bánh tráng cuốn", "Nước mắm chua ngọt"],
          pairings: [
            { id: 3, name: "Bún Bò Huế",          price: "55.000đ", img: "/images/mon3.png" },
            { id: 4, name: "Phở Bò Tái Chín",     price: "59.000đ", img: "/images/mon1.png" },
            { id: 8, name: "Trà Chanh Sả",        price: "25.000đ", img: "/images/mon2.png" },
          ],
        },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  TRANG CON /khuyen-mai
    // ══════════════════════════════════════════════════════════
    promoPage: {
      // Hero section
      heroTitleLine1: "Ưu đãi",
      heroTitleLine2: "Tết Khởi Sắc",
      heroSubtitle:   "Ưu đãi hấp dẫn mỗi ngày từ Vị Nhà",
      heroBanner:     "/images/promo-banner.png",
      heroOrderBtn:   "Đặt món",

      // Labels
      orderNow:   "Đặt món",
      validUntil: "Có hiệu lực",
      applyFor:   "Áp dụng",
      ctaBtn:     "Đặt món",

      items: [
        {
          id: 1,
          badge: "FREESHIP",
          title: "Combo Tết Khởi Sắc",
          description: "Giảm 30% cho các món cơm bán chạy nhất trong tuần",
          img: "/images/mon1.png",
          validUntil: "01/05 - 31/05",
          applyFor: "Áp dụng toàn hệ thống",
        },
        {
          id: 2,
          badge: "FREESHIP",
          title: "Miễn phí giao hàng cuối tuần",
          description: "Toàn bộ đơn hàng trong bán kính 3km được miễn phí ship mỗi thứ 7 và Chủ nhật",
          img: "/images/mon2.png",
          validUntil: "01/05 - 30/06",
          applyFor: "Đơn từ 99.000đ",
        },
        {
          id: 3,
          badge: "MUA 5 TẶNG 1",
          title: "Ưu đãi nhóm — Mua 5 tặng 1",
          description: "Đặt 5 suất cùng lúc, nhận ngay 1 suất miễn phí theo lựa chọn. Lý tưởng cho bữa trưa cả team",
          img: "/images/mon3.png",
          validUntil: "01/05 - 15/08",
          applyFor: "Nhóm từ 5 người",
        },
        {
          id: 4,
          badge: "-20K",
          title: "Ưu đãi thành viên mới",
          description: "Lần đầu đặt hàng tại Vị Nhà? Nhận ngay voucher giảm 20.000đ cho đơn hàng đầu tiên",
          img: "/images/mon1.png",
          validUntil: "01/05 - 31/12",
          applyFor: "Khách hàng mới",
        },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  TRANG CON /cua-hang
    // ══════════════════════════════════════════════════════════
    storePage: {
      title:             "Hệ thống Vị Nhà",
      subtitle:          "Tìm địa điểm gần bạn nhất",
      badgeLabel:        "5 tiệm tại TP.HCM",
      heroBanner:        "/images/store-banner.png",
      openNow:           "Đang mở",
      comingSoon:        "Sắp mở",
      hours:             "Giờ mở cửa",
      orderNow:          "Đặt món",
      call:              "Gọi điện",
      getDirection:      "Chỉ đường",
      featuredLabel:     "CHI NHÁNH NỔI BẬT",
      otherBranches:     "Các chi nhánh khác",
      searchPlaceholder: "Tìm theo quận, khu vực, ...",
      filterAll:         "Tất cả",
      filterOpen:        "Đang mở",
      filterComing:      "Sắp mở",
      filterCity:        "TP.HCM",
      mascotImg: "/images/store-mascot.png",
      branches: [
        { id: 1, name: "Vị Nhà — Quận 1",     address: "123 Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP.HCM",       hours: "10:00–14:00 · 17:00–20:00", phone: "028 1234 5678", status: "open"   as const, img: "/images/store-1.png" },
        { id: 2, name: "Vị Nhà — Quận 3",     address: "456 Võ Văn Tần, Phường 5, Quận 3, TP.HCM",               hours: "10:00–14:00 · 17:00–20:00", phone: "028 2345 6789", status: "open"   as const, img: "/images/store-2.png"},
        { id: 3, name: "Vị Nhà — Quận 7",     address: "789 Nguyễn Thị Thập, Tân Phong, Quận 7, TP.HCM",         hours: "10:00–14:00",               phone: "028 3456 7890", status: "coming" as const, img: "/images/store-1.png"},
        { id: 4, name: "Vị Nhà — Thủ Đức",    address: "321 Võ Văn Ngân, Linh Chiểu, TP. Thủ Đức",               hours: "10:00–14:00",               phone: "028 4567 8901", status: "coming" as const, img: "/images/store-2.png"},
        { id: 5, name: "Vị Nhà — Bình Thạnh", address: "654 Xô Viết Nghệ Tĩnh, Phường 25, Bình Thạnh, TP.HCM",   hours: "10:00–14:00 · 17:00–20:00", phone: "—",             status: "coming" as const, img: "/images/store-1.png"},
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  TRANG CON /gioi-thieu
    // ══════════════════════════════════════════════════════════
    aboutPage: {
      // Hero
      storyLabel:       "Câu chuyện Vị Nhà",
      heroTitleLine1:   "Tử tế",
      heroTitleBadge:   "từng",
      heroTitleLine2:   "Bữa cơm",
      heroImg:          "/images/about-banner.png",
      heroSubImg:      "/images/about-banner2.png",
      mascotImg:        "/images/about-mascot.png",
      heroQuote:        "Một bữa ăn ấm lòng không nhất thiết phải đến từ những món ăn cầu kỳ hay những công thức phổ diễn kỹ thuật. Đôi khi, điều làm nên sự khác biệt lại nằm ở sự chăm chút tận tâm của người nấu trong từng chi tiết nhỏ.",
      heroPara1:        "Đó là lý do chúng tôi bắt đầu hành trình của Vị Nhà bằng những điều giản dị nhất: nguyên liệu tươi được chế biến mới mỗi ngày, từng phần ăn được chuẩn bị và đóng gói chỉn chu như cách chúng tôi nấu cho những người mình trân trọng.",
      heroPara1Bold:    "như cách chúng tôi nấu cho những người mình trân trọng.",
      heroPara2:        "Vị Nhà không hướng đến việc trở thành chuỗi F&B lớn nhất hay được tung hô nhiều nhất. Điều chúng tôi theo đuổi là sự chân thành và tử tế trong cách làm nghề — được xây dựng bằng kỷ luật, sự ổn định và tinh thần luôn muốn làm tốt hơn mỗi ngày.",
      heroPara3:        "Chúng tôi tin rằng khi những điều nhỏ được làm tử tế một cách bền bỉ, mỗi bữa ăn trao đến khách hàng sẽ không chỉ ngon lành và an tâm hơn, mà còn mang theo cảm giác quen thuộc của một bữa cơm nhà giữa nhịp sống bận rộn.",
      heroPara3Bold:    "một bữa cơm nhà giữa nhịp sống bận rộn.",

      // Values
      valuesTitle:    "Quy cách vận hành tại Vị Nhà",
      valuesSubtitle: "",
      values: [
        { img: "/images/about1.png", title: "NẤU ĂN TỬ TẾ NHƯ CHO CHÍNH MÌNH",      desc: "Mỗi phần ăn đều được nấu mới mỗi ngày đảm bảo cân bằng dinh dưỡng và lành bụng – như cách chúng tôi tự nấu cho chính mình hoặc những người thân thương." },
        { img: "/images/about2.png", title: "NỀ NẾP TRONG BẾP VỊ NHÀ",               desc: "Từ khâu chuẩn bị, chế biến cho đến giao hàng, Vị Nhà tuân thủ một quy trình nghiêm ngặt để đảm bảo sự đồng đều, vệ sinh và chất lượng." },
        { img: "/images/about3.png", title: "NGUYÊN LIỆU CHO NHỮNG BỮA NGON TỬ TẾ", desc: "Vị Nhà chọn đồng hành cùng các nhà vườn và nguồn cung ứng uy tín để đảm bảo nguyên liệu luôn đạt chuẩn và an toàn." },
        { img: "/images/about4.png", title: "NHỮNG NGƯỜI LÀM NÊN VỊ NHÀ",           desc: "Từ các bạn đứng bếp, nhân viên vận hành cho đến đội ngũ giao hàng của Vị Nhà đều chung một tư duy về sự tử tế: mang đến bữa ngon để khách hàng an tâm thưởng thức." },
      ],

      // Gallery
      galleryTitle:    "Đằng sau mỗi bữa ăn",
      gallerySubtitle: "Mỗi món ăn là kết quả của sự chăm chút kỹ càng, chế biến chỉnh chu và một trái tim luôn muốn mang điều tốt nhất đến bạn.",
      galleryLink:     "Khám phá hành trình của chúng tôi →",
      gallery: [
        { img: "/images/about5.png" },
        { img: "/images/about6.png"  },
        { img: "/images/about7.png" },
        { img: "/images/about8.png" },
        { img: "/images/about9.png" },
      ],

      // CTA
      ctaTitle: "Sẵn sàng thử Vị Nhà?",
      ctaDesc:  "Một bữa ăn tử tế đang chờ bạn đặt về",
      ctaBtn:   "Đặt món",
      ctaImg: "/images/about-mascot2.png",
    },
  },

  // ════════════════════════════════════════════════════════════
  //  ENGLISH
  // ════════════════════════════════════════════════════════════
  en: {
    nav: {
      items: ["Menu", "Promotions", "Stores", "About"],
      ids:   ["menu", "promo",       "stores", "about"],
      order: "Order Now",
    },

    hero: {
      badge:    "Authentic Vietnamese home meals",
      titleTop: "Even on the busiest days,",
      titleRed: "home flavors stay with you",
      subtitle: "Wholesome - fresh - worth every penny",
      cta:      "View menu",
      banner:   "/images/banner.png",
      phone:    "tel:+84909123456",
      zalo:     "https://zalo.me/84909123456",
    },

    stats: [
      { value: "2,000+", label: "Customers" },
      { value: "30'",    label: "Delivery"  },
      { value: "4.9",    label: "Rating"    },
    ],

    promo: {
      tag:   "Special deals",
      title: "Today's promotions",
      items: [
        { badge: "HOT",  title: "Lunch Combo 49K",    desc: "Rice + drink + dessert. Available 11AM–1PM daily."      },
        { badge: "NEW",  title: "Buy 5 Get 1 Free",   desc: "Collect 5 orders, enjoy 1 free rice meal on us."        },
        { badge: "FREE", title: "Free ship from 99K", desc: "Free delivery within 3km for orders over 99K."          },
      ],
    },

    promoBanner: {
      title:  "Lunch Combo 49K",
      desc1:  "Rice + Drink + Dessert.",
      desc2:  "Available daily from 11AM – 1PM.",
      cta:    "Order now",
      ctaAll: "View all deals",
      banner: "/images/promote.png",
    },

    menu: {
      tag:      "Our menu",
      title:    "Customer favourites",
      viewAll:  "View menu",
      orderBtn: "Order",
      items: [
        { name: "Grilled Pork Rice",    price: "65,000đ", img: "/images/mon1.png" },
        { name: "Crispy Chicken Rice",  price: "55,000đ", img: "/images/mon2.png" },
        { name: "Special Combo",        price: "79,000đ", img: "/images/mon3.png" },
        { name: "Broken Rice Combo",    price: "48,000đ", img: "/images/mon1.png" },
        { name: "Beef Pho",             price: "55,000đ", img: "/images/mon2.png" },
        { name: "Hue Spicy Noodle",     price: "52,000đ", img: "/images/mon3.png" },
      ],
    },

    why: {
      tag:   "Our promise",
      title: "Why Vị Nhà?",
      items: [
        { title: "Cooked fresh daily",      desc: "Prepared every day to preserve full flavour and freshness.",                    img: "/images/why1.png" },
        { title: "Carefully sourced",       desc: "Ingredients are selected, stored, and prepared to strict safety standards.",    img: "/images/why2.png" },
        { title: "Quality worth the price", desc: "Every portion is crafted with care at a price that makes sense.",               img: "/images/why3.png" },
      ],
    },

    stores: {
      tag:       "Locations",
      title:     "Our stores",
      viewAll:   "View all",
      openLabel: "Open now",
      soonLabel: "Coming soon",
      dirLabel:  "Directions",
      list: [
        { name: "Vị Nhà — District 1",  addr: "123 Nguyen Hue, Ben Nghe, D.1",            hrs: "10:00–14:00 · 17:00–20:00", open: true , img: "/images/store-1.png" },
        { name: "Vị Nhà — District 3",  addr: "456 Vo Van Tan, W.5, D.3",                 hrs: "10:00–14:00 · 17:00–20:00", open: true , img: "/images/store-2.png" },
        { name: "Vị Nhà — District 7",  addr: "789 Nguyen Thi Thap, Tan Phong, D.7",      hrs: "10:00–14:00",               open: false, img: "/images/store-1.png" },
        { name: "Vị Nhà — Thu Duc",     addr: "321 Vo Van Ngan, Linh Chieu, Thu Duc",     hrs: "10:00–14:00",               open: false, img: "/images/store-2.png" },
        { name: "Vị Nhà — Binh Thanh", addr: "654 Xo Viet Nghe Tinh, W.25, Binh Thanh", hrs: "10:00–14:00 · 17:00–20:00", open: false, img: "/images/store-1.png" },
      ],
    },

    ctaBanner: {
      title: "From kitchen to your hands",
      ops: [
        { label: "Cooked like it's for family", img: "/images/cta-1.png", fallback: "/images/cta-1.png" },
        { label: "Packed with care",            img: "/images/cta-2.png", fallback: "/images/cta-2.png" },
        { label: "Delivered on time",           img: "/images/cta-3.png", fallback: "/images/cta-3.png" },
      ],
    },

    footer: {
      tagline:      "Homemade care in every meal",
      exploreTitle: "Explore",
      exploreLinks: [
        { label: "Menu",   href: "/en/menu"   },
        { label: "Deals",  href: "/en/promo"  },
        { label: "Policy", href: "#"          },
      ],
      followTitle: "Follow us",
      social: [
        { label: "Facebook",  href: "#", type: "facebook"  },
        { label: "Instagram", href: "#", type: "instagram" },
        { label: "Zalo",      href: "#", type: "zalo"      },
      ],
      kitchenTitle:   "Main Kitchen",
      kitchenAddress: "123 Le Loi, District 1",
      kitchenHours:   "Hours: 8:30 AM – 1:30 PM",
      hotlineLabel:   "Support",
      hotline:        "0909 123 456",
      copy:           "© 2026 Vị Nhà. All rights reserved.",
    },

    menuPage: {
      // Hero banner (full-screen)
      heroTitle:    "Today's Menu",
      heroSubtitle: "Home cooking, wherever you are",
      heroBanner:   "/images/menu-banner.png",

      // 3 featured items
      featuredLabel: "Featured",
      featured: [
        { id: 1, name: "Grilled Pork Rice",   price: "65,000đ", tag: "hot", img: "/images/menu-feature.png" },
        { id: 2, name: "Crispy Chicken Rice",  price: "55,000đ", tag: "hot", img: "/images/menu-feature.png" },
        { id: 3, name: "Special Combo",        price: "79,000đ", tag: "hot", img: "/images/menu-feature.png" },
      ],

      // CTA bottom
      ctaTitle: "Cooked like it's for family",
      ctaImg: "/images/cta-mascot.png",
      ctaDesc:  "Every portion is freshly prepared each day, carefully packed and delivered on time so you always enjoy a warm, wholesome meal.",
      ctaBtn:   "Order Now →",

      title:      "Our Menu",
      subtitle:   "Restaurant-quality lunch, delivered hot in 30 minutes",
      badgeLabel: "Today's Menu",
      all:        "All",
      mainDish:   "Main Dishes",
      combo:      "Combos",
      drinks:     "Drinks",
      sides:      "Sides",
      order:      "Order",
      hot:        "Best Seller",
      newItem:    "New",
      // Labels for modal
      modalOrder:       "Order",
      modalNotes:       "Notes",
      modalPairings:    "Goes well with",
      modalSpiceNone:   "Not spicy",
      modalSpiceMild:   "Mild",
      modalSpiceHot:    "Spicy",
      modalReviews:     "reviews",
      modalPrepTime:    "min",

      items: [
        {
          id: 1,  name: "Honey Grilled Chicken Rice", price: "69,000đ", category: "mainDish", tag: "hot",
          img: "/images/mon1.png",
          desc: "Free-range chicken marinated in pure honey and house spices, grilled golden and fragrant. Served with steamed jasmine rice and fresh vegetables.",
          rating: 4.8, reviewCount: 230, spiceLevel: "none", prepTime: 30, calories: "550 kcal",
          notes: ["Free-range chicken", "Pure honey", "Steamed rice", "Fresh vegetables", "Special dipping sauce"],
          pairings: [
            { id: 11, name: "Shrimp Spring Rolls",  price: "35,000đ", img: "/images/mon1.png" },
            { id: 12, name: "Crispy Fried Rolls",   price: "28,000đ", img: "/images/mon3.png" },
            { id: 8,  name: "Lemongrass Lemon Tea", price: "25,000đ", img: "/images/mon2.png" },
          ],
        },
        {
          id: 2,  name: "BBQ Pork Chop Rice", price: "75,000đ", category: "mainDish", tag: "hot",
          img: "/images/mon2.png",
          desc: "Pork ribs marinated for 12 hours in Vị Nhà's signature BBQ sauce, grilled to charred perfection. Served with steamed rice and cucumber.",
          rating: 4.8, reviewCount: 185, spiceLevel: "mild", prepTime: 25, calories: "650 kcal",
          notes: ["Pork ribs", "Signature BBQ sauce", "Steamed rice", "Cucumber", "Spring onion"],
          pairings: [
            { id: 11, name: "Shrimp Spring Rolls", price: "35,000đ", img: "/images/mon1.png" },
            { id: 9,  name: "Fresh Orange Juice",  price: "30,000đ", img: "/images/mon2.png" },
            { id: 12, name: "Crispy Fried Rolls",  price: "28,000đ", img: "/images/mon3.png" },
          ],
        },
        {
          id: 3,  name: "Hue Beef Noodle Soup", price: "55,000đ", category: "mainDish", tag: "",
          img: "/images/mon3.png",
          desc: "Broth slow-simmered for 8 hours with lemongrass and shrimp paste in authentic Hue style. Fresh noodles, tender beef and signature crab cake.",
          rating: 4.7, reviewCount: 142, spiceLevel: "hot", prepTime: 15, calories: "490 kcal",
          notes: ["Fresh rice noodles", "Beef", "Crab cake", "Lemongrass", "Shrimp paste", "Fresh herbs"],
          pairings: [
            { id: 11, name: "Shrimp Spring Rolls",  price: "35,000đ", img: "/images/mon1.png" },
            { id: 8,  name: "Lemongrass Lemon Tea", price: "25,000đ", img: "/images/mon2.png" },
            { id: 12, name: "Crispy Fried Rolls",   price: "28,000đ", img: "/images/mon3.png" },
          ],
        },
        {
          id: 4,  name: "Pho Bo Tai Chin", price: "59,000đ", category: "mainDish", tag: "",
          img: "/images/mon1.png",
          desc: "Broth simmered for 10 hours with beef bones and tendons, crystal clear and naturally sweet. Rare and well-done beef — authentic Northern pho in Saigon.",
          rating: 4.8, reviewCount: 198, spiceLevel: "none", prepTime: 15, calories: "520 kcal",
          notes: ["Rice noodles", "Rare beef", "Well-done beef", "Bone broth", "Onion & cilantro", "Hoisin sauce"],
          pairings: [
            { id: 12, name: "Crispy Fried Rolls",  price: "28,000đ", img: "/images/mon3.png" },
            { id: 9,  name: "Fresh Orange Juice",  price: "30,000đ", img: "/images/mon2.png" },
            { id: 11, name: "Shrimp Spring Rolls", price: "35,000đ", img: "/images/mon1.png" },
          ],
        },
        {
          id: 5,  name: "Office Combo A", price: "49,000đ", category: "combo", tag: "hot",
          img: "/images/mon2.png",
          desc: "Budget-friendly yet fully nutritious: 1 main dish + rice + vegetable soup + drink. Ideal for a quick, filling office lunch.",
          rating: 4.7, reviewCount: 312, spiceLevel: "none", prepTime: 10, calories: "620 kcal",
          notes: ["Daily main dish", "Steamed rice", "Vegetable soup", "Beverage"],
          pairings: [
            { id: 11, name: "Shrimp Spring Rolls", price: "35,000đ", img: "/images/mon1.png" },
            { id: 12, name: "Crispy Fried Rolls",  price: "28,000đ", img: "/images/mon3.png" },
            { id: 10, name: "Avocado Smoothie",    price: "35,000đ", img: "/images/mon1.png" },
          ],
        },
        {
          id: 6,  name: "Nutrition Combo B", price: "65,000đ", category: "combo", tag: "newItem",
          img: "/images/mon3.png",
          desc: "A balanced combo with colourful vegetables, high-quality protein and complex carbs. Designed by a nutritionist, perfect for healthy eaters.",
          rating: 4.8, reviewCount: 97, spiceLevel: "none", prepTime: 15, calories: "550 kcal",
          notes: ["Pan-seared chicken breast", "Brown rice", "Steamed vegetables", "Salad", "Fresh fruit juice"],
          pairings: [
            { id: 9,  name: "Fresh Orange Juice",  price: "30,000đ", img: "/images/mon3.png" },
            { id: 11, name: "Shrimp Spring Rolls", price: "35,000đ", img: "/images/mon1.png" },
            { id: 10, name: "Avocado Smoothie",    price: "35,000đ", img: "/images/mon1.png" },
          ],
        },
        {
          id: 7,  name: "Premium Combo C", price: "89,000đ", category: "combo", tag: "newItem",
          img: "/images/mon1.png",
          desc: "Vị Nhà's top-tier experience: premium main, starter, special soup, dessert, and premium beverage. Worth every productive workday.",
          rating: 4.9, reviewCount: 64, spiceLevel: "mild", prepTime: 20, calories: "780 kcal",
          notes: ["Premium main dish", "Starter", "Special soup", "Dessert", "Premium beverage"],
          pairings: [
            { id: 9,  name: "Fresh Orange Juice",  price: "30,000đ", img: "/images/mon3.png" },
            { id: 10, name: "Avocado Smoothie",    price: "35,000đ", img: "/images/mon1.png" },
            { id: 11, name: "Shrimp Spring Rolls", price: "35,000đ", img: "/images/mon1.png" },
          ],
        },
        {
          id: 8,  name: "Lemongrass Lemon Tea", price: "25,000đ", category: "drinks", tag: "",
          img: "/images/mon2.png",
          desc: "Cold-brewed green tea combined with fresh lemon and fragrant lemongrass. Refreshing and invigorating — perfect for a hot lunch hour.",
          rating: 4.6, reviewCount: 88, spiceLevel: "none", prepTime: 5, calories: "80 kcal",
          notes: ["Green tea", "Fresh lemon", "Lemongrass", "Rock sugar", "Ice"],
          pairings: [
            { id: 1,  name: "Honey Grilled Chicken Rice", price: "69,000đ", img: "/images/mon1.png" },
            { id: 5,  name: "Office Combo A",             price: "49,000đ", img: "/images/mon2.png" },
            { id: 11, name: "Shrimp Spring Rolls",        price: "35,000đ", img: "/images/mon1.png" },
          ],
        },
        {
          id: 9,  name: "Fresh Orange Juice", price: "30,000đ", category: "drinks", tag: "hot",
          img: "/images/mon3.png",
          desc: "100% freshly squeezed oranges, no added sugar or preservatives. Packed with vitamin C to boost immunity and keep you alert all afternoon.",
          rating: 4.8, reviewCount: 154, spiceLevel: "none", prepTime: 5, calories: "110 kcal",
          notes: ["100% fresh oranges", "No added sugar", "No preservatives"],
          pairings: [
            { id: 1,  name: "Honey Grilled Chicken Rice", price: "69,000đ", img: "/images/mon1.png" },
            { id: 2,  name: "BBQ Pork Chop Rice",         price: "75,000đ", img: "/images/mon2.png" },
            { id: 11, name: "Shrimp Spring Rolls",        price: "35,000đ", img: "/images/mon1.png" },
          ],
        },
        {
          id: 10, name: "Avocado Smoothie", price: "35,000đ", category: "drinks", tag: "",
          img: "/images/mon1.png",
          desc: "Creamy Dak Lak avocado blended with fresh milk and just the right amount of sugar. Rich, fragrant, and energising for the afternoon.",
          rating: 4.7, reviewCount: 76, spiceLevel: "none", prepTime: 5, calories: "280 kcal",
          notes: ["Dak Lak avocado", "Fresh milk", "Sugar", "Crushed ice"],
          pairings: [
            { id: 5,  name: "Office Combo A",      price: "49,000đ", img: "/images/mon2.png" },
            { id: 6,  name: "Nutrition Combo B",   price: "65,000đ", img: "/images/mon3.png" },
            { id: 11, name: "Shrimp Spring Rolls", price: "35,000đ", img: "/images/mon1.png" },
          ],
        },
        {
          id: 11, name: "Shrimp Spring Rolls", price: "35,000đ", category: "sides", tag: "newItem",
          img: "/images/mon1.png",
          desc: "Rice paper wrapped with tiger prawns, boiled pork, vermicelli, fresh herbs and shredded carrot. Served with peanut dipping sauce — light and refreshing.",
          rating: 4.6, reviewCount: 103, spiceLevel: "none", prepTime: 10, calories: "180 kcal",
          notes: ["Rice paper", "Tiger prawns", "Boiled pork", "Vermicelli", "Fresh herbs", "Peanut sauce"],
          pairings: [
            { id: 1, name: "Honey Grilled Chicken Rice", price: "69,000đ", img: "/images/mon1.png" },
            { id: 2, name: "BBQ Pork Chop Rice",         price: "75,000đ", img: "/images/mon2.png" },
            { id: 8, name: "Lemongrass Lemon Tea",       price: "25,000đ", img: "/images/mon2.png" },
          ],
        },
        {
          id: 12, name: "Crispy Fried Rolls", price: "28,000đ", category: "sides", tag: "",
          img: "/images/mon3.png",
          desc: "Spring rolls stuffed with minced pork, carrot, glass noodles and wood-ear mushroom, fried to crispy golden perfection. Served with sweet fish sauce.",
          rating: 4.5, reviewCount: 91, spiceLevel: "none", prepTime: 10, calories: "220 kcal",
          notes: ["Minced pork", "Carrot", "Glass noodles", "Wood-ear mushroom", "Rice paper wrapper", "Sweet fish sauce"],
          pairings: [
            { id: 3, name: "Hue Beef Noodle Soup", price: "55,000đ", img: "/images/mon3.png" },
            { id: 4, name: "Pho Bo Tai Chin",       price: "59,000đ", img: "/images/mon1.png" },
            { id: 8, name: "Lemongrass Lemon Tea",  price: "25,000đ", img: "/images/mon2.png" },
          ],
        },
      ],
    },

    promoPage: {
      title:      "Promotions",
      subtitle:   "Exciting deals every day from Vị Nhà",
      badgeLabel: "Latest Deals",
      orderNow:   "Order Now",
      validUntil: "Valid until",
      applyFor:   "Applies to",
      // Hero section
      heroTitleLine1: "Deals &",
      heroTitleLine2: "Promotions",
      heroSubtitle:   "Exciting deals every day from Vị Nhà",
      heroBanner:     "/images/promo-banner.png",
      heroOrderBtn:   "Order Now →",

      // Labels
      ctaBtn:     "Order Now →",

      items: [
        {
          id: 1,
          badge: "FREESHIP",
          title: "Tet Celebration Combo",
          description: "30% off the best-selling rice dishes of the week",
          img: "/images/mon1.png",
          validUntil: "01/05 - 31/05",
          applyFor: "All branches",
        },
        {
          id: 2,
          badge: "FREESHIP",
          title: "Free Delivery on Weekends",
          description: "All orders within 3km get free shipping every Saturday and Sunday",
          img: "/images/mon2.png",
          validUntil: "01/05 - 30/06",
          applyFor: "Orders from 99,000đ",
        },
        {
          id: 3,
          badge: "BUY 5 GET 1",
          title: "Group Deal — Buy 5 Get 1 Free",
          description: "Order 5 meals at once and get 1 free of your choice. Perfect for the whole team",
          img: "/images/mon3.png",
          validUntil: "01/05 - 15/08",
          applyFor: "Groups of 5+",
        },
        {
          id: 4,
          badge: "-20K",
          title: "New Member Offer",
          description: "First time ordering from Vị Nhà? Get a 20,000đ voucher for your very first order",
          img: "/images/mon1.png",
          validUntil: "01/05 - 31/12",
          applyFor: "New customers",
        },
      ],
    },

    storePage: {
      title:             "Vị Nhà Locations",
      subtitle:          "Find the nearest location",
      badgeLabel:        "5 locations in HCMC",
      heroBanner:        "/images/store-banner.png",
      openNow:           "Open",
      comingSoon:        "Coming Soon",
      hours:             "Opening Hours",
      orderNow:          "Order Now →",
      call:              "Call",
      getDirection:      "Directions",
      featuredLabel:     "FEATURED BRANCH",
      otherBranches:     "Other Branches",
      searchPlaceholder: "Search by district, area, ...",
      filterAll:         "All",
      filterOpen:        "Open Now",
      filterComing:      "Coming Soon",
      filterCity:        "HCMC",
      mascotImg:         "/images/store-mascot.png",
      branches: [
        { id: 1, name: "Vị Nhà — District 1",  address: "123 Nguyen Hue, Ben Nghe Ward, District 1, HCMC",      hours: "10:00–14:00 · 17:00–20:00", phone: "028 1234 5678", status: "open"   as const, img: "/images/store-1.png" },
        { id: 2, name: "Vị Nhà — District 3",  address: "456 Vo Van Tan, Ward 5, District 3, HCMC",              hours: "10:00–14:00 · 17:00–20:00", phone: "028 2345 6789", status: "open"   as const, img: "/images/store-2.png" },
        { id: 3, name: "Vị Nhà — District 7",  address: "789 Nguyen Thi Thap, Tan Phong, District 7, HCMC",     hours: "10:00–14:00",               phone: "028 3456 7890", status: "coming" as const, img: "/images/store-1.png" },
        { id: 4, name: "Vị Nhà — Thu Duc",     address: "321 Vo Van Ngan, Linh Chieu Ward, Thu Duc City",        hours: "10:00–14:00",               phone: "028 4567 8901", status: "coming" as const, img: "/images/store-2.png" },
        { id: 5, name: "Vị Nhà — Binh Thanh", address: "654 Xo Viet Nghe Tinh, Ward 25, Binh Thanh, HCMC",     hours: "10:00–14:00 · 17:00–20:00", phone: "—",             status: "coming" as const, img: "/images/store-1.png" },
      ],
    },

    aboutPage: {
      // Hero
      storyLabel:       "Vị Nhà Story",
      heroTitleLine1:   "Kindness in",
      heroTitleBadge:   "every",
      heroTitleLine2:   "Meal",
      heroImg:          "/images/about-banner.png",
      heroSubImg:       "/images/about-banner2.png",
      mascotImg:        "/images/about-mascot.png",
      heroQuote:        "A heartwarming meal doesn't have to come from elaborate dishes or technical recipes. Sometimes, what makes the difference is the thoughtful care of the cook in every small detail.",
      heroPara1:        "That's why we started Vị Nhà with the simplest things: fresh ingredients prepared daily, every portion carefully made and packed the way we cook for people we care about.",
      heroPara1Bold:    "the way we cook for people we care about.",
      heroPara2:        "Vị Nhà doesn't aim to become the biggest or most celebrated F&B chain. What we pursue is sincerity and kindness in the craft — built on discipline, consistency and a spirit of always doing better.",
      heroPara3:        "We believe that when small things are done with persistent care, every meal delivered to customers will not only be more delicious and reassuring, but also carry the familiar feeling of a home-cooked meal in the middle of a busy life.",
      heroPara3Bold:    "a home-cooked meal in the middle of a busy life.",

      // Values
      valuesTitle:    "How Vị Nhà Operates",
      valuesSubtitle: "",
      values: [
        { img: "/images/about1.png", title: "COOKING WITH CARE, AS IF FOR OURSELVES",  desc: "Every portion is freshly cooked each day to ensure nutritional balance and wholesomeness — just as we would cook for ourselves or loved ones." },
        { img: "/images/about2.png", title: "DISCIPLINE IN THE VỊ NHÀ KITCHEN",        desc: "From preparation and cooking to delivery, Vị Nhà follows a strict process to ensure consistency, hygiene and quality." },
        { img: "/images/about3.png", title: "INGREDIENTS FOR HONEST, TASTY MEALS",     desc: "Vị Nhà partners with trusted farms and suppliers to ensure ingredients always meet safety and quality standards." },
        { img: "/images/about4.png", title: "THE PEOPLE WHO MAKE VỊ NHÀ",              desc: "From kitchen staff to operations and delivery, everyone at Vị Nhà shares one mindset: bring good food so customers can eat with confidence." },
      ],

      // Gallery
      galleryTitle:    "Behind Every Meal",
      gallerySubtitle: "Every dish is the result of meticulous care, thoughtful preparation and a heart that always wants to bring you the best.",
      galleryLink:     "Explore our journey →",
      gallery: [
        { img: "/images/about5.png" },
        { img: "/images/about6.png" },
        { img: "/images/about7.png" },
        { img: "/images/about8.png" },
        { img: "/images/about9.png" },
      ],

      // CTA
      ctaTitle: "Ready to try Vị Nhà?",
      ctaDesc:  "A wholesome meal is waiting for you",
      ctaBtn:   "Order Now →",
      ctaImg:   "/images/about-mascot2.png",
    },
  },
} as const;

export type Lang = Locale;
export type LangData = typeof LANG.vi;