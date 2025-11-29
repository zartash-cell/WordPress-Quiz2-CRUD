// app/components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white text-black px-8 py-6 flex items-center justify-between h-28">
      {/* Left: Logo */}
      <div>
        <div className="w-28 h-24 rounded-full border-2 border-black overflow-hidden">
          <Image
            src="/images/logo.webp"
            alt="Logo"
            width={112}
            height={112}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Center: Menu Links */}
      <div className="flex space-x-12 text-2xl font-bold text-black">
        <Link
          href="/"
          className="relative group hover:text-blue-900 transition"
        >
          Home
          <span className="absolute left-0 -bottom-1 w-0 h-1 bg-blue-500 group-hover:w-full transition-all"></span>
        </Link>

        <Link
          href="#about"
          className="relative group hover:text-blue-900 transition"
        >
          About
          <span className="absolute left-0 -bottom-1 w-0 h-1 bg-blue-500 group-hover:w-full transition-all"></span>
        </Link>

        <Link
          href="#contact"
          className="relative group hover:text-blue-900 transition"
        >
          Contact
          <span className="absolute left-0 -bottom-1 w-0 h-1 bg-blue-500 group-hover:w-full transition-all"></span>
        </Link>

        {/* New Blog Link */}
        <Link
          href="/blog"
          className="relative group hover:text-blue-900 transition"
        >
          Blog
          <span className="absolute left-0 -bottom-1 w-0 h-1 bg-blue-500 group-hover:w-full transition-all"></span>
        </Link>
      </div>

      {/* Right: Sign Up and Login */}
      <div className="flex items-center space-x-8">
        <Link
          href="/signup"
          className="text-black font-bold text-xl hover:text-blue-900 transition"
        >
          Sign Up
        </Link>
        <Link
          href="/login"
          className="bg-blue-500 text-black font-bold text-xl uppercase px-8 py-3 rounded hover:text-red-600 hover:bg-blue-600 transition"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
