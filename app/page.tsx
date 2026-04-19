"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Leaf, ShoppingBag, MapPin, Star, ArrowRight,
  Truck, Shield, Heart, Sprout
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

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
  { emoji: "🥬", label: "Fresh Foods", sub: "Fruits, Veg & Exotics", color: "bg-forest-50 border-forest-200" },
  { emoji: "❄️", label: "Chilled Foods", sub: "Dairy, Meat & Ready Meals", color: "bg-blue-50 border-blue-200" },
  { emoji: "🧊", label: "Frozen Foods", sub: "Ice Cream, Meals & More", color: "bg-cyan-50 border-cyan-200" },
  { emoji: "🥫", label: "Food Cupboard", sub: "Pantry, Snacks & Cereals", color: "bg-amber-50 border-amber-200" },
  { emoji: "💊", label: "Health & Wellbeing", sub: "Supplements & Creams", color: "bg-emerald-50 border-emerald-200" },
  { emoji: "💅", label: "Beauty & Personal Care", sub: "Skin, Hair & Dental", color: "bg-rose-50 border-rose-200" },
  { emoji: "🏠", label: "Household & Pets", sub: "Cleaning & Pet Care", color: "bg-orange-50 border-orange-200" },
  { emoji: "☕", label: "Beverages", sub: "Tea, Coffee & Juices", color: "bg-yellow-50 border-yellow-200" },
];

const bestsellers = [
  { name: "Purple Potatoes", price: "£6.99", tag: "Fresh", emoji: "🥔" },
  { name: "Organic Bilberries 300g ×2", price: "£19.66", tag: "Popular", emoji: "🫐" },
  { name: "Lychee 250g", price: "£4.99", tag: "Exotic", emoji: "🍈" },
  { name: "Organic Sour Cherries 300g ×2", price: "£17.20", tag: "Fresh", emoji: "🍒" },
  { name: "Organic Steel Cut Oats 500g", price: "£2.29", tag: "Pantry", emoji: "🌾" },
  { name: "Coconut Milk Kefir 500ml", price: "£5.40", tag: "Chilled", emoji: "🥥" },
  { name: "Coconut Milk Yoghurt 1kg", price: "£13.39", tag: "Chilled", emoji: "🥛" },
  { name: "Sprouted Broccoli 100g", price: "£3.68", tag: "Health", emoji: "🥦" },
];

const newArrivals = [
  { name: "Green People Light Moisturiser 50ml", price: "£27.09", emoji: "🌿" },
  { name: "Green People Eye Cream 10ml", price: "£20.09", emoji: "✨" },
  { name: "Children Quick Clean Hand Foam 100ml", price: "£11.09", emoji: "🧴" },
  { name: "Children Spearmint Toothpaste 50ml", price: "£6.79", emoji: "🪥" },
  { name: "Fennel & Propolis Toothpaste 50ml", price: "£6.79", emoji: "🌱" },
  { name: "Wild Aqua Antiperspirant Roll On 50ml", price: "£12.99", emoji: "💧" },
  { name: "Wild Coconut & Vanilla Refill 50ml", price: "£5.99", emoji: "🌴" },
];

const stores = [
  { name: "Victoria Park", address: "91 Lauriston Road", postcode: "London E9 7HJ" },
  { name: "Clapham Common", address: "9 The Pavement", postcode: "London SW4 0HY" },
  { name: "Caledonian Road", address: "210 Caledonian Road", postcode: "London N1 0SQ" },
];

const trustBadges = [
  { icon: <Truck size={22} />, label: "Free Delivery", sub: "On orders over £60" },
  { icon: <Shield size={22} />, label: "100% Organic", sub: "Certified products only" },
  { icon: <Heart size={22} />, label: "All Diets Welcome", sub: "Vegan, veggie & more" },
  { icon: <Sprout size={22} />, label: "Sustainably Sourced", sub: "Earth-first choices" },
];

export default function Home() {
  return (
    <div className="bg-cream">

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-forest-900">
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://res.cloudinary.com/dttc5xk1h/video/upload/so_0/v1776607607/download_ogncot.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/dttc5xk1h/video/upload/v1776607607/download_ogncot.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-forest-900/70" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #2D5016 0%, transparent 60%),
                              radial-gradient(circle at 80% 20%, #111f0b 0%, transparent 50%)`,
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" as const }}>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-forest-700/60 border border-forest-500 text-sage text-xs font-medium px-3 py-1.5 rounded-full mb-6"
            >
              <Leaf size={12} />
              London's Organic Food Specialists
            </motion.div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-cream leading-[1.05] mb-6">
              Good Food.<br />
              <span className="text-honey">Good Life.</span>
            </h1>

            <p className="text-forest-200 text-lg leading-relaxed mb-8 max-w-lg">
              If you're a lover of healthy living, our friendly team is looking forward to welcoming you. Whether you're flirting with the idea of getting healthy or you're a master — we have what you're looking for.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wholefoodsbox.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-honey text-bark font-semibold px-6 py-3.5 rounded-full hover:bg-amber-400 transition-all hover:scale-105 shadow-lg shadow-honey/20"
              >
                <ShoppingBag size={18} />
                Shop Online Now
              </a>
              <Link
                href="/stores"
                className="flex items-center gap-2.5 border border-forest-400 text-cream font-medium px-6 py-3.5 rounded-full hover:bg-forest-700 transition-all"
              >
                <MapPin size={16} />
                Find a Store
              </Link>
            </div>

            <p className="mt-6 text-xs text-forest-400 flex items-center gap-1.5">
              <Truck size={12} />
              Free delivery on all online orders over £60
            </p>
          </motion.div>

          {/* Hero visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" as const }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-forest-600 to-forest-800 opacity-30 blur-3xl" />
              <div className="relative w-full h-full rounded-full border-2 border-forest-600/40 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🌿</div>
                  <p className="font-serif text-cream text-xl font-semibold">100% Organic</p>
                  <p className="text-sage text-sm mt-1">Farm to your door</p>
                </div>
              </div>
              {/* Orbiting badges */}
              {["🥬", "🍒", "🥛", "🌾"].map((emoji, i) => {
                const angle = (i / 4) * 2 * Math.PI - Math.PI / 2;
                const x = Math.cos(angle) * 160;
                const y = Math.sin(angle) * 160;
                return (
                  <motion.div
                    key={i}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
                    style={{ position: "absolute", top: "50%", left: "50%", transformOrigin: "0 0" }}
                  >
                    <div
                      className="w-12 h-12 bg-forest-700 rounded-full flex items-center justify-center text-xl shadow-lg border border-forest-600"
                      style={{ transform: `translate(${x - 24}px, ${y - 24}px)` }}
                    >
                      {emoji}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TRUST BADGES ── */}
      <section className="bg-parchment border-y border-forest-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-forest-100 text-forest-700 flex items-center justify-center shrink-0">
                  {b.icon}
                </div>
                <div>
                  <p className="font-semibold text-sm text-bark">{b.label}</p>
                  <p className="text-xs text-earth">{b.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Section>
          <motion.div variants={fadeUp} className="text-center mb-12">
            <p className="text-sage text-sm font-medium tracking-widest uppercase mb-3">Browse By Category</p>
            <h2 className="font-serif text-4xl font-bold text-forest-900">Everything Organic, All in One Place</h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <motion.a
                key={cat.label}
                variants={fadeUp}
                href="https://wholefoodsbox.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`${cat.color} border rounded-2xl p-5 text-center cursor-pointer group transition-shadow hover:shadow-md`}
              >
                <div className="text-3xl mb-3">{cat.emoji}</div>
                <p className="font-semibold text-sm text-bark mb-1">{cat.label}</p>
                <p className="text-xs text-earth">{cat.sub}</p>
                <div className="mt-3 flex items-center justify-center gap-1 text-forest-600 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Shop now <ArrowRight size={12} />
                </div>
              </motion.a>
            ))}
          </div>
        </Section>
      </section>

      {/* ── BESTSELLERS ── */}
      <section className="bg-parchment py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section>
            <motion.div variants={fadeUp} className="flex items-end justify-between mb-12">
              <div>
                <p className="text-sage text-sm font-medium tracking-widest uppercase mb-3">Customer Favourites</p>
                <h2 className="font-serif text-4xl font-bold text-forest-900">Best Sellers</h2>
              </div>
              <a
                href="https://wholefoodsbox.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 text-forest-700 font-medium text-sm hover:text-forest-500 transition-colors"
              >
                View all <ArrowRight size={16} />
              </a>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {bestsellers.map((p) => (
                <motion.a
                  key={p.name}
                  variants={fadeUp}
                  href="https://wholefoodsbox.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-cream rounded-2xl p-5 border border-forest-100 hover:border-forest-300 hover:shadow-lg transition-all group"
                >
                  <div className="text-4xl mb-4 text-center">{p.emoji}</div>
                  <span className="inline-block text-[10px] font-semibold tracking-wide bg-forest-100 text-forest-700 px-2 py-0.5 rounded-full mb-2">
                    {p.tag}
                  </span>
                  <p className="font-semibold text-sm text-bark leading-snug mb-2">{p.name}</p>
                  <p className="font-bold text-forest-700 text-base">{p.price}</p>
                  <div className="mt-3 flex items-center gap-1 text-xs text-forest-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <ShoppingBag size={12} /> Add to basket
                  </div>
                </motion.a>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* ── ABOUT BANNER ── */}
      <section className="relative bg-forest-800 overflow-hidden py-20">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #8B9D5C 0%, transparent 60%)" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <Section>
            <motion.p variants={fadeUp} className="text-sage text-sm font-medium tracking-widest uppercase mb-4">Our Story</motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl lg:text-5xl font-bold text-cream mb-6">
              London's Favourite<br />Organic Specialists
            </motion.h2>
            <motion.p variants={fadeUp} className="text-forest-200 text-lg leading-relaxed mb-4">
              We believe everyone deserves access to clean, nourishing food. Whether you're a committed vegan, a curious pescatarian, or simply someone who cares about what goes into their body — Village Organic is your home.
            </motion.p>
            <motion.p variants={fadeUp} className="text-forest-300 leading-relaxed mb-8">
              With three beautiful stores across London and our online sister store WholeFoodsBox.co.uk, we make it easier than ever to eat well and live well.
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
                className="bg-forest-700/50 border border-forest-600 rounded-2xl p-6 text-center"
              >
                <p className="font-serif text-4xl font-bold text-honey mb-1">{stat.num}</p>
                <p className="text-forest-200 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </Section>
        </div>
      </section>

      {/* ── OUR STORES ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Section>
          <motion.div variants={fadeUp} className="text-center mb-12">
            <p className="text-sage text-sm font-medium tracking-widest uppercase mb-3">Visit Us In Person</p>
            <h2 className="font-serif text-4xl font-bold text-forest-900">Our Three London Stores</h2>
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
              View store details & opening hours <ArrowRight size={16} />
            </Link>
          </motion.div>
        </Section>
      </section>

      {/* ── NEW ARRIVALS ── */}
      <section className="bg-parchment py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section>
            <motion.div variants={fadeUp} className="flex items-end justify-between mb-12">
              <div>
                <p className="text-sage text-sm font-medium tracking-widest uppercase mb-3">Just Landed</p>
                <h2 className="font-serif text-4xl font-bold text-forest-900">New Arrivals</h2>
              </div>
              <a
                href="https://wholefoodsbox.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 text-forest-700 font-medium text-sm hover:text-forest-500 transition-colors"
              >
                View all <ArrowRight size={16} />
              </a>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {newArrivals.map((p) => (
                <motion.a
                  key={p.name}
                  variants={fadeUp}
                  href="https://wholefoodsbox.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-cream border border-forest-100 rounded-2xl p-5 flex gap-4 items-start hover:border-forest-300 hover:shadow-md transition-all group"
                >
                  <div className="text-3xl shrink-0">{p.emoji}</div>
                  <div>
                    <span className="inline-block text-[10px] font-semibold tracking-wide bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full mb-1.5">New</span>
                    <p className="font-medium text-sm text-bark leading-snug mb-1">{p.name}</p>
                    <p className="font-bold text-forest-700 text-sm">{p.price}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Section>
          <motion.div
            variants={fadeUp}
            className="bg-forest-900 rounded-3xl px-8 py-14 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10"
              style={{ backgroundImage: "radial-gradient(circle at 30% 50%, #D4A853 0%, transparent 50%), radial-gradient(circle at 70% 50%, #8B9D5C 0%, transparent 50%)" }}
            />
            <div className="relative z-10">
              <p className="text-sage text-sm font-medium tracking-widest uppercase mb-3">Stay in the Loop</p>
              <h2 className="font-serif text-4xl font-bold text-cream mb-4">
                Get Organic Goodness<br />Delivered to Your Inbox
              </h2>
              <p className="text-forest-300 mb-8 max-w-lg mx-auto">
                New arrivals, seasonal picks, wellness tips, and exclusive deals — straight from our stores to you.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-forest-800 border border-forest-600 text-cream placeholder-forest-400 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-sage"
                />
                <button
                  type="submit"
                  className="bg-honey text-bark font-semibold px-6 py-3 rounded-full hover:bg-amber-400 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-forest-500 text-xs mt-4">No spam. Unsubscribe anytime.</p>
            </div>
          </motion.div>
        </Section>
      </section>

    </div>
  );
}
