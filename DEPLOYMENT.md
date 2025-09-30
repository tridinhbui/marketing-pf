# Hướng dẫn Deploy Portfolio Website

## 🚀 Deploy lên Vercel (Khuyến nghị - Miễn phí)

### Bước 1: Tạo tài khoản Vercel
1. Truy cập [vercel.com](https://vercel.com)
2. Đăng ký bằng GitHub account

### Bước 2: Deploy từ GitHub
1. Push code lên GitHub repository:
```bash
cd /Users/buidinhtri/Desktop/MarketingPortfolio
git init
git add .
git commit -m "Initial commit - Portfolio website"
git branch -M main
git remote add origin https://github.com/[your-username]/portfolio.git
git push -u origin main
```

2. Trên Vercel Dashboard:
   - Click "Add New Project"
   - Import GitHub repository
   - Vercel tự động detect Next.js và config
   - Click "Deploy"

### Bước 3: Deploy trực tiếp bằng Vercel CLI
```bash
# Cài đặt Vercel CLI
npm i -g vercel

# Deploy
cd /Users/buidinhtri/Desktop/MarketingPortfolio
vercel

# Làm theo hướng dẫn:
# - Setup and deploy? Y
# - Which scope? (chọn account của bạn)
# - Link to existing project? N
# - Project name? (portfolio hoặc tên bạn muốn)
# - Directory? ./
# - Override settings? N
```

### Bước 4: Deploy Production
```bash
vercel --prod
```

Website của bạn sẽ có URL dạng: `https://your-portfolio.vercel.app`

### Custom Domain
1. Trong Vercel Dashboard → Settings → Domains
2. Thêm domain của bạn (vd: anthuyduong.com)
3. Update DNS records theo hướng dẫn

---

## 🌐 Deploy lên Netlify

### Option 1: Deploy từ GitHub
1. Push code lên GitHub
2. Truy cập [netlify.com](https://netlify.com)
3. "Add new site" → "Import from Git"
4. Chọn repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

### Option 2: Deploy bằng Netlify CLI
```bash
# Cài đặt Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
cd /Users/buidinhtri/Desktop/MarketingPortfolio
netlify deploy

# Deploy production
netlify deploy --prod
```

---

## 📱 Deploy lên GitHub Pages (Static Export)

### Bước 1: Cấu hình Next.js cho static export
Thêm vào `next.config.mjs`:
```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};
```

### Bước 2: Build và deploy
```bash
# Build static files
npm run build

# Push to gh-pages branch
npm install -g gh-pages
gh-pages -d out
```

### Bước 3: Cấu hình GitHub Pages
1. Vào Settings → Pages
2. Source: Deploy from branch
3. Branch: gh-pages
4. Folder: / (root)

Website sẽ có URL: `https://[username].github.io/[repo-name]`

---

## 🔧 Tối ưu trước khi Deploy

### 1. Thay đổi hình ảnh
- Upload hình cá nhân vào `public/images/`
- Thay URL Unsplash bằng `/images/your-photo.jpg`

### 2. Kiểm tra SEO
File `app/layout.tsx` đã có:
- Title tag
- Meta description
- Open Graph tags

### 3. Test Performance
```bash
# Run production build locally
npm run build
npm start

# Test trên http://localhost:3000
```

### 4. Environment Variables
Nếu cần API keys, thêm vào Vercel/Netlify:
- Vercel: Settings → Environment Variables
- Netlify: Site settings → Environment variables

---

## 📊 Monitoring & Analytics

### Google Analytics
Thêm vào `app/layout.tsx`:
```tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
```

### Vercel Analytics
```bash
npm i @vercel/analytics
```

Trong `app/layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react';

// Thêm <Analytics /> vào body
```

---

## ✅ Checklist trước khi Deploy

- [ ] Test responsive trên mobile, tablet, desktop
- [ ] Thay hình ảnh placeholder bằng hình thật
- [ ] Kiểm tra tất cả links (email, LinkedIn)
- [ ] Test form contact
- [ ] Xem tất cả sections trên production build
- [ ] Test SEO (title, description)
- [ ] Tối ưu images (compress nếu cần)
- [ ] Test performance (Google PageSpeed Insights)

---

## 🆘 Troubleshooting

### Lỗi "Image optimization using Next.js"
→ Thêm `unoptimized: true` trong `next.config.mjs`

### Build failed trên Vercel
→ Kiểm tra Node version (phải >= 18)
→ Clear cache và redeploy

### CSS không load
→ Kiểm tra `globals.css` đã import đúng trong `layout.tsx`

---

## 📞 Support

Nếu gặp vấn đề khi deploy:
1. Check [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
2. Check [Vercel Documentation](https://vercel.com/docs)
3. Google error message cụ thể

Good luck! 🚀
