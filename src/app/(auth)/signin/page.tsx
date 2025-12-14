"use client";

import { useState } from "react";
import Link from "next/link";
import useAuthStore from "@/app/store/authStore";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const { login, loading, error } = useAuthStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    await login(email, password);
    if (!error) {
      router.push("/");
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-xl">
      <h1 className="text-3xl font-bold text-white mb-6 text-center">
        Welcome Back
      </h1>

      <div className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded-md bg-black/20 border border-white/10 text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="p-3 rounded-md bg-black/20 border border-white/10 text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-400 text-sm text-center">{error}</p>}

        <button
          className="bg-blue-600 hover:bg-blue-500 transition-all py-3 rounded-md text-white font-medium shadow-lg shadow-blue-600/20"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>

        <p className="text-center text-gray-400 text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-blue-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
