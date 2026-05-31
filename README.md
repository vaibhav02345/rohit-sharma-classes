# Rohit Sharma Classes — Project Documentation

> Complete guide for the website and Android app.
> Read this before making any changes or deploying.

---

## What Was Created — Two Separate Projects

```
new rsc/
├── (root files)        ← WEBSITE — plain HTML/CSS/JS
│   ├── home.html
│   ├── courses.html
│   ├── icse.html
│   ├── cbse.html
│   ├── wall-of-fame.html
│   ├── contact.html
│   ├── style.css
│   ├── script.js
│   └── _redirects
│
└── rsc-app/            ← REACT APP + ANDROID APP
    ├── src/            ← React source code
    ├── android/        ← Android Studio project
    ├── dist/           ← Built web files
    └── capacitor.config.json
```

|  | Website | React + Android App |
|--|---------|---------------------|
| Location | `new rsc/` root | `new rsc/rsc-app/` |
| Technology | Plain HTML/CSS/JS | React (Vite) + Capacitor |
| Purpose | Live website (deployed) | Android app for Play Store |
| Deploy to | Netlify / any host | Google Play Store |

---

## PART 1 — THE WEBSITE (HTML/CSS/JS)

### Pages

| File | Page | Content |
|------|------|---------|
| home.html | Home | Hero, floating cards, faculty, carousel, demo form |
| courses.html | Courses | Tab filter, 12 course cards with pricing |
| icse.html | ICSE | Why ICSE, Class 9-10 & 11-12 course cards |
| cbse.html | CBSE | Why CBSE, Class 9-10 & 11-12 course cards |
| wall-of-fame.html | Wall of Fame | Stats, 8 topper cards, testimonials carousel |
| contact.html | Contact | Inquiry form, faculty info, hours, contact cards |
| style.css | Styles | All colors, layout, animations, responsive design |
| script.js | JavaScript | Navbar, carousel, tabs, scroll reveal, forms, toast |
| _redirects | Netlify | Routes all URLs to index.html (needed for Netlify) |

### Design System
- Font: Outfit (Google Fonts)
- Blue: #4338ca / #6366f1
- Orange: #f97316 / #fb923c
- Physics: #6366f1 | Chemistry: #10b981 | Maths: #f97316

### Features
- Fixed navbar with hamburger mobile menu
- Animated hero with floating subject cards
- Scroll reveal animations on all cards
- Reviews carousel (auto-slides every 4.5s)
- Course tab filter (All / CBSE / ICSE)
- Demo booking form with toast notification
- Contact inquiry form with toast notification
- Fully responsive (mobile to desktop)

### How to Edit
- Text content: edit the .html files directly
- Colors: edit :root {} in style.css (top of file)
- Add course: copy a course-card div in courses.html
- Change prices: search for the rupee symbol in HTML files
- Contact info: edit contact.html

### How to Run Locally
Double-click any .html file — opens in browser. No setup needed.

### How to Deploy
Drag the root "new rsc/" folder to netlify.com/drop — live URL instantly.

---

## PART 2 — THE REACT APP (rsc-app/src/)

### What It Is
Same design and content as the HTML website, rebuilt in React so it can be packaged as an Android app.

### Source Structure

```
src/
├── main.jsx              ← Entry point (React + Router + Toast)
├── App.jsx               ← Route map (URL → page component)
├── index.css             ← Global styles
├── context/
│   └── ToastContext.jsx  ← Shared toast state for all pages
├── hooks/
│   └── useReveal.js      ← Scroll-reveal animation hook
├── components/
│   ├── Navbar.jsx/.css   ← Fixed navbar
│   ├── Footer.jsx/.css   ← Dark footer
│   ├── Toast.jsx/.css    ← Popup notification
│   ├── Carousel.jsx/.css ← Reusable review carousel
│   └── DemoForm.jsx/.css ← Demo booking form
└── pages/
    ├── Home.jsx/.css          → /
    ├── Courses.jsx/.css       → /courses
    ├── ICSE.jsx               → /icse
    ├── CBSE.jsx               → /cbse
    ├── WallOfFame.jsx/.css    → /wall-of-fame
    └── Contact.jsx/.css       → /contact
```

### How to Edit
| Task | File |
|------|------|
| Home page content | src/pages/Home.jsx |
| Course cards | src/pages/Courses.jsx — edit arrays at top |
| ICSE courses | src/pages/ICSE.jsx — edit CLASS_9_10 / CLASS_11_12 |
| CBSE courses | src/pages/CBSE.jsx — edit arrays |
| Topper cards | src/pages/WallOfFame.jsx — edit toppers array |
| Reviews | src/pages/Home.jsx — edit reviews array |
| Contact details | src/pages/Contact.jsx |
| Colors | src/index.css — :root {} block |
| Navbar links | src/components/Navbar.jsx |

### Commands
```
npm run dev       ← Run locally at http://localhost:5173
npm run build     ← Build production files into dist/
npm install       ← Install packages (first time / new machine)
```

---

## PART 3 — THE ANDROID APP (Capacitor)

### How It Works
```
Edit src/ files
      ↓ npm run build
dist/ folder created
      ↓ npx cap sync android
Copied into android/ project
      ↓ Android Studio
APK / AAB file built
      ↓ Upload
Google Play Store
```

### Config File — capacitor.config.json
```json
{
  "appId": "com.rohitsharmaclasses.app",
  "appName": "Rohit Sharma Classes",
  "webDir": "dist"
}
```
WARNING: Never change appId after publishing. It's your app's permanent identity.

### Step-by-Step: Build the APK

1. Install Android Studio from developer.android.com/studio (free)

2. Build and sync:
   ```
   npm run build
   npx cap sync android
   npx cap open android
   ```

3. In Android Studio:
   - Wait for Gradle sync to complete
   - Build → Generate Signed Bundle / APK
   - Choose Android App Bundle (.aab)
   - Create a Keystore (.jks file) — SAVE THIS FILE FOREVER
   - Build → get app-release.aab

4. KEYSTORE WARNING: Save your .jks file and password in 2+ safe places.
   Losing it = can never update the app on Play Store.

### Step-by-Step: Publish to Play Store

1. Go to play.google.com/console
2. Pay one-time $25 developer fee
3. Create App → Education → Free
4. Upload your .aab file
5. Add: App icon (512x512 px), Feature graphic (1024x500 px), Screenshots
6. Write descriptions, complete Content Rating quiz
7. Submit → wait 3-7 days for review

### How to Update After Publishing
```
npm run build
npx cap sync android
```
In build.gradle: increase versionCode (1 → 2) and versionName ("1.0" → "1.1")
Build new signed AAB → Upload to Play Console → Create new release

---

## Content Reference

### Faculty
| Teacher | Subject | Qualification |
|---------|---------|--------------|
| Mr. Rohit Sharma | Physics | IIT Delhi |
| Ms. Aditi Rana | Chemistry | NIT Trichy Gold Medalist |
| Mr. Pawan Kumar | Mathematics | JEE Advanced Ranker |

### Pricing
| Class | Price/month |
|-------|-------------|
| Class 9 | Rs 1,199 – 1,299 |
| Class 10 | Rs 1,499 |
| Class 11 | Rs 1,799 |
| Class 12 | Rs 1,999 |

### Placeholder Contact Info (REPLACE THESE)
- Phone: +91 98765 43210
- Email: hello@sharmaclasses.edu
- Address: 102-105 Excellence Plaza, New Delhi – 110001

---

## Important Warnings

1. The HTML website and React app are INDEPENDENT — editing one does not affect the other.
2. Always run "npm run build" before "npx cap sync android".
3. Never delete the android/ folder.
4. Save your Keystore (.jks) file and password somewhere safe.
5. Replace placeholder contact details (phone, email, address) with real info.
6. Do not delete _redirects files — needed for Netlify routing.

---

Created May 2026 — Rohit Sharma Classes
