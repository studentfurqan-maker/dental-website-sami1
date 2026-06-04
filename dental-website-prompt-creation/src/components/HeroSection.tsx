import { motion } from "framer-motion";
import { ChevronRight, Shield, Award, Users } from "lucide-react";

export default function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-dental.jpg"
          alt="Dental Clinic"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/95 via-[#1e3a5f]/80 to-[#1e3a5f]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-32 md:py-40 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
          >
            <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Trusted Dental Care Since 2019</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Your Smile Deserves{" "}
            <span className="text-teal-400">Expert Care</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed"
          >
            Experience world-class dental treatments with Dr. Abdul Sami. From root canals to advanced diagnostics, we ensure your comfort and oral health.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <button
              onClick={() => scrollTo("#contact")}
              className="group relative overflow-hidden px-8 py-4 bg-[#0d9488] text-white font-semibold rounded-full shadow-xl shadow-teal-500/30 hover:shadow-teal-500/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span className="relative z-10">Book Appointment</span>
              <ChevronRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <span className="absolute inset-0 bg-[#1e3a5f] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button
              onClick={() => scrollTo("#services")}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              Our Services
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-3 gap-4 md:gap-8"
          >
            {[
              { icon: Users, label: "Happy Patients", value: "2,500+" },
              { icon: Award, label: "Years Experience", value: "5+" },
              { icon: Shield, label: "Treatments", value: "50+" },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <stat.icon className="w-5 h-5 text-teal-400 mb-2 mx-auto md:mx-0" />
                <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-white/50 text-xs md:text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
