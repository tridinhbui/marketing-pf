# An Thuy Duong - Portfolio Website

Website portfolio chuyên nghiệp cho Social Media Strategist & Content Creator với chuyên môn về Community Engagement, Analytics và Brand Development.

## 🎨 Tính năng

- ✅ **Responsive Design**: Tối ưu cho mọi thiết bị (Mobile-first)
- ✅ **Smooth Animations**: Sử dụng Framer Motion cho hiệu ứng mượt mà
- ✅ **Modern UI/UX**: Thiết kế nữ tính, chuyên nghiệp với màu pastel
- ✅ **Portfolio Showcase**: Lightbox xem ảnh dự án
- ✅ **Case Studies**: Hiển thị chi tiết dự án với số liệu thực tế
- ✅ **SEO Optimized**: Tối ưu hóa SEO với meta tags
- ✅ **Smooth Scroll**: Điều hướng mượt mà giữa các sections
- ✅ **Contact Form**: Form liên hệ đầy đủ

## 🎨 Cấu trúc trang

1. **Hero Section** - Giới thiệu Social Media Strategist với stats ấn tượng
2. **About Me** - Thông tin cá nhân, background và kỹ năng chuyên môn
3. **Experience** - Timeline kinh nghiệm làm việc tại Sorcea, Influki, Power of Patients, Chinatown-ID BIA
4. **Education** - Học vấn (MS từ Northeastern, BA từ Seattle University)
5. **Portfolio Showcase** - 4 dự án nổi bật với lightbox
6. **Case Studies** - 2 case studies chi tiết từ Chinatown-ID BIA và Husky Communicators
7. **Testimonials** - Đánh giá từ team leads và project managers
8. **Services** - 3 dịch vụ chuyên môn
9. **Blog/Insights** - Bài viết về Analytics, Community Building, và Content Strategy
10. **Contact** - Form liên hệ đầy đủ
11. **Footer** - Thông tin liên hệ và LinkedIn

## 🚀 Cài đặt

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

## 🎨 Màu sắc & Typography

### Màu sắc
- **Pastel Pink**: `#F6DCE5` - Màu chính
- **Pastel Beige**: `#F3EDE6` - Màu phụ
- **Warm Gray**: `#6B6B6B` - Màu text
- **White**: `#FFFFFF` - Nền

### Typography
- **Heading**: Playfair Display (Elegant, serif)
- **Body**: Inter (Clean, sans-serif)

## 📝 Thông tin cá nhân

Website này được build với thông tin thực của **An Thuy Duong**:

- **Email**: anduong2902@gmail.com
- **Phone**: (253) 231-6358
- **LinkedIn**: [linkedin.com/in/anthuyduong/](https://linkedin.com/in/anthuyduong/)
- **Education**: 
  - MS in Corporate and Organizational Communication - Northeastern University (2024)
  - BA in Communication and Media - Seattle University (2021, Magna Cum Laude)

### Cập nhật nội dung

Để cập nhật nội dung các sections, mở file `app/page.tsx` và chỉnh sửa:

- **Kinh nghiệm làm việc**: Mảng `experiences` (dòng ~64)
- **Portfolio items**: Mảng `portfolioItems` (dòng ~114)
- **Case studies**: Mảng `caseStudies` (dòng ~148)
- **Testimonials**: Mảng `testimonials` (dòng ~175)
- **Blog posts**: Mảng `blogPosts` (dòng ~217)

### Thay đổi hình ảnh

Tất cả hình ảnh hiện đang sử dụng Unsplash. Bạn có thể:
1. Thay thế bằng URL hình ảnh của riêng bạn
2. Hoặc upload hình vào folder `public/` và import

### Thêm/Xóa sections

Mỗi section được đánh dấu rõ ràng trong code với comment. Bạn có thể dễ dàng thêm/xóa theo nhu cầu.

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build command
npm run build

# Publish directory
.next
```

## 📄 License

© 2025. All rights reserved.

## 💡 Support

Nếu bạn cần hỗ trợ, vui lòng liên hệ qua email hoặc tạo issue.

---

Made with ❤️ for Marketing Professionals
