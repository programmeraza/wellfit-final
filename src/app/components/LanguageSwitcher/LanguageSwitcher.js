"use client";
import { useLanguage } from '../../contexts/LanguageContext';
import './LanguageSwitcher.css';

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();

  const languages = [
    { code: 'uz', label: 'UZ' },
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'EN' }
  ];

  return (
    <div className="language-switcher">
      {languages.map((lang) => (
        <button
          key={lang.code}
          className={`lang-btn ${language === lang.code ? 'active' : ''}`}
          onClick={() => changeLanguage(lang.code)}
          aria-label={`Switch to ${lang.label}`}
        >
          <span className="lang-label">{lang.label}</span>
        </button>
      ))}
    </div>
  );
}
