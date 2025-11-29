import Image from "next/image";
import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="flex min-h-screen bg-white">
      {/* Left Half: Signup Form */}
      <div className="w-1/2 flex flex-col justify-center px-16">
        {/* Back to Home Button */}
        <div className="mb-8">
          <Link
            href="/"
            className="bg-red-500 text-white font-bold text-lg uppercase px-8 py-3 rounded-full hover:bg-red-600 transition absolute top-8 left-8" // Red color, capsule shape, large size, positioned at top-left
          >
            Back to Home
          </Link>
        </div>

        <h1 className="text-6xl font-bold text-black mb-8">Create Account</h1>

        <form className="flex flex-col space-y-6 w-full max-w-md">
          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="border border-gray-400 rounded px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-400 rounded px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-400 rounded px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="Confirm Password"
            className="border border-gray-400 rounded px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Signup Button */}
          <button
            type="submit"
            className="bg-blue-500 text-black font-bold text-xl uppercase px-8 py-3 rounded hover:text-red-600 hover:bg-blue-600 transition"
          >
            Sign Up
          </button>

          {/* Login Link */}
          <p className="text-black text-lg">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-700 font-bold hover:text-blue-900">
              Login
            </Link>
          </p>
        </form>
      </div>

      {/* Right Half: Image */}
      <div className="w-1/2 h-screen relative">
        <Image
          src="/images/login-img.jpg" // Replace with your signup-related image
          alt="Signup Image"
          fill
          className="object-cover"
        />
      </div>
    </main>
  );
}
