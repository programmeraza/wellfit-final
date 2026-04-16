"use client";
import "./index.css";
import { useEffect, useRef, useState, useLayoutEffect } from "react";

import AnimatedH1 from "./components/AnimatedH1/AnimatedH1";
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";
import { useLanguage } from "./contexts/LanguageContext";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CustomEase from "gsap/CustomEase";

let isInitialLoad = true;

export default function HomeContent() {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const preloaderRef = useRef(null);
  const progressBarRef = useRef(null);
  const [showPreloader, setShowPreloader] = useState(isInitialLoad);

  useLayoutEffect(() => {
    gsap.registerPlugin(CustomEase);
    CustomEase.create(
      "hop-main",
      "M0,0 C0.354,0 0.464,0.133 0.498,0.502 0.532,0.872 0.651,1 1,1"
    );
  }, []);

  useEffect(() => {
    return () => {
      isInitialLoad = false;
    };
  }, []);

  useGSAP(
    () => {
      if (showPreloader) {
        const tl = gsap.timeline({
          onComplete: () => setShowPreloader(false),
        });

        tl.to(progressBarRef.current, {
          scaleX: 1,
          duration: 4,
          ease: "power1.inOut",
        });

        tl.set(progressBarRef.current, { transformOrigin: "right" }).to(
          progressBarRef.current,
          {
            scaleX: 0,
            duration: 1,
            ease: "power2.in",
          }
        );

        tl.to(preloaderRef.current, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1.5,
          ease: "hop-main",
        });
      }
    },
    { scope: containerRef, dependencies: [showPreloader] }
  );

  return (
    <>
      {showPreloader && (
        <div className="pre-loader" ref={preloaderRef}>
          <div className="progress-bar" ref={progressBarRef}></div>
        </div>
      )}
      <div className="page" ref={containerRef}>
        <section className="index-hero">
          <div className="hero-img">
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            >
              <source src="/hero/hero.webm" type="video/webm" />
              <source src="/hero/hero.mov" type="video/quicktime" />
            </video>
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 100%)",
              zIndex: 1
            }} />
          </div>

          <div className="hero-header">
            <AnimatedH1 delay={showPreloader ? 5.75 : 0.85}>
              {t.hero.title}
            </AnimatedH1>
            <p className="hero-subtitle">{t.hero.subtitle}</p>
            <p className="hero-description">{t.hero.description}</p>
          </div>

          <div className="hero-footer">
            <div className="site-info">
              {/* CTA button removed */}
            </div>

            <div className="contact-link">
              <LanguageSwitcher />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
