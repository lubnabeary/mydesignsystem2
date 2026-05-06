/*
  Navbar — ARISE Design System
  ─────────────────────────────
  Figma source: D3C-FINAL node 2019:3817 (header)
  Canvas size : 1880×236 px  →  scale ×0.681 at 1280 px viewport

  Figma measurements:
    Total height      236 px  →  64 px
    Nav pill          985×83 px, radius 36 px  →  radius 25 px
    Logo font         Arya Bold 62.8 px  →  43 px, tracking -3.14 px
    Nav link font     Be Vietnam Pro Bold 28.3 px  →  19 px, tracking -0.85 px
    Contact button    198×62 px, radius 57.5 px  →  pill
    Contact font      Be Vietnam Pro SemiBold 24 px  →  16 px
*/

import { Link } from 'react-router-dom';
import './Navbar.css';
import type { NavbarProps } from './Navbar.types';

const DEFAULT_LINKS = [
  { label: 'HOME',                 href: '/' },
  { label: 'AWARENESS',            href: '/awareness' },
  { label: 'MOOD TRACKER',         href: '/mood-tracker' },
  { label: 'STUDENT EXPERIENCES',  href: '/student-experiences' },
];

export function Navbar({ links = DEFAULT_LINKS, onContactClick, className }: NavbarProps) {
  return (
    <header className={`navbar${className ? ` ${className}` : ''}`}>
      <div className="navbar__inner">

        {/* Logo */}
        <div className="navbar__logo">
          <span className="navbar__logo-text">
            <span className="navbar__logo-a">A</span>
            <span className="navbar__logo-r">R</span>
            <span className="navbar__logo-ise">ISE</span>
          </span>
          <img
            src="/images/arise-cat.png"
            alt=""
            aria-hidden="true"
            className="navbar__mascot"
          />
        </div>

        {/* Nav pill */}
        <nav className="navbar__pill" aria-label="Primary navigation">
          {links.map(link => (
            <Link
              key={link.label}
              to={link.href}
              className={`navbar__link${link.active ? ' navbar__link--active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Contact */}
        <button
          type="button"
          className="navbar__contact"
          onClick={onContactClick}
        >
          CONTACT
        </button>

      </div>
    </header>
  );
}

export default Navbar;
