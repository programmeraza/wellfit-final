"use client";
import "./project.css";

import AnimatedH1 from "../components/AnimatedH1/AnimatedH1";
import AnimatedCopy from "../components/AnimatedCopy/AnimatedCopy";
import ParallaxImage from "../components/ParallaxImage/ParallaxImage";
import Footer from "../components/Footer/Footer";
import { useLanguage } from "../contexts/LanguageContext";

import { ReactLenis } from "lenis/react";

const page = () => {
  const { t } = useLanguage();
  return (
    <ReactLenis root>
      <div className="page">
        <section className="project-hero">
          <div className="col">
            <div className="project-hero-img">
              <div className="project-hero-img-wrapper">
                <ParallaxImage
                  src="/fitness/DSC01505.webp"
                  alt=""
                  speed={0.2}
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="container">
              <div className="project-page-title">
                <AnimatedH1 delay={1}>{t.project.title}</AnimatedH1>
              </div>
              <div className="row">
                <div className="sub-col">
                  <AnimatedCopy delay={1.125} animateOnScroll={false}>
                    {t.project.meta.client}
                  </AnimatedCopy>
                  <AnimatedCopy delay={1.25} tag="h3" animateOnScroll={false}>
                    {t.project.meta.clientName}
                  </AnimatedCopy>
                </div>
                <div className="sub-col">
                  <AnimatedCopy delay={1.125} animateOnScroll={false}>
                    {t.project.meta.services}
                  </AnimatedCopy>
                  <AnimatedCopy delay={1.25} tag="h3" animateOnScroll={false}>
                    {t.project.meta.serviceName}
                  </AnimatedCopy>
                </div>
              </div>
              <div className="row">
                <div className="sub-col"></div>
                <div className="sub-col">
                  <AnimatedCopy delay={1.5}>
                    {t.project.intro}
                  </AnimatedCopy>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="project-info">
          <div className="container">
            <div className="col">
              <AnimatedCopy tag="h3">{t.project.summary.title}</AnimatedCopy>
            </div>
            <div className="col">
              <AnimatedCopy>
                {t.project.summary.text1}
              </AnimatedCopy>

              <AnimatedCopy delay={0.15}>
                {t.project.summary.text2}
              </AnimatedCopy>

              <AnimatedCopy delay={0.3}>
                {t.project.summary.text3}
              </AnimatedCopy>
            </div>
          </div>
        </section>

        <section className="project-info">
          <div className="container">
            <div className="col"></div>
            <div className="col">
              <div className="project-info-img-1">
                <div className="project-info-img-1-wrapper">
                  <ParallaxImage
                    src="/fitness/DSC01538.webp"
                    alt=""
                    speed={0.2}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="project-info">
          <div className="container">
            <div className="col">
              <AnimatedCopy tag="h3">{t.project.strategy.title}</AnimatedCopy>
            </div>
            <div className="col">
              <AnimatedCopy>
                {t.project.strategy.text}
              </AnimatedCopy>
            </div>
          </div>
        </section>

        <section className="project-info">
          <div className="container">
            <div className="col">
              <AnimatedCopy tag="h3">{t.project.stats.title}</AnimatedCopy>
            </div>
            <div className="col">
              <div className="stat">
                <AnimatedH1 animateOnScroll={true} direction="top">
                  {t.project.stats.views}
                </AnimatedH1>
                <p>{t.project.stats.viewsLabel}</p>
              </div>

              <div className="stat">
                <AnimatedH1 animateOnScroll={true} direction="top">
                  {t.project.stats.engagement}
                </AnimatedH1>
                <p>{t.project.stats.engagementLabel}</p>
              </div>

              <div className="stat">
                <AnimatedH1 animateOnScroll={true} direction="top">
                  {t.project.stats.reach}
                </AnimatedH1>
                <p>{t.project.stats.reachLabel}</p>
              </div>

              <div className="stat">
                <AnimatedH1 animateOnScroll={true} direction="top">
                  {t.project.stats.conversions}
                </AnimatedH1>
                <p>{t.project.stats.conversionsLabel}</p>
              </div>

              <div className="stat">
                <AnimatedH1 animateOnScroll={true} direction="top">
                  {t.project.stats.impressions}
                </AnimatedH1>
                <p>{t.project.stats.impressionsLabel}</p>
              </div>

              <div className="stat">
                <AnimatedH1 animateOnScroll={true} direction="top">
                  {t.project.stats.interactions}
                </AnimatedH1>
                <p>{t.project.stats.interactionsLabel}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="project-preview-img">
          <div className="project-preview-img-wrapper">
            <ParallaxImage
              src="/fitness/DSC01476.webp"
              alt=""
              speed={0.2}
            />
          </div>
        </section>

        <section className="project-info project-info-outro">
          <div className="container">
            <div className="col">
              <AnimatedCopy tag="h3">{t.project.execution.title}</AnimatedCopy>
            </div>
            <div className="col">
              <AnimatedCopy>
                {t.project.execution.text1}
              </AnimatedCopy>

              <AnimatedCopy delay={0.15}>
                {t.project.execution.text2}
              </AnimatedCopy>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default page;
