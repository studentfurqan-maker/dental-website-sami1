import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Clock, MapPin } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Results", href: "#results" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="hidden md:block bg-[#1e3a5f] text-white/80 text-xs py-2">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone size={12} className="text-teal-400" />
              8888888809
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={12} className="text-teal-400" />
              Mon - Sat: 9:00 AM - 8:00 PM
            </span>
          </div>
          <span className="flex items-center gap-1.5">
            <MapPin size={12} className="text-teal-400" />
            18-10-244/a/c/12/09
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 md:top-8 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollTo("#home")} className="flex items-center gap-2.5 group">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${scrolled ? "bg-[#1e3a5f]" : "bg-white/20 backdrop-blur-sm"}`}>
              <svg width="22" height="22" viewBox="0 0 80 80" fill="none">
                <path d="M40 8C28 8 20 18 20 30C20 42 24 52 28 64C30 70 34 72 40 72C46 72 50 70 52 64C56 52 60 42 60 30C60 18 52 8 40 8Z" fill={scrolled ? "#0d9488" : "white"} />
              </svg>
            </div>
            <div className="text-left">
              <h2 className={`text-base md:text-lg font-bold leading-tight transition-colors duration-300 ${scrolled ? "text-[#1e3a5f]" : "text-white"}`}>
                Dental Cure
              </h2>
              <p className={`text-[10px] md:text-xs leading-tight transition-colors duration-300 ${scrolled ? "text-teal-600" : "text-teal-300"}`}>
                Clinic
              </p>
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                  scrolled
                    ? "text-slate-600 hover:text-[#1e3a5f] hover:bg-slate-100"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-teal-500 rounded-full group-hover:w-6 transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollTo("#contact")}
              className="relative overflow-hidden px-6 py-2.5 bg-[#0d9488] text-white text-sm font-semibold rounded-full shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 transition-all duration-300 group"
            >
              <span className="relative z-10">Book Appointment</span>
              <span className="absolute inset-0 bg-[#1e3a5f] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-[#1e3a5f]" : "text-white"}`}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => scrollTo(link.href)}
                    className="block w-full text-left px-4 py-3 text-slate-700 font-medium rounded-lg hover:bg-slate-50 hover:text-[#1e3a5f] transition-colors"
                  >
                    {link.label}
                  </motion.button>
                ))}
                <button
                  onClick={() => scrollTo("#contact")}
                  className="w-full mt-3 px-6 py-3 bg-[#0d9488] text-white font-semibold rounded-full"
                >
                  Book Appointment
                </button>
                <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 space-y-1.5">
                  <p className="flex items-center gap-2"><Phone size={12} /> 8888888809</p>
                  <p className="flex items-center gap-2"><MapPin size={12} /> 18-10-244/a/c/12/09</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
