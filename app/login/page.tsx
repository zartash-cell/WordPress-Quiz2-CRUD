import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen bg-white">
      {/* Left Half: Login Form */}
      <div className="w-1/2 flex flex-col justify-center px-8 md:px-16">
        {/* Back to Home Button */}
        <div className="mb-8">
          <Link
            href="/"
            className="bg-red-500 text-white font-bold text-lg uppercase px-8 py-3 rounded-full hover:bg-red-600 transition absolute top-8 left-8"
          >
            Back to Home
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-black mb-6">Welcome Back</h1>

        <form className="flex flex-col space-y-4 w-full max-w-md">
          {/* Email / Username */}
          <input
            type="text"
            placeholder="Email or Username"
            className="border border-gray-400 rounded px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-400 rounded px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Login Button */}
          <button
            type="submit"
            className="bg-blue-500 text-black font-bold text-lg uppercase px-8 py-3 rounded hover:text-red-600 hover:bg-blue-600 transition"
          >
            Login
          </button>

          {/* Signup Link */}
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
          src="/images/login-img.jpg" // Replace with your login-related image
          alt="Login Image"
          fill
          className="object-cover"
        />
      </div>
    </main>
  );
}
