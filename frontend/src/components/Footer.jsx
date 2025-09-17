import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin} from "lucide-react";

const SOCIAL = {
  instagram: "https://www.instagram.com/ahfinsulation?igsh=MXd3NDZia29nOXdsbw==",
  facebook:  "https://www.facebook.com/share/1LZFP6os7c/?mibextid=wwXIfr",
  linkedin:  "https://www.linkedin.com/in/ahf-insulation-2329111ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-30 bg-brand-navy text-white py-12">
      {/* Top */}
      <div className="container-xl py-12 grid gap-10 md:grid-cols-3">
        {/* Column 1: Brand + NAP */}
        <div className="space-y-4">
          <Link to="/" aria-label="AHF Insulation home">
            <img src="/AHF_logo_1.jpg" alt="AHF Insulation" className="h-16" loading="lazy" />
          </Link>
          <p className="text-sm text-gray-400">
            Professional insulation services in Melbourne.
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-brand-blue mt-0.5" />
              <span className="hover:text-brand-blue">Unit 19, 2 Fastline Dr, Truganina VIC 3029</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-brand-blue" />
              <a href="tel:+610499535298" className="hover:text-brand-blue">0499 535 298</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-brand-blue" />
              <a href="mailto:info@ahfinsulation.com" className="hover:text-brand-blue">info@ahfinsulation.com</a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-blue" />
              <span className="hover:text-brand-blue">Mon–Sat: 6am–6pm</span>
            </li>
          </ul>
        </div>

        {/* Column 2: Quick links */}
        <div>
          <h4 className="text-base font-semibold mb-3 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-brand-blue">Home</Link></li>
            <li><Link to="/gallery" className="hover:text-brand-blue">Gallery</Link></li>
            <li><Link to="/services" className="hover:text-brand-blue">Services</Link></li>
            <li><Link to="/about" className="hover:text-brand-blue">About</Link></li>
            <li><Link to="/contact" className="hover:text-brand-blue">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: CTA */}
        <div className="flex flex-col gap-3">
          <h4 className="text-base font-bold mb-3 text-white">Get a Quote</h4>
          <Link to="/contact" className="btn-blue w-fit">Contact Us</Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-black/30">
        <div className="container-xl py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">Designed &amp; Developed by Javeria</p>
          <p className="text-xs text-gray-400"> 
            © {year} AHF Insulation Pty Ltd. All rights reserved.
          </p>
          
          <div className="flex items-center gap-3">
            <a href={SOCIAL.facebook}  target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="icon-chip hover:text-brand-blue"><Facebook className="w-4 h-4" /></a>
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="icon-chip hover:text-brand-blue"><Instagram className="w-4 h-4" /></a>
            <a href={SOCIAL.linkedin}  target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-chip hover:text-brand-blue"><Linkedin className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
