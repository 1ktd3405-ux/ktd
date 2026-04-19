"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
    label: "Fresh Foods",
    sub: "Seasonal produce, exotic fruits and locally sourced vegetables",
    img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80",
    subcats: ["Fresh Fruits", "Fresh Vegetables", "Exotic Fruits"],
    href: "https://wholefoodsbox.co.uk/collections/fresh-foods",
    accent: "from-green-900/70",
  },
  {
    id: "chilled",
    label: "Chilled Foods",
    sub: "Fresh dairy, organic meat, kefir and ready-to-eat meals",
    img: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=800&q=80",
    subcats: ["Meat, Poultry & Fish", "Milk, Butter & Cheese", "Yogurt & Desserts", "Kefir & Kombucha", "Plant-based Alternatives", "Ready Meals"],
    href: "https://wholefoodsbox.co.uk/collections/chilled-foods",
    accent: "from-blue-900/70",
  },
  {
    id: "frozen",
    label: "Frozen Foods",
    sub: "Ice creams, frozen meals and plant-based frozen options",
    img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80",
    subcats: ["Ice Cream", "Desserts & Pastry", "Frozen Vegetables", "Frozen Ready Meals", "Frozen Pizza & Breads"],
    href: "https://wholefoodsbox.co.uk/collections/frozen-foods",
    accent: "from-cyan-900/70",
  },
  {
    id: "cupboard",
    label: "Food Cupboard",
    sub: "Pantry essentials, snacks, cereals and baking ingredients",
    img: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?w=800&q=80",
    subcats: ["Grains & Pulses", "Pasta, Rice & Couscous", "Tinned Foods", "Nuts, Seeds & Dried Fruit", "Chocolates & Sweets", "Cereals & Oats"],
    href: "https://wholefoodsbox.co.uk/collections/food-drink",
    accent: "from-amber-900/70",
  },
  {
    id: "health",
    label: "Health & Wellbeing",
    sub: "Supplements, vitamins and natural wellness products",
    img: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=800&q=80",
    subcats: ["Supplements", "Bath Salts", "Creams & Lotions"],
    href: "https://wholefoodsbox.co.uk/collections/health-beauty",
    accent: "from-emerald-900/70",
  },
  {
    id: "beauty",
    label: "Beauty & Personal Care",
    sub: "Natural and organic skincare, haircare and dental products",
    img: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&q=80",
    subcats: ["Hair Care", "Skin Care", "Hand & Body Care", "Dental Care", "Feminine Care", "Men's Grooming"],
    href: "https://wholefoodsbox.co.uk/collections/beauty-personal-care",
    accent: "from-rose-900/70",
  },
  {
    id: "household",
    label: "Household & Pets",
    sub: "Eco-friendly cleaning and natural pet care products",
    img: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80",
    subcats: ["Cleaning", "Kitchen", "Washing Up", "Laundry", "Bathroom", "Pets"],
    href: "https://wholefoodsbox.co.uk/collections/household-pets",
    accent: "from-orange-900/70",
  },
  {
    id: "baby",
    label: "Baby & Parent",
    sub: "Organic formula, natural snacks and gentle baby care",
    img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
    subcats: ["Formula Milk", "Snacks", "Nappies & Wipes"],
    href: "https://wholefoodsbox.co.uk/collections/baby-parent-kids",
    accent: "from-purple-900/70",
  },
  {
    id: "beverages",
    label: "Beverages",
    sub: "Organic teas, coffees, juices and health drinks",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    subcats: ["Tea", "Coffee", "Hot Chocolate", "Juices", "Health Drinks", "Soft Drinks"],
    href: "https://wholefoodsbox.co.uk/collections/soft-drinks-teas-coffee",
    accent: "from-yellow-900/70",
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-cream">

      {/* Hero */}
      <section className="relative bg-forest-900 pt-24 pb-36 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600&q=85"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          aria-hidden="true"
        />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-cream to-transparent" />
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
          <motion.div variants={fadeUp} className="text-center mb-14">
            <p className="text-sage text-sm font-medium tracking-widest uppercase mb-3">Browse</p>
            <h2 className="font-serif text-4xl font-bold text-forest-900">Shop By Category</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <motion.a
                key={cat.id}
                variants={fadeUp}
                href={cat.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260 }}
                className="group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={cat.img}
                    alt={cat.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${cat.accent} via-transparent to-transparent`} />
                </div>

                {/* Content */}
                <div className="bg-cream border border-t-0 border-forest-100 group-hover:border-forest-200 rounded-b-3xl p-5 transition-colors">
                  <h3 className="font-serif font-bold text-lg text-forest-900 mb-1">{cat.label}</h3>
                  <p className="text-earth text-sm mb-4 leading-relaxed">{cat.sub}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cat.subcats.slice(0, 4).map((s) => (
                      <span key={s} className="text-[11px] bg-forest-50 text-forest-700 px-2.5 py-0.5 rounded-full border border-forest-100">
                        {s}
                      </span>
                    ))}
                    {cat.subcats.length > 4 && (
                      <span className="text-[11px] text-earth px-2 py-0.5">+{cat.subcats.length - 4} more</span>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 text-forest-600 text-sm font-medium group-hover:text-forest-800 transition-colors">
                    Shop now <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Bottom CTA */}
      <section className="bg-parchment py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Reveal>
            <motion.div variants={fadeUp}>
              <p className="text-sage text-sm font-medium tracking-widest uppercase mb-4">Online Shopping</p>
              <h2 className="font-serif text-3xl font-bold text-forest-900 mb-4">
                Full range available at WholeFoodsBox
              </h2>
              <p className="text-earth mb-8">
                Browse hundreds of products, place your order, and get free delivery on orders over £60 anywhere in the UK.
              </p>
              <a
                href="https://wholefoodsbox.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-forest-700 text-cream font-semibold px-7 py-3.5 rounded-full hover:bg-forest-600 transition-colors"
              >
                <ShoppingBag size={16} />
                Visit WholeFoodsBox.co.uk
                <ExternalLink size={14} />
              </a>
            </motion.div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
