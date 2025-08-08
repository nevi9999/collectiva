# 🗄️ Database Setup Guide - Vercel Postgres

## Step 1: Create Vercel Postgres Database

### In Vercel Dashboard:
1. Go to your project: **https://vercel.com/nevi9999/collectiva**
2. Click **"Storage"** tab
3. Click **"Create Database"**
4. Select **"Postgres"**
5. Choose **"Hobby"** plan (Free)
6. Database name: `collectiva-db`
7. Region: Choose closest to your users
8. Click **"Create"**

### Connect Database to Project:
1. After creation, click **"Connect Project"**
2. Select your `collectiva` project
3. Environment: **Production** and **Preview**
4. Click **"Connect"**

This automatically adds these environment variables:
- `POSTGRES_URL`
- `POSTGRES_PRISMA_URL` 
- `POSTGRES_URL_NON_POOLING`
- `POSTGRES_USER`
- `POSTGRES_HOST`
- `POSTGRES_PASSWORD`
- `POSTGRES_DATABASE`

## Step 2: Update Environment Variables

Add to your Vercel project environment variables:

```bash
# Database (automatically added by Vercel Postgres)
DATABASE_URL=$POSTGRES_PRISMA_URL

# NextAuth.js (add these manually)
NEXTAUTH_URL=https://collectiva-nevi9999.vercel.app
NEXTAUTH_SECRET=your-production-secret-here

# Optional OAuth providers
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GITHUB_ID=your-github-app-id
GITHUB_SECRET=your-github-app-secret
```

## Step 3: Deploy Database Schema

After connecting the database, the next deployment will:
1. Run `prisma generate` 
2. Run `prisma db push` to create tables
3. Your database will be ready!

## Step 4: Test Live Registration

Once deployed, users can:
✅ Visit: https://collectiva-nevi9999.vercel.app/sign-up
✅ Create real accounts (Donor or Organization)
✅ Data stored in Vercel Postgres
✅ Sign in with created accounts

## Database Schema Includes:

### Core Tables:
- **users** - User accounts with roles
- **user_profiles** - Additional user information  
- **organizations** - NGO/charity profiles
- **portfolios** - User collections of organizations
- **portfolio_items** - Organization allocations
- **subscriptions** - Monthly recurring donations
- **donations** - Individual transactions
- **challenges** - Fundraising campaigns
- **thank_yous** - Appreciation messages

### NextAuth Tables:
- **accounts** - OAuth provider accounts
- **sessions** - User sessions
- **verification_tokens** - Email verification

## Next Steps After Database Setup:
1. 🔐 Test user registration live
2. 💳 Add Stripe payment integration
3. 🏢 Build organization verification
4. 🤖 Implement AI fund distribution
5. 📊 Add analytics dashboard

---

**Total Setup Time**: 10 minutes
**Monthly Cost**: Free (Hobby plan)
