import { useState, useEffect, Suspense, lazy } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import {
  ServicesSkeleton,
  DoctorSkeleton,
  BeforeAfterSkeleton,
  ReviewsSkeleton,
  AppointmentSkeleton,
} from "./components/SkeletonLoader";

const ServicesSection = lazy(() => import("./components/ServicesSection"));
const DoctorSection = lazy(() => import("./components/DoctorSection"));
const BeforeAfterSection = lazy(() => import("./components/BeforeAfterSection"));
const ReviewsSection = lazy(() => import("./components/ReviewsSection"));
const AppointmentSection = lazy(() => import("./components/AppointmentSection"));
const Footer = lazy(() => import("./components/Footer"));

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-[#0d9488] text-white rounded-full shadow-xl shadow-teal-500/30 flex items-center justify-center hover:bg-[#1e3a5f] transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Preload critical images
    const images = ["/images/hero-dental.jpg", "/images/doctor.jpg"];
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}

      <div className={`transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"}`}>
        <Navbar />
        <HeroSection />

        <Suspense fallback={<ServicesSkeleton />}>
          <ServicesSection />
        </Suspense>

        <Suspense fallback={<DoctorSkeleton />}>
          <DoctorSection />
        </Suspense>

        <Suspense fallback={<BeforeAfterSkeleton />}>
          <BeforeAfterSection />
        </Suspense>

        <Suspense fallback={<ReviewsSkeleton />}>
          <ReviewsSection />
        </Suspense>

        <Suspense fallback={<AppointmentSkeleton />}>
          <AppointmentSection />
        </Suspense>

        <Suspense
          fallback={
            <div className="h-96 bg-[#1e3a5f] animate-pulse" />
          }
        >
          <Footer />
        </Suspense>

        <ScrollToTop />
      </div>
    </>
  );
}
