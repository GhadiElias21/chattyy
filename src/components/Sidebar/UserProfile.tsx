"use client";

import { useState, useRef, useEffect } from "react";
import { Card } from "../UI/Card";
import { Button } from "../UI/Button";
import useProfileStore from "@/app/store/profileStore";

type UserStatus = "online" | "away" | "busy" | "offline";

interface User {
  username: string;
  displayName?: string;
  avatar?: string;
  bio?: string;
  status: UserStatus;
}

interface ProfileStore {
  user: User | null;
  loading: boolean;
  error: string | null;
  updateStatus: (status: UserStatus) => Promise<void>;
}

const getStatusColor = (status: UserStatus) => {
  switch (status) {
    case "online":
      return {
        bg: "bg-green-500",
        text: "text-green-500",
        ring: "ring-green-500/50",
        border: "border-green-400",
      };
    case "away":
      return {
        bg: "bg-yellow-500",
        text: "text-yellow-500",
        ring: "ring-yellow-500/50",
        border: "border-yellow-400",
      };
    case "busy":
      return {
        bg: "bg-red-500",
        text: "text-red-500",
        ring: "ring-red-500/50",
        border: "border-red-400",
      };
    default:
      return {
        bg: "bg-gray-500",
        text: "text-gray-400",
        ring: "ring-gray-600",
        border: "border-gray-500",
      };
  }
};

const UserProfile = () => {
  const { user, loading, error, updateStatus } =
    useProfileStore() as ProfileStore;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleStatusSelect = (status: UserStatus) => {
    setIsMenuOpen(false);
    updateStatus(status);
  };

  if (loading && !user) {
    return (
      <Card className="p-6">
        <div className="flex items-start space-x-4 mb-6 animate-pulse">
          <div className="w-20 h-20 bg-gray-700 rounded-xl" />
          <div className="space-y-2 pt-2">
            <div className="h-6 w-40 bg-gray-700 rounded" />
            <div className="h-4 w-24 bg-gray-800 rounded" />
          </div>
        </div>
        <div className="h-4 w-full bg-gray-800 rounded mb-4 animate-pulse" />
        <div className="h-4 w-5/6 bg-gray-800 rounded mb-6 animate-pulse" />
      </Card>
    );
  }

  // 2. Error
  if (error && !user) {
    return (
      <Card className="p-6 text-red-400 border border-red-900/50 bg-red-900/10">
        Error: {error}
      </Card>
    );
  }

  if (!user) return null;

  // --- Main Render ---
  const isUpdating = loading;
  const currentColors = getStatusColor(user.status);

  // Dynamic border classes for the avatar
  const avatarClasses =
    user.status === "offline"
      ? "ring-1 ring-gray-600 border-gray-500"
      : `ring-4 ${currentColors.ring} ${
          currentColors.border
        } shadow-lg shadow-${currentColors.bg.replace("bg-", "")}/20`;

  return (
    <Card className="p-6 overflow-visible relative z-10">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="relative group" ref={menuRef}>
            <img
              src={
                user.avatar ||
                "https://api.dicebear.com/7.x/avataaars/svg?seed=placeholder"
              }
              alt={user.displayName || user.username}
              className={`w-20 h-20 rounded-xl border-4 transition-all duration-300 ${avatarClasses}`}
            />

            {/* Status Trigger (The Dot) */}
            <button
              onClick={() => !isUpdating && setIsMenuOpen(!isMenuOpen)}
              disabled={isUpdating}
              className={`absolute -bottom-1 -right-1 w-6 h-6 flex items-center justify-center rounded-full border-2 border-gray-900 transition-transform hover:scale-110 focus:outline-none z-20 ${
                isUpdating
                  ? "bg-gray-800 cursor-wait"
                  : `${currentColors.bg} cursor-pointer`
              }`}
            >
              {isUpdating ? (
                // Tiny Spinner
                <div className="w-3 h-3 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
              ) : (
                isMenuOpen && (
                  <div className="w-1.5 h-1.5 bg-gray-900 rounded-full opacity-50" />
                )
              )}
            </button>

            {isMenuOpen && (
              <div className="absolute top-full left-0 mt-2 w-40 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-xl shadow-xl shadow-black/50 z-50 overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-200 origin-top-left">
                <div className="p-1">
                  <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Set Status
                  </div>
                  {(["online", "away", "busy", "offline"] as UserStatus[]).map(
                    (status) => {
                      const colors = getStatusColor(status);
                      const isActive = user.status === status;

                      return (
                        <button
                          key={status}
                          onClick={() => handleStatusSelect(status)}
                          className={`w-full text-left px-3 py-2 rounded-lg flex items-center space-x-3 transition-colors ${
                            isActive
                              ? "bg-gray-800 text-white"
                              : "text-gray-400 hover:bg-gray-800 hover:text-gray-200"
                          }`}
                        >
                          <span
                            className={`w-2.5 h-2.5 rounded-full ${colors.bg} ${
                              isActive ? "ring-2 ring-white/20" : ""
                            }`}
                          />
                          <span className="capitalize text-sm font-medium">
                            {status}
                          </span>
                          {isActive && (
                            <span className="ml-auto text-xs text-gray-500">
                              ✓
                            </span>
                          )}
                        </button>
                      );
                    }
                  )}
                </div>
              </div>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">
              {user.displayName || user.username}
            </h2>
            <p className="text-gray-400">@{user.username}</p>
            <div className="flex items-center mt-1">
              {isUpdating ? (
                <span className="text-sm text-gray-500 animate-pulse">
                  Updating status...
                </span>
              ) : (
                <>
                  <div
                    className={`w-2 h-2 ${currentColors.bg} rounded-full animate-pulse mr-2 shadow-[0_0_8px_rgba(0,0,0,0.5)]`}
                  ></div>
                  <span
                    className={`text-sm ${currentColors.text} capitalize font-medium`}
                  >
                    {user.status}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
        <Button variant="secondary">Edit Profile</Button>
      </div>
      <p className="text-gray-300 mb-6">
        {user.bio || "empty at the moment..."}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Messages", value: "1,247", color: "text-blue-400" },
          { label: "Groups", value: "12", color: "text-cyan-400" },
          { label: "Day Streak", value: "45", color: "text-green-400" },
          { label: "Level", value: "24", color: "text-purple-400" },
        ].map((stat, i) => (
          <div
            key={i}
            className="text-center p-4 bg-gray-800/40 border border-gray-700/50 rounded-xl hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 group"
          >
            <div
              className={`text-2xl font-bold ${stat.color} group-hover:scale-110 transition-transform`}
            >
              {stat.value}
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default UserProfile;
