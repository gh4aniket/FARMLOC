import React from 'react';
import { Link } from 'react-router-dom';
//import logo from '../../assets/images/logo.png';
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';

const socialLinks = [
  { path: "https://github.com/Pujan-sarkar/FARMLOC", icon: <AiFillGithub /> },
  { path: "", icon: <AiOutlineInstagram /> },
  { path: "https://www.linkedin.com/in/pujan-sarkar/", icon: <RiLinkedinFill /> },
];

const quickLinks01 = [
  { path: "/home", display: "Home" },
  { path: "/about", display: "About Us" },
  { path: "/cold-storage", display: "Cold Storage" },
  { path: "/marketplace", display: "Marketplace" },
];

const quickLinks02 = [
  { path: "/shop", display: "Shop Fresh" },
  { path: "/locate", display: "Find Nearby Storage" },
  { path: "/blogs", display: "Read Blogs" },
  { path: "/faq", display: "FAQs" },
];

const quickLinks03 = [
  { path: "/contact", display: "Contact Us" },
  { path: "/support", display: "Support FARMLOC" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-logo">
            <h1>FARMLOC</h1>
          </div>
          <p className="footer-description">
            © {year} FARMLOC — Empowering Farmers & Local Markets 🌾
          </p>
          <div className="footer-socials">
            {socialLinks.map((link, index) => (
              <Link to={link.path} key={index} className="social-icon">
                {link.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-column">
          <h2>Quick Links</h2>
          <ul>
            {quickLinks01.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>{item.display}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h2>Explore</h2>
          <ul>
            {quickLinks02.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>{item.display}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h2>Support</h2>
          <ul>
            {quickLinks03.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>{item.display}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
