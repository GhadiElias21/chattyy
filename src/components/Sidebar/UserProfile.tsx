import { Card } from "../UI/Card";
import { Button } from "../UI/Button";

const UserProfile = () => {
  const user = {
    name: "Alex Johnson",
    username: "@alexj",
    status: "Online",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    bio: "Digital creator & tech enthusiast. Building cool things with Next.js and TypeScript.",
    stats: {
      messages: 1247,
      groups: 12,
      streak: 45,
      level: 24,
    },
  };

  return (
    <Card className="p-6">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-20 h-20 rounded-xl border-4 border-gray-800"
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-gray-900"></div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-gray-400">{user.username}</p>
            <div className="flex items-center mt-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
              <span className="text-sm text-green-400">{user.status}</span>
            </div>
          </div>
        </div>
        <Button variant="secondary">Edit Profile</Button>
      </div>

      <p className="text-gray-300 mb-6">{user.bio}</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-4 bg-gray-800/50 rounded-xl">
          <div className="text-2xl font-bold text-blue-400">
            {user.stats.messages}
          </div>
          <div className="text-sm text-gray-400 mt-1">Messages</div>
        </div>
        <div className="text-center p-4 bg-gray-800/50 rounded-xl">
          <div className="text-2xl font-bold text-cyan-400">
            {user.stats.groups}
          </div>
          <div className="text-sm text-gray-400 mt-1">Groups</div>
        </div>
        <div className="text-center p-4 bg-gray-800/50 rounded-xl">
          <div className="text-2xl font-bold text-green-400">
            {user.stats.streak}
          </div>
          <div className="text-sm text-gray-400 mt-1">Day Streak</div>
        </div>
        <div className="text-center p-4 bg-gray-800/50 rounded-xl">
          <div className="text-2xl font-bold text-purple-400">
            Lvl {user.stats.level}
          </div>
          <div className="text-sm text-gray-400 mt-1">Level</div>
        </div>
      </div>
    </Card>
  );
};

export default UserProfile;
