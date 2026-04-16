"use client";
import "./work.css";

import AnimatedH1 from "../components/AnimatedH1/AnimatedH1";
import AnimatedCopy from "../components/AnimatedCopy/AnimatedCopy";
import ParallaxImage from "../components/ParallaxImage/ParallaxImage";
import Footer from "../components/Footer/Footer";
import { useLanguage } from "../contexts/LanguageContext";

import { ReactLenis } from "lenis/react";
import { useTransitionRouter } from "next-view-transitions";

const Page = () => {
  const { t } = useLanguage();
  const router = useTransitionRouter();

  const projectsData = [
    {
      id: 1,
      name: t.work.projects[0].name,
      description: t.work.projects[0].description,
      imageUrl: "/fitness/streching.webp",
    },
    {
      id: 2,
      name: t.work.projects[1].name,
      description: t.work.projects[1].description,
      imageUrl: "/fitness/kardio.webp",
    },
    {
      id: 3,
      name: t.work.projects[2].name,
      description: t.work.projects[2].description,
      imageUrl: "/fitness/blochniy.webp",
    },
    {
      id: 4,
      name: t.work.projects[3].name,
      description: t.work.projects[3].description,
      imageUrl: "/fitness/silovie.webp",
    },
    {
      id: 5,
      name: t.work.projects[4].name,
      description: t.work.projects[4].description,
      imageUrl: "/fitness/function.webp",
    },
    {
      id: 6,
      name: t.work.projects[5].name,
      description: t.work.projects[5].description,
      imageUrl: "/fitness/svoboda.webp",
    },
  ];

  // Данные для 3-х добавленных блоков
  const facilitiesData = [
    {
      id: 1,
      name: t.work.bonusTitle[0].name,
      description: t.work.bonusTitle[0].description,
      imageUrl: "/fitness/velo.webp", 
    },
    {
      id: 2,
      name: t.work.bonusTitle[1].name,
      description: t.work.bonusTitle[1].description,
      imageUrl: "/fitness/fito.webp", 
    },
    {
      id: 3,
      name: t.work.bonusTitle[2].name,
      description: t.work.bonusTitle[2].description,
      imageUrl: "/fitness/cryo2.webp", 
    },
  ];

  function slideInOut() {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "scale(1)",
        },
        {
          opacity: 0.4,
          transform: "scale(0.5)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }

  const handleNavigation = (e, path) => {
    e.preventDefault();

    setTimeout(() => {
      router.push(path, {
        onTransitionReady: slideInOut,
      });
    }, 200);
  };

  return (
    <ReactLenis root>
      <div className="page">
        <section className="work-hero">
          <div className="container">
            <AnimatedH1 delay={1}>{t.work.hero.title}</AnimatedH1>
            <AnimatedCopy delay={1.2} animateOnScroll={false}>
              {t.work.hero.subtitle}
            </AnimatedCopy>
          </div>
        </section>

        <section>
          <h2 className="projects-title">{t.work.projectsTitle}</h2>
        </section>

        <section className="projects">
          {projectsData.map((project) => (
            <div className="project" key={project.id}>
              <div className="project-banner-img">
                <ParallaxImage src={project.imageUrl} alt={project.name} />
                <div className="project-title">
                    <AnimatedH1 animateOnScroll={true}>
                      {project.name}
                    </AnimatedH1>
                    <AnimatedCopy className="project-tt">
                      {project.description}
                    </AnimatedCopy>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* НОВЫЙ БЛОК: Инфраструктура */}
        <section className="facilities">
          {facilitiesData.map((facility) => (
            <div 
              className="facility-block" 
              key={`facility-${facility.id}`}
              style={{
                minHeight: "100vh", 
                display: "flex",
                flexWrap: "wrap", 
                alignItems: "center",
                padding: "0 5vw", 
                gap: "4rem" 
              }}
            >
              
              {/* ЛЕВАЯ ЧАСТЬ: Текст */}
              <div className="facility-text" style={{ flex: "1 1 400px" }}>
                <AnimatedH1 animateOnScroll={true} className="facility-t">
                  {facility.name}
                </AnimatedH1>
                {/* Исправление здесь: обернули AnimatedCopy в div со стилями, внутри только текст */}
                <div style={{ fontSize: "1.2rem", lineHeight: "1.6", marginTop: "1.5rem" }}>
                  <AnimatedCopy animateOnScroll={true} className="facility-tt">
                    {facility.description}
                  </AnimatedCopy>
                </div>
              </div>

              {/* ПРАВАЯ ЧАСТЬ: Блок для картинки (открыт для вставки) */}
              <div 
                className="facility-image-wrapper" 
                style={{ 
                  flex: "1 1 400px", 
                  height: "70vh", 
                  position: "relative",
                  overflow: "hidden",
                  backgroundColor: "#111" 
                }}
              >
                <ParallaxImage src={facility.imageUrl} alt={facility.name} />
              </div>

            </div>
          ))}
        </section>

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Page;