# 🚀 Quick Start Guide - Portfolio An Thuy Duong

## Bước 1: Cài đặt Dependencies (5 phút)

Mở Terminal và chạy:

```bash
cd /Users/buidinhtri/Desktop/MarketingPortfolio
npm install
```

Đợi cho đến khi tất cả packages được cài đặt xong.

---

## Bước 2: Chạy Development Server (1 phút)

```bash
npm run dev
```

Bạn sẽ thấy thông báo:
```
✓ Ready in 2.5s
○ Local:   http://localhost:3000
```

---

## Bước 3: Xem Website (Ngay lập tức!)

1. Mở trình duyệt
2. Truy cập: **http://localhost:3000**
3. Enjoy! 🎉

---

## 📸 Thay đổi hình ảnh của bạn

### Hình Profile (Hero Section)

**File**: `app/page.tsx` (dòng ~300)

**Hiện tại**:
```tsx
src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600"
```

**Thay bằng hình của bạn**:
1. Upload hình vào folder `public/images/`
   - Ví dụ: `public/images/profile.jpg`
2. Thay đổi trong code:
```tsx
src="/images/profile.jpg"
```

### Hình Portfolio Items

Tìm mảng `portfolioItems` (dòng ~114) và thay URL hình:
```tsx
image: "/images/project-1.jpg"  // Thay vì Unsplash URL
```

---

## ✏️ Cập nhật nội dung nhanh

### 1. Thông tin "About Me" (dòng ~327)

```tsx
<p className="text-body mb-4">
  Xin chào, tôi là <strong>An Thuy Duong</strong> – một Social Media Strategist...
  [Thay đổi nội dung này theo ý muốn]
</p>
```

### 2. Thêm/Sửa Kinh nghiệm làm việc (dòng ~64)

```tsx
const experiences = [
  {
    company: "Tên công ty",
    location: "Địa điểm",
    role: "Vị trí",
    period: "Thời gian",
    description: [
      "Mô tả công việc 1",
      "Mô tả công việc 2",
    ],
    color: "from-pastel-pink/20 to-pastel-beige/20"
  },
  // Thêm công việc khác...
];
```

### 3. Cập nhật thông tin liên hệ

**Email và Phone** đã được cập nhật thành:
- Email: anduong2902@gmail.com
- Phone: (253) 231-6358
- LinkedIn: linkedin.com/in/anthuyduong/

Nếu muốn thay đổi, tìm trong Footer section (dòng ~780).

---

## 🎨 Thay đổi màu sắc

File: `tailwind.config.ts`

```typescript
colors: {
  'pastel-pink': '#F6DCE5',    // Màu chính - đổi mã màu này
  'pastel-beige': '#F3EDE6',   // Màu phụ
  'warm-gray': '#6B6B6B',      // Màu text
}
```

Sau khi thay đổi, refresh browser (F5).

---

## 🌟 Tips hữu ích

### Xem thay đổi real-time
- Khi bạn lưu file, browser tự động reload
- Không cần restart server

### Tắt server
- Nhấn `Ctrl + C` trong Terminal

### Chạy lại server
```bash
npm run dev
```

### Build for production
```bash
npm run build
npm start
```

---

## 🐛 Troubleshooting

### Lỗi "npm not found"
→ Cài đặt Node.js từ [nodejs.org](https://nodejs.org)

### Port 3000 đang được sử dụng
```bash
# Chạy trên port khác
PORT=3001 npm run dev
```
Truy cập: http://localhost:3001

### Thay đổi không hiển thị
1. Hard refresh: `Cmd + Shift + R` (Mac) hoặc `Ctrl + F5` (Windows)
2. Clear browser cache
3. Restart dev server

---

## 📁 Cấu trúc Files quan trọng

```
MarketingPortfolio/
├── app/
│   ├── page.tsx          ← MAIN FILE - Tất cả nội dung ở đây
│   ├── layout.tsx        ← SEO settings
│   └── globals.css       ← Styles
├── public/
│   └── images/           ← Upload hình của bạn vào đây
├── package.json          ← Dependencies
└── README.md             ← Documentation
```

---

## 🚀 Sẵn sàng Deploy?

Xem file `DEPLOYMENT.md` để deploy lên:
- ✅ Vercel (Khuyến nghị - miễn phí)
- Netlify
- GitHub Pages

---

## 💡 Next Steps

1. ✅ Chạy website locally (xong!)
2. 📸 Thay hình ảnh của bạn
3. ✏️ Customize nội dung
4. 🎨 Điều chỉnh màu sắc (nếu muốn)
5. 🚀 Deploy lên internet
6. 📱 Share với mọi người!

---

## 🆘 Cần giúp đỡ?

- Email: anduong2902@gmail.com
- Hoặc tạo issue trên GitHub

**Chúc mừng! Website portfolio của bạn đã sẵn sàng! 🎉**
