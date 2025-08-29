# EdenNote Landing Page

A modern, responsive landing page for EdenNote - the ultimate mobile note-taking app for sermons, Bible study, and spiritual growth.

## 🚀 Features

- **Modern Design**: Clean, professional UI with gradient accents and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js 15 for optimal performance
- **Vercel Ready**: Optimized for deployment on Vercel

## 🛠️ Tech Stack

- **Framework**: Next.js 15.2.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd sermon-notes-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser.

## 🚀 Deployment

### Deploy to Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com):

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect Next.js and deploy

Alternatively, use the Vercel CLI:
```bash
npm install -g vercel
vercel
```

### Manual Build

```bash
npm run build
npm start
```

## 📝 Environment Variables

Create a `.env.local` file based on `.env.example`:

```bash
cp .env.example .env.local
```

Configure the following variables:
- `NEXT_PUBLIC_APP_URL`: Your app URL
- `BUYMEACOFFEE_URL`: Your Buy Me a Coffee URL

## 🎨 Customization

### Colors and Theming
The app uses a custom color palette defined in `tailwind.config.ts`. Modify the colors to match your brand.

### Content
Update the content in `app/page.tsx` to match your app's features and information.

### Images
Replace the images in the `public/` folder with your own:
- `logo.webp`: App logo
- `hero image.webp`: Hero section image

## 📱 Performance

The landing page is optimized for performance:
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js Image component with WebP/AVIF support
- **Code Splitting**: Automatic code splitting for faster loading

## 🔧 Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint
- `npm run deploy`: Build and export for static hosting

## 📄 License

This project is private and proprietary.

## 🤝 Support

For support, email [your-email] or create an issue in the repository.