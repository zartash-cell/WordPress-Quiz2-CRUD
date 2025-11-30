"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error || "Login failed");
      return;
    }

    alert("Login successful!");
    console.log("JWT:", data.token);

    // Save JWT in localStorage
    localStorage.setItem("token", data.token);

    // Redirect to dashboard
    router.push("/dashboard");
  };

  return (
    <main className="flex min-h-screen bg-white">
      {/* Left Half: Login Form */}
      <div className="w-1/2 flex flex-col justify-center px-8 md:px-16">
        

        <h1 className="text-4xl font-bold text-black mb-6">Welcome Back</h1>

        {/* LOGIN FORM */}
        <form className="flex flex-col space-y-4 w-full max-w-md" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="border border-gray-400 rounded px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="border border-gray-400 rounded px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="bg-blue-500 text-black font-bold text-lg uppercase px-8 py-3 rounded hover:text-red-600 hover:bg-blue-600 transition"
          >
            Login
          </button>

          <p className="text-black text-lg">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-blue-700 font-bold hover:text-blue-900">
              Sign Up
            </Link>
          </p>
        </form>
      </div>

      {/* Right Half: Image */}
      <div className="w-1/2 h-screen relative">
        <Image
          src="/images/login-img.jpg"
          alt="Login Image"
          fill
          className="object-cover"
        />
      </div>
    </main>
  );
}
