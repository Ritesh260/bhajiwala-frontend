
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Globe,
} from "lucide-react";

import api from "@/api/axios";
import { useAuth } from "@/context/AuthContext";

export default function LoginForm() {
  const router = useRouter();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    if (!formData.identifier.trim() || !formData.password) {
      setError("Please enter your email/mobile and password.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/user/auth/login", {
        identifier: formData.identifier.trim(),
        password: formData.password,
      });

      if (response.data.success) {
        // Save token and user in AuthContext
        login(response.data.token, response.data.user);

        // Redirect to requested internal page, otherwise home
        const requestedPath = new URLSearchParams(
          window.location.search
        ).get("redirect");

        const safePath =
          requestedPath &&
          requestedPath.startsWith("/") &&
          !requestedPath.startsWith("//")
            ? requestedPath
            : "/";

        router.replace(safePath);
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Login failed. Please check your details."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-[35px] shadow-xl border border-gray-100 p-8 sm:p-10">

      {/* Heading */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome Back 👋
        </h1>

        <p className="text-gray-500 mt-3">
          Login to your BhajiWala account
        </p>
      </div>

      <form onSubmit={handleLogin} className="mt-8 space-y-5">

        {/* Email or Mobile */}
        <div className="relative">
          <Mail
            className="absolute left-4 top-4 text-gray-400"
            size={20}
          />

          <input
            type="text"
            name="identifier"
            value={formData.identifier}
            onChange={handleChange}
            placeholder="Email or Mobile Number"
            autoComplete="username"
            className="w-full pl-12 pr-5 py-4 rounded-2xl border border-gray-200 outline-none focus:border-green-600 transition"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <Lock
            className="absolute left-4 top-4 text-gray-400"
            size={20}
          />

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            autoComplete="current-password"
            className="w-full pl-12 pr-12 py-4 rounded-2xl border border-gray-200 outline-none focus:border-green-600 transition"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-4 text-gray-400"
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>
        </div>

        {/* Error */}
        {error && (
          <p className="text-sm text-red-600 bg-red-50 rounded-xl p-3">
            {error}
          </p>
        )}

        {/* Options */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-gray-600">
            <input
              type="checkbox"
              className="accent-green-600"
            />
            Remember me
          </label>

          <Link
            href="/forgot-password"
            className="text-green-600 font-medium"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white py-4 rounded-2xl font-semibold transition"
        >
          {loading ? "Signing In..." : "Sign In"}
          {!loading && <ArrowRight size={20} />}
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="h-px bg-gray-200 flex-1"></div>

          <span className="text-gray-400 text-sm">OR</span>

          <div className="h-px bg-gray-200 flex-1"></div>
        </div>

        {/* Google */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 border border-gray-200 py-4 rounded-2xl font-semibold text-gray-700 hover:bg-gray-50 transition"
        >
          <Globe size={20} />
          Continue with Google
        </button>

        {/* Signup */}
        <p className="text-center text-gray-500 mt-6">
          Don't have an account?

          <Link
            href="/signup"
            className="text-green-600 font-semibold ml-2"
          >
            Sign Up
          </Link>
        </p>

      </form>
    </div>
  );
}
