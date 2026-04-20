"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ShoppingBag, Leaf } from "lucide-react";

const LOGO_URL = "https://res.cloudinary.com/dttc5xk1h/image/upload/v1776608184/ChatGPT_Image_Apr_19_2026_05_07_54_PM_gsa8fh.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/stores", label: "Our Stores" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-forest-700 text-cream text-xs py-2 px-4 text-center font-sans tracking-wide">
        <span className="flex items-center justify-center gap-2">
          <Leaf size={12} className="text-sage" />
          Free delivery on orders over £60 · Shop online at{" "}
          <a
            href="https://wholefoodsbox.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-honey transition-colors"
          >
            WholeFoodsBox.co.uk
          </a>
          <Leaf size={12} className="text-sage" />
        </span>
      </div>

      {/* Main navbar */}
      <motion.nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md shadow-sm border-b border-forest-100"
            : "bg-cream"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {LOGO_URL ? (
              <Image
                src={LOGO_URL}
                alt="Village Organic"
                width={60}
                height={60}
                className="rounded-full object-contain w-11 h-11 md:w-[60px] md:h-[60px]"
                unoptimized
              />
            ) : (
              <div className="w-11 h-11 md:w-[60px] md:h-[60px] rounded-full bg-forest-700 flex items-center justify-center">
                <Leaf size={22} className="text-cream" />
              </div>
            )}
            <span className="font-serif font-bold text-lg md:text-xl text-forest-800 leading-none">
              Village Organic
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-bark hover:text-forest-600 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-forest-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-3">
            <a
              href="tel:02089858008"
              className="hidden lg:flex items-center gap-1.5 text-xs text-bark hover:text-forest-700 transition-colors"
            >
              <Phone size={13} />
              <span>020 8985 8008</span>
            </a>
            <a
              href="https://wholefoodsbox.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-forest-700 text-cream text-sm font-medium px-4 py-2 rounded-full hover:bg-forest-600 transition-colors"
            >
              <ShoppingBag size={14} />
              Shop Online
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-bark hover:text-forest-700 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-cream border-b border-forest-100 overflow-hidden z-40 sticky top-16"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-bark hover:text-forest-600 transition-colors py-1"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wholefoodsbox.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-forest-700 text-cream text-sm font-medium px-4 py-3 rounded-full hover:bg-forest-600 transition-colors mt-2"
              >
                <ShoppingBag size={14} />
                Shop Online at WholeFoodsBox
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
