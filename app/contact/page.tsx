"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>
      {children}
    </motion.div>
  );
}

const stores = [
  { name: "Victoria Park", address: "91 Lauriston Road, London E9 7HJ" },
  { name: "Clapham Common", address: "9 The Pavement, London SW4 0HY" },
  { name: "Caledonian Road", address: "210 Caledonian Road, London N1 0SQ" },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="bg-cream">
      {/* Hero */}
      <section className="bg-forest-900 pt-20 pb-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 60%, #D4A853 0%, transparent 50%), radial-gradient(circle at 80% 30%, #8B9D5C 0%, transparent 40%)",
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sage text-sm font-medium tracking-widest uppercase mb-4"
          >
            Say Hello
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-forest-200 text-xl leading-relaxed"
          >
            We'd love to hear from you. Pop in to one of our stores, give us a call, or send us a message.
          </motion.p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Contact info */}
          <Reveal>
            <motion.div variants={fadeUp}>
              <h2 className="font-serif text-3xl font-bold text-forest-900 mb-8">Contact Details</h2>

              {/* Direct contact */}
              <div className="flex flex-col gap-5 mb-10">
                <a
                  href="tel:02089858008"
                  className="flex items-center gap-4 bg-parchment border border-forest-100 rounded-2xl p-5 hover:border-forest-300 hover:shadow-md transition-all group"
                >
                  <div className="w-11 h-11 bg-forest-100 text-forest-700 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-forest-200 transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-earth font-medium mb-0.5">Phone</p>
                    <p className="font-semibold text-bark">020 8985 8008</p>
                  </div>
                </a>

                <a
                  href="mailto:info@villageorganic.co.uk"
                  className="flex items-center gap-4 bg-parchment border border-forest-100 rounded-2xl p-5 hover:border-forest-300 hover:shadow-md transition-all group"
                >
                  <div className="w-11 h-11 bg-forest-100 text-forest-700 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-forest-200 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-earth font-medium mb-0.5">Email</p>
                    <p className="font-semibold text-bark">info@villageorganic.co.uk</p>
                  </div>
                </a>
              </div>

              {/* Stores */}
              <h3 className="font-serif text-xl font-bold text-forest-900 mb-5">Our Stores</h3>
              <div className="flex flex-col gap-4 mb-8">
                {stores.map((s) => (
                  <div key={s.name} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-forest-100 text-forest-700 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin size={15} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-bark">{s.name}</p>
                      <p className="text-earth text-sm">{s.address}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hours */}
              <div className="bg-parchment border border-forest-100 rounded-2xl p-6">
                <div className="flex items-center gap-2 text-forest-700 mb-4">
                  <Clock size={16} />
                  <p className="font-semibold text-sm">General Opening Hours</p>
                </div>
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-earth">Monday – Friday</span>
                    <span className="font-medium text-bark">8:00am – 8:00pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-earth">Saturday</span>
                    <span className="font-medium text-bark">8:00am – 7:00pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-earth">Sunday</span>
                    <span className="font-medium text-bark">10:00am – 6:00pm</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </Reveal>

          {/* Contact form */}
          <Reveal>
            <motion.div variants={fadeUp}>
              <h2 className="font-serif text-3xl font-bold text-forest-900 mb-8">Send a Message</h2>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-forest-50 border border-forest-200 rounded-2xl p-12 text-center"
                >
                  <CheckCircle size={48} className="text-forest-600 mx-auto mb-4" />
                  <h3 className="font-serif text-2xl font-bold text-forest-900 mb-2">Message Sent!</h3>
                  <p className="text-earth">Thank you for getting in touch. We'll get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-bark mb-2">First Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Jane"
                        className="w-full border border-forest-200 rounded-xl px-4 py-3 text-sm text-bark placeholder-earth/50 focus:outline-none focus:border-forest-500 bg-cream transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-bark mb-2">Last Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Smith"
                        className="w-full border border-forest-200 rounded-xl px-4 py-3 text-sm text-bark placeholder-earth/50 focus:outline-none focus:border-forest-500 bg-cream transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-bark mb-2">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      className="w-full border border-forest-200 rounded-xl px-4 py-3 text-sm text-bark placeholder-earth/50 focus:outline-none focus:border-forest-500 bg-cream transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-bark mb-2">Subject</label>
                    <select className="w-full border border-forest-200 rounded-xl px-4 py-3 text-sm text-bark focus:outline-none focus:border-forest-500 bg-cream transition-colors">
                      <option>General Enquiry</option>
                      <option>Product Question</option>
                      <option>Online Order</option>
                      <option>Store Information</option>
                      <option>Wholesale / Trade</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-bark mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="How can we help you?"
                      className="w-full border border-forest-200 rounded-xl px-4 py-3 text-sm text-bark placeholder-earth/50 focus:outline-none focus:border-forest-500 bg-cream transition-colors resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2.5 bg-forest-700 text-cream font-semibold py-3.5 rounded-full hover:bg-forest-600 transition-colors"
                  >
                    <Send size={16} />
                    Send Message
                  </motion.button>
                </form>
              )}
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* Online store reminder */}
      <section className="bg-parchment border-t border-forest-100 py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-earth mb-2 text-sm font-medium">Looking to place an order?</p>
          <p className="text-bark font-semibold text-lg mb-4">
            Shop online 24/7 at{" "}
            <a
              href="https://wholefoodsbox.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-forest-700 underline underline-offset-2 hover:text-forest-500 transition-colors"
            >
              WholeFoodsBox.co.uk
            </a>
          </p>
          <p className="text-earth text-sm">Free delivery on orders over £60.</p>
        </div>
      </section>
    </div>
  );
}
