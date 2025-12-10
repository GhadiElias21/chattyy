export interface Message {
  id: string;
  text: string;
  senderId: string;
  senderName: string;
  senderAvatar?: string;
  timestamp: Date;
  status: "sent" | "delivered" | "read";
  isOwn: boolean;
  reactions?: { emoji: string; count: number }[];
}

export interface Chat {
  id: string;
  name: string;
  avatar?: string;
  lastMessage?: string;
  unreadCount: number;
  isOnline: boolean;
  lastActive: Date;
}
