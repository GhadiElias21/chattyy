import { Card } from "../UI/Card";
import { Button } from "../UI/Button";
import { HiUserGroup } from "react-icons/hi2";
import { FaRegMessage } from "react-icons/fa6";

const OnlineUsers = () => {
  const users = [
    {
      id: 1,
      name: "Emma Watson",
      status: "online",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      activity: "Typing...",
    },
    {
      id: 2,
      name: "Mike Chen",
      status: "online",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
      activity: "In a call",
    },
    {
      id: 3,
      name: "Sarah Miller",
      status: "idle",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      activity: "Away",
    },
    {
      id: 4,
      name: "David Park",
      status: "online",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      activity: "Active now",
    },
    {
      id: 5,
      name: "Lisa Wong",
      status: "dnd",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      activity: "Do not disturb",
    },
  ];

  const statusColors = {
    online: "bg-green-500",
    idle: "bg-yellow-500",
    dnd: "bg-red-500",
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold">Online Friends</h3>
        <div className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
          {users.filter((u) => u.status === "online").length} online
        </div>
      </div>

      <div className="space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-800/50 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-lg"
                />
                <div
                  className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-gray-900 ${
                    statusColors[user.status as keyof typeof statusColors]
                  }`}
                />
              </div>
              <div>
                <div className="font-medium">{user.name}</div>
                <div className="text-sm text-gray-400">{user.activity}</div>
              </div>
            </div>
            <Button
              variant="ghost"
              className="px-2! py-2! opacity-100 transition-opacity"
            >
              <FaRegMessage className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-800">
        <Button variant="secondary" className="w-full">
          <HiUserGroup className="w-5 h-5 mr-2" />
          Find More Friends
        </Button>
      </div>
    </Card>
  );
};

export default OnlineUsers;
