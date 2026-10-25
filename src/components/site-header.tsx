"use client";

import { useState } from "react";
import { portfolio } from "@/data/portfolio";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Learning Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "PUC Results", href: "#puc" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a
          aria-label={`${portfolio.name} — home`}
          className="wordmark"
          href="#home"
          onClick={() => setMenuOpen(false)}
        >
          <span className="wordmark__mark">AK</span>
          <span>{portfolio.name}</span>
        </a>

        <button
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className={`menu-toggle${menuOpen ? " menu-toggle--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          <span />
          <span />
        </button>

        <nav
          aria-label="Main navigation"
          className={`site-nav${menuOpen ? " site-nav--open" : ""}`}
          id="primary-navigation"
        >
          {navigation.map((item) => (
            <a
              className="site-nav__link"
              href={item.href}
              key={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            className="site-nav__contact"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Say hello <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
