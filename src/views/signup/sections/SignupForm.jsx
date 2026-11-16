
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

import api from "@/api/axios";
import { useAuth } from "@/context/AuthContext";

export default function SignupForm() {
  const router = useRouter();

  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [agreeTerms, setAgreeTerms] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // ==========================================
  // HANDLE INPUT CHANGE
  // ==========================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ==========================================
  // SIGNUP API
  // ==========================================

  const handleSignup = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.email.trim() ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill all fields");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!agreeTerms) {
      setError("Please accept Terms & Conditions");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/user/auth/register", {
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim().toLowerCase(),
        password: formData.password,
      });

      if (response.data.success) {
        // Save Customer Token and User
        login(
          response.data.token,
          response.data.user
        );

        setSuccess("Account created successfully!");

        // Redirect to Homepage
        setTimeout(() => {
          router.push("/");
        }, 700);
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-lg bg-white rounded-[35px] shadow-xl border border-gray-100 p-8 sm:p-10">

      {/* Heading */}

      <div className="text-center">

        <h1 className="text-3xl font-bold text-gray-900">
          Create Account 🌱
        </h1>

        <p className="text-gray-500 mt-3">
          Join BhajiWala and enjoy fresh delivery
        </p>

      </div>

      <form onSubmit={handleSignup} className="mt-8 space-y-5">

        {/* Name */}

        <div className="relative">

          <User
            size={20}
            className="absolute left-4 top-4 text-gray-400"
          />

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full pl-12 pr-5 py-4 rounded-2xl border border-gray-200 outline-none focus:border-green-600 transition"
          />

        </div>

        {/* Phone */}

        <div className="relative">

          <Phone
            size={20}
            className="absolute left-4 top-4 text-gray-400"
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Mobile Number"
            maxLength={10}
            className="w-full pl-12 pr-5 py-4 rounded-2xl border border-gray-200 outline-none focus:border-green-600 transition"
          />

        </div>

        {/* Email */}

        <div className="relative">

          <Mail
            size={20}
            className="absolute left-4 top-4 text-gray-400"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full pl-12 pr-5 py-4 rounded-2xl border border-gray-200 outline-none focus:border-green-600 transition"
          />

        </div>

        {/* Password */}

        <div className="relative">

          <Lock
            size={20}
            className="absolute left-4 top-4 text-gray-400"
          />

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
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

        {/* Confirm Password */}

        <div className="relative">

          <Lock
            size={20}
            className="absolute left-4 top-4 text-gray-400"
          />

          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="w-full pl-12 pr-5 py-4 rounded-2xl border border-gray-200 outline-none focus:border-green-600 transition"
          />

        </div>

        {/* Terms */}

        <label className="flex items-center gap-2 text-sm text-gray-600">

          <input
            type="checkbox"
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
            className="accent-green-600"
          />

          I agree with Terms & Conditions

        </label>

        {/* Error */}

        {error && (
          <p className="text-red-600 text-sm bg-red-50 p-3 rounded-xl">
            {error}
          </p>
        )}

        {/* Success */}

        {success && (
          <p className="text-green-700 text-sm bg-green-50 p-3 rounded-xl">
            {success}
          </p>
        )}

        {/* Submit Button */}

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white py-4 rounded-2xl font-semibold transition"
        >

          {loading ? "Creating Account..." : "Create Account"}

          {!loading && <ArrowRight size={20} />}

        </button>

        {/* Login */}

        <p className="text-center text-gray-500 mt-5">

          Already have an account?

          <Link
            href="/login"
            className="text-green-600 font-semibold ml-2"
          >
            Sign In
          </Link>

        </p>

      </form>

    </div>
  );
}
