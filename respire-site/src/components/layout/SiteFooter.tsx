import { Link } from "react-router-dom";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p className="site-footer__copy">
          {year} © Respire Breathwork by Aaron Overstreet. All rights reserved.
        </p>
        <ul className="site-footer__legal">
          <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/disclaimer">Disclaimer</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
