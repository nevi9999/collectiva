#!/bin/bash

echo "🚀 Collectiva Deployment Helper"
echo "==============================="
echo ""

# Check if git remote exists
if git remote get-url origin > /dev/null 2>&1; then
    echo "✅ Git remote already configured"
    echo "Current remote: $(git remote get-url origin)"
else
    echo "⚠️  No Git remote found"
    echo ""
    echo "Please follow these steps:"
    echo "1. Create a new repository on GitHub.com"
    echo "2. Repository name: collectiva"
    echo "3. Make it public"
    echo "4. Then run:"
    echo ""
    echo "   git remote add origin https://github.com/YOUR_USERNAME/collectiva.git"
    echo "   git push -u origin main"
    echo ""
fi

echo ""
echo "📋 Deployment Checklist:"
echo "========================"
echo ""
echo "□ GitHub repository created"
echo "□ Code pushed to GitHub"
echo "□ Vercel account created"
echo "□ Repository imported to Vercel"
echo "□ First deployment completed"
echo ""
echo "🌐 After deployment, your app will be available at:"
echo "   https://collectiva-YOUR_USERNAME.vercel.app"
echo ""
echo "📖 For detailed instructions, see: DEPLOYMENT.md"
echo ""

# Check if build works
echo "🔧 Testing production build..."
if npm run build > /dev/null 2>&1; then
    echo "✅ Build successful - ready for deployment!"
else
    echo "❌ Build failed - please fix errors before deploying"
fi

echo ""
echo "🎯 Quick Start:"
echo "1. Push to GitHub: git push origin main"
echo "2. Import to Vercel: vercel.com/new"
echo "3. Your app goes live automatically!"
