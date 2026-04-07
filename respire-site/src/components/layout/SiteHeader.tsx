import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FlowerOfLifeLogo } from "../ui/FlowerOfLifeLogo";

const nav = [
  { to: "/", label: "Home", end: true },
  { to: "/services", label: "Services" },
  { to: "/events", label: "Events" },
  { to: "/about", label: "About" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
];

const CALENDLY = "https://calendly.com/overstreetaaron";

export function SiteHeader() {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setNavOpen(false);
  }, [location.pathname]);

  return (
    <header className={`site-header ${navOpen ? "is-nav-open" : ""}`}>
      <div className="site-header__inner container">
        <button
          type="button"
          className="site-header__menu-btn"
          aria-expanded={navOpen}
          aria-controls="primary-nav"
          onClick={() => setNavOpen((o) => !o)}
        >
          <span className="sr-only">
            {navOpen ? "Close navigation menu" : "Open navigation menu"}
          </span>
          <span className="site-header__burger" aria-hidden />
        </button>
        <NavLink to="/" className="site-header__brand" end>
          <span className="site-header__logo" aria-hidden>
            <FlowerOfLifeLogo className="site-header__logo-svg" />
          </span>
          <span className="site-header__wordmark">
            <span className="site-header__wordmark-main">Respire</span>
            <span className="site-header__wordmark-sub">Breathwork</span>
          </span>
        </NavLink>
        <a className="btn btn--primary site-header__cta" href={CALENDLY}>
          Book
        </a>
        <nav
          className="site-header__nav"
          id="primary-nav"
          aria-label="Primary"
        >
          <ul className="site-header__list">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    isActive ? "site-header__link is-active" : "site-header__link"
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
