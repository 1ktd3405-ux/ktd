"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight, Navigation } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>
      {children}
    </motion.div>
  );
}

const LOGO_VILLAGE_ORGANIC = "https://res.cloudinary.com/dttc5xk1h/image/upload/v1776608184/ChatGPT_Image_Apr_19_2026_05_07_54_PM_gsa8fh.png";
const LOGO_VILLAGE_WHOLEFOODS = "https://res.cloudinary.com/dttc5xk1h/image/upload/v1776641488/Gemini_Generated_Image_dtqyoqdtqyoqdtqy_ybiznv.png";

const stores = [
  {
    id: 1,
    brand: "village organic",
    name: "Victoria Park",
    logo: LOGO_VILLAGE_ORGANIC,
    address: "91 Lauriston Road",
    city: "London",
    postcode: "E9 7HJ",
    area: "Hackney",
    phone: "020 8985 8008",
    email: "info@villageorganic.co.uk",
    hours: [
      { day: "Monday – Friday", time: "8:00am – 8:00pm" },
      { day: "Saturday", time: "8:00am – 7:00pm" },
      { day: "Sunday", time: "10:00am – 6:00pm" },
    ],
    description:
      "Our flagship Victoria Park store is a much-loved gem in the heart of Hackney. Packed with fresh produce, organic groceries, and a warm community atmosphere.",
    mapQuery: "91 Lauriston Road, London E9 7HJ",
  },
  {
    id: 2,
    brand: "village wholefoods",
    name: "Clapham Common",
    logo: LOGO_VILLAGE_WHOLEFOODS,
    address: "9 The Pavement",
    city: "London",
    postcode: "SW4 0HY",
    area: "Clapham",
    phone: "020 8985 8008",
    email: "info@villageorganic.co.uk",
    hours: [
      { day: "Monday – Friday", time: "8:00am – 8:00pm" },
      { day: "Saturday", time: "8:00am – 7:00pm" },
      { day: "Sunday", time: "10:00am – 6:00pm" },
    ],
    description:
      "Right on The Pavement facing Clapham Common, this vibrant store serves south London's growing community of health-conscious shoppers.",
    mapQuery: "9 The Pavement, London SW4 0HY",
  },
  {
    id: 3,
    brand: "village wholefoods",
    name: "Caledonian Road",
    logo: LOGO_VILLAGE_WHOLEFOODS,
    address: "210 Caledonian Road",
    city: "London",
    postcode: "N1 0SQ",
    area: "Islington",
    phone: "020 8985 8008",
    email: "info@villageorganic.co.uk",
    hours: [
      { day: "Monday – Friday", time: "8:00am – 8:00pm" },
      { day: "Saturday", time: "8:00am – 7:00pm" },
      { day: "Sunday", time: "10:00am – 6:00pm" },
    ],
    description:
      "Our Islington store on Caledonian Road brings organic goodness to north London, with a carefully curated range for the local community.",
    mapQuery: "210 Caledonian Road, London N1 0SQ",
  },
];

export default function StoresPage() {
  return (
    <div className="bg-cream">
      {/* Hero */}
      <section className="bg-forest-900 pt-20 pb-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 40%, #8B9D5C 0%, transparent 50%), radial-gradient(circle at 20% 70%, #D4A853 0%, transparent 40%)",
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sage text-sm font-medium tracking-widest uppercase mb-4"
          >
            Find Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6"
          >
            Our London Stores
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-forest-200 text-xl leading-relaxed"
          >
            Three beautiful organic stores, each with its own neighbourhood character. Pop in — we'd love to meet you.
          </motion.p>
        </div>
      </section>

      {/* Store cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col gap-10">
          {stores.map((store, i) => (
            <Reveal key={store.id}>
              <motion.div
                variants={fadeUp}
                className="bg-parchment border border-forest-100 rounded-3xl overflow-hidden hover:border-forest-200 hover:shadow-xl transition-all"
              >
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Left panel */}
                  <div className="lg:col-span-2 bg-forest-800 p-10 flex flex-col justify-between relative overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `radial-gradient(circle at ${i % 2 === 0 ? "70%" : "30%"} 50%, #8B9D5C 0%, transparent 60%)`,
                      }}
                    />
                    <div className="relative z-10">
                      <p className="text-sage text-xs font-semibold tracking-widest uppercase mb-4">{store.brand}</p>
                      <img
                        src={store.logo}
                        alt={store.name}
                        className="w-20 h-20 rounded-full object-contain mb-5"
                      />
                      <h2 className="font-serif text-4xl lg:text-5xl font-bold text-cream mb-2 leading-tight">{store.name}</h2>
                      <p className="text-forest-300 text-sm mb-6">{store.area}, London</p>
                      <p className="text-forest-200 leading-relaxed text-sm">{store.description}</p>
                    </div>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(store.mapQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 mt-8 flex items-center gap-2 bg-honey text-bark font-semibold text-sm px-5 py-3 rounded-full hover:bg-amber-400 transition-colors w-fit"
                    >
                      <Navigation size={15} />
                      Get Directions
                    </a>
                  </div>

                  {/* Right panel */}
                  <div className="lg:col-span-3 p-10 grid sm:grid-cols-2 gap-8">
                    {/* Address */}
                    <div>
                      <div className="flex items-center gap-2 text-forest-700 mb-3">
                        <MapPin size={16} />
                        <p className="font-semibold text-sm">Address</p>
                      </div>
                      <p className="text-bark font-medium">{store.address}</p>
                      <p className="text-earth text-sm">{store.city}, {store.postcode}</p>
                    </div>

                    {/* Contact */}
                    <div>
                      <p className="font-semibold text-sm text-forest-700 mb-3">Contact</p>
                      <a
                        href={`tel:${store.phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-2 text-sm text-earth hover:text-forest-700 transition-colors mb-2"
                      >
                        <Phone size={13} />
                        {store.phone}
                      </a>
                      <a
                        href={`mailto:${store.email}`}
                        className="flex items-center gap-2 text-sm text-earth hover:text-forest-700 transition-colors"
                      >
                        <Mail size={13} />
                        {store.email}
                      </a>
                    </div>

                    {/* Hours */}
                    <div className="sm:col-span-2">
                      <div className="flex items-center gap-2 text-forest-700 mb-3">
                        <Clock size={16} />
                        <p className="font-semibold text-sm">Opening Hours</p>
                      </div>
                      <div className="grid sm:grid-cols-3 gap-3">
                        {store.hours.map((h) => (
                          <div key={h.day} className="bg-cream rounded-xl p-4 border border-forest-100">
                            <p className="text-xs text-earth font-medium mb-1">{h.day}</p>
                            <p className="font-semibold text-sm text-bark">{h.time}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Online store CTA */}
      <section className="bg-parchment border-t border-forest-100 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Reveal>
            <motion.p variants={fadeUp} className="text-sage text-sm font-medium tracking-widest uppercase mb-3">Can't Make It In?</motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-3xl font-bold text-forest-900 mb-4">
              Shop Online with Free Delivery
            </motion.h2>
            <motion.p variants={fadeUp} className="text-earth mb-8">
              Order from our full range at WholeFoodsBox.co.uk. Free delivery on orders over £60.
            </motion.p>
            <motion.a
              variants={fadeUp}
              href="https://wholefoodsbox.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-forest-700 text-cream font-semibold px-7 py-3.5 rounded-full hover:bg-forest-600 transition-colors"
            >
              Shop WholeFoodsBox.co.uk <ArrowRight size={16} />
            </motion.a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
