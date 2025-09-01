// src/components/ScrollTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls the window to the top every time the pathname changes.
 * If a hash (#anchor) is present, it will smoothly scroll to that element instead.
 */
export default function ScrollTop({ children }) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If navigating to an anchor within the page, honor it
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    // Otherwise, jump/smooth to top on route change
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    // If you prefer smooth for all pages, use:
    // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return children;
}
