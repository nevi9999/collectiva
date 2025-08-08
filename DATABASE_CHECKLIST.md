# ✅ Vercel Postgres Setup Checklist

## Prerequisites Completed ✅
- [x] App deployed to Vercel: `collectiva-nevi9999.vercel.app`
- [x] Database schema ready (Prisma)
- [x] Smart signup system with fallback
- [x] User registration page functional

## Next Steps (5 minutes):

### Step 1: Create Database in Vercel
- [ ] Go to [Vercel Dashboard](https://vercel.com/dashboard)
- [ ] Click your `collectiva` project
- [ ] Go to **Storage** tab
- [ ] Click **Create Database** → **Postgres**
- [ ] Name: `collectiva-db`
- [ ] Plan: **Hobby** (free)
- [ ] Click **Create**

### Step 2: Connect to Project
- [ ] Click **Connect Project**
- [ ] Select `collectiva` project
- [ ] Confirm connection

### Step 3: Deploy Schema (from your terminal)
```bash
npm run db:deploy
```

### Step 4: Test Live Registration
- [ ] Go to: https://collectiva-nevi9999.vercel.app/sign-up
- [ ] Create test account:
  - Name: Your Name
  - Email: test@example.com
  - Password: password123
  - Role: Donor
- [ ] Should see success message

### Step 5: Verify Database
- [ ] Vercel Dashboard → Storage → `collectiva-db` → Browse
- [ ] Check if user was created in `users` table
- [ ] Check if profile was created in `userprofiles` table
- [ ] Check if portfolio was created in `portfolios` table

## ✅ Success Indicators:
- ✅ Database shows in Vercel Storage tab
- ✅ Environment variables automatically added
- ✅ Test user registration succeeds
- ✅ Data appears in database tables
- ✅ `/api/db-status` shows "Connected"

## 🎯 After Completion:
Your Collectiva platform will have:
- ✅ **Live user registration** with real database
- ✅ **Persistent data storage**
- ✅ **Account type selection** (Donor/Organization)
- ✅ **Automatic profile creation**
- ✅ **Ready for authentication integration**

**Time needed**: ~5 minutes  
**Cost**: Free (Hobby tier)
