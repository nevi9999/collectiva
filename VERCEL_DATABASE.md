# 🗄️ Vercel Postgres Setup Guide

## Quick Setup Steps

### 1. Add Database in Vercel Dashboard
1. Go to https://vercel.com/dashboard → your `collectiva` project
2. Click **"Storage"** tab → **"Create Database"** → **"Postgres"**
3. Database name: `collectiva-db`
4. Region: Europe West (or your preferred region)
5. Click **"Create"**

### 2. Environment Variables (Auto-added by Vercel)
Vercel automatically adds:
- `POSTGRES_URL`
- `POSTGRES_PRISMA_URL` 
- `POSTGRES_URL_NON_POOLING`

### 3. Add Production Secrets
In Vercel Dashboard → Project Settings → Environment Variables:

```bash
# Generate with: openssl rand -base64 32
NEXTAUTH_SECRET=your-production-secret-here

# Your Vercel app URL
NEXTAUTH_URL=https://collectiva-nevi9999.vercel.app
```

### 4. Deploy & Test
1. Push latest code to GitHub
2. Vercel auto-deploys with database
3. Test registration at: https://collectiva-nevi9999.vercel.app/sign-up

## ✅ After Setup You'll Have:
- Real user accounts stored in Postgres
- Working authentication system  
- Account types (Donor/Organization)
- Automatic profile creation
- Production-ready database

**Setup time:** 10-15 minutes  
**Cost:** Free tier included
