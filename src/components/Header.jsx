
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import {
  Search,
  Heart,
  ShoppingCart,
  User,
  MapPin,
  Leaf,
  Home,
  LayoutGrid,
  Tag,
} from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/products" },
    { name: "Categories", path: "/category" },
    { name: "Offers", path: "/offers" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const mobileLinks = [
    {
      name: "Home",
      path: "/",
      icon: Home,
    },
    {
      name: "Category",
      path: "/category",
      icon: LayoutGrid,
    },
    {
      name: "Offers",
      path: "/offers",
      icon: Tag,
    },
    {
      name: "Cart",
      path: "/cart",
      icon: ShoppingCart,
    },
    {
      name: "Account",
      path: "/login",
      icon: User,
    },
  ];

  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    if (path === "/login") {
      return pathname === "/login" || pathname.startsWith("/profile");
    }

    return pathname === path || pathname.startsWith(path + "/");
  };

  return (
    <>
      {/* ================= HEADER ================= */}

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-md"
            : "bg-[#F8FAF5]"
        }`}
      >
        <div className="w-full px-4 lg:px-6">
          <div className="flex items-center justify-between h-20 gap-6">

            {/* LOGO */}

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

            {/* DESKTOP NAVIGATION */}

            <nav className="hidden lg:flex items-center gap-7 shrink-0">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`font-medium transition whitespace-nowrap ${
                    isActive(item.path)
                      ? "text-green-600"
                      : "text-gray-700 hover:text-green-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* DESKTOP SEARCH */}

            <div className="hidden xl:flex items-center bg-white border rounded-full px-4 py-2 flex-1 max-w-xs shadow-sm">
              <Search className="w-5 h-5 text-gray-500 shrink-0" />

              <input
                type="text"
                placeholder="Search vegetables..."
                className="w-full outline-none px-3 bg-transparent min-w-0"
              />
            </div>

            {/* DESKTOP ACTIONS */}

            <div className="hidden lg:flex items-center gap-6 shrink-0">

              <div className="flex items-center gap-1 text-gray-700">
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
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full flex items-center gap-2 transition"
              >
                <User size={18} />
                Login
              </Link>
            </div>

            {/* MOBILE LOCATION */}

            <div className="lg:hidden flex items-center gap-1 text-gray-600">
              <MapPin size={17} className="text-green-600" />
              <span className="text-xs font-medium">Mumbai</span>
            </div>

          </div>
        </div>
      </header>

      {/* ================= MOBILE BOTTOM NAVIGATION ================= */}

      <nav className="lg:hidden fixed bottom-0 left-0 w-full z-50 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">

        <div className="grid grid-cols-5 items-center h-[70px] px-2 pb-[env(safe-area-inset-bottom)]">

          {mobileLinks.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);

            return (
              <Link
                key={item.name}
                href={item.path}
                aria-label={item.name}
                aria-current={active ? "page" : undefined}
                className={`flex flex-col items-center justify-center gap-1 h-full transition-all duration-200 ${
                  active
                    ? "text-green-600"
                    : "text-gray-500 hover:text-green-600"
                }`}
              >
                <div
                  className={`relative flex items-center justify-center w-12 h-8 rounded-full transition-all ${
                    active ? "bg-green-50" : ""
                  }`}
                >
                  <Icon
                    size={22}
                    strokeWidth={active ? 2.5 : 1.8}
                  />

                  {/* CART BADGE */}

                  {item.name === "Cart" && (
                    <span className="absolute -top-1 right-0 bg-orange-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
                      0
                    </span>
                  )}
                </div>

                <span
                  className={`text-[10px] ${
                    active ? "font-bold" : "font-medium"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}

        </div>
      </nav>
    </>
  );
}
