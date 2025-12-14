// src/components/Header/Header.tsx
"use client";

import { Button } from "../UI/Button";
import { TiMessages } from "react-icons/ti";
import { CiBellOn } from "react-icons/ci";
import { useEffect } from "react";
import useProfileStore from "@/app/store/profileStore";
import useAuthStore from "@/app/store/authStore"; // import your auth store
import { useRouter } from "next/navigation";

export default function Header() {
  const { user, loading, error } = useProfileStore();
  const { logout } = useAuthStore();
  const router = useRouter();

  // Handle loading state
  if (loading && !user) {
    return (
      <header className="flex items-center justify-between mb-8">
        <div className="space-y-2">
          <div className="h-8 w-48 bg-gray-800 rounded animate-pulse" />
          <div className="h-4 w-64 bg-gray-800 rounded animate-pulse" />
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="ghost" disabled className="hidden md:inline-flex">
            <CiBellOn className="w-5 h-5" />
          </Button>
          <Button variant="primary" disabled>
            <TiMessages className="w-5 h-5 mr-2" />
            Loading...
          </Button>
        </div>
      </header>
    );
  }

  const handleLogout = async () => {
    await logout();
    useProfileStore.getState().clearProfile();
    router.push("/signin");
  };

  return (
    <header className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold">
          Welcome back,{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            {user?.displayName || user?.username || ""}
          </span>
        </h1>
        <p className="text-gray-400 mt-2">
          Here&apos;s what&apos;s happening in your chats
        </p>
        {error && <p className="text-red-400 text-sm mt-1">Error: {error}</p>}
      </div>
      <div className="flex items-center space-x-3">
        <Button variant="ghost" className="hidden md:inline-flex">
          <CiBellOn className="w-5 h-5" />
        </Button>
        <Button variant="primary">
          <TiMessages className="w-5 h-5 mr-2" />
          New Message
        </Button>

        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </header>
  );
}
