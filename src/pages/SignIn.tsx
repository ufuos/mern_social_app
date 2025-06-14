
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-[70vh] bg-background">
        <form className="w-full max-w-md bg-white border border-border rounded-lg shadow-xl p-8 animate-fade-in">
          <h2 className="text-2xl font-bold mb-5">Sign In</h2>
          <div className="mb-4">
            <label className="block mb-1 font-semibold" htmlFor="email">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50"
              placeholder="you@email.com"
              autoComplete="email"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-1 font-semibold" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50"
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-md bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors"
          >
            Sign In
          </button>
          <p className="text-sm mt-4 text-center text-gray-500">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline font-semibold">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
