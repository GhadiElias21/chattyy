"use client";

import {
  FaPhone,
  FaVideo,
  FaEllipsisV,
  FaPlus,
  FaPaperPlane,
} from "react-icons/fa";

interface ChatContainerProps {
  chatId: string | null;
}

export default function ChatContainer({ chatId }: ChatContainerProps) {
  if (!chatId) return null;

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-5 border-b border-gray-800 flex items-center justify-between bg-gray-900">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold mr-3">
            E
          </div>
          <div>
            <h2 className="font-bold text-lg">Emma Watson</h2>
            <p className="text-sm text-green-400 flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Online
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3 text-gray-300">
          <FaPhone className="cursor-pointer hover:text-white" />
          <FaVideo className="cursor-pointer hover:text-white" />
          <FaEllipsisV className="cursor-pointer hover:text-white" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        <p className="text-gray-500 text-center">
          Chat messages will appear here
        </p>
      </div>

      <div className="p-4 border-t border-gray-800 bg-gray-900">
        <div className="flex items-center space-x-3">
          <button className="p-3 bg-gray-800 rounded-lg">
            <FaPlus className="text-gray-300" />
          </button>

          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500"
          />

          <button className="p-3 bg-blue-600 hover:bg-blue-500 rounded-xl">
            <FaPaperPlane className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
