# Deployment Checklist for EdenNote Landing Page

## 🚀 Pre-Deployment Checklist

### 1. Environment Setup
- [ ] Update `metadataBase` URL in `app/layout.tsx` with your actual domain
- [ ] Update `robots.txt` with your actual domain
- [ ] Update `sitemap.xml` with your actual domain
- [ ] Configure environment variables in Vercel dashboard
- [ ] Update `BUYMEACOFFEE_URL` in the support section

### 2. Content Review
- [ ] Review all text content for accuracy
- [ ] Ensure all images are optimized and loading correctly
- [ ] Test all external links (Buy Me a Coffee, etc.)
- [ ] Verify app store button functionality when ready

### 3. Performance & SEO
- [ ] Run Lighthouse audit (target: 90+ on all metrics)
- [ ] Test responsive design on multiple devices
- [ ] Verify meta tags and Open Graph images
- [ ] Test social media sharing previews

### 4. Technical Checks
- [ ] Ensure all dependencies are up to date
- [ ] Run `npm run build` locally to verify build success
- [ ] Test in production mode with `npm start`
- [ ] Verify no console errors in browser

## 🔧 Vercel Deployment Steps

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Optimize for Vercel deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables**
   - In Vercel dashboard → Project Settings → Environment Variables
   - Add any required environment variables

4. **Deploy**
   - Vercel will automatically deploy on every push to main branch

### Method 2: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login and Deploy**
   ```bash
   vercel login
   vercel
   ```

3. **Follow the prompts to configure your deployment**

## 🛠️ Post-Deployment Tasks

### 1. Verify Deployment
- [ ] Visit your live URL and test all functionality
- [ ] Check mobile responsiveness
- [ ] Test form submissions (feature request form)
- [ ] Verify all images load correctly

### 2. SEO Setup
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Set up Google Analytics (if desired)
- [ ] Configure domain in Vercel dashboard

### 3. Performance Monitoring
- [ ] Run PageSpeed Insights on live URL
- [ ] Set up monitoring for Core Web Vitals
- [ ] Test loading speed from different locations

### 4. Domain Setup (Optional)
- [ ] Purchase custom domain
- [ ] Configure DNS settings
- [ ] Update all URLs in code and config files
- [ ] Set up SSL certificate (automatic with Vercel)

## 🔍 Troubleshooting Common Issues

### Build Errors
- Check Node.js version (ensure 18+ is used)
- Clear npm cache: `npm cache clean --force`
- Delete node_modules and reinstall: `rm -rf node_modules && npm install`

### Image Issues
- Ensure all images are in `/public` folder
- Verify image paths are correct (case-sensitive)
- Check image file sizes (optimize if > 1MB)

### Performance Issues
- Enable compression in `next.config.mjs` (already configured)
- Optimize images using Next.js Image component (already implemented)
- Check for unused dependencies

## 📊 Success Metrics

After deployment, aim for:
- **Lighthouse Performance**: 90+
- **Lighthouse Accessibility**: 95+
- **Lighthouse Best Practices**: 95+
- **Lighthouse SEO**: 95+
- **Core Web Vitals**: All green
- **Mobile-friendly**: Yes (Google Mobile-Friendly Test)

## 🎯 Final Notes

- The app is optimized for Vercel's Edge Network
- Images will be automatically optimized by Next.js
- The site will be globally distributed via Vercel's CDN
- SSL certificate is automatically provisioned
- The build will fail if there are TypeScript or ESLint errors (this is intentional for quality)

**Ready to deploy!** 🚀
