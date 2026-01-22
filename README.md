# IP TV - Website

A modern, responsive website for the IP TV Android application. Built for GitHub Pages hosting.

## 🌟 Features

- **Animated Landing Page** - Modern hero section with floating channel cards
- **Feature Showcase** - Detailed app features with animations
- **Channel Directory** - Searchable list of 10,000+ channels
- **Privacy Policy** - Complete privacy policy with download option
- **Responsive Design** - Works on all devices
- **Dark Theme** - Easy on the eyes

## 📁 Project Structure

```
website/
├── index.html          # Main landing page
├── channels.html       # Channel directory with search
├── privacy-policy.html # Privacy policy page
├── css/
│   └── style.css       # Main stylesheet
└── js/
    ├── main.js         # Main JavaScript
    └── channels.js     # Channels page functionality
```

## 🚀 Deployment to GitHub Pages

### Step 1: Create a GitHub Repository
1. Go to [github.com](https://github.com) and sign in
2. Click "New Repository"
3. Name it (e.g., `iptv-app` or your preferred name)
4. Make it **Public** (required for free GitHub Pages)
5. Click "Create Repository"

### Step 2: Upload Files
1. Clone the repository or use GitHub web interface
2. Upload all files from the `website` folder
3. Commit the changes

### Step 3: Enable GitHub Pages
1. Go to Repository **Settings**
2. Scroll to **Pages** section
3. Under "Source", select **main branch**
4. Select **/ (root)** as the folder
5. Click **Save**

Your site will be live at: `https://yourusername.github.io/repository-name/`

## 🛠️ Customization

### Update Download Link
In `index.html`, find the download button and update the `href`:
```html
<a href="YOUR_APK_DOWNLOAD_LINK" class="btn btn-download">
```

### Add APK File
1. Add your APK file to the repository
2. Update the download link to point to it
3. Or use a release/external link

### Update Contact Info
The developer info is already set to:
- **Developer:** Techno Science (Mr. Dev)
- **Email:** technoscsoln@gmail.com

## 📱 Pages

### Home (index.html)
- Hero section with app overview
- Feature showcase
- Download instructions
- How it works guide

### Channels (channels.html)
- Searchable channel list
- Category filters
- Country and language browsing
- Statistics display

### Privacy Policy (privacy-policy.html)
- Complete privacy policy
- Download PDF option
- Contact information

## 🎨 Design Features

- **Modern UI** with gradient effects
- **Smooth animations** on scroll
- **Floating cards** effect in hero
- **Counter animations** for statistics
- **Category carousel** auto-scroll
- **Responsive** mobile-first design

## 📄 License

This website is created for the IP TV Android application.

---

**Developer:** Techno Science (Mr. Dev)  
**Email:** technoscsoln@gmail.com
