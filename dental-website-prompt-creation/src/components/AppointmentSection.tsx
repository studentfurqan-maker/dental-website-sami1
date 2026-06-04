import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function AppointmentSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", email: "", service: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "8888888809", href: "tel:8888888809" },
    { icon: Mail, label: "Email", value: "info@yahoo.com", href: "mailto:info@yahoo.com" },
    { icon: MapPin, label: "Address", value: "18-10-244/a/c/12/09", href: "#" },
    { icon: Clock, label: "Hours", value: "Mon - Sat: 9AM - 8PM", href: "#" },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full mb-4">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-4">
            Schedule Your Appointment Today
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base">
            Whether you need a routine checkup, cosmetic treatment, or urgent dental care, we're here to help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-[#1e3a5f] rounded-2xl p-6 md:p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-5">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-teal-500 transition-colors">
                      <item.icon className="w-5 h-5 text-teal-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs mb-0.5">{item.label}</p>
                      <p className="text-sm font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg shadow-slate-200/50 border border-slate-100">
              <h3 className="text-lg font-bold text-[#1e3a5f] mb-4">Emergency?</h3>
              <p className="text-slate-500 text-sm mb-4">
                Dental emergencies can happen anytime. Call us immediately for urgent care.
              </p>
              <a
                href="tel:8888888809"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 text-white text-sm font-semibold rounded-full hover:bg-red-600 transition-colors shadow-lg shadow-red-500/30"
              >
                <Phone size={16} />
                Call Emergency Line
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg shadow-slate-200/50 border border-slate-100">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">Thank You!</h3>
                  <p className="text-slate-500 text-sm">
                    Your appointment request has been received. We'll contact you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                        placeholder="8888888809"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                        placeholder="info@yahoo.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select a service</option>
                        <option value="root-canal">Root Canal Treatment</option>
                        <option value="xray">Digital X-Ray</option>
                        <option value="whitening">Teeth Whitening</option>
                        <option value="filling">Dental Fillings</option>
                        <option value="crown">Dental Crowns</option>
                        <option value="scaling">Scaling & Polishing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your dental concerns..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="group relative overflow-hidden w-full md:w-auto px-8 py-4 bg-[#0d9488] text-white font-semibold rounded-full shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span className="relative z-10">Book Appointment</span>
                    <Send size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                    <span className="absolute inset-0 bg-[#1e3a5f] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
