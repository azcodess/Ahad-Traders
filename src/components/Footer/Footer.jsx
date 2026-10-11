import logo from "../../assets/logo.svg";
import "./Footer.css";

const CONTACT = {
  address: "Main Market, Lahore, Pakistan",
  phone: "+92 300 1234567",
  email: "hello@ahadtraders.pk",
  whatsapp: "923001234567",
  hours: "Mon – Sat: 9:00 AM – 8:00 PM",
};

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Brands", href: "#brands" },
  { label: "Accessories", href: "#products" },
];

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "WhatsApp", href: `https://wa.me/${CONTACT.whatsapp}` },
];

function SocialMark({ name }) {
  if (name === "Facebook") return <span aria-hidden="true">f</span>;
  if (name === "Instagram") return <span aria-hidden="true">◎</span>;
  return <span aria-hidden="true">◉</span>;
}

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-main section-shell">
        <div className="footer-about">
          <a className="footer-lockup" href="#home">
            <img src={logo} alt="" />
            <span>Ahad <b>Traders</b></span>
          </a>
          <p>
            Your trusted stop for quality tyres and dependable accessories.
            Keeping every journey confident, mile after mile.
          </p>
          <div className="social-links" aria-label="Social media">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noreferrer"
              >
                <SocialMark name={social.label} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-column">
          <h2>Quick Links</h2>
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </div>

        <div className="footer-column footer-contact">
          <h2>Get in touch</h2>
          <p>{CONTACT.address}</p>
          <a href={`tel:${CONTACT.phone.replaceAll(" ", "")}`}>{CONTACT.phone}</a>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer">
            WhatsApp us
          </a>
        </div>

        <div className="footer-column">
          <h2>Opening Hours</h2>
          <p>{CONTACT.hours}</p>
          <p>Sunday: Closed</p>
          <span className="hours-status"><i /> Here to help you find the right fit</span>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Ahad Traders. All rights reserved.</p>
      </div>
    </footer>
  );
}
