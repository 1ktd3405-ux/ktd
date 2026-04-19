"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Leaf, Heart, Sprout, Users, ArrowRight, ShoppingBag } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
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

const values = [
  {
    icon: <Leaf size={24} />,
    title: "100% Certified Organic",
    desc: "Every product on our shelves meets strict organic certification standards. No shortcuts, no compromises.",
  },
  {
    icon: <Heart size={24} />,
    title: "All Diets, All People",
    desc: "Vegan, vegetarian, pescatarian, fruitarian, or carnivore — we stock something exceptional for everyone.",
  },
  {
    icon: <Sprout size={24} />,
    title: "Sustainably Sourced",
    desc: "We partner with farmers and producers who share our commitment to the planet and future generations.",
  },
  {
    icon: <Users size={24} />,
    title: "Community First",
    desc: "Our stores are neighbourhood hubs — places to discover, ask questions, and feel genuinely welcomed.",
  },
];

const diets = [
  { label: "Vegan", emoji: "🌱" },
  { label: "Vegetarian", emoji: "🥦" },
  { label: "Pescatarian", emoji: "🐟" },
  { label: "Fruitarian", emoji: "🍓" },
  { label: "Carnivore", emoji: "🥩" },
  { label: "Gluten-Free", emoji: "🌾" },
];

export default function AboutPage() {
  return (
    <div className="bg-cream">
      {/* Hero */}
      <section className="bg-forest-900 pt-20 pb-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 20% 60%, #8B9D5C 0%, transparent 50%), radial-gradient(circle at 80% 30%, #D4A853 0%, transparent 40%)" }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sage text-sm font-medium tracking-widest uppercase mb-4"
          >
            Who We Are
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-forest-200 text-xl leading-relaxed"
          >
            Born from a passion for wholesome living and a belief that everyone deserves access to real, nourishing food.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <motion.p variants={fadeUp} className="text-sage text-sm font-medium tracking-widest uppercase mb-4">The Village Organic Story</motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl font-bold text-forest-900 mb-6">
              Your Home for Organic Living
            </motion.h2>
            <motion.p variants={fadeUp} className="text-earth leading-relaxed mb-4 text-lg">
              Village Organic started with a simple idea: that eating well shouldn't be complicated, exclusive, or joyless. We wanted to create spaces where people could discover organic food in a warm, welcoming environment — staffed by people who actually know what they're talking about.
            </motion.p>
            <motion.p variants={fadeUp} className="text-earth leading-relaxed mb-4">
              Today, we operate three beautiful stores across London — in Victoria Park, Clapham Common, and Caledonian Road — each one a neighbourhood institution in its own right. Our shelves are stocked with fresh produce, chilled goods, pantry staples, health supplements, natural beauty products, and so much more.
            </motion.p>
            <motion.p variants={fadeUp} className="text-earth leading-relaxed mb-8">
              And for those who can't make it in person, our online sister store — <a href="https://wholefoodsbox.co.uk" target="_blank" rel="noopener noreferrer" className="text-forest-700 font-medium underline underline-offset-2 hover:text-forest-500">WholeFoodsBox.co.uk</a> — brings the full Village Organic experience to your door, with free delivery on orders over £60.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/stores"
                className="inline-flex items-center gap-2 bg-forest-700 text-cream font-medium px-6 py-3 rounded-full hover:bg-forest-600 transition-colors"
              >
                Visit Our Stores <ArrowRight size={16} />
              </Link>
            </motion.div>
          </Reveal>

          {/* Visual */}
          <Reveal>
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
              {[
                { emoji: "🥬", label: "Fresh Produce", bg: "bg-forest-100" },
                { emoji: "🌿", label: "Natural Beauty", bg: "bg-emerald-100" },
                { emoji: "🥛", label: "Organic Dairy", bg: "bg-amber-100" },
                { emoji: "💊", label: "Supplements", bg: "bg-blue-100" },
              ].map((item) => (
                <div key={item.label} className={`${item.bg} rounded-2xl p-8 text-center`}>
                  <div className="text-5xl mb-3">{item.emoji}</div>
                  <p className="font-semibold text-sm text-bark">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-parchment py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-sage text-sm font-medium tracking-widest uppercase mb-3">What Drives Us</p>
              <h2 className="font-serif text-4xl font-bold text-forest-900">Our Values</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => (
                <motion.div key={v.title} variants={fadeUp} className="bg-cream rounded-2xl p-7 border border-forest-100">
                  <div className="w-11 h-11 bg-forest-100 text-forest-700 rounded-xl flex items-center justify-center mb-5">
                    {v.icon}
                  </div>
                  <h3 className="font-serif font-bold text-lg text-forest-900 mb-3">{v.title}</h3>
                  <p className="text-earth text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Diets */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Reveal>
          <motion.div variants={fadeUp} className="text-center mb-12">
            <p className="text-sage text-sm font-medium tracking-widest uppercase mb-3">Inclusive by Design</p>
            <h2 className="font-serif text-4xl font-bold text-forest-900">We Cater to Every Diet</h2>
            <p className="text-earth mt-4 max-w-xl mx-auto">
              No matter how you eat, we have something for you. Our range spans every dietary preference, from plant-based to paleo.
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {diets.map((d) => (
              <motion.div
                key={d.label}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2.5 bg-parchment border border-forest-100 rounded-full px-5 py-3"
              >
                <span className="text-xl">{d.emoji}</span>
                <span className="font-medium text-bark text-sm">{d.label}</span>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Sister store CTA */}
      <section className="bg-forest-800 py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Reveal>
            <motion.p variants={fadeUp} className="text-sage text-sm font-medium tracking-widest uppercase mb-4">Shop Without Leaving Home</motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl font-bold text-cream mb-6">
              Meet WholeFoodsBox
            </motion.h2>
            <motion.p variants={fadeUp} className="text-forest-200 text-lg leading-relaxed mb-8">
              Our online sister store brings the full Village Organic range to your door. Browse hundreds of organic products and enjoy free delivery on orders over £60.
            </motion.p>
            <motion.a
              variants={fadeUp}
              href="https://wholefoodsbox.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-honey text-bark font-semibold px-8 py-4 rounded-full hover:bg-amber-400 transition-colors"
            >
              <ShoppingBag size={18} />
              Visit WholeFoodsBox.co.uk
            </motion.a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
