"use client";
import "./Footer.css";
import { useEffect, useRef } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Footer = () => {
  const { t } = useLanguage();
  const logoRef = useRef(null);

  useGSAP(
    () => {
      if (!logoRef.current) return;

      const text = new SplitType(logoRef.current, {
        types: "chars",
        charClass: "footer-logo-char",

      });

      gsap.set(".footer-logo-char", {
        y: "100%",
        display: "inline-block",
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: logoRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        })
        .to(".footer-logo-char", {
          y: "0%",
          stagger: 0.04,
          duration: 0.8,
          ease: "power2.out",
        });

      return () => {
        if (text) text.revert();
        ScrollTrigger.getAll()
          .filter((st) => st.vars.trigger === logoRef.current)
          .forEach((st) => st.kill());
      };
    },
    { scope: logoRef }
  );

  return (
    <div className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="col">
            <div className="row1">
              <div className="footer-socials">
                <a href="https://www.instagram.com/wellfit.uz/" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://t.me/wellfit_uz" target="_blank" rel="noopener noreferrer">Telegram</a>
              </div>
              <h3>{t.contact.locations.ny}</h3>
            </div>

            <div className="row2">
              <div className="location">
                <p>Forum Business Center</p>
                <p>5th Floor, Tashkent</p>
                <p>Uzbekistan</p>
                <div className="location-tel">
                  <a href="tel: +998 97 701 11 11" style={{ marginTop: "1em" }}>+998 97 701 11 11</a>
                  <a href="tel: +998 55 507 11 11">+998 55 507 11 11</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-logo">
          <h1 ref={logoRef}>WellFit</h1>
        </div>

        <div className="footer-copyright">
          <p>WellFit &copy;2026. {t.footer.rights}.</p>
          <p>Designed by ABU</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
