"use client";

import { useState } from "react";
import Link from "next/link";
import useAuthStore from "@/app/store/authStore";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const { signup, loading, error } = useAuthStore();

  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = async () => {
    await signup(email, password, username, displayName);
    if (!error) {
      router.push("/");
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-xl">
      <h1 className="text-3xl font-bold text-white mb-6 text-center">
        Create an Account
      </h1>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Display Name"
          className="p-3 rounded-md bg-black/20 border border-white/10 text-white"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Username"
          className="p-3 rounded-md bg-black/20 border border-white/10 text-white"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

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
          onClick={handleSignup}
          disabled={loading}
        >
          {loading ? "Creating account..." : "Sign Up"}
        </button>

        <p className="text-center text-gray-400 text-sm">
          Already have an account?{" "}
          <Link href="/signin" className="text-blue-400 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
