# WellFit - Quick Start Guide 🏋️

## ✅ DONE - What You Have Now

### Complete Multilingual Content in 3 Languages:
- 🇺🇿 **Uzbek** (O'zbek)
- 🇷🇺 **Russian** (Русский)  
- 🇬🇧 **English**

### Content Includes:
- Hero section with motivating taglines
- About WellFit with 4 key features
- 4 Service offerings with prices
- 3 Membership plans (Starter, Premium, VIP)
- Contact form and information
- Full navigation and footer text

## 🚀 To See It In Action

```bash
# 1. Start the development server
npm run dev

# 2. Open your browser to:
http://localhost:3000          # Updated homepage
http://localhost:3000/example  # Full demo with all sections

# 3. Click the language flags (O'Z, РУ, EN) to switch languages!
```

## 🎨 Next - Add Your Photos

Replace these images for a complete WellFit site:

1. **Hero Background**
   - Path: `/public/home/hero-img.jpg`
   - Size: 1920x1080px recommended
   - Should show: Modern gym, equipment, or energetic workout

2. **Service Images** (create these):
   - Personal training session photo
   - Group class in action
   - Nutrition consultation
   - CrossFit/functional training area

3. **Membership Section**
   - Happy members working out
   - Premium facilities (sauna, pool)
   - VIP lounge area

4. **About/Features**
   - Professional trainers
   - Modern equipment close-ups
   - Group classes (Yoga, Pilates, HIIT)
   - 24/7 facility access

5. **Team/Trainers**
   - Professional headshots of trainers
   - Action shots of trainers with clients

## 📝 How to Edit Content

All text is in: `src/app/translations.js`

```javascript
// Example: Change hero title
export const translations = {
  uz: {
    hero: {
      title: "Your New Uzbek Title Here", // ← Edit this
      subtitle: "Your subtitle",
      // ...
    }
  },
  ru: {
    hero: {
      title: "Your New Russian Title Here", // ← Edit this
    }
  },
  en: {
    hero: {
      title: "Your New English Title Here", // ← Edit this
    }
  }
}
```

## 🎯 Common Tasks

### Add the language switcher to other pages:
```javascript
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher';

// In your component:
<LanguageSwitcher />
```

### Use translations in any component:
```javascript
import { useLanguage } from './contexts/LanguageContext';

function MyComponent() {
  const { t } = useLanguage();
  
  return (
    <div>
      <h1>{t.hero.title}</h1>
      <p>{t.services.list[0].name}</p>
    </div>
  );
}
```

### Get current language:
```javascript
const { language } = useLanguage(); // Returns: 'uz', 'ru', or 'en'
```

### Change language programmatically:
```javascript
const { changeLanguage } = useLanguage();
changeLanguage('ru'); // Switch to Russian
```

## 📁 Important Files

| File | Purpose |
|------|---------|
| `src/app/translations.js` | All content in 3 languages |
| `src/app/page.js` | Homepage (updated) |
| `src/app/example/page.js` | Demo page with all sections |
| `src/app/components/LanguageSwitcher/` | Language selector UI |
| `MULTILINGUAL_GUIDE.md` | Detailed documentation |

## 🎨 Customization Tips

1. **Update Contact Info**: Edit `translations.js` → contact section
2. **Change Prices**: Edit `translations.js` → services/membership sections
3. **Add More Sections**: Add to translations object, use in components
4. **Modify Colors**: Edit CSS files (index.css, example.css, LanguageSwitcher.css)
5. **Add Pages**: Create new pages and use `useLanguage()` hook

## ✨ Pro Tips

- Language preference is saved automatically in browser
- Default language is Uzbek (can be changed in LanguageContext.js)
- All text is centralized - update once, affects all pages
- The system is fully responsive (works on mobile, tablet, desktop)
- You can add unlimited languages by extending translations.js

## 📞 Need Help?

Read the detailed guide: `MULTILINGUAL_GUIDE.md`

---

**You're ready to launch WellFit! Just add photos and go live! 🚀**
