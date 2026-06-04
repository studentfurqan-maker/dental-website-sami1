import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, GraduationCap, Calendar, Star } from "lucide-react";

const commitments = [
  "Creating personalized treatment plans for each patient's unique needs.",
  "Offering painless procedures to ensure a relaxed and stress-free experience.",
  "Using advanced dental technology to deliver precise and efficient care.",
  "Ensuring continuous learning to provide the most up-to-date dental care.",
];

export default function DoctorSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/50">
              <img
                src="/images/doctor.jpg"
                alt="Dr. Abdul Sami"
                className="w-full h-[400px] md:h-[550px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/60 via-transparent to-transparent" />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-6 -right-2 md:right-8 bg-white rounded-2xl p-4 md:p-5 shadow-xl shadow-slate-200/50 border border-slate-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#1e3a5f]">5+</p>
                  <p className="text-xs text-slate-500">Years Experience</p>
                </div>
              </div>
            </motion.div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute top-6 -left-2 md:left-6 bg-white rounded-2xl p-4 shadow-xl shadow-slate-200/50 border border-slate-100"
            >
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                <span className="text-sm font-bold text-[#1e3a5f]">4.9 Rating</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full mb-4">
              ABOUT THE DOCTOR
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-6 leading-tight">
              Meet Dr. Abdul Sami
              <br />
              <span className="text-teal-600">Your Trusted Dentist</span>
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8">
              With a passion for modern, comfortable dentistry, Dr. Abdul Sami is dedicated to providing exceptional care with the latest advancements in dental technology. He specializes in comprehensive treatment plans, including painless procedures for a truly relaxed experience.
            </p>

            <div className="space-y-4 mb-8">
              {commitments.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 shrink-0" />
                  <p className="text-slate-600 text-sm">{item}</p>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative overflow-hidden inline-flex items-center gap-2 px-8 py-4 bg-[#1e3a5f] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Calendar size={18} className="relative z-10" />
              <span className="relative z-10">Schedule a Visit</span>
              <span className="absolute inset-0 bg-[#0d9488] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
