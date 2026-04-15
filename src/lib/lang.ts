// ─────────────────────────────────────────────────────────────
//  lang.ts — Single source of truth for Vị Nhà website
//  Giữ nguyên LANG + Locale từ trang chủ, thêm 4 key trang con:
//  menuPage | promoPage | storePage | aboutPage
// ─────────────────────────────────────────────────────────────

export type Locale = "vi" | "en";

export const LANG = {
  vi: {
    // ── NAVBAR ────────────────────────────────────────────────
    nav: {
      items: ["Menu", "Khuyến mãi", "Cửa hàng", "Giới thiệu"],
      ids:   ["menu", "promo",      "stores",    "about"],
      order: "Đặt hàng",
    },

    // ── HERO (trang chủ) ──────────────────────────────────────
    hero: {
      badge:        "Cơm văn phòng cao cấp",
      title:        ["Hương vị", "nhà", "giữa phố thị"],
      desc:         "Bữa trưa chất lượng nhà hàng, nguyên liệu tươi mỗi sáng, giao nóng tận bàn làm việc trong 30 phút.",
      cta1:         "Đặt hàng ngay",
      cta2:         "Xem menu",
      delivery:     "Giao hàng nhanh",
      deliveryDesc: "Giao tận nơi trong 30 phút",
      pickup:       "Đặt trước",
      pickupDesc:   "Đặt trước 10h, nhận đúng trưa",
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

    // ── MENU SNIPPET (trang chủ) ──────────────────────────────
    menu: {
      tag:      "Thực đơn",
      title:    "Món nổi bật",
      cats:     ["Cơm văn phòng", "Bún & Phở", "Thức uống", "Combo"],
      orderBtn: "Đặt món",
      items: [
        { name: "Cơm sườn nướng", price: "45.000đ", tag: "Bán chạy", cat: 0 },
        { name: "Cơm gà xối mỡ",  price: "42.000đ", tag: "",         cat: 0 },
        { name: "Cơm tấm bì chả", price: "48.000đ", tag: "Mới",      cat: 0 },
        { name: "Phở bò tái nạm", price: "55.000đ", tag: "Bán chạy", cat: 1 },
        { name: "Bún bò Huế",     price: "52.000đ", tag: "",         cat: 1 },
        { name: "Bún riêu cua",   price: "50.000đ", tag: "Mới",      cat: 1 },
        { name: "Trà đào cam sả", price: "25.000đ", tag: "Bán chạy", cat: 2 },
        { name: "Nước mía lau",   price: "20.000đ", tag: "",         cat: 2 },
        { name: "Combo trưa A",   price: "49.000đ", tag: "HOT",      cat: 3 },
        { name: "Combo trưa B",   price: "55.000đ", tag: "",         cat: 3 },
      ],
    },

    // ── WHY (trang chủ) ───────────────────────────────────────
    why: {
      tag:   "Cam kết",
      title: "Vì sao chọn Vị Nhà?",
      items: [
        { title: "Nguyên liệu tươi mỗi ngày",  desc: "Thực phẩm nhập sáng, chế biến tại bếp trung tâm đạt chuẩn ATTP." },
        { title: "Giao hàng trong 30 phút",     desc: "Đặt trước 10h, nhận đúng giờ nghỉ trưa. Nóng hổi, đúng hẹn."    },
        { title: "Giá hợp lý — chất lượng cao", desc: "Bữa trưa chỉ từ 42K, đầy đủ dinh dưỡng, ngon như cơm nhà."      },
      ],
    },

    // ── STORES SNIPPET (trang chủ) ────────────────────────────
    stores: {
      tag:       "Chi nhánh",
      title:     "Hệ thống cửa hàng",
      openLabel: "Đang mở cửa",
      soonLabel: "Sắp khai trương",
      dirLabel:  "Chỉ đường",
      list: [
        { name: "Vị Nhà — Quận 1",     addr: "123 Nguyễn Huệ, P. Bến Nghé, Q.1",         hrs: "10:00–14:00 · 17:00–20:00", open: true  },
        { name: "Vị Nhà — Quận 3",     addr: "456 Võ Văn Tần, P.5, Q.3",                 hrs: "10:00–14:00 · 17:00–20:00", open: true  },
        { name: "Vị Nhà — Quận 7",     addr: "789 Nguyễn Thị Thập, Tân Phong, Q.7",      hrs: "10:00–14:00",               open: false },
        { name: "Vị Nhà — Thủ Đức",    addr: "321 Võ Văn Ngân, Linh Chiểu, TP. Thủ Đức", hrs: "10:00–14:00",               open: false },
        { name: "Vị Nhà — Bình Thạnh", addr: "654 Xô Viết Nghệ Tĩnh, P.25, Bình Thạnh",  hrs: "10:00–14:00 · 17:00–20:00", open: false },
      ],
    },

    // ── CTA BANNER (trang chủ) ────────────────────────────────
    cta: {
      title: "Đặt cơm trưa ngay hôm nay!",
      desc:  "Giao tận nơi trong 30 phút — nóng hổi, đúng giờ, đúng vị nhà.",
      btn:   "Đặt hàng ngay",
    },

    // ── FOOTER ────────────────────────────────────────────────
    footer: {
      desc:        "Cơm văn phòng cao cấp — tươi ngon mỗi ngày, giao tận nơi.",
      tagline:     "Hương vị nhà giữa phố thị",
      linksTitle:  "Liên kết",
      links:       "Liên kết nhanh",
      followTitle: "Theo dõi",
      follow:      "Theo dõi chúng tôi",
      contact:     "Liên hệ",
      hotline:     "Hotline: 1800 6868",
      email:       "hello@vinha.vn",
      address:     "TP. Hồ Chí Minh, Việt Nam",
      copy:        "© 2026 Vị Nhà. All rights reserved.",
      rights:      "© 2026 Vị Nhà. All rights reserved.",
    },

    // ══════════════════════════════════════════════════════════
    //  TRANG CON /menu
    // ══════════════════════════════════════════════════════════
    menuPage: {
      title:    "Thực đơn",
      subtitle: "Bữa trưa chất lượng nhà hàng, giao nóng trong 30 phút",
      badgeLabel: "Thực đơn hôm nay",
      all:      "Tất cả",
      mainDish: "Món chính",
      combo:    "Combo",
      drinks:   "Nước",
      sides:    "Món thêm",
      order:    "Đặt hàng",
      hot:      "Bán chạy",
      newItem:  "Mới",
      items: [
        { id: 1,  name: "Cơm Gà Nướng Mật Ong", price: "69.000đ", category: "mainDish", tag: "hot",     img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=300&h=300&fit=crop" },
        { id: 2,  name: "Cơm Sườn Nướng BBQ",   price: "75.000đ", category: "mainDish", tag: "hot",     img: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=300&h=300&fit=crop" },
        { id: 3,  name: "Bún Bò Huế",            price: "55.000đ", category: "mainDish", tag: "",        img: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=300&h=300&fit=crop" },
        { id: 4,  name: "Phở Bò Tái Chín",       price: "59.000đ", category: "mainDish", tag: "",        img: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=300&h=300&fit=crop" },
        { id: 5,  name: "Combo Văn Phòng A",     price: "49.000đ", category: "combo",    tag: "hot",     img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop" },
        { id: 6,  name: "Combo Dinh Dưỡng B",    price: "65.000đ", category: "combo",    tag: "newItem", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop" },
        { id: 7,  name: "Combo Premium C",        price: "89.000đ", category: "combo",    tag: "newItem", img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=300&fit=crop" },
        { id: 8,  name: "Trà Chanh Sả",           price: "25.000đ", category: "drinks",   tag: "",        img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=300&fit=crop" },
        { id: 9,  name: "Nước Ép Cam Tươi",       price: "30.000đ", category: "drinks",   tag: "hot",     img: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=300&h=300&fit=crop" },
        { id: 10, name: "Sinh Tố Bơ",             price: "35.000đ", category: "drinks",   tag: "",        img: "https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?w=300&h=300&fit=crop" },
        { id: 11, name: "Gỏi Cuốn Tôm Thịt",     price: "35.000đ", category: "sides",    tag: "newItem", img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=300&h=300&fit=crop" },
        { id: 12, name: "Chả Giò Giòn",           price: "28.000đ", category: "sides",    tag: "",        img: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=300&h=300&fit=crop" },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  TRANG CON /khuyen-mai
    // ══════════════════════════════════════════════════════════
    promoPage: {
      title:      "Khuyến mãi",
      subtitle:   "Ưu đãi hấp dẫn mỗi ngày từ Vị Nhà",
      badgeLabel: "Ưu đãi mới nhất",
      orderNow:   "Đặt hàng ngay",
      validUntil: "Có hiệu lực đến",
      applyFor:   "Áp dụng cho",
      items: [
        { id: 1, title: "Combo Văn Phòng 49K",          description: "Trọn bộ cơm + món chính + nước uống, đủ chất dinh dưỡng cho một buổi trưa làm việc hiệu quả.",             banner: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=400&fit=crop",  validUntil: "31/12/2026", applyFor: "Đơn từ 1 phần trở lên", discount: "-30%",      color: "bg-red-500"     },
        { id: 2, title: "Miễn phí giao hàng cuối tuần", description: "Mỗi thứ 7 và Chủ nhật, toàn bộ đơn hàng trong bán kính 3km được miễn phí ship.",                          banner: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&h=400&fit=crop", validUntil: "30/06/2026", applyFor: "Đơn từ 99.000đ",        discount: "FREE SHIP",  color: "bg-amber-500"   },
        { id: 3, title: "Mua 5 tặng 1 — Dành cho nhóm", description: "Đặt 5 suất cùng lúc, nhận ngay 1 suất miễn phí theo lựa chọn. Lý tưởng cho bữa trưa cùng cả team.",     banner: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=400&fit=crop",  validUntil: "15/08/2026", applyFor: "Nhóm từ 5 người",        discount: "+1 FREE",    color: "bg-emerald-500" },
        { id: 4, title: "Ưu đãi thành viên mới — 20K",  description: "Lần đầu đặt hàng tại Vị Nhà? Nhận ngay voucher giảm 20.000đ cho đơn hàng đầu tiên của bạn.",             banner: "https://images.unsplash.com/photo-1567529692333-de9fd6772897?w=800&h=400&fit=crop", validUntil: "31/12/2026", applyFor: "Khách hàng mới",         discount: "-20K",       color: "bg-violet-500"  },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  TRANG CON /cua-hang
    // ══════════════════════════════════════════════════════════
    storePage: {
      title:       "Cửa hàng",
      subtitle:    "Tìm Vị Nhà gần bạn nhất",
      badgeLabel:  "5 chi nhánh tại TP.HCM",
      openNow:     "Đang mở cửa",
      comingSoon:  "Sắp khai trương",
      hours:       "Giờ mở cửa",
      orderNow:    "Đặt hàng",
      call:        "Gọi điện",
      branches: [
        { id: 1, name: "Vị Nhà — Quận 1",     address: "123 Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP.HCM",       hours: "10:00–14:00 · 17:00–20:00", phone: "028 1234 5678", status: "open"   as const, img1: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop", img2: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop", mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4550!2d106.7009!3d10.7769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ2JzM2LjkiTiAxMDbCsDQyJzAzLjIiRQ!5e0!3m2!1svi!2s!4v1620000000000!5m2!1svi!2s" },
        { id: 2, name: "Vị Nhà — Quận 3",     address: "456 Võ Văn Tần, Phường 5, Quận 3, TP.HCM",               hours: "10:00–14:00 · 17:00–20:00", phone: "028 2345 6789", status: "open"   as const, img1: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop", img2: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&h=400&fit=crop", mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4550!2d106.6850!3d10.7769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ2JzM2LjkiTiAxMDbCsDQxJzA2LjAiRQ!5e0!3m2!1svi!2s!4v1620000000000!5m2!1svi!2s" },
        { id: 3, name: "Vị Nhà — Quận 7",     address: "789 Nguyễn Thị Thập, Tân Phong, Quận 7, TP.HCM",         hours: "10:00–14:00",               phone: "028 3456 7890", status: "coming" as const, img1: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600&h=400&fit=crop", img2: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&h=400&fit=crop", mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.8550!2d106.7200!3d10.7369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ0JzEyLjkiTiAxMDbCsDQzJzEyLjAiRQ!5e0!3m2!1svi!2s!4v1620000000000!5m2!1svi!2s" },
        { id: 4, name: "Vị Nhà — Thủ Đức",    address: "321 Võ Văn Ngân, Linh Chiểu, TP. Thủ Đức",               hours: "10:00–14:00",               phone: "028 4567 8901", status: "coming" as const, img1: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=400&fit=crop", img2: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=600&h=400&fit=crop", mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.2550!2d106.7500!3d10.8499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDUxJzAwLjAiTiAxMDbCsDQ1JzAwLjAiRQ!5e0!3m2!1svi!2s!4v1620000000000!5m2!1svi!2s" },
        { id: 5, name: "Vị Nhà — Bình Thạnh", address: "654 Xô Viết Nghệ Tĩnh, Phường 25, Bình Thạnh, TP.HCM",   hours: "10:00–14:00 · 17:00–20:00", phone: "—",             status: "coming" as const, img1: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=600&h=400&fit=crop", img2: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=600&h=400&fit=crop", mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.8550!2d106.7100!3d10.8129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ4JzQ2LjQiTiAxMDbCsDQyJzM2LjAiRQ!5e0!3m2!1svi!2s!4v1620000000000!5m2!1svi!2s" },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  TRANG CON /gioi-thieu
    // ══════════════════════════════════════════════════════════
    aboutPage: {
      storyLabel:      "Câu chuyện của chúng tôi",
      heroTitle:       "Vị Nhà là gì?",
      heroSubtitle:    "Chúng tôi không chỉ bán cơm trưa — chúng tôi mang hương vị bữa cơm nhà đến tận nơi làm việc của bạn.",
      heroDesc:        "Vị Nhà ra đời từ một câu hỏi rất đơn giản: Tại sao bữa trưa văn phòng lại phải nhàm chán và không lành mạnh? Từ đó, chúng tôi xây dựng một mô hình nhà hàng hiện đại, kết hợp giữa chất lượng nhà hàng và sự tiện lợi của giao hàng nhanh.",
      statsValues:     ["5+", "10K+", "30'"],
      statsLabel:      ["Chi nhánh", "Khách hàng", "Giao hàng"],
      valuesTitle:     "Điều Vị Nhà coi trọng",
      valuesSubtitle:  "Bốn nguyên tắc cốt lõi định hướng mọi quyết định của chúng tôi",
      values: [
        { icon: "leaf",  title: "Nguyên liệu tươi mỗi ngày", desc: "Chúng tôi lựa chọn nguyên liệu từ các nhà cung cấp uy tín, đảm bảo tươi sạch và an toàn thực phẩm tuyệt đối." },
        { icon: "clock", title: "Giao hàng đúng giờ",         desc: "30 phút là cam kết — không phải lời hứa. Hệ thống vận hành được tối ưu để bạn nhận cơm nóng đúng giờ nghỉ trưa." },
        { icon: "heart", title: "Hương vị như cơm nhà",       desc: "Công thức nấu ăn được phát triển bởi đội bếp dày kinh nghiệm, giữ đúng vị Việt Nam truyền thống trong từng món."   },
        { icon: "users", title: "Đội ngũ tâm huyết",          desc: "Từ bếp đến shipper, mọi thành viên Vị Nhà đều được đào tạo bài bản và chia sẻ chung một mục tiêu: làm bạn hài lòng." },
      ],
      galleryTitle: "Đằng sau mỗi bữa ăn",
      gallery: [
        { img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=500&fit=crop", label: "Đội bếp Vị Nhà"              },
        { img: "https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?w=600&h=500&fit=crop", label: "Nguyên liệu tươi mỗi sáng" },
        { img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=500&fit=crop", label: "Món ăn được chế biến kỹ"    },
        { img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=500&fit=crop", label: "Giao hàng nhanh 30 phút"    },
        { img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&h=500&fit=crop", label: "Không gian cửa hàng ấm cúng" },
        { img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=500&fit=crop", label: "Trải nghiệm ăn uống tuyệt vời" },
      ],
      ctaTitle: "Sẵn sàng thử Vị Nhà chưa?",
      ctaDesc:  "Đặt ngay combo văn phòng chỉ từ 49K — giao nóng trong 30 phút.",
      ctaBtn:   "Đặt hàng ngay →",
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
      badge:        "Premium office lunch",
      title:        ["Home-cooked", "flavors", "in the city"],
      desc:         "Restaurant-quality lunch, fresh ingredients every morning, delivered hot to your desk in 30 minutes.",
      cta1:         "Order now",
      cta2:         "View menu",
      delivery:     "Fast Delivery",
      deliveryDesc: "Delivered within 30 mins",
      pickup:       "Pre-order",
      pickupDesc:   "Order by 10AM, get it at lunch",
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
        { badge: "HOT",  title: "Lunch Combo 49K",      desc: "Rice + drink + dessert. Available 11AM–1PM daily."        },
        { badge: "NEW",  title: "Buy 5 Get 1 Free",     desc: "Collect 5 orders, enjoy 1 free rice meal on us."          },
        { badge: "FREE", title: "Free ship from 99K",   desc: "Free delivery within 3km for orders over 99K."            },
      ],
    },

    menu: {
      tag:      "Our menu",
      title:    "Featured dishes",
      cats:     ["Rice Meals", "Noodle Soups", "Drinks", "Combos"],
      orderBtn: "Order",
      items: [
        { name: "Grilled Pork Rice",   price: "45,000đ", tag: "Best Seller", cat: 0 },
        { name: "Crispy Chicken Rice", price: "42,000đ", tag: "",            cat: 0 },
        { name: "Broken Rice Combo",   price: "48,000đ", tag: "New",         cat: 0 },
        { name: "Beef Pho",            price: "55,000đ", tag: "Best Seller", cat: 1 },
        { name: "Hue Spicy Noodle",    price: "52,000đ", tag: "",            cat: 1 },
        { name: "Crab Noodle Soup",    price: "50,000đ", tag: "New",         cat: 1 },
        { name: "Peach Tea",           price: "25,000đ", tag: "Best Seller", cat: 2 },
        { name: "Sugarcane Juice",     price: "20,000đ", tag: "",            cat: 2 },
        { name: "Lunch Combo A",       price: "49,000đ", tag: "HOT",         cat: 3 },
        { name: "Lunch Combo B",       price: "55,000đ", tag: "",            cat: 3 },
      ],
    },

    why: {
      tag:   "Our promise",
      title: "Why Vị Nhà?",
      items: [
        { title: "Fresh ingredients daily",    desc: "Morning-sourced, cooked on-site at our certified kitchen."       },
        { title: "30-minute delivery",          desc: "Order before 10AM, receive at lunch break. Hot and on time."     },
        { title: "Great value, high quality",  desc: "Lunch from 42K — full nutrition, restaurant quality."            },
      ],
    },

    stores: {
      tag:       "Locations",
      title:     "Our stores",
      openLabel: "Now open",
      soonLabel: "Coming soon",
      dirLabel:  "Directions",
      list: [
        { name: "Vị Nhà — District 1",  addr: "123 Nguyen Hue, Ben Nghe, D.1",            hrs: "10:00–14:00 · 17:00–20:00", open: true  },
        { name: "Vị Nhà — District 3",  addr: "456 Vo Van Tan, W.5, D.3",                 hrs: "10:00–14:00 · 17:00–20:00", open: true  },
        { name: "Vị Nhà — District 7",  addr: "789 Nguyen Thi Thap, Tan Phong, D.7",      hrs: "10:00–14:00",               open: false },
        { name: "Vị Nhà — Thu Duc",     addr: "321 Vo Van Ngan, Linh Chieu, Thu Duc",     hrs: "10:00–14:00",               open: false },
        { name: "Vị Nhà — Binh Thanh", addr: "654 Xo Viet Nghe Tinh, W.25, Binh Thanh", hrs: "10:00–14:00 · 17:00–20:00", open: false },
      ],
    },

    cta: {
      title: "Order your lunch today!",
      desc:  "Delivered in 30 minutes — hot, fresh, on time.",
      btn:   "Order now",
    },

    footer: {
      desc:        "Premium office lunch — fresh daily, delivered to your workplace.",
      tagline:     "Home flavors in the heart of the city",
      linksTitle:  "Links",
      links:       "Quick Links",
      followTitle: "Follow us",
      follow:      "Follow Us",
      contact:     "Contact",
      hotline:     "Hotline: 1800 6868",
      email:       "hello@vinha.vn",
      address:     "Ho Chi Minh City, Vietnam",
      copy:        "© 2026 Vị Nhà. All rights reserved.",
      rights:      "© 2026 Vị Nhà. All rights reserved.",
    },

    menuPage: {
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
      items: [
        { id: 1,  name: "Honey Grilled Chicken Rice", price: "69,000đ", category: "mainDish", tag: "hot",     img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=300&h=300&fit=crop" },
        { id: 2,  name: "BBQ Pork Chop Rice",          price: "75,000đ", category: "mainDish", tag: "hot",     img: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=300&h=300&fit=crop" },
        { id: 3,  name: "Hue Beef Noodle Soup",        price: "55,000đ", category: "mainDish", tag: "",        img: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=300&h=300&fit=crop" },
        { id: 4,  name: "Pho Bo Tai Chin",              price: "59,000đ", category: "mainDish", tag: "",        img: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=300&h=300&fit=crop" },
        { id: 5,  name: "Office Combo A",               price: "49,000đ", category: "combo",    tag: "hot",     img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop" },
        { id: 6,  name: "Nutrition Combo B",            price: "65,000đ", category: "combo",    tag: "newItem", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop" },
        { id: 7,  name: "Premium Combo C",              price: "89,000đ", category: "combo",    tag: "newItem", img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=300&fit=crop" },
        { id: 8,  name: "Lemongrass Lemon Tea",         price: "25,000đ", category: "drinks",   tag: "",        img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=300&fit=crop" },
        { id: 9,  name: "Fresh Orange Juice",           price: "30,000đ", category: "drinks",   tag: "hot",     img: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=300&h=300&fit=crop" },
        { id: 10, name: "Avocado Smoothie",             price: "35,000đ", category: "drinks",   tag: "",        img: "https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?w=300&h=300&fit=crop" },
        { id: 11, name: "Shrimp Spring Rolls",          price: "35,000đ", category: "sides",    tag: "newItem", img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=300&h=300&fit=crop" },
        { id: 12, name: "Crispy Fried Rolls",           price: "28,000đ", category: "sides",    tag: "",        img: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=300&h=300&fit=crop" },
      ],
    },

    promoPage: {
      title:      "Promotions",
      subtitle:   "Exciting deals every day from Vị Nhà",
      badgeLabel: "Latest Deals",
      orderNow:   "Order Now",
      validUntil: "Valid until",
      applyFor:   "Applies to",
      items: [
        { id: 1, title: "Office Combo 49K",          description: "Full set of rice + main dish + drink, perfectly nutritious for a productive lunch.", banner: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=400&fit=crop",  validUntil: "31/12/2026", applyFor: "Orders from 1 serving", discount: "-30%",      color: "bg-red-500"     },
        { id: 2, title: "Free Delivery on Weekends", description: "Every Saturday and Sunday, all orders within 3km get free shipping.",                banner: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&h=400&fit=crop", validUntil: "30/06/2026", applyFor: "Orders from 99,000đ",   discount: "FREE SHIP",  color: "bg-amber-500"   },
        { id: 3, title: "Buy 5 Get 1 Free",          description: "Order 5 meals at once and get 1 free of your choice. Perfect for team lunches.",     banner: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=400&fit=crop",  validUntil: "15/08/2026", applyFor: "Groups of 5+",           discount: "+1 FREE",    color: "bg-emerald-500" },
        { id: 4, title: "New Member Deal — 20K Off", description: "First time ordering from Vị Nhà? Get a 20,000đ voucher for your first order.",       banner: "https://images.unsplash.com/photo-1567529692333-de9fd6772897?w=800&h=400&fit=crop", validUntil: "31/12/2026", applyFor: "New customers",          discount: "-20K",       color: "bg-violet-500"  },
      ],
    },

    storePage: {
      title:      "Our Stores",
      subtitle:   "Find the nearest Vị Nhà",
      badgeLabel: "5 branches in HCMC",
      openNow:    "Open Now",
      comingSoon: "Coming Soon",
      hours:      "Opening Hours",
      orderNow:   "Order",
      call:       "Call",
      branches: [
        { id: 1, name: "Vị Nhà — District 1",  address: "123 Nguyen Hue, Ben Nghe Ward, District 1, HCMC",      hours: "10:00–14:00 · 17:00–20:00", phone: "028 1234 5678", status: "open"   as const, img1: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop", img2: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop", mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4550!2d106.7009!3d10.7769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ2JzM2LjkiTiAxMDbCsDQyJzAzLjIiRQ!5e0!3m2!1svi!2s!4v1620000000000!5m2!1svi!2s" },
        { id: 2, name: "Vị Nhà — District 3",  address: "456 Vo Van Tan, Ward 5, District 3, HCMC",              hours: "10:00–14:00 · 17:00–20:00", phone: "028 2345 6789", status: "open"   as const, img1: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop", img2: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&h=400&fit=crop", mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4550!2d106.6850!3d10.7769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ2JzM2LjkiTiAxMDbCsDQxJzA2LjAiRQ!5e0!3m2!1svi!2s!4v1620000000000!5m2!1svi!2s" },
        { id: 3, name: "Vị Nhà — District 7",  address: "789 Nguyen Thi Thap, Tan Phong, District 7, HCMC",     hours: "10:00–14:00",               phone: "028 3456 7890", status: "coming" as const, img1: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600&h=400&fit=crop", img2: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&h=400&fit=crop", mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.8550!2d106.7200!3d10.7369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ0JzEyLjkiTiAxMDbCsDQzJzEyLjAiRQ!5e0!3m2!1svi!2s!4v1620000000000!5m2!1svi!2s" },
        { id: 4, name: "Vị Nhà — Thu Duc",     address: "321 Vo Van Ngan, Linh Chieu Ward, Thu Duc City",        hours: "10:00–14:00",               phone: "028 4567 8901", status: "coming" as const, img1: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=400&fit=crop", img2: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=600&h=400&fit=crop", mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.2550!2d106.7500!3d10.8499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDUxJzAwLjAiTiAxMDbCsDQ1JzAwLjAiRQ!5e0!3m2!1svi!2s!4v1620000000000!5m2!1svi!2s" },
        { id: 5, name: "Vị Nhà — Binh Thanh", address: "654 Xo Viet Nghe Tinh, Ward 25, Binh Thanh, HCMC",     hours: "10:00–14:00 · 17:00–20:00", phone: "—",             status: "coming" as const, img1: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=600&h=400&fit=crop", img2: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=600&h=400&fit=crop", mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.8550!2d106.7100!3d10.8129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ4JzQ2LjQiTiAxMDbCsDQyJzM2LjAiRQ!5e0!3m2!1svi!2s!4v1620000000000!5m2!1svi!2s" },
      ],
    },

    aboutPage: {
      storyLabel:     "Our Story",
      heroTitle:      "What is Vị Nhà?",
      heroSubtitle:   "We don't just sell lunch — we bring the flavor of home cooking straight to your workplace.",
      heroDesc:       "Vị Nhà was born from a simple question: Why does office lunch have to be boring and unhealthy? From that, we built a modern restaurant model combining restaurant quality with the convenience of fast delivery.",
      statsValues:    ["5+", "10K+", "30'"],
      statsLabel:     ["Branches", "Customers", "Delivery"],
      valuesTitle:    "What Vị Nhà Stands For",
      valuesSubtitle: "Four core principles that guide every decision we make",
      values: [
        { icon: "leaf",  title: "Fresh Ingredients Daily", desc: "We source ingredients from trusted suppliers, ensuring absolute freshness and food safety every day."               },
        { icon: "clock", title: "On-Time Delivery",         desc: "30 minutes is our commitment — not just a promise. Our operations are optimized so you get a hot meal right at lunch break." },
        { icon: "heart", title: "Tastes Like Home",         desc: "Recipes developed by our experienced kitchen team, preserving traditional Vietnamese flavors in every dish."           },
        { icon: "users", title: "Passionate Team",          desc: "From kitchen to delivery, every Vị Nhà team member is professionally trained with a shared goal: your satisfaction."    },
      ],
      galleryTitle: "Behind Every Meal",
      gallery: [
        { img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=500&fit=crop", label: "Vị Nhà Kitchen Team"           },
        { img: "https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?w=600&h=500&fit=crop", label: "Fresh Ingredients Every Morning" },
        { img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=500&fit=crop", label: "Carefully Prepared Dishes"    },
        { img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=500&fit=crop", label: "Fast 30-Minute Delivery"       },
        { img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&h=500&fit=crop", label: "Warm Store Atmosphere"         },
        { img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=500&fit=crop", label: "Wonderful Dining Experience"   },
      ],
      ctaTitle: "Ready to try Vị Nhà?",
      ctaDesc:  "Order office combo from just 49K — delivered hot in 30 minutes.",
      ctaBtn:   "Order Now →",
    },
  },
} as const;

// Convenience aliases — dùng được cả hai cách import
export type Lang = Locale;
export type LangData = typeof LANG.vi;