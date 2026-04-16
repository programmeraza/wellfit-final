"use client";
import "./about.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";

import AnimatedH1 from "../components/AnimatedH1/AnimatedH1";
import AnimatedCopy from "../components/AnimatedCopy/AnimatedCopy";
import ParallaxImage from "../components/ParallaxImage/ParallaxImage";
import Footer from "../components/Footer/Footer";

import { ReactLenis } from "lenis/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const page = () => {
  const { t } = useLanguage();
  const container = useRef();
  const [windowWidth, setWindowWidth] = useState(0);
  const scrollTriggerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  useGSAP(
    () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      const timeoutId = setTimeout(() => {
        if (windowWidth > 900) {
          const expertiseSection = document.querySelector(".expertise");
          const expertiseHeader = document.querySelector(".expertise-header");
          const services = document.querySelector(".services");

          if (expertiseSection && expertiseHeader && services) {
            ScrollTrigger.refresh();

            scrollTriggerRef.current = ScrollTrigger.create({
              trigger: expertiseSection,
              start: "top top",
              endTrigger: services,
              end: "bottom bottom",
              pin: expertiseHeader,
              pinSpacing: false,
              onEnter: () => {
                gsap.to(expertiseHeader, { duration: 0.1, ease: "power1.out" });
              },
            });
          }
        }
      }, 100);

      return () => {
        window.removeEventListener("resize", handleResize);
        clearTimeout(timeoutId);

        if (scrollTriggerRef.current) {
          scrollTriggerRef.current.kill();
        }
      };
    },
    { dependencies: [windowWidth], scope: container }
  );

  useEffect(() => {
    const refreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh(true);
    }, 300);

    return () => {
      clearTimeout(refreshTimeout);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <ReactLenis root>
      <div className="page" ref={container}>
        <section className="about-hero">
          <div className="about-hero-bg">
            <Image
              src="/fitness/sauna.webp"
              alt=""
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <div className="container">
            <AnimatedH1 delay={1}>{t.about.hero.title1}</AnimatedH1>

            <div className="about-tagline">
              <div className="col">
                <AnimatedCopy delay={1} animateOnScroll={false}>
                  {t.about.hero.tagline.who}
                </AnimatedCopy>
              </div>
              <div className="col">
                <AnimatedCopy delay={1} animateOnScroll={false}>
                  {t.about.hero.tagline.text}
                </AnimatedCopy>
              </div>
            </div>
            <AnimatedH1 delay={1.2}>{t.about.hero.title2}</AnimatedH1>
          </div>
        </section>

        <section className="about-copy">
          <div className="container">
            <AnimatedCopy tag="h2">{t.about.origin.title}</AnimatedCopy>

            <div className="about-copy-wrapper">
              <AnimatedCopy>
                
                {t.about.origin.text1}
              </AnimatedCopy>

              <AnimatedCopy delay={0.25}>
                {t.about.origin.text2}
              </AnimatedCopy>

              <AnimatedCopy delay={0.5}>
                {t.about.origin.text3}
              </AnimatedCopy>

              <div className="about-copy-img">
                <div className="about-copy-img-wrapper">
                  <ParallaxImage
                    src="/fitness/about.webp"
                    alt=""
                    fill
                    speed={0.2}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="expertise">
          <div className="expertise-header">
            <div className="container">
              <div className="row">
                <AnimatedH1 animateOnScroll={true}>
                  {t.about.expertise.title}
                </AnimatedH1>

                  <div style={{ position: "relative", width: "100%", height: "400px" }}>
                    <Image
                      src="/fitness/razdevalka.webp"
                      alt=""
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
              </div>
              <div className="row">
                  <div style={{ position: "relative", width: "100%", height: "400px" }}>
                    <Image
                      src="/fitness/fitobar.webp"
                      alt=""
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
              </div>
            </div>
          </div>

          <div className="services">
            <div className="col"></div>
            <div className="col">
              <div className="service">
                <AnimatedCopy tag="h3">(01)</AnimatedCopy>
                <AnimatedCopy tag="h2">{t.services.list[0].name}</AnimatedCopy>
                <AnimatedCopy>{t.services.list[0].description}</AnimatedCopy>
              </div>
              <div className="service">
                <AnimatedCopy tag="h3">(02)</AnimatedCopy>
                <AnimatedCopy tag="h2">{t.services.list[1].name}</AnimatedCopy>
                <AnimatedCopy>{t.services.list[1].description}</AnimatedCopy>
              </div>
              <div className="service">
                <AnimatedCopy tag="h3">(03)</AnimatedCopy>
                <AnimatedCopy tag="h2">{t.services.list[2].name}</AnimatedCopy>
                <AnimatedCopy>{t.services.list[2].description}</AnimatedCopy>
              </div>
              <div className="service">
                <AnimatedCopy tag="h3">(04)</AnimatedCopy>
                <AnimatedCopy tag="h2">{t.services.list[3].name}</AnimatedCopy>
                <AnimatedCopy>{t.services.list[3].description}</AnimatedCopy>
              </div>

            </div>
          </div>
        </section>

        <section className="about-outro-banner">
          <div className="about-outro-img">
            <div style={{ position: "relative", width: "100%", height: "600px" }}>
              <Image
                src="/fitness/zal.webp"
                alt=""
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </section>

        <section className="founder-voice">
          <div className="container">
            <AnimatedCopy tag="h2">
              {t.about.founder.quote}
            </AnimatedCopy>

            <div className="founder-image" style={{ position: "relative", width: "100%", height: "500px" }}>
              <Image
                src="/fitness/sauna2.webp"
                alt=""
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="founter-info">
              <AnimatedCopy>{t.about.founder.name}</AnimatedCopy>
              <AnimatedCopy>{t.about.founder.role}</AnimatedCopy>
            </div>
          </div>
        </section>


        <Footer />
      </div>
    </ReactLenis>
  );
};

export default page;
