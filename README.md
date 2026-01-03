# Nauman Ul Haq - Professional Portfolio Website

## 🌐 Live Website
This portfolio website is designed for deployment on **GitHub Pages** (100% free hosting).

## 🚀 Quick Deployment Guide

### Step 1: Create GitHub Repository
1. Go to [github.com](https://github.com) and sign in
2. Click "+" → "New repository"
3. **Repository name**: `nulhaq.github.io` (or `your-username.github.io`)
4. Set to **Public**
5. Click "Create repository"

### Step 2: Upload Files
Upload these files to your repository:
```
index.html
css/styles.css
js/main.js
assets/CV_Nauman_UlHaq.pdf
README.md
```

**Using GitHub Web Interface** (Easiest):
1. Click "uploading an existing file"
2. Drag and drop all files/folders
3. Commit changes

**Using Git Command Line**:
```bash
git clone https://github.com/YOUR-USERNAME/nulhaq.github.io.git
cd nulhaq.github.io
# Copy all files here
git add .
git commit -m "Initial commit"
git push origin main
```

### Step 3: Enable GitHub Pages
1. Go to repository Settings → Pages
2. Source: Branch `main`, Folder `/ (root)`
3. Click "Save"

### Step 4: Access Your Website
Your site will be live at: `https://nulhaq.github.io`
(May take 2-5 minutes for first deployment)

## 📝 Customization

### Update Contact Form
1. Sign up at [formspree.io](https://formspree.io) (free)
2. Create a form and get your endpoint
3. In `index.html`, replace:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Update Colors
Edit `css/styles.css`, find `:root` section:
```css
:root {
    --primary: #0f4c75;
    --secondary: #1b9cad;
    --accent: #3282b8;
}
```

### Add Your CV
Place your PDF file in the `assets/` folder named `CV_Nauman_UlHaq.pdf`

## ✨ Features

- ✅ Single-page application with tab navigation
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Dark mode toggle
- ✅ Smooth animations and transitions
- ✅ Professional corporate design
- ✅ SEO optimized with meta tags
- ✅ LinkedIn preview support (OpenGraph)
- ✅ Contact form integration ready
- ✅ Downloadable CV
- ✅ Zero backend required
- ✅ 100% free hosting on GitHub Pages

## 🎨 Sections

1. **Hero** - Name, title, executive summary, CTA buttons
2. **About** - Professional narrative, stats, affiliations
3. **Expertise** - Categorized technical skills with visual progress bars
4. **Experience** - Timeline of professional roles
5. **Projects** - Flagship projects showcase
6. **Publications** - Papers, reports, certifications, speaking engagements
7. **Education** - Academic qualifications
8. **Contact** - Contact information and form

## 🛠️ Tech Stack

- Pure HTML5, CSS3, JavaScript (no frameworks required)
- Google Fonts (Inter, Poppins)
- Font Awesome icons
- Formspree for contact form (optional)

## 🔧 Troubleshooting

**Website not showing?**
- Wait 5 minutes after first deployment
- Verify repository name: `username.github.io`
- Check GitHub Pages is enabled in Settings

**Contact form not working?**
- Set up Formspree account
- Update form action URL in index.html

**Dark mode not persisting?**
- It uses localStorage - normal behavior in modern browsers

## 🌟 Optional Enhancements

### Custom Domain
1. Buy domain (GoDaddy, Namecheap, etc.)
2. Create `CNAME` file with your domain
3. Configure DNS:
   ```
   Type: A
   Host: @
   Value: 185.199.108.153
   ```
   (Repeat for .109, .110, .111)

### Google Analytics
Add before `</head>` in index.html:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## 📱 Mobile Support

Fully optimized for:
- iPhone (all sizes)
- Android devices
- iPad/tablets
- Desktop browsers

## 🤝 Support

For questions:
- Email: naumanulhaq88@gmail.com
- LinkedIn: [linkedin.com/in/nulhaq](https://www.linkedin.com/in/nulhaq)

## 📄 License

© 2025 Nauman Ul Haq. All rights reserved.

---

**Built with precision for professional excellence.**
