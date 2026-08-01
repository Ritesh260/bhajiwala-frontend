import Link from "next/link";
import { Leaf, Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white mt-24">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-3 mb-5">

              <div className="bg-green-600 p-3 rounded-xl">
                <Leaf className="w-6 h-6 text-white" />
              </div>

              <h2 className="text-3xl font-bold">
                Bhaji
                <span className="text-green-500">
                  Wala
                </span>
              </h2>

            </div>

            <p className="text-gray-400 leading-7">
              Fresh vegetables delivered directly from trusted farms to your home with quality you can trust every day.
            </p>

           <div className="flex gap-4 mt-6">

  <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 rounded-full bg-white/10 hover:bg-green-600 transition-all duration-300 flex items-center justify-center hover:-translate-y-1"
  >
    <FaFacebookF size={18} />
  </a>

  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 rounded-full bg-white/10 hover:bg-green-600 transition-all duration-300 flex items-center justify-center hover:-translate-y-1"
  >
    <FaInstagram size={18} />
  </a>

  <a
    href="https://wa.me/919876543210"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 rounded-full bg-white/10 hover:bg-green-600 transition-all duration-300 flex items-center justify-center hover:-translate-y-1"
  >
    <FaWhatsapp size={18} />
  </a>

</div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">

              <Link href="/">Home</Link>

              <Link href="/products">Shop</Link>

              <Link href="/category">Categories</Link>

              <Link href="/offers">Offers</Link>

              <Link href="/about">About</Link>

              <Link href="/contact">Contact</Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-5 text-gray-400">

              <div className="flex gap-3">

                <MapPin className="text-green-500" size={20} />

                <p>
                  Andheri East,
                  <br />
                  Mumbai, Maharashtra
                </p>

              </div>

              <div className="flex gap-3">

                <Phone className="text-green-500" size={20} />

                <p>
                  +91 98765 43210
                </p>

              </div>

              <div className="flex gap-3">

                <Mail className="text-green-500" size={20} />

                <p>
                  support@bhajiwala.com
                </p>

              </div>

            </div>

          </div>

          {/* Newsletter */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Newsletter
            </h3>

            <p className="text-gray-400 mb-5">
              Subscribe to receive fresh offers and daily vegetable updates.
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 outline-none focus:border-green-500"
            />

            <button className="mt-4 w-full bg-green-600 hover:bg-green-700 rounded-xl py-3 font-semibold transition">
              Subscribe
            </button>

          </div>

        </div>

        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-sm">
            © 2026 BhajiWala. All Rights Reserved.
          </p>

          <p className="text-gray-400 text-sm">
            Design & Developed By Ritesh Mali
          </p>

        </div>

      </div>

    </footer>
  );
}