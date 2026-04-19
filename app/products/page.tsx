"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, ShoppingBag, ExternalLink } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>
      {children}
    </motion.div>
  );
}

const categories = [
  {
    id: "fresh",
    emoji: "🥬",
    label: "Fresh Foods",
    color: "bg-green-50 border-green-200 text-green-800",
    dot: "bg-green-500",
    subcats: ["Fresh Fruits", "Fresh Vegetables", "Exotic Fruits"],
  },
  {
    id: "chilled",
    emoji: "❄️",
    label: "Chilled Foods",
    color: "bg-blue-50 border-blue-200 text-blue-800",
    dot: "bg-blue-500",
    subcats: [
      "Meat, Poultry & Fish",
      "Milk, Butter & Cheese",
      "Yogurt, Cream & Desserts",
      "Kefir & Kombucha",
      "Plant-based / Dairy Alternatives",
      "Juice & Health Shots",
      "Ready Meals",
      "Dips & Tapas",
      "Chilled Soups",
    ],
  },
  {
    id: "frozen",
    emoji: "🧊",
    label: "Frozen Foods",
    color: "bg-cyan-50 border-cyan-200 text-cyan-800",
    dot: "bg-cyan-500",
    subcats: [
      "Ice Cream",
      "Desserts & Pastry",
      "Frozen Fruits & Vegetables",
      "Frozen Plant-Based",
      "Frozen Ready Meals",
      "Frozen Pizza, Bases & Breads",
      "Fries, Nuggets & Oven Food",
    ],
  },
  {
    id: "cupboard",
    emoji: "🥫",
    label: "Food Cupboard",
    color: "bg-amber-50 border-amber-200 text-amber-800",
    dot: "bg-amber-500",
    subcats: [
      "Condiments, Sauces & Dips",
      "Spreads & Preserves",
      "Grains & Pulses",
      "Pasta, Rice & Couscous",
      "Tinned Foods",
      "Flour & Baking",
      "Nuts, Seeds & Dried Fruit",
      "Chocolates & Sweets",
      "Crisps & Snacks",
      "Biscuits & Crackers",
      "Cereals, Muesli & Oats",
      "Cooking Oils & Vinegar",
      "Herbs, Spices & Seasoning",
      "Meal Kits",
    ],
  },
  {
    id: "health",
    emoji: "💊",
    label: "Health & Wellbeing",
    color: "bg-emerald-50 border-emerald-200 text-emerald-800",
    dot: "bg-emerald-500",
    subcats: ["Supplements", "Bath Salts", "Creams & Lotions"],
  },
  {
    id: "beauty",
    emoji: "💅",
    label: "Beauty & Personal Care",
    color: "bg-rose-50 border-rose-200 text-rose-800",
    dot: "bg-rose-500",
    subcats: [
      "Hair Care",
      "Skin Care",
      "Eyes, Nose & Ear Care",
      "Hand & Body Care",
      "Dental Care",
      "Feminine Care",
      "Men's Grooming",
      "Sun Care",
    ],
  },
  {
    id: "household",
    emoji: "🏠",
    label: "Household & Pets",
    color: "bg-orange-50 border-orange-200 text-orange-800",
    dot: "bg-orange-500",
    subcats: [
      "Cleaning",
      "Kitchen",
      "Washing Up",
      "Hand Soap",
      "Laundry",
      "Bathroom",
      "Home Fragrance",
      "Pets",
    ],
  },
  {
    id: "baby",
    emoji: "🍼",
    label: "Baby & Parent",
    color: "bg-purple-50 border-purple-200 text-purple-800",
    dot: "bg-purple-500",
    subcats: ["Formula Milk", "Snacks", "Nappies & Wipes"],
  },
  {
    id: "beverages",
    emoji: "☕",
    label: "Beverages",
    color: "bg-yellow-50 border-yellow-200 text-yellow-800",
    dot: "bg-yellow-600",
    subcats: [
      "Tea",
      "Coffee",
      "Hot Chocolate",
      "Coffee Alternatives",
      "Juices",
      "Health Drinks",
      "Alcohol-Free Beverages",
      "Soft Drinks",
    ],
  },
];

const featured = [
  { name: "Purple Potatoes", price: "£6.99", emoji: "🥔", tag: "Fresh", cat: "fresh" },
  { name: "Organic Bilberries 300g ×2", price: "£19.66", emoji: "🫐", tag: "Popular", cat: "fresh" },
  { name: "Lychee 250g", price: "£4.99", emoji: "🍈", tag: "Exotic", cat: "fresh" },
  { name: "Organic Sour Cherries 300g ×2", price: "£17.20", emoji: "🍒", tag: "Fresh", cat: "fresh" },
  { name: "Organic Steel Cut Oats 500g", price: "£2.29", emoji: "🌾", tag: "Cupboard", cat: "cupboard" },
  { name: "Coconut Milk Kefir 500ml", price: "£5.40", emoji: "🥥", tag: "Chilled", cat: "chilled" },
  { name: "Coconut Milk Yoghurt 1kg", price: "£13.39", emoji: "🥛", tag: "Chilled", cat: "chilled" },
  { name: "Sprouted Broccoli 100g", price: "£3.68", emoji: "🥦", tag: "Health", cat: "health" },
  { name: "Green People Light Moisturiser 50ml", price: "£27.09", emoji: "🌿", tag: "Beauty", cat: "beauty" },
  { name: "Green People Eye Cream 10ml", price: "£20.09", emoji: "✨", tag: "Beauty", cat: "beauty" },
  { name: "Wild Aqua Antiperspirant Roll On", price: "£12.99", emoji: "💧", tag: "Beauty", cat: "beauty" },
  { name: "Children Spearmint Toothpaste", price: "£6.79", emoji: "🪥", tag: "Baby", cat: "baby" },
];

export default function ProductsPage() {
  const [active, setActive] = useState<string | null>(null);

  const filtered = active ? featured.filter((p) => p.cat === active) : featured;

  return (
    <div className="bg-cream">
      {/* Hero */}
      <section className="bg-forest-900 pt-20 pb-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 60% 30%, #D4A853 0%, transparent 40%), radial-gradient(circle at 20% 70%, #8B9D5C 0%, transparent 50%)",
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sage text-sm font-medium tracking-widest uppercase mb-4"
          >
            Our Range
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6"
          >
            All Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-forest-200 text-xl leading-relaxed mb-8"
          >
            Hundreds of certified organic products across every category — from fresh produce to natural beauty.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            href="https://wholefoodsbox.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-honey text-bark font-semibold px-7 py-4 rounded-full hover:bg-amber-400 transition-colors"
          >
            <ShoppingBag size={18} />
            Shop Full Range at WholeFoodsBox
            <ExternalLink size={14} />
          </motion.a>
        </div>
      </section>

      {/* Categories grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Reveal>
          <motion.div variants={fadeUp} className="text-center mb-12">
            <p className="text-sage text-sm font-medium tracking-widest uppercase mb-3">Browse</p>
            <h2 className="font-serif text-4xl font-bold text-forest-900">Shop By Category</h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <motion.a
                key={cat.id}
                variants={fadeUp}
                href="https://wholefoodsbox.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 260 }}
                className={`${cat.color} border rounded-2xl p-6 group cursor-pointer hover:shadow-lg transition-shadow`}
              >
                <div className="text-4xl mb-4">{cat.emoji}</div>
                <h3 className="font-serif font-bold text-base mb-3">{cat.label}</h3>
                <ul className="flex flex-col gap-1 mb-4">
                  {cat.subcats.slice(0, 4).map((s) => (
                    <li key={s} className="text-xs opacity-70 flex items-center gap-1.5">
                      <div className={`w-1 h-1 rounded-full ${cat.dot} opacity-70`} />
                      {s}
                    </li>
                  ))}
                  {cat.subcats.length > 4 && (
                    <li className="text-xs opacity-50">+{cat.subcats.length - 4} more</li>
                  )}
                </ul>
                <div className="flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Shop now <ArrowRight size={12} />
                </div>
              </motion.a>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Featured products */}
      <section className="bg-parchment py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <p className="text-sage text-sm font-medium tracking-widest uppercase mb-3">Highlights</p>
              <h2 className="font-serif text-4xl font-bold text-forest-900 mb-6">Featured Products</h2>

              {/* Filter tabs */}
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  onClick={() => setActive(null)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    active === null
                      ? "bg-forest-700 text-cream"
                      : "bg-cream border border-forest-200 text-bark hover:border-forest-400"
                  }`}
                >
                  All
                </button>
                {categories.filter((c) => featured.some((f) => f.cat === c.id)).map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActive(cat.id)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                      active === cat.id
                        ? "bg-forest-700 text-cream"
                        : "bg-cream border border-forest-200 text-bark hover:border-forest-400"
                    }`}
                  >
                    {cat.emoji} {cat.label}
                  </button>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {filtered.map((p) => (
                <motion.a
                  key={p.name}
                  layout
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
                    <ShoppingBag size={12} /> Buy at WholeFoodsBox
                  </div>
                </motion.a>
              ))}
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal className="mt-12 text-center">
            <motion.div variants={fadeUp}>
              <p className="text-earth mb-4 text-sm">Showing a selection — hundreds more available online</p>
              <a
                href="https://wholefoodsbox.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-forest-700 text-cream font-semibold px-7 py-3.5 rounded-full hover:bg-forest-600 transition-colors"
              >
                <ShoppingBag size={16} />
                Shop Full Range at WholeFoodsBox.co.uk
                <ExternalLink size={14} />
              </a>
            </motion.div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
