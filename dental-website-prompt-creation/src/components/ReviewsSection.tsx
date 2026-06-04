import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    rating: 5,
    text: "I first visited Dental Cure Clinic when I had a dental emergency. They got me in quickly and I was surprised by how kind and informative everyone was. I have never looked forward to going to the dentist before!",
    treatment: "Root Canal",
  },
  {
    name: "Vikram Patel",
    rating: 5,
    text: "Nice people, nice clean office, Dr. Sami's personality fits in well with mine. Never enjoyed a visit to a dentist before, but this one was the exception to the rule. Glad I came to Dental Cure Clinic!",
    treatment: "Teeth Cleaning",
  },
  {
    name: "Amit Kumar",
    rating: 5,
    text: "Was my first time going to the dentist in a long time! The staff made making an appointment fun and easy. Once in the chair the staff was friendly and thorough in the exam! Would 100% recommend coming here!",
    treatment: "Dental Checkup",
  },
  {
    name: "Suresh Reddy",
    rating: 5,
    text: "Today was my first visit to a dentist in 13 years and the entire staff was so welcoming! Absolute professionals and very comfortable environment. I received top notch care, and everything was explained to me in detail.",
    treatment: "Full Mouth Restoration",
  },
  {
    name: "Mohammed Ali",
    rating: 5,
    text: "First time patient at Dental Cure Clinic, I have to say the customer service was incredible! Everyone was so warm and welcoming. Dr. Sami and his team fixed me right up!",
    treatment: "Dental Filling",
  },
  {
    name: "Rajesh Gupta",
    rating: 5,
    text: "My first experience with Dr. Sami and his staff was very nice. The staff was caring, friendly, and professional. Dr. Sami spent plenty of time with me explaining everything he was doing and why.",
    treatment: "Crown Placement",
  },
];

function ReviewCard({ review, index }: { review: typeof reviews[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-6 md:p-8 shadow-lg shadow-slate-200/50 border border-slate-100 h-full flex flex-col"
    >
      <Quote className="w-8 h-8 text-teal-200 mb-4" />
      <div className="flex gap-1 mb-4">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
        ))}
      </div>
      <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-6">
        "{review.text}"
      </p>
      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
        <div>
          <p className="font-bold text-[#1e3a5f] text-sm">{review.name}</p>
          <p className="text-xs text-slate-400">{review.treatment}</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white text-sm font-bold">
          {review.name.split(" ").map((n) => n[0]).join("")}
        </div>
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
          {reviews.map((review, i) => (
            <div key={i} className="flex-[0_0_90%] min-w-0">
              <ReviewCard review={review} index={i} />
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
          {reviews.map((_, i) => (
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

export default function ReviewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="reviews" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-4">
            Real Patients, Real Smiles
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base">
            Hear how our gentle approach and stress-free care at Dental Cure Clinic have transformed our patients' smiles and confidence.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} index={i} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <MobileCarousel />
      </div>
    </section>
  );
}
