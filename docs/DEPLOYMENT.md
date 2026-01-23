# Deployment Guide

Deployment configuration and procedures for the Emerssive website.

---

## Platform

**Hosting:** Vercel (Next.js native platform)

Vercel provides:
- Automatic deployments on git push
- Preview deployments for branches/PRs
- Edge network CDN
- Automatic HTTPS
- Built-in analytics

---

## Build Configuration

### Scripts (package.json)
```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

### Build Command
```bash
npm run build
```

### Output Directory
```
.next/
```

### Start Command (Production)
```bash
npm run start
```

---

## Environment Variables

### Current Setup
No environment variables are currently required. The site is fully static.

### If Adding Environment Variables
1. Add to Vercel project settings
2. Use `NEXT_PUBLIC_` prefix for client-side variables
3. Create `.env.local` for local development (gitignored)

```bash
# .env.local (example)
NEXT_PUBLIC_API_URL=https://api.example.com
SECRET_KEY=your-secret-key
```

---

## Deployment Workflow

### Automatic Deployment (Recommended)
1. Push to `main` branch
2. Vercel automatically builds and deploys
3. Live within 1-2 minutes

```bash
git add .
git commit -m "feat: Update hero section"
git push origin main
# Deployment triggers automatically
```

### Preview Deployments
- Push to any non-main branch
- Vercel creates a preview URL
- URL format: `project-name-git-branch-name.vercel.app`

### Manual Deployment (if needed)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

---

## Pre-deployment Checklist

### Required Checks
```bash
# 1. Lint check
npm run lint

# 2. Build check
npm run build

# 3. Local test
npm run start
# Visit http://localhost:3000
```

### Content Review
- [ ] All images load correctly
- [ ] Links work (internal and external)
- [ ] Mobile responsiveness
- [ ] No console errors

### Performance
- [ ] Images use next/image
- [ ] No unused dependencies
- [ ] No large bundle imports

---

## Rollback

### Via Vercel Dashboard
1. Go to Vercel project dashboard
2. Navigate to "Deployments"
3. Find previous working deployment
4. Click "..." menu → "Promote to Production"

### Via Git
```bash
git revert HEAD
git push origin main
```

---

## Domain Configuration

### Custom Domain Setup (Vercel)
1. Go to Project Settings → Domains
2. Add custom domain
3. Configure DNS:
   - A record: `76.76.21.21`
   - Or CNAME: `cname.vercel-dns.com`

### SSL/HTTPS
- Automatic via Vercel
- Let's Encrypt certificates
- Auto-renewal

---

## Performance Optimization

### Next.js Built-in
- Automatic code splitting
- Image optimization
- Font optimization
- Static generation

### Configured Optimizations
- **Turbopack** for dev builds
- **next/image** for all images
- **next/font** for Google Fonts
- **Tailwind CSS** purging unused styles

---

## Monitoring

### Vercel Analytics (if enabled)
- Real User Monitoring (RUM)
- Core Web Vitals
- Traffic insights

### Build Logs
- Available in Vercel dashboard
- Shows build time and errors
- Deployment history

---

## Troubleshooting

### Build Fails
1. Check build logs in Vercel
2. Run `npm run build` locally
3. Fix TypeScript/ESLint errors
4. Ensure all dependencies are in package.json

### Common Issues

**Image not found:**
```
Ensure path starts with /
Correct: /assets/logo.png
Wrong: assets/logo.png
```

**Module not found:**
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

**TypeScript errors:**
```bash
npm run lint
# Fix reported issues
```

---

## Local Development

### Start Dev Server
```bash
npm run dev
```
- Uses Turbopack for fast refresh
- Available at `http://localhost:3000`

### Production Preview
```bash
npm run build
npm run start
```
- Simulates production environment
- Available at `http://localhost:3000`

---

## CI/CD Notes

### Current Setup
- No CI pipeline configured
- Direct deployment via Vercel git integration

### If Adding CI (GitHub Actions)
```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run lint
      - run: npm run build
```
