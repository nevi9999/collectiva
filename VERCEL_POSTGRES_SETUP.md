# 🗄️ Setting Up Vercel Postgres Database

## Quick Setup Steps (5 minutes)

### 1. Go to Your Vercel Dashboard
1. Open your Vercel project: **collectiva-nevi9999.vercel.app**
2. Click on your project → **Storage** tab
3. Click **Create Database** → **Postgres**

### 2. Configure Database
- **Database Name**: `collectiva-db`
- **Region**: Choose closest to your users
- **Plan**: **Hobby** (free tier - perfect for MVP)

### 3. Connect to Project
1. After database creation, click **Connect Project**
2. Select your `collectiva` project
3. Vercel will automatically add environment variables:
   - `POSTGRES_URL`
   - `POSTGRES_PRISMA_URL` 
   - `POSTGRES_URL_NON_POOLING`

### 4. Deploy Database Schema
In your terminal, run:
```bash
# This will create all tables in production
npm run db:deploy
```

### 5. Test Live Registration
1. Go to: **https://collectiva-nevi9999.vercel.app/sign-up**
2. Create a test account
3. Check Vercel dashboard → Storage → Browse data

## ✅ What You Get Immediately:
- **Real user registration** with database storage
- **Account types**: Donor vs Organization selection
- **Automatic profile creation** for all users  
- **Default portfolio** creation for donors
- **Email validation** and duplicate prevention
- **Role-based access control** ready for authentication

## 🎯 After Database Setup:
- Users can create real accounts
- Data persists between sessions
- Ready for authentication integration
- Foundation for payments and subscriptions

## 📊 Database Monitoring:
- Check live status: `/api/db-status`
- View data: Vercel dashboard → Storage → Browse
- Monitor usage: Storage tab shows queries/month

---
**Estimated setup time**: 5 minutes  
**Monthly cost**: Free (Hobby plan)
**Storage**: 256MB (thousands of users)
