"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState(""); // For success/error messages
  const [loading, setLoading] = useState(false); // Optional loading state

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || "Signup failed");
        setLoading(false);
        return;
      }

      setMessage("Signup successful! Redirecting to login...");
      setLoading(false);

      // Wait 1.5 seconds before redirect
      setTimeout(() => {
        window.location.href = "/login";
      }, 1500);
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong.");
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen bg-white">
      {/* Left Half: Signup Form */}
      <div className="w-1/2 flex flex-col justify-center px-16 relative">
        {/* Back to Home Button */}
        

        <h1 className="text-6xl font-bold text-black mb-8">Create Account</h1>

        <form
          className="flex flex-col space-y-6 w-full max-w-md"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="border border-gray-400 rounded px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="border border-gray-400 rounded px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="border border-gray-400 rounded px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            className="border border-gray-400 rounded px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="bg-blue-500 text-black font-bold text-xl uppercase px-8 py-3 rounded hover:text-red-600 hover:bg-blue-600 transition"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>

          {/* Message */}
          {message && (
            <p
              className={`mt-2 text-center font-semibold ${
                message.includes("successful") ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}

          {/* Login Link */}
          <p className="text-black text-lg text-center">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-blue-700 font-bold hover:text-blue-900"
            >
              Login
            </Link>
          </p>
        </form>
      </div>

      {/* Right Half: Image */}
      <div className="w-1/2 h-screen relative">
        <Image
          src="/images/login-img.jpg"
          alt="Signup Image"
          fill
          className="object-cover"
        />
      </div>
    </main>
  );
}
