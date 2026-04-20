import Link from "next/link";
import { MapPin, Phone, Mail, Share2, Globe } from "lucide-react";

const LOGO_URL = "https://res.cloudinary.com/dttc5xk1h/image/upload/v1776608184/ChatGPT_Image_Apr_19_2026_05_07_54_PM_gsa8fh.png";

const stores = [
  { name: "Victoria Park", address: "91 Lauriston Road, London E9 7HJ" },
  { name: "Clapham Common", address: "9 The Pavement, London SW4 0HY" },
  { name: "Caledonian Road", address: "210 Caledonian Road, London N1 0SQ" },
];

const categories = [
  "Fresh Fruits & Vegetables",
  "Chilled & Dairy",
  "Frozen Foods",
  "Food Cupboard",
  "Health & Supplements",
  "Beauty & Personal Care",
  "Household & Pets",
  "Baby & Parent",
];

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-cream">
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={LOGO_URL}
                alt="Village Organic"
                className="w-12 h-12 rounded-full object-contain"
              />
              <span className="font-serif font-bold text-xl leading-none">
                Village Organic
              </span>
            </div>
            <p className="text-sm text-forest-200 leading-relaxed mb-6">
              Whether you're flirting with the idea of getting healthy or you're a master — we are sure to have what you're looking for.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-forest-700 flex items-center justify-center hover:bg-forest-600 transition-colors"
                aria-label="Instagram"
              >
                <Share2 size={14} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-forest-700 flex items-center justify-center hover:bg-forest-600 transition-colors"
                aria-label="Facebook"
              >
                <Globe size={14} />
              </a>
            </div>
          </div>

          {/* Our Stores */}
          <div>
            <h4 className="font-serif font-semibold text-base mb-5 text-honey">Our Stores</h4>
            <div className="flex flex-col gap-4">
              {stores.map((store) => (
                <div key={store.name} className="flex gap-2.5">
                  <MapPin size={14} className="text-sage mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium">{store.name}</p>
                    <p className="text-xs text-forest-300">{store.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-serif font-semibold text-base mb-5 text-honey">Shop By Category</h4>
            <ul className="flex flex-col gap-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <a
                    href="https://wholefoodsbox.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-forest-200 hover:text-sage transition-colors"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Links */}
          <div>
            <h4 className="font-serif font-semibold text-base mb-5 text-honey">Get In Touch</h4>
            <div className="flex flex-col gap-3 mb-6">
              <a
                href="tel:02089858008"
                className="flex items-center gap-2.5 text-sm text-forest-200 hover:text-sage transition-colors"
              >
                <Phone size={13} />
                020 8985 8008
              </a>
              <a
                href="mailto:info@villageorganic.co.uk"
                className="flex items-center gap-2.5 text-sm text-forest-200 hover:text-sage transition-colors"
              >
                <Mail size={13} />
                info@villageorganic.co.uk
              </a>
            </div>
            <h4 className="font-serif font-semibold text-base mb-4 text-honey">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Stores", href: "/stores" },
                { label: "All Products", href: "/products" },
                { label: "Contact", href: "/contact" },
                { label: "Shop Online →", href: "https://wholefoodsbox.co.uk", external: true },
              ].map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-forest-200 hover:text-sage transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-forest-200 hover:text-sage transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-forest-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-forest-400">
          <p>© {new Date().getFullYear()} Village Organic. All rights reserved.</p>
          <p>
            Online shop:{" "}
            <a
              href="https://wholefoodsbox.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage hover:text-forest-200 transition-colors"
            >
              WholeFoodsBox.co.uk
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
