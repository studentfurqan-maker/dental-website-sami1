import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const results = [
  {
    before: "/images/before1.jpg",
    after: "/images/after1.jpg",
    title: "Teeth Whitening",
    description: "Professional whitening treatment",
  },
  {
    before: "/images/before2.jpg",
    after: "/images/after2.jpg",
    title: "Orthodontic Treatment",
    description: "Complete smile transformation",
  },
  {
    before: "/images/before1.jpg",
    after: "/images/after1.jpg",
    title: "Dental Restoration",
    description: "Crown and bridge restoration",
  },
];

function BeforeAfterCard({ result }: { result: typeof results[0] }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handleMove(e.clientX, e.currentTarget.getBoundingClientRect());
  };
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    handleMove(e.touches[0].clientX, e.currentTarget.getBoundingClientRect());
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100">
      <div
        className="relative h-64 md:h-80 cursor-ew-resize select-none overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
      >
        {/* After Image (full width) */}
        <img
          src={result.after}
          alt="After"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
        {/* Before Image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={result.before}
            alt="Before"
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{ width: `${100 / (sliderPosition / 100)}%` }}
            draggable={false}
          />
        </div>
        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
            <ChevronLeft size={14} className="text-[#1e3a5f]" />
            <ChevronRight size={14} className="text-[#1e3a5f]" />
          </div>
        </div>
        {/* Labels */}
        <span className="absolute top-4 left-4 px-3 py-1 bg-[#1e3a5f]/80 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
          Before
        </span>
        <span className="absolute top-4 right-4 px-3 py-1 bg-[#0d9488]/80 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
          After
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-[#1e3a5f]">{result.title}</h3>
        <p className="text-slate-500 text-sm mt-1">{result.description}</p>
      </div>
    </div>
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
          {results.map((result, i) => (
            <div key={i} className="flex-[0_0_90%] min-w-0">
              <BeforeAfterCard result={result} />
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
          {results.map((_, i) => (
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

export default function BeforeAfterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="results" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full mb-4">
            REAL RESULTS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-4">
            Before & After Transformations
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base">
            See the incredible transformations our patients have experienced. Drag the slider to compare before and after results.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {results.map((result, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <BeforeAfterCard result={result} />
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <MobileCarousel />
      </div>
    </section>
  );
}
