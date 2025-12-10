"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import ChatContainer from "@/components/Chat/ChatContainer";

import { FaBars } from "react-icons/fa";

export default function ChatPage() {
  const [activeChat, setActiveChat] = useState<string | null>("chat-1");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Mobile toggle

  return (
    <div className="flex h-screen bg-gray-950 overflow-hidden relative">
      <aside className="hidden md:block w-80 border-r border-gray-800">
        <Sidebar
          activeChat={activeChat}
          onSelectChat={(id) => setActiveChat(id)}
        />
      </aside>

      <div
        className={`
          fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity
          ${
            isSidebarOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
        onClick={() => setIsSidebarOpen(false)}
      />

      <aside
        className={`
          fixed top-0 left-0 h-full w-72 bg-gray-900 border-r border-gray-800 z-50
          transform transition-transform duration-300 md:hidden
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <Sidebar
          activeChat={activeChat}
          onSelectChat={(id) => {
            setActiveChat(id);
            setIsSidebarOpen(false);
          }}
        />
      </aside>

      <main className="flex-1">
        <ChatContainer chatId={activeChat} />
      </main>

      {!isSidebarOpen && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="md:hidden fixed top-6 left-90 z-30 p-3 bg-gray-800 rounded-full shadow-lg"
        >
          <FaBars className="text-white" />
        </button>
      )}
    </div>
  );
}
