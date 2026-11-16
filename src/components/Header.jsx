
"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";

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
  LogOut,
  ChevronDown,
  Clock,
} from "lucide-react";

import { useAuth } from "@/context/AuthContext";
import { getCart } from "@/api/cart_apis";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [cartCount, setCartCount] = useState(0);

  const pathname = usePathname();
  const router = useRouter();

  const { user, loading, isAuthenticated, logout } = useAuth();

  // ==========================================
  // FETCH CART COUNT
  // ==========================================

  
const fetchCartCount = useCallback(async () => {
  try {
    if (!isAuthenticated) {
      setCartCount(0);
      return;
    }

    const response = await getCart();

    const cartData =
      response?.cart ||
      response?.data?.cart ||
      response?.data ||
      response;

    const items = cartData?.items || [];

    // Count different products in cart
    setCartCount(items.length);

  } catch (error) {
    console.error("Cart count error:", error);
  }
}, [isAuthenticated]);


  // ==========================================
  // CART COUNT EFFECT
  // ==========================================

  useEffect(() => {
    if (loading) return;

    if (!isAuthenticated) {
      setCartCount(0);
      return;
    }

    fetchCartCount();

    const handleCartUpdate = () => {
      fetchCartCount();
    };

    window.addEventListener(
      "cartUpdated",
      handleCartUpdate
    );

    return () => {
      window.removeEventListener(
        "cartUpdated",
        handleCartUpdate
      );
    };
  }, [loading, isAuthenticated, fetchCartCount]);

  // ==========================================
  // SCROLL EFFECT
  // ==========================================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ==========================================
  // NAVIGATION LINKS
  // ==========================================

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/products" },
    { name: "Categories", path: "/category" },
    { name: "Offers", path: "/offers" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const mobileLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "Category", path: "/category", icon: LayoutGrid },
    { name: "Offers", path: "/offers", icon: Tag },
    { name: "Cart", path: "/cart", icon: ShoppingCart },
    {
      name: "Account",
      path: isAuthenticated ? "/profile" : "/login",
      icon: User,
    },
  ];

  // ==========================================
  // ACTIVE LINK
  // ==========================================

  const isActive = (path) => {
    if (path === "/") return pathname === "/";

    if (path === "/login" || path === "/profile") {
      return (
        pathname === "/login" ||
        pathname.startsWith("/profile")
      );
    }

    return (
      pathname === path ||
      pathname.startsWith(path + "/")
    );
  };

  // ==========================================
  // LOGOUT
  // ==========================================

  const handleLogout = () => {
    logout();
    setCartCount(0);
    router.push("/login");
  };

  // ==========================================
  // SEARCH
  // ==========================================

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchValue.trim()) {
      router.push(
        `/products?search=${encodeURIComponent(
          searchValue.trim()
        )}`
      );
    }
  };

  // ==========================================
  // CART BADGE
  // ==========================================

  const displayCartCount =
    cartCount > 99 ? "99+" : cartCount;

  // ==========================================
  // RENDER
  // ==========================================

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

          {/* ================= MOBILE HEADER ================= */}

          <div className="lg:hidden py-3 space-y-3">

            {/* LOCATION + ACCOUNT */}

            <div className="flex items-center justify-between">

              <Link href="/" className="flex items-center gap-3">

                <div className="bg-green-600 p-2 rounded-xl">
                  <Leaf className="text-white w-6 h-6" />
                </div>

                <div className="min-w-0">

                  <h2 className="font-extrabold text-gray-900 text-lg">
                    Bhaji<span className="text-green-600">Wala</span>
                  </h2>

                  <div className="flex items-center gap-1 text-gray-500">
                    <MapPin size={12} className="text-green-600" />

                    <span className="text-[11px] font-medium">
                      Delivering to Mumbai
                    </span>

                    <ChevronDown size={13} />
                  </div>

                </div>

              </Link>

              <div className="flex items-center gap-2">

                {isAuthenticated && !loading && (
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="text-gray-500 p-2"
                    aria-label="Logout"
                    title="Logout"
                  >
                    <LogOut size={19} />
                  </button>
                )}

                <Link
                  href={isAuthenticated ? "/profile" : "/login"}
                  className="w-10 h-10 rounded-full bg-green-50 border border-green-100 flex items-center justify-center"
                  aria-label="Account"
                >
                  <User
                    size={21}
                    className="text-green-700"
                  />
                </Link>

              </div>

            </div>

            {/* DELIVERY TIME */}

            <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-600">
              <Clock size={14} className="text-green-600" />

              <span>
                Fresh vegetables at your doorstep
              </span>
            </div>

            {/* MOBILE SEARCH */}

            <form
              onSubmit={handleSearch}
              className="relative"
            >
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />

              <input
                type="search"
                value={searchValue}
                onChange={(e) =>
                  setSearchValue(e.target.value)
                }
                placeholder="Search for vegetables, fruits..."
                className="w-full h-12 pl-12 pr-4 rounded-xl bg-white border border-gray-200 outline-none focus:border-green-500 text-sm shadow-sm"
              />
            </form>

          </div>

          {/* ================= DESKTOP HEADER ================= */}

          <div className="hidden lg:flex items-center justify-between h-20 gap-6">

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

            <nav className="flex items-center gap-7 shrink-0">

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

            <form
              onSubmit={handleSearch}
              className="hidden xl:flex items-center bg-white border rounded-full px-4 py-2 flex-1 max-w-xs shadow-sm"
            >
              <Search className="w-5 h-5 text-gray-500 shrink-0" />

              <input
                type="search"
                value={searchValue}
                onChange={(e) =>
                  setSearchValue(e.target.value)
                }
                placeholder="Search vegetables..."
                className="w-full outline-none px-3 bg-transparent min-w-0"
              />
            </form>

            {/* DESKTOP ACTIONS */}

            <div className="flex items-center gap-6 shrink-0">

              <div className="flex items-center gap-1 text-gray-700">
                <MapPin className="w-5 h-5 text-green-600" />

                <span className="text-sm">
                  Mumbai
                </span>
              </div>

              {/* WISHLIST */}

              <Link
                href="/wishlist"
                aria-label="Wishlist"
                className="hover:text-green-600 transition"
              >
                <Heart />
              </Link>

              {/* CART */}

              <Link
                href="/cart"
                aria-label="Cart"
                className="hover:text-green-600 transition relative"
              >
                <ShoppingCart />

                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] min-w-5 h-5 px-1 rounded-full flex items-center justify-center">
                    {displayCartCount}
                  </span>
                )}
              </Link>

              {/* ACCOUNT */}

              {!loading && (
                <>
                  {isAuthenticated ? (
                    <div className="flex items-center gap-3">

                      <Link
                        href="/profile"
                        className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition"
                      >
                        <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center">
                          <User
                            size={19}
                            className="text-green-700"
                          />
                        </div>

                        <span className="font-semibold max-w-[110px] truncate">
                          {user?.name || "My Account"}
                        </span>
                      </Link>

                      <button
                        type="button"
                        onClick={handleLogout}
                        aria-label="Logout"
                        title="Logout"
                        className="text-gray-500 hover:text-red-600 transition"
                      >
                        <LogOut size={20} />
                      </button>

                    </div>
                  ) : (
                    <Link
                      href="/login"
                      className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full flex items-center gap-2 transition"
                    >
                      <User size={18} />
                      Login
                    </Link>
                  )}
                </>
              )}

            </div>

          </div>

        </div>
      </header>

      {/* ================= MOBILE BOTTOM NAVIGATION ================= */}

      <nav className="lg:hidden fixed bottom-0 left-0 w-full z-50 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">

        <div className="grid grid-cols-5 items-center h-[65px] px-2 pb-[env(safe-area-inset-bottom)]">

          {mobileLinks.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);

            return (
              <Link
                key={item.name}
                href={item.path}
                aria-label={item.name}
                aria-current={active ? "page" : undefined}
                className={`flex flex-col items-center justify-center gap-1 h-full transition-all ${
                  active
                    ? "text-green-600"
                    : "text-gray-500 hover:text-green-600"
                }`}
              >

                <div
                  className={`relative flex items-center justify-center w-11 h-8 rounded-full ${
                    active ? "bg-green-50" : ""
                  }`}
                >

                  <Icon
                    size={21}
                    strokeWidth={active ? 2.5 : 1.8}
                  />

                  {item.name === "Cart" && cartCount > 0 && (
                    <span className="absolute -top-1 right-0 bg-orange-500 text-white text-[9px] min-w-4 h-4 px-1 rounded-full flex items-center justify-center">
                      {displayCartCount}
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
