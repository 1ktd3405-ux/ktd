"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Leaf, ShoppingBag, MapPin, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>
      {children}
    </motion.div>
  );
}

const categories = [
  {
    id: "fresh",
    label: "Fresh Foods",
    sub: "Fruits, Vegetables & Exotics",
    img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80",
    href: "https://wholefoodsbox.co.uk/collections/fresh-foods",
    accent: "from-green-900/80",
  },
  {
    id: "chilled",
    label: "Chilled Foods",
    sub: "Dairy, Meat & Ready Meals",
    img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&q=80",
    href: "https://wholefoodsbox.co.uk/collections/chilled-foods",
    accent: "from-blue-900/80",
  },
  {
    id: "frozen",
    label: "Frozen Foods",
    sub: "Ice Cream, Meals & Plant-Based",
    img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600&q=80",
    href: "https://wholefoodsbox.co.uk/collections/frozen-foods",
    accent: "from-cyan-900/80",
  },
  {
    id: "cupboard",
    label: "Food Cupboard",
    sub: "Pantry Staples, Snacks & Cereals",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    href: "https://wholefoodsbox.co.uk/collections/food-drink",
    accent: "from-amber-900/80",
  },
  {
    id: "health",
    label: "Health & Wellbeing",
    sub: "Supplements & Wellness",
    img: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=600&q=80",
    href: "https://wholefoodsbox.co.uk/collections/health-beauty",
    accent: "from-emerald-900/80",
  },
  {
    id: "beauty",
    label: "Beauty & Personal Care",
    sub: "Skin, Hair & Dental Care",
    img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80",
    href: "https://wholefoodsbox.co.uk/collections/beauty-personal-care",
    accent: "from-rose-900/80",
  },
  {
    id: "household",
    label: "Household & Pets",
    sub: "Cleaning, Kitchen & Pets",
    img: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=600&q=80",
    href: "https://wholefoodsbox.co.uk/collections/household-pets",
    accent: "from-orange-900/80",
  },
  {
    id: "beverages",
    label: "Beverages",
    sub: "Tea, Coffee, Juices & More",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    href: "https://wholefoodsbox.co.uk/collections/soft-drinks-teas-coffee",
    accent: "from-yellow-900/80",
  },
];

const stores = [
  { name: "Victoria Park", address: "91 Lauriston Road", postcode: "London E9 7HJ" },
  { name: "Clapham Common", address: "9 The Pavement", postcode: "London SW4 0HY" },
  { name: "Caledonian Road", address: "210 Caledonian Road", postcode: "London N1 0SQ" },
];

export default function Home() {
  return (
    <div className="bg-cream overflow-x-hidden">

      {/* ── HERO: video only, no crop ── */}
      <section className="relative bg-forest-950 overflow-hidden">
        <video
          autoPlay
          muted
          playsInline
          className="w-full block"
        >
          <source src="https://res.cloudinary.com/dttc5xk1h/video/upload/v1776634518/document_5992369166294719168_a7vind.mp4" type="video/mp4" />
        </video>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cream to-transparent pointer-events-none" />
      </section>

      {/* ── SHOP NOW (below hero) ── */}
      <section className="bg-cream pt-8 pb-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 text-sage text-xs font-medium tracking-widest uppercase mb-4"
            >
              <Leaf size={11} />
              Organic Food Specialists · Est. London
            </motion.div>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-forest-900 leading-[1.05] mb-6">
              Good Food.<br />
              <span className="text-honey">Good Life.</span>
            </h1>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://wholefoodsbox.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-forest-700 text-cream font-semibold px-7 py-4 rounded-full hover:bg-forest-600 transition-all hover:scale-105 shadow-lg"
              >
                <ShoppingBag size={18} />
                Shop Now
              </a>
              <Link
                href="/stores"
                className="flex items-center gap-2.5 border border-forest-300 text-bark font-medium px-7 py-4 rounded-full hover:border-forest-500 hover:text-forest-700 transition-all"
              >
                <MapPin size={16} />
                Find a Store
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="bg-cream pt-4 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-sage text-sm font-medium tracking-widest uppercase mb-3">Browse Our Range</p>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-forest-900">Shop By Category</h2>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
              {categories.map((cat) => (
                <motion.a
                  key={cat.id}
                  variants={fadeUp}
                  href={cat.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer shadow-sm hover:shadow-xl transition-shadow"
                >
                  <img
                    src={cat.img}
                    alt={cat.label}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${cat.accent} via-transparent to-transparent`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="font-serif font-bold text-cream text-sm sm:text-base leading-tight">{cat.label}</p>
                    <p className="text-cream/70 text-xs mt-0.5 leading-snug">{cat.sub}</p>
                    <div className="flex items-center gap-1 text-honey text-xs font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Shop now <ArrowRight size={11} />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* Gradient bridge: cream → forest */}
      <div className="h-20 bg-gradient-to-b from-cream to-[#2d4520]" />

      {/* ── ABOUT BANNER ── */}
      <section className="relative bg-[#2d4520] py-24 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 50%, #8B9D5C 0%, transparent 60%), radial-gradient(circle at 20% 80%, #D4A853 0%, transparent 50%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <Section>
            <motion.p variants={fadeUp} className="text-sage text-sm font-medium tracking-widest uppercase mb-4">
              Our Story
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl lg:text-5xl font-bold text-cream mb-6">
              A Place for Every<br />Kind of Eater
            </motion.h2>
            <motion.p variants={fadeUp} className="text-forest-200 text-lg leading-relaxed mb-4">
              We believe everyone deserves access to clean, nourishing food. Whether you&apos;re a committed vegan,
              a curious pescatarian, or simply someone who cares about what goes into their body — Village Organic
              is your home.
            </motion.p>
            <motion.p variants={fadeUp} className="text-forest-300 leading-relaxed mb-8">
              With three stores across London and our online sister store WholeFoodsBox.co.uk, we make it
              easier than ever to eat well and live well.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-forest-400 text-cream font-medium px-6 py-3 rounded-full hover:bg-forest-700 transition-all"
              >
                Our Story <ArrowRight size={16} />
              </Link>
            </motion.div>
          </Section>

          <Section className="grid grid-cols-2 gap-4">
            {[
              { num: "3", label: "London Stores" },
              { num: "500+", label: "Organic Products" },
              { num: "£60", label: "Free Delivery Over" },
              { num: "100%", label: "Certified Organic" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="bg-forest-700/40 border border-forest-600/40 rounded-2xl p-6 text-center"
              >
                <p className="font-serif text-4xl font-bold text-honey mb-2">{stat.num}</p>
                <p className="text-forest-200 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </Section>
        </div>
      </section>

      {/* Gradient bridge: forest → cream */}
      <div className="h-20 bg-gradient-to-b from-[#2d4520] to-cream" />

      {/* ── OUR STORES ── */}
      <section className="bg-cream pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-sage text-sm font-medium tracking-widest uppercase mb-3">Visit Us In Person</p>
              <h2 className="font-serif text-4xl font-bold text-forest-900">Three London Stores</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {stores.map((store, i) => (
                <motion.div
                  key={store.name}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className="bg-parchment border border-forest-100 rounded-2xl p-7 hover:border-forest-300 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center text-forest-700 mb-5">
                    <MapPin size={22} />
                  </div>
                  <p className="text-xs font-semibold text-sage tracking-widest uppercase mb-2">Store {i + 1}</p>
                  <h3 className="font-serif text-xl font-bold text-forest-900 mb-2">{store.name}</h3>
                  <p className="text-earth text-sm">{store.address}</p>
                  <p className="text-earth text-sm mb-5">{store.postcode}</p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(`${store.address}, ${store.postcode}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-forest-600 text-sm font-medium hover:text-forest-800 transition-colors"
                  >
                    Get Directions <ArrowRight size={14} />
                  </a>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="text-center mt-8">
              <Link href="/stores" className="inline-flex items-center gap-2 text-forest-700 font-medium hover:text-forest-500 transition-colors">
                View store hours & details <ArrowRight size={16} />
              </Link>
            </motion.div>
          </Section>
        </div>
      </section>

      {/* ── SHOP CTA ── */}
      <section className="bg-cream pb-24 px-4 sm:px-6">
        <Section>
          <motion.div
            variants={fadeUp}
            className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative min-h-[300px] flex items-center justify-center"
          >
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1400&q=85"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-forest-950/72" />
            <div className="relative z-10 px-8 py-16 text-center">
              <p className="text-sage text-sm font-medium tracking-widest uppercase mb-3">Online Store</p>
              <h2 className="font-serif text-4xl font-bold text-cream mb-4">Shop the Full Range</h2>
              <p className="text-forest-200 mb-8 max-w-md mx-auto">
                Hundreds of certified organic products. Free delivery on orders over £60.
              </p>
              <a
                href="https://wholefoodsbox.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-honey text-bark font-semibold px-7 py-4 rounded-full hover:bg-amber-400 transition-all hover:scale-105"
              >
                <ShoppingBag size={18} />
                Shop at WholeFoodsBox.co.uk
              </a>
            </div>
          </motion.div>
        </Section>
      </section>

    </div>
  );
}
