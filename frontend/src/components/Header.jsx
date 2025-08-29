import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Phone, Mail, Facebook, Instagram, Twitter, Youtube, Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef(null);
  const btnRef = useRef(null);

  // Lock scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close when clicking outside the drawer
  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target) && e.target !== btnRef.current) {
        setOpen(false);
      }
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, [open]);


  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const onScroll = () => {
    setScrolled(window.scrollY > 50);
  };
  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, []);

  return (
    <>
      {/* Skip link for screen readers/keyboard */}
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 bg-brand-blue text-white px-3 py-2 rounded">
        Skip to content
      </a>

      <div
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-blue/50 backdrop-blur-md shadow-md" : "bg-white"
        }`}
      >
      {/* Top bar */}
        <div
            className={`${
              scrolled ? "bg-brand-navy/50 backdrop-blur-md" : "bg-brand-navy"
            } text-white text-sm transition-colors duration-300`}
            role="region"
            aria-label="Contact shortcuts"
          >
          <div className="container-xl h-10 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <a href="tel:+61499535298" className="hover:text-brand-blue flex items-center gap-2">
                <Phone className="w-5 h-5 text-brand-blue" aria-hidden="true" />
                <span className="whitespace-nowrap">0499 535 298</span>
              </a>
              <a href="mailto:info@ahfinsulation.com" className="hover:text-brand-blue flex items-center gap-2">
                <Mail className="w-5 h-5 text-brand-blue" aria-hidden="true" />
                <span>info@ahfinsulation.com</span>
              </a>
            </div>
            <div className="hidden md:flex items-center gap-3" aria-label="Social links">
              <a href="#" aria-label="Facebook" className="icon-chip"><Facebook className="w-5 h-5" aria-hidden="true" /></a>
              <a href="#" aria-label="Instagram" className="icon-chip"><Instagram className="w-5 h-5" aria-hidden="true" /></a>
              <a href="#" aria-label="Twitter / X" className="icon-chip"><Twitter className="w-5 h-5" aria-hidden="true" /></a>
              <a href="#" aria-label="YouTube" className="icon-chip"><Youtube className="w-5 h-5" aria-hidden="true" /></a>
            </div>
          </div>
        </div>

        {/* Main bar */}
        <div
          className={`${
            scrolled ? "bg-brand-white/40 backdrop-blur-md shadow-md" : "bg-brand-mist"
          } transition-colors duration-300`}
        >
          <div className="container-xl h-20 flex items-center justify-between" role="navigation" aria-label="Primary">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3" aria-label="AHF Insulation home">
              <img src="/AHFlogo.png" alt="AHF Insulation" width="160" height="48" className="h-12 w-auto" decoding="async" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-10">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end={n.to === "/"}
                  className={({ isActive }) => `link-nav ${isActive ? "link-active" : ""}`}
                >
                  {n.label}
                </NavLink>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:block">
              <Link to="/contact" className="btn-blue">Contact Us</Link>
            </div>

            {/* Mobile menu button */}
            <button
              ref={btnRef}
              className="md:hidden p-2 rounded-lg border"
              aria-label="Open menu"
              aria-haspopup="menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((s) => !s)}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          <div className="h-[3px] w-full bg-brand-navy/90" aria-hidden="true" />
        </div>

        {/* Mobile drawer */}
        {open && (
          <div id="mobile-menu" ref={drawerRef} className="md:hidden bg-white border-t">
            <div className="container-xl py-4 flex flex-col gap-3">
              {nav.map((n) => (
                <NavLink key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2 link-nav">
                  {n.label}
                </NavLink>
              ))}
              <Link to="/contact" onClick={() => setOpen(false)} className="btn-blue w-fit">
                Get a Free Quote
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Spacer for fixed header */}
      <div className="h-[100px] md:h-[120px]" aria-hidden="true" />
    </>
  );
}
