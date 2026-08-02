"use client";

import { useEffect, useState } from "react";
import SplashScreen from "@/views/splash/SplashScreen";

export default function SplashWrapper() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("bhajiwala-splash");

    if (hasVisited) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      sessionStorage.setItem("bhajiwala-splash", "true");
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return <SplashScreen />;
}