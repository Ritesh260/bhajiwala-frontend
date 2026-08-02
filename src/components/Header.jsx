"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Search,
  Heart,
  ShoppingCart,
  User,
  MapPin,
  Leaf,
} from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/products" },
    { name: "Categories", path: "/category" },
    { name: "Offers", path: "/offers" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-md"
            : "bg-[#F8FAF5]"
        }`}
      >
        <div className="w-full px-4 lg:px-6">
          <div className="flex items-center justify-between h-20 gap-10">
            {/* Logo — flex-shrink-0 so it never gets squeezed */}
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-2xl shrink-0"
            >
              <div className="bg-green-600 p-2 rounded-xl">
                <Leaf className="text-white w-6 h-6" />
              </div>

              <span className="text-gray-900 whitespace-nowrap">
                Bhaji
                <span className="text-green-600">Wala</span>
              </span>
            </Link>

            {/* Desktop Menu — its own space, won't collide with logo */}
            <nav className="hidden lg:flex items-center gap-7 shrink-0">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="text-gray-700 font-medium hover:text-green-600 transition whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Search — flexes to fill remaining space instead of a fixed width fighting everything else */}
            <div className="hidden xl:flex items-center bg-white border rounded-full px-4 py-2 flex-1 max-w-xs shadow-sm">
              <Search className="w-5 h-5 text-gray-500 shrink-0" />
              <input
                type="text"
                placeholder="Search vegetables..."
                className="w-full outline-none px-3 bg-transparent min-w-0"
              />
            </div>

            {/* Right side — locked to its own group with consistent gaps */}
            <div className="hidden lg:flex items-center gap-6 shrink-0">
              <div className="flex items-center gap-1 text-gray-700 whitespace-nowrap">
                <MapPin className="w-5 h-5 text-green-600" />
                <span className="text-sm">Mumbai</span>
              </div>

              <button
                aria-label="Wishlist"
                className="hover:text-green-600 transition"
              >
                <Heart />
              </button>

              <Link
  href="/cart"
  aria-label="Cart"
  className="hover:text-green-600 transition relative"
>
  <ShoppingCart />

  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
    0
  </span>
</Link>

              <Link
  href="/login"
  className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full flex items-center gap-2 transition whitespace-nowrap"
>
  <User size={18} />
  Login
</Link>
            </div>

            {/* Mobile actions: cart first, then menu */}
            <div className="flex items-center gap-3 lg:hidden shrink-0">
              <Link
                href="/cart"
                aria-label="Cart"
                className="relative text-gray-700 hover:text-green-600 transition"
              >
                <ShoppingCart size={24} />
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </Link>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="shrink-0"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={30} /> : <Menu size={30} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-20 left-0 w-full bg-white shadow-xl transition-all duration-300 lg:hidden z-40 ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-6 gap-5">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setMenuOpen(false)}
              className="font-medium text-gray-700 hover:text-green-600"
            >
              {item.name}
            </Link>
          ))}

          <Link
  href="/login"
  onClick={() => setMenuOpen(false)}
  className="bg-green-600 hover:bg-green-700 text-white text-center rounded-xl py-3 mt-2 transition"
>
  Login
</Link>
        </div>
      </div>
    </>
  );
}