"use client";
import { useLanguage } from '../contexts/LanguageContext';
import './example.css';

export default function ExamplePage() {
  const { t } = useLanguage();

  if (!t) return null;

  return (
    <div className="example-page">
      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <h2 className="section-title">{t.about?.title}</h2>
          <p className="section-subtitle">{t.about?.subtitle}</p>
          <p className="section-description">{t.about?.description}</p>
          
          <div className="features-grid">
            {(t.about?.features || []).map((feature, index) => (
              <div key={index} className="feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">{t.services?.title}</h2>
          <p className="section-subtitle">{t.services?.subtitle}</p>
          
          <div className="services-grid">
            {(t.services?.list || []).map((service, index) => (
              <div key={index} className="service-card">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <span className="price">{service.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="membership-section">
        <div className="container">
          <h2 className="section-title">{t.membership?.title}</h2>
          <p className="section-subtitle">{t.membership?.subtitle}</p>
          
          <div className="plans-grid">
            {(t.membership?.plans || []).map((plan, index) => (
              <div key={index} className={`plan-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <span className="badge">Popular</span>}
                <h3>{plan.name}</h3>
                <div className="price">
                  <span className="amount">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
                <ul className="features-list">
                  {(plan.features || []).map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <button className="cta-btn">{t.membership?.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <h2 className="section-title">{t.contact?.title}</h2>
          <p className="section-subtitle">{t.contact?.subtitle}</p>
          
          <div className="contact-grid">
            <div className="contact-info">
              <div className="info-item">
                <h4>{t.contact?.address?.line1 || t.contact?.address}</h4>
                <p>Tashkent, Uzbekistan</p>
              </div>
              <div className="info-item">
                <h4>{t.contact?.phone}</h4>
                <p>+998 90 123 45 67</p>
              </div>
              <div className="info-item">
                <h4>{t.contact?.email}</h4>
                <p>info@wellfit.uz</p>
              </div>
              <div className="info-item">
                <h4>{t.contact?.hours}</h4>
                <p>{t.contact?.hoursValue}</p>
              </div>
            </div>
            
            <form className="contact-form">
              <input type="text" placeholder={t.contact?.form?.name} required />
              <input type="tel" placeholder={t.contact?.form?.phone} required />
              <input type="email" placeholder={t.contact?.form?.email} required />
              <textarea placeholder={t.contact?.form?.message} rows="5" required></textarea>
              <button type="submit">{t.contact?.form?.submit}</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
