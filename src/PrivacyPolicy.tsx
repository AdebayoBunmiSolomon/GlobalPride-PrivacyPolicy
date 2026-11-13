import React from "react";
import "./PrivacyPolicy.css";

const privacySections = [
  {
    title: "1. Information We Collect",
    content:
      "We collect information you provide directly, including your name, email address, phone number, and payment information. We also collect information about your use of the Service, including campaign data, contact lists you upload, and transaction history. Device information such as IP address, browser type, and operating system may also be collected.",
  },
  {
    title: "2. How We Use Your Information",
    content:
      "Your information is used to provide, maintain, and improve the Service, process transactions, send campaign-related communications, provide customer support, and comply with legal obligations. We may also use aggregated, anonymized data for analytical purposes.",
  },
  {
    title: "3. How We Share Your Information",
    content:
      "We do not sell your personal information to third parties. We may share information with service providers who assist us in operating the Service, with telecommunications providers for message delivery, as required by law, or in connection with a business transfer. All third-party service providers are contractually bound to protect your data.",
  },
  {
    title: "4. Data Security",
    content:
      "We implement industry-standard security measures including encryption in transit and at rest, secure access controls, and regular security audits. However, no method of electronic storage or transmission is 100% secure. We cannot guarantee absolute security of your data.",
  },
  {
    title: "5. Your Privacy Rights",
    content:
      "You have the right to access, correct, or delete your personal information. You may also request a copy of your data or restrict certain processing activities. To exercise these rights, please contact our support team. We will respond to your request within 30 days.",
  },
  {
    title: "6. Data Retention",
    content:
      "We retain your personal information for as long as your account is active or as needed to provide the Service. Campaign data and transaction records are retained for a minimum of 12 months for auditing purposes. Upon account deletion, your personal data will be removed within 60 days.",
  },
];

const PrivacyPolicy: React.FC = () => {
  const supportEmail = "YOUR_SUPPORT_EMAIL@example.com";

  return (
    <main className="privacy-page">
      <div className="privacy-container">
        <header className="privacy-header">
          <div className="privacy-brand">
            <span className="brand-dot" />
            GLOBAL PRIDE
          </div>

          <div className="privacy-heading">
            <span className="privacy-eyebrow">LEGAL & TRANSPARENCY</span>
            <h1>Privacy Policy</h1>
            <p>
              Your privacy matters to us. Here's how Global Pride handles and
              protects your information.
            </p>
          </div>
        </header>

        <div className="privacy-content">
          <div className="privacy-intro">
            <h2>Your privacy, our responsibility.</h2>
            <p>
              This Privacy Policy explains how Global Pride collects, uses,
              shares, and protects information when you use our services.
            </p>
          </div>

          {privacySections.map((section) => (
            <section className="privacy-section" key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.content}</p>
            </section>
          ))}

          <section className="privacy-section">
            <h2>7. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or wish to
              exercise your privacy rights, please contact our support team.
            </p>

            <a className="privacy-email" href={`mailto:${supportEmail}`}>
              {supportEmail}
            </a>
          </section>
        </div>

        <footer className="privacy-footer">
          <span>© {new Date().getFullYear()} Global Pride.</span>
          <span>All rights reserved.</span>
        </footer>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
