// Footer.js
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="app-footer">
      <p>© {new Date().getFullYear()} CDD Designs</p>
    </footer>
  );
};

export default Footer;