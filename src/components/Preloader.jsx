import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png"; // ✅ replace with your actual logo path

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide loader after 2.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <img
        src={logo}
        alt="EmbleMed Care Logo"
        className="w-28 h-auto animate-bounce"
      />
      <p className="mt-3 text-gray-600 font-medium">EmbleMed Care</p>
    </div>
  );
}
