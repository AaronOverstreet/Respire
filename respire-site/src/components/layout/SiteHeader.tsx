import { NavLink } from "react-router-dom";
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
  return (
    <header className="site-header">
      <div className="site-header__inner container">
        <NavLink to="/" className="site-header__brand" end>
          <span className="site-header__logo" aria-hidden>
            <FlowerOfLifeLogo className="site-header__logo-svg" />
          </span>
          <span className="site-header__wordmark">
            <span className="site-header__wordmark-main">Respire</span>
            <span className="site-header__wordmark-sub">Breathwork</span>
          </span>
        </NavLink>
        <nav className="site-header__nav" aria-label="Primary">
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
        <a className="btn btn--primary site-header__cta" href={CALENDLY}>
          Book
        </a>
      </div>
    </header>
  );
}
