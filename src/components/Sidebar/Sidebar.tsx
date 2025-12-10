"use client";

import { FaSearch, FaPlus } from "react-icons/fa";

interface SidebarProps {
  onSelectChat: (chatId: string) => void;
  activeChat: string | null;
}

export default function Sidebar({ onSelectChat, activeChat }: SidebarProps) {
  const chats = [
    {
      id: "chat-1",
      name: "Emma Watson",
      lastMessage: "See you tomorrow!",
      unread: 3,
    },
    {
      id: "chat-2",
      name: "Mike Chen",
      lastMessage: "Working on the project",
      unread: 0,
    },
    {
      id: "chat-3",
      name: "Sarah Miller",
      lastMessage: "Lunch tomorrow?",
      unread: 1,
    },
    {
      id: "chat-4",
      name: "Design Team",
      lastMessage: "Meeting at 3 PM",
      unread: 5,
    },
  ];

  return (
    <div className="h-full flex flex-col bg-gray-900">
      {/* Header */}
      <div className="p-6 border-b border-gray-800">
        <h2 className="text-xl font-bold text-white">Messages</h2>

        <div className="relative mt-4">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full pl-10 pr-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-2 space-y-1">
        {chats.map((chat) => (
          <button
            key={chat.id}
            onClick={() => onSelectChat(chat.id)}
            className={`w-full p-4 flex items-center rounded-lg transition 
              ${
                activeChat === chat.id
                  ? "bg-blue-600/20 border border-blue-500/40"
                  : "hover:bg-gray-800"
              }
            `}
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold">
                {chat.name.charAt(0)}
              </div>
              {chat.unread > 0 && (
                <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-600 rounded-full text-xs flex items-center justify-center text-white">
                  {chat.unread}
                </span>
              )}
            </div>

            <div className="ml-3 text-left flex-1">
              <div className="font-medium text-white">{chat.name}</div>
              <div className="text-sm text-gray-400 truncate">
                {chat.lastMessage}
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="p-4 border-t border-gray-800">
        <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-medium text-white flex items-center justify-center space-x-2">
          <FaPlus />
          <span>New Conversation</span>
        </button>
      </div>
    </div>
  );
}
