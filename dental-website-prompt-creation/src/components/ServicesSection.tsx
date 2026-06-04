import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  Stethoscope,
  Scan,
  Smile,
  Syringe,
  ShieldPlus,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Root Canal Treatment",
    description:
      "Painless root canal therapy using advanced techniques to save your natural tooth and eliminate infection.",
    color: "from-teal-500 to-teal-600",
  },
  {
    icon: Scan,
    title: "Digital X-Ray",
    description:
      "State-of-the-art digital radiography for accurate diagnosis with minimal radiation exposure.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Smile,
    title: "Teeth Whitening",
    description:
      "Professional whitening treatments to brighten your smile safely and effectively.",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: Syringe,
    title: "Dental Fillings",
    description:
      "Tooth-colored composite fillings that blend naturally with your teeth for seamless restoration.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: ShieldPlus,
    title: "Dental Crowns",
    description:
      "Custom-crafted crowns to restore damaged teeth and protect your oral health for years.",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Sparkles,
    title: "Scaling & Polishing",
    description:
      "Deep cleaning procedures to remove plaque, tartar and stains for healthier gums.",
    color: "from-rose-500 to-rose-600",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:shadow-teal-500/10 hover:border-teal-200 transition-all duration-500"
    >
      <div
        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
      >
        <service.icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-lg md:text-xl font-bold text-[#1e3a5f] mb-3 group-hover:text-teal-600 transition-colors">
        {service.title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
      <div className="mt-5 flex items-center gap-1 text-teal-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span>Learn More</span>
        <ChevronRight size={14} />
      </div>
    </motion.div>
  );
}

function MobileCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", slidesToScroll: 1 });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="md:hidden">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {services.map((service, i) => (
            <div key={i} className="flex-[0_0_85%] min-w-0">
              <ServiceCard service={service} index={i} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 mt-6">
        <button
          onClick={scrollPrev}
          className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white transition-colors shadow-sm"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-1.5">
          {services.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === selectedIndex ? "w-6 bg-[#0d9488]" : "w-2 bg-slate-300"
              }`}
            />
          ))}
        </div>
        <button
          onClick={scrollNext}
          className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white transition-colors shadow-sm"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full mb-4">
            OUR SERVICES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-4">
            Comprehensive Dental Services
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base">
            We offer a full range of general, cosmetic, and restorative treatments to keep your smile healthy and beautiful.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <MobileCarousel />
      </div>
    </section>
  );
}
