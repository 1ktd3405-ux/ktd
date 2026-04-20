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
    img: "https://res.cloudinary.com/dttc5xk1h/image/upload/v1776643965/fresh_f_xws3qj.jpg",
    href: "https://wholefoodsbox.co.uk/collections/fresh-foods",
    accent: "from-green-900/70",
  },
  {
    id: "chilled",
    label: "Chilled Foods",
    sub: "Dairy, Meat & Ready Meals",
    img: "https://res.cloudinary.com/dttc5xk1h/image/upload/v1776643965/chilled_foods_rbdqeh.jpg",
    href: "https://wholefoodsbox.co.uk/collections/chilled-foods",
    accent: "from-blue-900/70",
  },
  {
    id: "frozen",
    label: "Frozen Foods",
    sub: "Ice Cream, Meals & Plant-Based",
    img: "https://res.cloudinary.com/dttc5xk1h/image/upload/v1776643964/frozen_ffods_cj69rx.jpg",
    href: "https://wholefoodsbox.co.uk/collections/frozen-foods",
    accent: "from-cyan-900/70",
  },
  {
    id: "cupboard",
    label: "Food Cupboard",
    sub: "Pantry Staples, Snacks & Cereals",
    img: "https://res.cloudinary.com/dttc5xk1h/image/upload/v1776643963/foot_cupboard_eofyqp.jpg",
    href: "https://wholefoodsbox.co.uk/collections/food-drink",
    accent: "from-amber-900/70",
  },
  {
    id: "health",
    label: "Health & Wellbeing",
    sub: "Supplements & Wellness",
    img: "https://res.cloudinary.com/dttc5xk1h/image/upload/v1776643964/health_wwell_b_uwdwmg.jpg",
    href: "https://wholefoodsbox.co.uk/collections/health-beauty",
    accent: "from-emerald-900/70",
    hideOnMobile: true,
  },
  {
    id: "beauty",
    label: "Beauty & Personal Care",
    sub: "Skin, Hair & Dental Care",
    img: "https://res.cloudinary.com/dttc5xk1h/image/upload/v1776643964/personal_care_jl9gts.jpg",
    href: "https://wholefoodsbox.co.uk/collections/beauty-personal-care",
    accent: "from-rose-900/70",
  },
  {
    id: "household",
    label: "Household & Pets",
    sub: "Cleaning, Kitchen & Pets",
    img: "https://res.cloudinary.com/dttc5xk1h/image/upload/v1776643964/household_cleaning_xpditn.jpg",
    href: "https://wholefoodsbox.co.uk/collections/household-pets",
    accent: "from-orange-900/70",
  },
  {
    id: "beverages",
    label: "Beverages",
    sub: "Tea, Coffee, Juices & More",
    img: "https://res.cloudinary.com/dttc5xk1h/image/upload/v1776643964/beverages_p5woyg.jpg",
    href: "https://wholefoodsbox.co.uk/collections/soft-drinks-teas-coffee",
    accent: "from-yellow-900/70",
  },
  {
    id: "baby",
    label: "Baby & Parent",
    sub: "Formula, Snacks & Baby Care",
    img: "https://res.cloudinary.com/dttc5xk1h/image/upload/v1776645492/baby_bpsndw.jpg",
    href: "https://wholefoodsbox.co.uk/collections/baby-parent-kids",
    accent: "from-purple-900/70",
  },
];

const LOGO_VILLAGE_ORGANIC = "https://res.cloudinary.com/dttc5xk1h/image/upload/v1776608184/ChatGPT_Image_Apr_19_2026_05_07_54_PM_gsa8fh.png";
const LOGO_VILLAGE_WHOLEFOODS = "https://res.cloudinary.com/dttc5xk1h/image/upload/v1776641488/Gemini_Generated_Image_dtqyoqdtqyoqdtqy_ybiznv.png";

const stores = [
  { name: "Victoria Park", address: "91 Lauriston Road", postcode: "London E9 7HJ", logo: LOGO_VILLAGE_ORGANIC },
  { name: "Clapham Common", address: "9 The Pavement", postcode: "London SW4 0HY", logo: LOGO_VILLAGE_WHOLEFOODS },
  { name: "Caledonian Road", address: "210 Caledonian Road", postcode: "London N1 0SQ", logo: LOGO_VILLAGE_WHOLEFOODS },
];

export default function Home() {
  return (
    <div className="bg-cream overflow-x-hidden">

      {/* ── HERO: video left + tagline right (desktop) / stacked (mobile) ── */}
      <section className="bg-forest-950 overflow-hidden">
        <div className="lg:flex lg:items-stretch lg:min-h-[80vh]">

          {/* Video column — top on mobile, RIGHT on desktop */}
          <div className="relative lg:w-1/2 lg:order-2">
            <video
              autoPlay
              muted
              playsInline
              className="w-full max-h-[70vh] lg:max-h-none lg:h-full object-contain lg:object-cover"
            >
              <source src="https://res.cloudinary.com/dttc5xk1h/video/upload/v1776634518/document_5992369166294719168_a7vind.mp4" type="video/mp4" />
            </video>
            {/* Mobile: fade bottom into cream */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cream to-transparent pointer-events-none lg:hidden" />
            {/* Desktop: soften left edge into text panel */}
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-forest-950 to-transparent pointer-events-none hidden lg:block" />
          </div>

          {/* Text column — bottom on mobile, LEFT on desktop */}
          <div className="lg:w-1/2 lg:order-1 bg-cream lg:bg-forest-950 flex items-center justify-center px-8 lg:px-14 py-10 lg:py-16">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="max-w-sm w-full"
            >
              <div className="inline-flex items-center gap-2 text-sage text-xs font-medium tracking-widest uppercase mb-5">
                <Leaf size={11} />
                Organic Food Specialists
              </div>
              <h1 className="font-serif text-5xl xl:text-6xl font-bold text-forest-900 lg:text-cream leading-[1.05] mb-8">
                Good Food.<br />
                <span className="text-honey">Good Life.</span>
              </h1>
              <div className="flex flex-wrap gap-4">
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
                  className="flex items-center gap-2.5 border border-forest-300 lg:border-forest-500 text-bark lg:text-cream font-medium px-7 py-4 rounded-full hover:border-forest-500 hover:text-forest-700 lg:hover:text-sage transition-all"
                >
                  <MapPin size={16} />
                  Find a Store
                </Link>
              </div>

              {/* Stats — mobile + desktop */}
              <div className="flex items-center gap-4 mt-6 lg:mt-8 pt-5 lg:pt-6 border-t border-forest-200 lg:border-forest-700/50">
                <div className="shrink-0">
                  <p className="font-serif text-2xl lg:text-3xl font-bold text-honey">3</p>
                  <p className="text-forest-600 lg:text-forest-300 text-[11px] tracking-wide mt-0.5 whitespace-nowrap">London Stores</p>
                </div>
                <div className="w-px h-9 bg-forest-200 lg:bg-forest-700/60 shrink-0" />
                <div className="shrink-0">
                  <p className="font-serif text-2xl lg:text-3xl font-bold text-honey">1000+</p>
                  <p className="text-forest-600 lg:text-forest-300 text-[11px] tracking-wide mt-0.5 whitespace-nowrap">Organic Products</p>
                </div>
                <div className="w-px h-9 bg-forest-200 lg:bg-forest-700/60 shrink-0" />
                <div className="shrink-0">
                  <p className="font-serif text-2xl lg:text-3xl font-bold text-honey">Free</p>
                  <p className="text-forest-600 lg:text-forest-300 text-[11px] tracking-wide mt-0.5 whitespace-nowrap">UK Delivery £60+</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="bg-cream pt-4 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-sage text-sm font-medium tracking-widest uppercase mb-3">Browse Our Range</p>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-forest-900">Shop By Category</h2>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
              {categories.map((cat) => (
                <motion.a
                  key={cat.id}
                  variants={fadeUp}
                  href={cat.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer shadow-sm hover:shadow-xl transition-shadow${cat.hideOnMobile ? " hidden sm:block" : ""}`}
                >
                  <img
                    src={cat.img}
                    alt={cat.label}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${cat.accent} via-transparent to-transparent`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="font-serif font-bold text-white text-base sm:text-lg leading-tight drop-shadow-md">{cat.label}</p>
                    <p className="text-white/75 text-xs sm:text-sm mt-1 leading-snug">{cat.sub}</p>
                    <div className="flex items-center gap-1 text-honey text-xs font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Shop now <ArrowRight size={11} />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div variants={fadeUp} className="text-center mt-10">
              <a
                href="https://wholefoodsbox.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-forest-700 text-cream font-semibold px-8 py-4 rounded-full hover:bg-forest-600 transition-all hover:scale-105 shadow-md"
              >
                <ShoppingBag size={16} />
                All Categories
                <ArrowRight size={15} />
              </a>
            </motion.div>
          </Section>
        </div>
      </section>

      {/* Gradient bridge: cream → forest */}
      <div className="h-16 bg-gradient-to-b from-cream to-[#2d4520]" />

      {/* ── ABOUT BANNER ── */}
      <section className="relative bg-[#2d4520] pt-16 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 50%, #8B9D5C 0%, transparent 60%), radial-gradient(circle at 20% 80%, #D4A853 0%, transparent 50%)",
          }}
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
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
        </div>
      </section>

      {/* Gradient bridge: forest → cream */}
      <div className="h-16 bg-gradient-to-b from-[#2d4520] to-cream" />

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
                  <img
                    src={store.logo}
                    alt={store.name}
                    className="w-20 h-20 rounded-full object-contain mb-5"
                  />
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
