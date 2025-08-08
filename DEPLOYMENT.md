# 🚀 Deploying Collectiva to Vercel

## Quick Deployment Steps

### 1. Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and click "New repository"
2. Repository name: `collectiva`
3. Description: `Solidarity fundraising platform with AI-powered fund distribution`
4. Make it **Public** (required for Vercel free tier)
5. Don't initialize with README (we already have one)
6. Click "Create repository"

### 2. Push Code to GitHub
```bash
# Add the GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/collectiva.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign up" → "Continue with GitHub"
3. Click "New Project"
4. Import the `collectiva` repository
5. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: npm run build
   - **Output Directory**: .next
6. Click "Deploy"

### 4. Your Live URL
After deployment (2-3 minutes), you'll get:
- **Production URL**: `https://collectiva-YOUR_USERNAME.vercel.app`
- **Custom domain** option available in settings

### 5. Environment Variables (Optional)
Add these in Vercel dashboard → Settings → Environment Variables:
- `NODE_ENV`: production
- `NEXTAUTH_URL`: your-vercel-url
- `NEXTAUTH_SECRET`: generate-random-string

## ✅ What You Get
- ✅ **Automatic deployments** on every Git push
- ✅ **Global CDN** for fast loading worldwide
- ✅ **HTTPS certificates** automatically
- ✅ **Preview deployments** for testing
- ✅ **Analytics** and performance monitoring
- ✅ **Free tier**: Unlimited personal projects

## 🔄 Development Workflow
1. Make changes locally
2. `git add . && git commit -m "description"`
3. `git push` → Automatic deployment to Vercel
4. Test on live URL

## 🎯 Next Steps After Deployment
1. **Custom Domain**: Add collectiva.com in Vercel settings
2. **Database**: Add PostgreSQL (Vercel Postgres or external)
3. **Authentication**: Set up NextAuth.js with real providers
4. **Payments**: Integrate Stripe for subscriptions
5. **AI Features**: Add OpenAI API for fund distribution

---
**Estimated deployment time**: 10 minutes
**Monthly cost**: Free (up to 100GB bandwidth)
