import { Card } from "../UI/Card";

export default function RecentActivity() {
  return (
    <Card className="mt-6">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[
            {
              user: "Emma Watson",
              action: "sent you a message",
              time: "2 min ago",
              unread: true,
            },
            {
              user: "Design Team",
              action: "created a new group",
              time: "1 hour ago",
            },
            {
              user: "Mike Chen",
              action: "liked your photo",
              time: "3 hours ago",
            },
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-800/50 transition-colors"
            >
              <div className="flex items-center">
                <div
                  className={`w-2 h-2 rounded-full mr-3 ${
                    activity.unread
                      ? "bg-blue-500 animate-pulse"
                      : "bg-gray-600"
                  }`}
                />
                <div>
                  <div className="font-medium">{activity.user}</div>
                  <div className="text-sm text-gray-400">{activity.action}</div>
                </div>
              </div>
              <div className="text-sm text-gray-500">{activity.time}</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
