"use client";
import "./contact.css";
import { useState, useEffect } from "react";

import AnimatedH1 from "../components/AnimatedH1/AnimatedH1";
import AnimatedCopy from "../components/AnimatedCopy/AnimatedCopy";
import ParallaxImage from "../components/ParallaxImage/ParallaxImage";
import Footer from "../components/Footer/Footer";
import { useLanguage } from "../contexts/LanguageContext";

import { ReactLenis } from "lenis/react";

const Page = () => {
  const { t } = useLanguage();
  const [tashkentTime, setTashkentTime] = useState("--:-- UZT");

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: "Asia/Tashkent",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      const formatter = new Intl.DateTimeFormat("en-US", options);
      setTashkentTime(formatter.format(new Date()) + " UZT");
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <ReactLenis root>
      <div className="page">
        <section className="contact-hero">
          <div className="container">
            <AnimatedH1 delay={0.85}>
              {t.contact.hero.text}
            </AnimatedH1>
          </div>
        </section>

        <section className="contact-details">
          {/* <div className="container"> */}

            {/* CTA Row */}
            {/* <div className="row">
              <div className="col">
                <AnimatedCopy>{t.contact.details.build}</AnimatedCopy>
              </div>
              <div className="col">
                <div className="sub-col">
                  <AnimatedCopy>{t.contact.details.collab}</AnimatedCopy>
                  <AnimatedCopy>hello@wellfit.uz</AnimatedCopy>
                </div>
                <div className="sub-col">
                  <AnimatedCopy>{t.contact.details.join}</AnimatedCopy>
                  <AnimatedCopy>+998 97 701 11 11</AnimatedCopy>
                </div>
              </div>
            </div> */}

            {/* Location Row — Tashkent Only */}
            {/* <div className="row">
              <div className="col">
                <AnimatedCopy>{t.contact.locations.ny}</AnimatedCopy>
              </div>
              <div className="col">
                <div className="sub-col">
                  <AnimatedCopy>{t.contact.address.line1}</AnimatedCopy>
                  <AnimatedCopy>{t.contact.address.line2}</AnimatedCopy>
                  <AnimatedCopy>{t.contact.address.line3}</AnimatedCopy>
                </div>
                <div className="sub-col">
                  <AnimatedCopy>{tashkentTime}</AnimatedCopy>
                  <AnimatedCopy>+998 97 701 11 11</AnimatedCopy>
                </div>
              </div>
            </div> */}

          {/* </div> */}
        </section>

        {/* <section className="contact-banner">
          <div className="contact-banner-bg">
            <ParallaxImage src="/fitness/DSC01476.webp" alt="" speed={0.2} />
          </div>

          <div className="contact-banner-cta">
            <AnimatedH1 animateOnScroll={true}>{t.contact.banner.cta}</AnimatedH1>
          </div>
        </section> */}
      </div>

      <Footer />
    </ReactLenis>
  );
};

export default Page;
